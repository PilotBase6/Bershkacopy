import {Link} from "react-router-dom"

export default function Banner(){
    const button =[
        {href:"/", name:"bershka favourites"},
        {href:"/", name:"dresses and jumpsuits"},
        {href:"/", name:"trousers"},
        {href:"/", name:"tops and corsets"},
        {href:"/", name:"jeans"},
        {href:"/", name:"t-shirts"},
        {href:"/", name:"shoes"},

    ]
    return(
        <>
        <div className="relative h-[92vh] w-full">
            <video className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full object-fill" poster="https://static.bershka.net/4/static/images/home/2023/slidesHTML/summer-sale-v3/assets/D_launch-first-sale.jpg?20230621170700" src="https://static.bershka.net/4/static/images/home/2023/slidesHTML/summer-sale-v3/assets/D_launch-first-sale.mp4?20230621170700" playsInline muted autoPlay loop></video>
            <div className=" h-full flex justify-center items-center bg-transparent">
                <h1 className="z-[999] bg-transparent text-center">
                    <span className="uppercase text-white text-center font-bold text-[15vw] ">sale</span><br />
                    <span className="uppercase text-white text-center font-bold text-[9.4vw]">up to</span><br />
                    <span className="uppercase text-white text-center font-bold text-[15vw]">40% off</span><br />
                    <span className="uppercase text-white text-center  ">on selected items</span>

                </h1>
            </div>
        </div>
        <div className="w-full h-auto bg-[#F60D10] border-t-[.1px] border-solid border-[#e5e7eb]">
            <ul className="w-full grid  place-items-center gap-y-2 my-4">
                {button.map((item) =>{
                    return (
                        <li key={item.href} className="w-[70%] bg-white h-9 rounded-[4px] p-2 text-center">
                            <Link to={item.href} className="w-full h-full uppercase text-black font-bold cursor-pointer text-[14px]">{item.name}</Link>
                        </li>
                    );
                })}

            </ul>
            <p className="py-8 px-4 text-center text-xs">Promotion available until 27/07/2023 on selected items. Not valid for gift cards.</p>

        </div>
      </>
    )
}