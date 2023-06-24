import{ useState } from "react";
import PropTypes from "prop-types";

export default function AccordionMenu ({menuItems}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <ul className="w-full">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`border-gray-200  mb-1 ${index === menuItems.length-1?"border-y-[1px]":"border-t-[1px]" }`}
        >
          <div
            className="flex items-center justify-between p-3 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {activeIndex === index && (
          <ul className="p-3">
              {item.content.map((subItem, subIndex) => (
                <li key={subIndex} className="py-3">{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

AccordionMenu.propTypes={
    menuItems:PropTypes.array,
  }


