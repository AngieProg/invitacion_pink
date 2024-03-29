import { slideData } from "./../constants/index";
import { flechaIzq, flechaDer } from "../assets/icons";
import { useState } from "react";
import CardFormato from "../components/CardFormato";
import Separador from "../components/Separador";

const Galeria = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === slideData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slideData.length - 1 : slide - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <CardFormato titulo1="SESIÓN DE FOTOS" titulo2="Galería" />
      <Separador width="[150px]" />
      <div className="flex justify-center mb-5">
        <div className="flex justify-center w-[400px] h-[400px] relative items-center md:w-[600px] md:h-[600px]">
          <img
            src={flechaIzq}
            alt="flecha izquierda"
            className="absolute w-[30px] h-[30px] left-[20px] cursor-pointer md:w-[50px] md:h-[50px] "
            onClick={prevSlide}
          />
          {slideData.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx
                    ? "border-2 border-white rounded-lg object-cover"
                    : "hidden"
                }
              />
            );
          })}
          <img
            src={flechaDer}
            alt="flecha derecha"
            className="absolute w-[30px] h-[30px] right-[20px] cursor-pointer md:w-[50px] md:h-[50px]"
            onClick={nextSlide}
          />
          <span className="flex absolute bottom-[20px]">
            {slideData.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx
                      ? "bg-white w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer"
                      : "w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer bg-black"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
      <Separador width="[130px]" />
    </div>
  );
};

export default Galeria;
