import { Link } from "react-router-dom";

export default function Banner() {
  const button = [
    { href: "/", name: "bershka favourites" },
    { href: "/", name: "dresses and jumpsuits" },
    { href: "/", name: "t-shirts" },
    { href: "/", name: "trousers" },
    { href: "/", name: "tops and corsets" },
    { href: "/", name: "jeans" },
    { href: "/", name: "shoes" },
  ];



  return (
    <>
      <div className="relative h-[92vh] w-full ">
        <video
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full object-fill "
          poster="https://static.bershka.net/4/static/images/home/2023/slidesHTML/summer-sale-v3/assets/D_launch-first-sale.jpg?20230621170700"
          src="https://static.bershka.net/4/static/images/home/2023/slidesHTML/summer-sale-v3/assets/D_launch-first-sale.mp4?20230621170700"
          playsInline
          muted
          autoPlay
          loop
        ></video>
        <div className=" h-full flex justify-center items-center bg-transparent">
          <h1 className="z-[500] bg-transparent text-center">
            <span className="uppercase text-white text-center font-bold text-[15vw] xl:text-[6vw]">
              sale
            </span>
            <br />
            <span className="uppercase text-white text-center font-bold text-[9.4vw] xl:text-[3.72vw]">
              up to
            </span>
            <br />
            <span className="uppercase text-white text-center font-bold text-[15vw] xl:text-[6vw]">
              40% off
            </span>
            <br />
            <span className="uppercase text-white text-center xl:text-[1.25vw]">
              on selected items
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full h-auto bg-[#F60D10]  border-t-[.1px] border-[#e5e7eb] xl:border-[#F60D10]">
        <ul className="w-full h-[15rem] xl:max-w-[80%] grid xl:grid-cols-3 xl:place-content-center xl:mx-auto place-items-center gap-y-2 my-4">
          {button.map((item, index) => {
            const isLastComponent = index === button.length - 1;
            const shouldSkipCell6 = isLastComponent && index === 6;
            const shouldMoveToCell7 =
              shouldSkipCell6 && window.innerWidth >= 768;

            return (
              <li
                key={index}
                className={`${
                  index === 0 || index === 3 || index === 6
                    ? "xl:place-self-end"
                    : ""
                } ${
                  index === 2 || index === 5 || index === 8
                    ? "xl:place-self-start"
                    : ""
                } ${
                  shouldMoveToCell7 ? "xl:col-start-2 xl:place-self-center " : ""
                } w-[70%] xl:h-[4rem] xl:w-auto bg-white h-9 rounded-[4px] p-2 text-center xl:mx-1`}
              >
                <Link
                  to={item.href}
                  className="w-full h-full uppercase text-black font-bold cursor-pointer text-[14px] xl:text-xl xl:p-4"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="xs:mt-12 py-8 px-4 text-center text-xs xl:text-base text-white">
          Promotion available until 27/07/2023 on selected items. Not valid for
          gift cards.
        </p>
      </div>
    </>
  );
}
