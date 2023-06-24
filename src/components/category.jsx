import { Link, useLocation } from "react-router-dom";

export default function Category() {
  const location = useLocation();

  const shouldShowWomenImage = location.pathname !== "/Bershkacopy/AppWomen";
  const shouldShowMenImage = location.pathname !== "/Bershkacopy/AppMen";
  const shouldShowTeenImage = location.pathname !== "/Bershkacopy/AppTeen";
  return (
    
    <div className="relative w-screen h-auto max-w-[1600px] my-0 mx-auto">
      <menu className="grid xl:grid-cols-3  xl:w-full xl:gap-x-[0.4rem] place- px-4 xl:px-16 gap-y-2 text-white">
        {shouldShowWomenImage &&<div className="relative h-[25vh] xl:h-[65vh] ">
          <Link
            to="/Bershkacopy/AppWomen"
            target="_self"
            className="h-full flex flex-col justify-end bg-womenm bg-cover bg-top-4 bg-no-repeat left-0 right-0"
          >
            <h2 className="text-[.75rem] text-center">GO TO FASHION</h2>
            <p className="text-[2rem] text-center">WOMEN</p>
          </Link>
        </div>}
        {shouldShowMenImage &&<div className="relative h-[25vh] xl:h-[65vh]">
          <Link
            to="/Bershkacopy/AppMen"
            className="h-full flex flex-col justify-end bg-men  bg-cover bg-top-4 bg-no-repeat left-0 right-0"
          >
            <h2 className="text-[.75rem] text-center">GO TO FASHION</h2>
            <p className="text-[2rem] text-center">MEN</p>
          </Link>
        </div>}
        {shouldShowTeenImage && <div className="relative  h-[25vh] xl:h-[65vh] ">
          <Link
            to="/Bershkacopy/AppTeen"
            className="h-full flex flex-col justify-end bg-teen  bg-cover bg-top-4 bg-no-repeat left-0 right-0"
          >
            <h2 className="text-[.75rem] text-center">GO TO FASHION</h2>
            <p className="flex justify-center text-[2rem] text-center">
              <svg
                version="1.1"
                width="4rem"
                viewBox="0 0 301 121"
                fill="white"
                alt="BSK"
              >
                <path d="M164.5,101.2h23.7l3.2-14.8l10.2-7.9l12.2,22.7h27.6l-21.2-35.5l30.3-24.3h-30.5l-23.4,20.1l9.2-43.6h-23.7 L164.5,101.2z M132.9,103.3c17.2,0,31.7-6.8,31.7-21.4c0-8.9-6.2-15.8-20.8-18.7l-6.6-1.3c-5.1-1-7.1-2.3-7.1-4.5 c0-2.4,2.1-4.4,6.3-4.4c5,0,7.6,2.9,8.2,6.4l22.9-3.9c-1.4-8.2-10-16.4-29.5-16.4c-18.1,0-29.7,8.2-29.7,21.1 c0,9.4,6.4,14.1,19.5,17.2l7.6,1.8c3.7,0.8,5.5,2.4,5.5,4.6c0,3.1-2.9,5-7.4,5c-6.3,0-8.4-3.7-9-7.6l-23.1,2.9 C102.4,95.7,113,103.3,132.9,103.3z M70.8,50.7H57.9L60.7,37h11.8c4.9,0,7.9,1.9,7.9,5.8C80.4,47.5,76.9,50.7,70.8,50.7z M65,82.2 H51.3l3.2-15.2h12.7c5.1,0,8.7,2.3,8.7,6.6C75.9,78.9,71.9,82.2,65,82.2z M21.9,101.2h45.5c19,0,34.1-8.7,34.1-25.1 c0-9-6.8-16.1-17-17.5c12.9-2.3,20.8-10.8,20.8-22.1c0-11.4-10.2-18.7-26.3-18.7H39.5L21.9,101.2z M132.9,112.2 c-15.7,0-27.2-4.5-33.9-11.9c-7.9,6.4-19.4,9.8-31.6,9.8H11L32.2,8.9H79c20.7,0,34.8,10.4,35.2,26.9c6.3-3.6,14.5-5.5,23.9-5.5 c14.2,0,24.2,3.9,30.3,9.6L175,8.9h41.9l-6.2,28.7l6.2-5.1h58.9L232,67.7l25.2,42.3h-48.6l-9.4-17.2l-3.9,17.2h-41.8l0.3-1.6 C147.6,111,140.2,112.2,132.9,112.2z M132.9,121c5.7,0,11.8-0.6,17.4-2.1h122.5l-29.2-49.1L301,23.6h-78.1l5-23.5h-60.1l-5.5,25.7 c-6.6-2.7-14.7-4.4-24.2-4.4c-6.2,0-11.9,0.8-17.2,2.3C115,9,99.3,0,79,0H25L0,118.8h67.5c11.2,0,22.1-2.6,30.8-7.6 C106.8,117.7,118.7,121,132.9,121z"></path>
              </svg>
              TEEN
            </p>
          </Link>
        </div>}
      </menu>
    </div>
  );
}
