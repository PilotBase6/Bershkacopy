import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export default function Models({m3}){

    const bershkaStyle=(list)=>(
        list.map((item,index)=>{
          return (
            <li key={index} className={`w-[58.4vw] h-full xl:w-[100%] ${index!==0?"xl:row-span-2 xl:col-span-2": "xl:row-span-3 xl:col-span-2"} `}>
            <Link to={item.href} className=" xl:relative w-full ">
              
                <img src={item.img} alt="" className="xl:w-full xl:h-full xl:object-cover" />
                <svg version="1.1" viewBox="0 0 40 40" alt="" width="35px" height="35px" fill="white" className="absolute bottom-3 right-3">
                  <circle cx="20" cy="20" r="19" fill="none" stroke="white" strokeWidth="2" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.6752 11.3007C21.8889 10.154 20.5756 9.40002 19.081 9.40002C16.8543 9.40002 15.0291 11.0734 14.7503 13.2259H11.6422C10.8929 13.2259 10.2836 13.8421 10.2836 14.5839L10.0019 27.9379C9.97795 28.5034 10.1811 29.041 10.5749 29.4522C10.9696 29.8643 11.5253 30.1 12.0992 30.1H26.0618C26.6357 30.1 27.1915 29.8643 27.5862 29.4522C27.98 29.041 28.1841 28.5034 28.1601 27.9542L27.9883 19.8357C27.4224 19.518 26.9047 19.1766 26.4336 18.8175L26.6283 28.0056C26.6341 28.1493 26.5814 28.2864 26.4798 28.3928C26.3715 28.5059 26.223 28.5691 26.0621 28.5691H12.0994C11.9385 28.5691 11.79 28.5059 11.6817 28.3928C11.5801 28.2864 11.5274 28.1493 11.5342 27.9893L11.8139 14.7599H23.1691C22.7834 13.8463 22.6 12.9466 22.6 12.1271C22.6 11.8452 22.6258 11.569 22.6752 11.3007ZM21.8778 13.2256C21.6163 11.9193 20.4618 10.9322 19.0811 10.9322C17.6995 10.9322 16.545 11.9193 16.2834 13.2256H21.8778Z"></path><path d="M 27.099609 9.4003906 C 25.620148 9.4003906 24.400391 10.628273 24.400391 12.126953 C 24.400391 13.721308 25.481601 16.01333 28.248047 17.818359 L 28.205078 17.896484 L 28.904297 18.285156 L 29.603516 18.675781 L 29.603516 18.673828 L 29.835938 18.257812 C 33.128963 16.405676 34.300781 13.847758 34.300781 12.126953 C 34.300781 10.628273 33.079071 9.4003906 31.599609 9.4003906 C 30.662573 9.4003906 29.860738 9.878952 29.349609 10.541016 C 28.838481 9.878952 28.036646 9.4003906 27.099609 9.4003906 z M 27.099609 11 C 27.433573 11 27.867713 11.239395 28.083984 11.519531 L 29.349609 13.160156 L 30.617188 11.519531 C 30.833459 11.239395 31.265646 11 31.599609 11 C 32.199348 11 32.699219 11.486233 32.699219 12.126953 C 32.699219 13.037409 31.939051 15.056285 29.347656 16.648438 C 26.758764 15.056091 26 13.036968 26 12.126953 C 26 11.486233 26.499871 11 27.099609 11 z "></path>
                </svg>
            
              <figurecaption className="xl:absolute xl:bottom-4 text-[#636363] text-xs xs:mt-2">
                {item.title}
              </figurecaption>
            </Link>
          </li>
    
          )
        })
        
    )

    return (
        <div className="px-5 xl:px-0 w-full h-auto ">
        <article className="xl:hidden">
        <h3 className="text-2xl font-bold mt-8 pb-4">#bershkastyle</h3>
        <p className="text-xs pb-5 text-[#636363]">We´d love to see how you style your Bershka clothes. Share your look with @bershka and #bershkastyle.</p>
        <Link to="/" className="text-xs font-bold">See gallery</Link>
          
      </article>
        <ul className="grid grid-flow-col xl:grid-cols-6 xl:grid-rows-4  overflow-x-auto xl:overflow-x-hidden  gap-3 xl:gap-1 h-full py-6 xl:w-[99%] xl:h-[150vh] ">
          <article className="xs:hidden bg-black text-white  px-5 pb-6 xl:row-span-1 xl:col-span-2 xl:w-full]">
            <h3 className="text-[2.5rem] md:text-[1.5rem] text-justify font-bold mt-4 pb-4">#bershkastyle</h3>
            <p className="text-[0.9375rem] pb-5">We´d love to see how you style your Bershka clothes. Share your look with @bershka and #bershkastyle.</p>
            <Link to="/" className="flex items-center">
            <p className="text-[0.8125rem] font-bold">See gallery</p>
            <svg fill="white" className="w-[30px] h-[30px]"><path xmlns="http://www.w3.org/2000/svg" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM289 361l88-88c9.4-9.4 9.4-24.6 0-33.9l-88-88c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47L152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l150.1 0-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" transform="scale(.03) translate(200, 300)"/></svg>
            </Link>
          </article>
          {bershkaStyle(m3)}
            <div className="xl:hidden w-[58.4vw] relative">
              <Link to="/" className="absolute top-[40%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-sm ">See all styles</Link>
            </div>

        </ul>
      </div>

    )
}

Models.propTypes={
    m3:PropTypes.array
  }