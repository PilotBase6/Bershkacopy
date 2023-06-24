import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Category from "../components/category";

export default function Content({m1,m2,m3}) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const viralNow= (list)=>(
    list.map((item) => {
      return (
        <li key={item.href} className=" w-[34vw] xl:w-full h-auto">
          <Link to={item.href} className="flex flex-col gap-1">
            <figure className="w-full ">
              <img src={item.img} alt="" className="" />
            </figure>
            <figurecaption className="text-black text-xs font-Whyte">
              {item.title}
            </figurecaption>
          </Link>
        </li>
      );
    })
  ),
  newItems= (list)=>(
    list.map((item) => {
      return (
        <li key={item.href} className="w-[31.5vh] h-full">
          <Link
            to={item.href}
            className="flex flex-col gap-1"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <figure className="">
              <img
                src={hoveredItem === item ? item.hoverImg : item.img}
                alt=""
                className=""
              />
            </figure>
            <figurecaption className="text-[#636363] text-[0.7rem] whitespace-nowrap overflow-hidden text-ellipsis px-2">
              {item.description}
            </figurecaption>
            <p className=" text-xs font-extrabold px-2">{item.price}</p>
          </Link>
        </li>
      );
    })
  ),
  bershkaStyle=(list)=>(
    list.map((item)=>{
      return (
        <li key={item.href} className="w-[58.4vw] h-full">
        <Link to={item.href} className="flex flex-col gap-1">
          <figure className="relative">
            <img src={item.img} alt="" className="" />
            <svg version="1.1" viewBox="0 0 40 40" alt="" width="35px" height="35px" fill="white" className="absolute bottom-3 right-3">
             <circle cx="20" cy="20" r="19" fill="none" stroke="white" strokeWidth="2" />
             <path fillRule="evenodd" clipRule="evenodd" d="M22.6752 11.3007C21.8889 10.154 20.5756 9.40002 19.081 9.40002C16.8543 9.40002 15.0291 11.0734 14.7503 13.2259H11.6422C10.8929 13.2259 10.2836 13.8421 10.2836 14.5839L10.0019 27.9379C9.97795 28.5034 10.1811 29.041 10.5749 29.4522C10.9696 29.8643 11.5253 30.1 12.0992 30.1H26.0618C26.6357 30.1 27.1915 29.8643 27.5862 29.4522C27.98 29.041 28.1841 28.5034 28.1601 27.9542L27.9883 19.8357C27.4224 19.518 26.9047 19.1766 26.4336 18.8175L26.6283 28.0056C26.6341 28.1493 26.5814 28.2864 26.4798 28.3928C26.3715 28.5059 26.223 28.5691 26.0621 28.5691H12.0994C11.9385 28.5691 11.79 28.5059 11.6817 28.3928C11.5801 28.2864 11.5274 28.1493 11.5342 27.9893L11.8139 14.7599H23.1691C22.7834 13.8463 22.6 12.9466 22.6 12.1271C22.6 11.8452 22.6258 11.569 22.6752 11.3007ZM21.8778 13.2256C21.6163 11.9193 20.4618 10.9322 19.0811 10.9322C17.6995 10.9322 16.545 11.9193 16.2834 13.2256H21.8778Z"></path><path d="M 27.099609 9.4003906 C 25.620148 9.4003906 24.400391 10.628273 24.400391 12.126953 C 24.400391 13.721308 25.481601 16.01333 28.248047 17.818359 L 28.205078 17.896484 L 28.904297 18.285156 L 29.603516 18.675781 L 29.603516 18.673828 L 29.835938 18.257812 C 33.128963 16.405676 34.300781 13.847758 34.300781 12.126953 C 34.300781 10.628273 33.079071 9.4003906 31.599609 9.4003906 C 30.662573 9.4003906 29.860738 9.878952 29.349609 10.541016 C 28.838481 9.878952 28.036646 9.4003906 27.099609 9.4003906 z M 27.099609 11 C 27.433573 11 27.867713 11.239395 28.083984 11.519531 L 29.349609 13.160156 L 30.617188 11.519531 C 30.833459 11.239395 31.265646 11 31.599609 11 C 32.199348 11 32.699219 11.486233 32.699219 12.126953 C 32.699219 13.037409 31.939051 15.056285 29.347656 16.648438 C 26.758764 15.056091 26 13.036968 26 12.126953 C 26 11.486233 26.499871 11 27.099609 11 z "></path>
          </svg>
          </figure>
          <figurecaption className="text-[#636363] text-xs mt-2">
            {item.title}
          </figurecaption>
        </Link>
      </li>

      )
    })
  );

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <main className="relative w-full h-auto pb-8">
    <section className="relative h-auto w-full pb-8">
      <a className="xs:hidden flex flex-col justify-end h-screen bg-top bg-cover bg-no-repeat bg-[url('https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_novedades_-1.jpg?20230622045700')]">
        <p className="uppercase text-white self-center text-[2.5rem] font-semibold pb-6">
          New
        </p>
      </a>
      <video
        className="xl:hidden object-cover w-full h-full"
        poster="https://static.bershka.net/4/static/images/home/2023/0621/M_slide_woman_novedades_-1.mp4?20230622050000"
        src="https://static.bershka.net/4/static/images/home/2023/0621/M_slide_woman_novedades_-1.mp4?20230622050000"
        playsInline
        muted
        autoPlay
        loop
      ></video>
      <p className="xl:hidden absolute z-50 top-[96%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-white text-[1.5rem] font-semibold pb-6">
        New
      </p>
      <div className=" w-full  h-auto ">
        <div className="xl:relative flex flex-col xl:justify-center xl:items-center bg-[#f5f5f5] w-full pt-4 px-5">
          <h1 className="text-black pb-5 font-normal text-lg xl:text-3xl">
            Viral now
          </h1>
          <ul className="xl:w-[85%] grid grid-flow-col whitespace-nowrap xl:overflow-x-hidden overflow-x-auto gap-1 pb-4">
            {viralNow(m1)}
          </ul>
        </div>
        <figure className="w-full py-4">
          <img className="w-full"
            src="https://static.bershka.net/4/static/images/home/2023/0623/M_slide_bresh_-1.jpg?20230623022006"
            alt=""
          />
        </figure>
        <div>
          <h2 className="p-4 text-xl  font-semibold">
            New items that you can’t miss out on
          </h2>
          <ul className="grid grid-flow-col whitespace-nowrap overflow-x-auto gap-1 pb-4">
            {newItems(m2)}
          </ul>
        </div>
        <article className="pt-4 px-5">
          <h3 className="text-2xl font-bold mt-8 pb-4">#bershkastyle</h3>
          <p className="text-xs pb-5 text-[#636363]">We´d love to see how you style your Bershka clothes. Share your look with @bershka and #bershkastyle.</p>
          <Link to="/" className="text-xs font-bold">See gallery</Link>
            
        </article>
        <div className="py-6 px-5 overflow-x-auto">
          <ul className="grid grid-flow-col-dense gap-3 h-full">
            {bershkaStyle(m3)}
              <div className="w-[58.4vw] relative">
                <Link to="/" className="absolute top-[40%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-sm ">See all styles</Link>
              </div>

          </ul>
        </div>
      </div>
    </section>
    <Category/> 
    <section className="w-full h-auto mt-12 px-5">
      <article>
        <h2 className="text-lg font-bold">Get 10% off</h2>
        <p className="text-xs py-3 text-[#636363]">Subscribe to the newsletter and get 10% off your next shop, access to special offers and much more!</p>
      </article>
      <div>
        <form className="grid w-full pb-4">
          <input type="email" className="border-[#636363] border-[1px] p-[.4rem] my-4 rounded-md" placeholder="Enter your email address" required></input>
          <input type="submit" className="bg-black text-white p-2 font-bold rounded-md" value="Suscribe" />
        </form>
        <a href="/" className="text-xs font-bold"> I would like to unsuscribe</a>
      </div>
    </section>
    </main>
  );
}


Content.propTypes={
  m1:PropTypes.array,
  m2:PropTypes.array,
  m3:PropTypes.array
}
