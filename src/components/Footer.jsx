import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center">
          <a
            href="https://github.com/ajohnofficial001"
            className="text-3xl mr-4 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-adeyemo-5a0338207/"
            className="text-3xl hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="mt-8 text-center">
          <p>© 2023 John Adeyemo. All rights reserved.</p>

          <p className="mt-2">
            <a href="mailto:jadeyemo004@gmail.com">jadeyemo004@gmail.com</a>
          </p>
        </div>
        <button
          className="fixed bottom-8 right-8 bg-gray-800 text-gray-400 rounded-full p-2 hover:text-white hover:bg-gray-700"
          onClick={handleClick}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
