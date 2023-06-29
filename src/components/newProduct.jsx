import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NewProduct({m2,title}){
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    setMaxIndex(listRef.current.children.length - 4.5);
  }, [m2]);


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
      const maxIndex = listRef.current.children.length - 4.5;
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const newItems=(list)=>(
    list.map((item, index) => {
      return (
        <li  key={index}
        className={`w-[31.5vw] xl:w-[22vw] `}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <Link
            to={item.href}
            className="flex flex-col gap-1 w-full "
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >

              <img
                src={hoveredItem === item ? item.hoverImg : item.img}
                alt=""
                className="xl:object-cover xl:object-center"
              />
            <figurecaption className="text-[#636363] text-xs whitespace-nowrap overflow-hidden text-ellipsis px-2">
              {item.description}
            </figurecaption>
            <p className=" text-xs font-Whyte font-bold px-2">{item.price}</p>
          </Link>
        </li>
        )
    })
    
  )
    return (
        <div className=" relative flex flex-col xl:items-center overflow-x-hidden xl:mb-12">
          <h2 className="p-4 text-xl xl:text-3xl font-Whyte xl:pb-8  font-light">
            {title}
          </h2>
          <ul ref={listRef} className={`grid w-full h-auto grid-flow-col whitespace-nowrap overflow-x-auto xl:overflow-x-hidden gap-1 pb-4`}>
            {newItems(m2)}
            
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

NewProduct.propTypes={
    m2:PropTypes.array,
    title:PropTypes.String
  }