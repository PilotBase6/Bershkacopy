import { Link } from "react-router-dom";
import { useState,useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Product({m1,title}){

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    setMaxIndex(listRef.current.children.length - 4.5);
  }, [m1]);


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
      const maxIndex = listRef.current.children.length - 4.5;
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };
    const viralNow= (list)=>(
        list.map((item) => {
          return (
            <li key={item.href} className=" w-[34vw] xl:w-full h-full">
              <Link to={item.href} className="xl:relative w-full">
                <img src={item.img} alt="" className="xl:w-full xl:h-full xl:object-cover" />
                <figurecaption className="text-black text-xs xl:text-[0.88rem] font-Whyte xl:flex xl:justify-center xl:pt-4">
                  {item.title}
                </figurecaption>
              </Link>
            </li>
          );
        })
      )

    return (

        <div className="xl:relative flex flex-col xl:justify-center xl:items-center bg-[#f5f5f5] w-full h-full xs:pt-4 px-5 xl:pb-10">
        <h1 className="text-black pb-5 font-normal text-lg xl:text-2xl xl:py-4 xl:font-semibold">
          {title}
        </h1>
        <ul ref={listRef} className="xl:w-full h-full grid grid-flow-col xs:whitespace-nowrap xl:overflow-x-hidden overflow-x-auto gap-1 pb-8 lg:max-w-[850px]">
          {viralNow(m1)}
        </ul>
        <aside  className={`xs:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full left-0 cursor-pointer w-[50px] h-[50px] bg-white ${currentIndex === 0?"hidden":"" }`}>
            <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" className="" fill="black" width="50px" height="50px" version="1.1" viewBox="0 0 1200 1200">
              <path d="m625.2 662.4c-3.6016 0-6-1.1992-8.3984-3.6016l-51.602-50.398c-2.3984-2.3984-3.6016-4.8008-3.6016-8.3984 0-3.6016 1.1992-6 3.6016-8.3984l50.398-50.398c4.8008-4.8008 12-4.8008 16.801 0 4.8008 4.8008 4.8008 12 0 16.801l-40.797 41.996 43.199 42c4.8008 4.8008 4.8008 12 0 16.801-2.4023 2.3984-6 3.5977-9.6016 3.5977z" transform="scale(2) translate(-300, -300)"/>
            </svg>
            </aside>
            <aside  className={`xs:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full right-6 cursor-pointer w-[50px] h-[50px] bg-white ${currentIndex === maxIndex ? "hidden" : ""}`}>
            <svg onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" className="" fill="black" width="50px" height="50px" version="1.1" viewBox="0 0 1200 1200">
              <path d="m576 662.4c-3.6016 0-6-1.1992-8.3984-3.6016-4.8008-4.8008-4.8008-12 0-16.801l42-42-43.199-42c-4.8008-4.8008-4.8008-12 0-16.801 4.8008-4.8008 12-4.8008 16.801 0l51.602 50.398c2.3984 2.3984 3.6016 4.8008 3.6016 8.3984 0 3.6016-1.1992 6-3.6016 8.3984l-50.398 50.398c-2.4062 2.4102-6.0078 3.6094-8.4062 3.6094z" transform="scale(2) translate(-300, -300)"/>
            </svg>
            </aside>
      </div>
    )

}

Product.propTypes={
    m1:PropTypes.array,
    title:PropTypes.String
  }