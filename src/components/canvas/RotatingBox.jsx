/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import * as THREE from "three";

const PictureBox = ({ texture }) => {
  return (
    <Box args={[2, 2, 0.5]}>
      <meshBasicMaterial attach="material" map={texture} />
      <Box
        args={[1, 1, 0]}
        position={[0, 0, 0.251]}
        scale={[-1, 1, 1]}
        material={new THREE.MeshBasicMaterial({ color: "white" })}
      />
    </Box>
  );
};

const RotatingBox = () => {
  const meshRef = useRef();
  const { viewport } = useThree();
  const texture = useTexture("./badge.png");
  const [isSelected, setIsSelected] = useState(false);

  useFrame(({ mouse }) => {
    if (isSelected) {
      meshRef.current.rotation.y = mouse.x * Math.PI * 2;
    }
  });

  const handleClick = () => {
    setIsSelected(!isSelected);
    meshRef.current.scale.set(
      isSelected ? 1 : 1.5,
      isSelected ? 1 : 1.5,
      isSelected ? 1 : 1.5
    );
  };

  return (
    <mesh ref={meshRef} position={[0, 0.75, 0]} onClick={handleClick}>
      <Box args={[2, 0.5, 1]} position={[0, -1, 0]}>
        <meshStandardMaterial attach="material" color="white" />
      </Box>
      <PictureBox texture={texture} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default Scene;
