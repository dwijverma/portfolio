import { FaCaretRight } from "react-icons/fa";

const Description = ({ screenSize }) => {
  return (
    <div className="relative h-full special-border col-start-2 col-end-5 md:col-start-1 md:col-end-6 flex justify-center items-center p-7">
      <p className="text-center font-bold text-base md:text-2xl mb-1 md:leading-relaxed">
        Supercharge your design journey with AI insights
      </p>

      {screenSize <= 768 && (
        <FaCaretRight className="absolute bottom-2 rotate-90"/>
      )}
    </div>
  );
};

export default Description;
