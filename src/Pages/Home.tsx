import { MenuBar } from "../components/MenuBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideMobile1 from "../assets/slidemobile1.png";
import SlideMobile2 from "../assets/slidemobile2.png";
import SlideMobile3 from "../assets/slidemobile3.png";
import SlideMobile4 from "../assets/slidemobile4.png";
import { useRef, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [SlideMobile1, SlideMobile2, SlideMobile3, SlideMobile4];
  const sliderRef = useRef<Slider | null>(null);

  const colors = ["#878582", "#090705", "#5B604F", "#8B7037"];

  const colors2 = ["#9e9c9a", "#23211F", "#757772", "#b39451"];

  const texts = [
    "COMECE SUA JORNADA PROFISSIONAL",
    "CONSTRUA UMA EQUIPE DE SUCESSO",
    "INVISTA EM SEU CRESCIMENTO PROFISSIONAL",
    "OBTENHA CONSULTORIA ESPECIALIZADA",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    variableWidth: false,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index),
  };
  

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden h-screen w-full font-opensans">
      <MenuBar />
      <div className="w-full h-full bg-none flex flex-col">
        <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full ">
              <img
                src={image}
                className="object-cover w-full h-full"
                alt={`slide-${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 mt-16 justify-center flex-row flex items-center self-center">
          {[0, 1, 2, 3].map((index) => (
            <button
              className="font-bold m-2 text-xl flex-row flex"
              key={index}
              onClick={() => goToSlide(index)}
            >
              <div
                className={`flex flex-col w-2 h-2 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-orange-500" : "bg-white"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="absolute top-1/2 w-full justify-center flex-row hidden items-center self-center ">
          {/* Next and Previous Buttons */}
          <button className="left-0 mr-auto" onClick={goToPrevSlide}>
            <ArrowCircleLeft />
          </button>
          <button className="right-0" onClick={goToNextSlide}>
            <ArrowCircleRight />
          </button>
        </div>
        <div
          style={{
            background: `linear-gradient(to right, ${colors[currentSlide]}, ${colors2[currentSlide]})`,
          }}
          className="h-2/5 w-full flex scale-110 flex-col"
        >
          <h1 className="font-bold text-white text-[22px] text-center mt-12 mb-6 px-6">
            {texts[currentSlide]}
          </h1>
          <div className="w-full flex items-center justify-center">
            <button className="case font-bold bg-white m-4 w-2/3 py-2 rounded-l-full rounded-r-full text-black">
              saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
