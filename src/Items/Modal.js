import React from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";

const Modal = ({ closeModal, isAnimating }) => {
  return (
    <div
      className={`modal flex flex-col mb-10 items-center mx-auto md:max-w-1/2 transition-transform duration-300 ease-in-out ${
        isAnimating ? "opacity-100 scale-100" : "scale-25"
      }`}
    >
      <button className="my-20 border-2 p-2 rounded-full" onClick={closeModal}>
        <IoMdClose className="" />
      </button>

      <div className="max-w-2/3">
        <h1 className="text-2xl font-bold">About me</h1>
        <p className="my-5">
          Hello, I'm Dwij Verma, a developer sent from the future—and I'm here
          to tell you that AI isn't taking over!
        </p>
        <p className="my-5">
          {" "}
          I successfully completed my Bachelor's in Animation and Visual
          Graphics, where I had the privilege of learning from wonderful
          teachers. They introduced me to many facets of the field, but my true
          intrest lies in 3D modeling and design.
        </p>
        <h1 className="text-2xl font-bold">How it started</h1>
        <p className="my-5">
          Hand a young kid a computer—what will he do? Query a database? No,
          he’ll play games?—absolutely! One day, while playing Project I.G.I., I
          realized there was more to it than just the game. Behind every
          mission, every enemy AI, and every interaction, there was someone who
          had written the logic in a language the computer understood. That was
          my "aha" moment—realizing that every experience in the game was
          created through code. This sparked a curiosity in me to understand how
          it all worked. It was the day I became fascinated by programming and
          how it could bring ideas and worlds to life.
        </p>

        <h1 className="text-2xl font-bold">How it's going</h1>
        <p className="my-5">
          Soon after I began pursuing development as a career, I realized that
          everything follows a pattern — there's always a connection between
          things. Then I learned that there exists a Gang, who introduced design
          patterns to the software development community.
        </p>
        <p className="my-5">
          With every passing day, the more I practice development, the more I'm
          exposed to patterns and, of course, errors. Errors teach me what not
          to do. I embrace them because each new error means I've fixed
          something else, bringing me closer to the desired functionality.
        </p>

        <h1 className="text-2xl font-bold">Technologies I Use</h1>
        <p className="my-5">
          These are the technologies I've studied in depth and mastered through
          hands-on experience.
        </p>
        <div className="my-10">
          <ul className="grid grid-cols-3 gap-5">
            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">HTML</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">CSS</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">Javascript</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">React</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">Tailwind CSS</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">Node</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">Express</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">Mongo DB</h3>
            </li>

            <li className="tech-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                className="tech-icon"
                alt="icon"
              />
              <h3 className="tech-name">AWS</h3>
            </li>
            <div className="col-start-1 col-end-4 flex justify-center items-center">
              <li className="tech-list w-1/2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  className="tech-icon"
                  alt="icon"
                />
                <h3 className="tech-name">Docker</h3>
              </li>

              <li className="tech-list w-1/2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
                  className="tech-icon"
                  alt="icon"
                />
                <h3 className="tech-name">Kubernetes</h3>
              </li>
            </div>
          </ul>
        </div>
        <h1 className="text-2xl font-bold">Professional Goals</h1>
        <p className="my-5">
          Now being a modern developer it is necessary for me to include the
          term "ai" right? Do you want to know my take on ai? Well, I consider
          it a bit on the "stupid" side, but incredibly fast! Now I don’t want
          AI to take over my creative pursuits in art or development—I just wish
          it could tackle the mundane chores like doing the dishes and laundry.
          Imagine if I could hand that off to AI, leaving me free to focus on my
          projects. Who knows? Maybe one day I'll help visionaries like Elon
          Musk or Jensen Huang create something like this!
          <p className="my-5">
            We are indeed in the midst of a historic revolution where the
            standout products are those that leverage automation to streamline
            everyday tasks. The goal of mine is to create such innovative
            solutions that address real world problems and help with everyday
            tasks.
          </p>
          <p className="my-5">
            I always try to think from the perspective of the user—what are
            their needs, and how can I improve their experience?
          </p>
        </p>
      </div>
    </div>
  );
};

export default Modal;
