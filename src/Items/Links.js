import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Links = () => {
  return (
    <div className="special-border py-15 md:py-23 flex flex-row justify-evenly items-center w-full h-full">
      <div className="section">
        <a
          href="https://www.instagram.com/dwijverma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl md:text-5xl transition delay-100 duration-300 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none" />
        </a>
      </div>
      <div className="section">
        <a
          href="https://www.linkedin.com/in/dwij-verma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl md:text-5xl transition delay-100 duration-300 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none" />
        </a>
      </div>
      <div className="section">
        <a
          href="https://www.github.com/dwijverma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl md:text-5xl transition delay-100 duration-300 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none" />
        </a>
      </div>
    </div>
  );
};

export default Links;
