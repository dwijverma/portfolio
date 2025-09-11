import { useState } from "react";
import { MdLibraryMusic } from "react-icons/md";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Spotify = () => {
  const [index, setIndex] = useState(0);
  const carouselItems = [
    {
      id: 1,
      content: {
        id: 1,
        image:
          "https://i.scdn.co/image/ab67616d00001e02f3aa0e6ca22a382007f61e4d",
        name: "We Are The People",
        artist: "Empire Of The Sun",
      },
    },
    {
      id: 2,
      content: {
        id: 2,
        image:
          "https://i.scdn.co/image/ab67616d00001e020c5f23cbf0b1ab7e37d0dc67",
        name: "The Color Violet",
        artist: "Tory Lanez",
      },
    },
    {
      id: 3,
      content: {
        id: 3,
        image:
          "https://i.scdn.co/image/ab67616d00001e029b9b36b0e22870b9f542d937",
        name: "Get Lucky",
        artist: "daft Punk",
      },
    },
    {
      id: 4,
      content: {
        id: 4,
        image:
          "https://i.scdn.co/image/ab67616d00001e026caad685af37c08063be928d",
        name: "Car Radio",
        artist: "Twenty One Pilots",
      },
    },
    {
      id: 1,
      content: {
        id: 1,
        image:
          "https://i.scdn.co/image/ab67616d00001e0256c868c8c85e7e4e62bd9ec1",
        name: "Over The Rainbow",
        artist: "Israel Kamakawiwoʻole",
      },
    },
    // Add more songs as needed
  ];

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };
  const handleClick = () => {
    window.open("https://dwijverma.github.io/top-tunes-ui", "_blank");
  };

  return (
    <div className="special-border relative flex justify-center items-center spotify-bg w-full h-full p-2">
      <div className="w-11/12 h-10/12 glass-effect flex flex-row overflow-hidden">
        <div className="w-auto max-w-32 md:max-w-50 image-container h-full">
          <img
            className="h-full aspect-square"
            src={`${carouselItems[index].content.image}`}
          ></img>
        </div>
        <div className="song-text flex flex-col justify-between w-1/2 py-2 md:py-3 ml-3 md:ml-5">
          <div>
            <button
              className="transition delay-70 duration-300 md:text-3xl hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
              title="These are my top tunes, find out yours"
              onClick={handleClick}
            >
              <MdLibraryMusic />
            </button>
          </div>
          <div>
            <p className="font-bold text-sm md:text-xl">{`${carouselItems[index].content.name}`}</p>
            <p className="font-medium text-xs md:text-base">{`${carouselItems[index].content.artist}`}</p>
          </div>
        </div>
      </div>
      <div className="absolute w-full flex flex-row self-center justify-between">
        <button
          className="transition delay-100 duration-100 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
          onClick={goToPrev}
        >
          <FaCaretLeft className="-translate-x-0.5 md:-translate-x-1 md:text-3xl" />
        </button>

        <button
          className="transition delay-100 duration-100 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
          onClick={goToNext}
        >
          <FaCaretRight className="translate-x-1 md:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Spotify;
