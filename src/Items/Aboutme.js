const Aboutme = ({ openModal, screenSize }) => {
  const handleOpenResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/16uzwlgsw2pr8umNiw5DSJAUmhBj4cLLA/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="special-border about-me w-full h-full md:py-10 flex flex-col md:flex-row p-5 justify-between items-center">
      {/* Container for image and name */}
      <div className="flex flex-col items-center justify-center h-full md:w-1/2 transition-all duration-500">
        {/* Avatar wrapper */}
        <div className="profile w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden md z-10 flex justify-center items-center relative">
          {/* Zoomed-in image */}
          <img
            src="https://res.cloudinary.com/dkpestm1g/image/upload/v1729656174/myimage-new_cs4qgf.jpg"
            alt="Dwij Verma"
            className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover"
            style={{
              transformOrigin: "center",
              transform: "translate(0%, 50%) scale(3.5)",
            }}
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mt-3">Dwij Verma</h1>
      </div>

      {/* Container for paragraphs and buttons */}
      <div className="flex  flex-col md:w-1/2 px-3 h-full gap-5 justify-center items-center mt-5">
        <p className="text-sm text-center md:text-left md:text-base transition-all duration-500">
          Error debugging, problem-solving, and figuring things out are my
          <span className="font-bold"> superpowers</span>. I see the tech stack
          as a set of tools to bring ideas to life and make things happen.
        </p>

        {screenSize > 1200 && (
          <p className="text-sm text-center md:text-left md:text-base transition-all duration-500">
            I taught myself development by following a
            <span className="text-bold">'do and learn'</span> approach, now I
            build things that are practical, thoughtful, and designed to solve
            real problems.
          </p>
        )}

        <div className="flex flex-row justify-center md:justify-start w-full gap-5 mb-2 transition-none">
          <button
            className="cursor-pointer border-2 rounded-full p-3 text-xs md:text-base w-25 md:w-30 hover:bg-gray-800 dark:hover:border-gray-200 dark:hover:bg-gray-200 hover:border-gray-800 hover:text-white dark:hover:text-black transition-colors duration-500"
            onClick={handleOpenResume}
          >
            Resume
          </button>

          <button
            className="cursor-pointer border-2 rounded-full p-3 text-xs md:text-base w-25 md:w-30 hover:bg-gray-800 dark:hover:border-gray-200 dark:hover:bg-gray-200 hover:border-gray-800 hover:text-white dark:hover:text-black transition-colors duration-500"
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
