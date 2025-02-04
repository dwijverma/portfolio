const Aboutme = ({ openModal, screenSize }) => {
  const handleOpenResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/16uzwlgsw2pr8umNiw5DSJAUmhBj4cLLA/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="special-border about-me w-full h-full md:py-10 flex flex-col md:flex-row p-5 justify-between items-center">
      <div className="flex flex-col justify-center items-center md:w-1/2 transition-all duration-500">
        <div className="profile w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mb-7 md:mb-10 z-10 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dkpestm1g/image/upload/v1729656174/myimage-new_cs4qgf.jpg"
            className="max-w-none w-auto h-auto scale-7 translate-y-8 md:scale-11 md:translate-y-8"
            alt="This is profile"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold">Dwij Verma</h1>
        {screenSize > 1200 && (
          <p className="mt-3 font-medium">
            Creating with Code, Thinking with Design
          </p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center md:w-1/2 p-3">
        <p className="text-center md:text-left text-sm md:text-base transition-all duration-500">
          Error debugging, problem-solving, and figuring things out are my
          <span className="font-bold"> superpowers</span>. I see the tech stack
          as a set of tools to bring ideas to life and make things happen.
        </p>
        {screenSize > 1200 && (
          <p className="text-sm mt-5 md:text-base transition-all duration-500">
            I taught myself development by following a{" "}
            <span className="text-bold">'do and learn'</span> approach, which
            has given me both the confidence and skills to thrive in a
            professional setting. I'm ready to provide real value to my future
            employer.
          </p>
        )}
        <div className="flex flex-row justify-center md:justify-start w-full gap-5 mt-7 mb-2 transition-none">
          <button
            className="cursor-pointer border-2 rounded-full p-3  text-xs md:text-base w-25 md:w-30  hover:bg-gray-800 dark:hover:border-gray-200 dark:hover:bg-gray-200 hover:border-gray-800 hover:text-white dark:hover:text-black transition-colors duration-500"
            onClick={handleOpenResume}
          >
            Resume
          </button>
          <button
            className="cursor-pointer border-2 rounded-full p-3 text-xs md:text-base w-25 md:w-30   hover:bg-gray-800 dark:hover:border-gray-200 dark:hover:bg-gray-200 hover:border-gray-800 hover:text-white dark:hover:text-black transition-colors duration-500"
            onClick={openModal}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
