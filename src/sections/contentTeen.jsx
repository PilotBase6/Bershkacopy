import Category from "../components/category";
import Product from "../components/product";
import Models from "../components/models";


export default function ContentTeen() {
 
  const topCategory = [
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/emergency_task/D_slide_bsk_cargo_-1.jpg?20230629021205",
      title: "T-shirts",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0628/D_slide_bsk_skirts_-1.jpg?20230629021205",
      title: "Jeans",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0628/D_slide_bsk_tops_-1.jpg?20230629021205",
      title: "Shirts",
    },
  ],
  bershkaStyle=[
    {
      href: "/",
      img: "https://static.pxlecdn.com/photos/594987807/xl/99092ce407a7b60038d5.jpg",
      title: "@alex_sousajr",
    },
    {
      href: "/",
      img: "https://static.pxlecdn.com/photos/594717915/xl/077e0fc110694c27f208.jpg",
      title: "@yanisbarbieri",
    },
    {
      href: "/",
      img: "https://static.pxlecdn.com/photos/593930803/xl/0666b12a8587338f6719.jpg",
      title: "@saandraflor",
    },
    {
      href: "/",
      img: "https://static.pxlecdn.com/photos/593567154/xl/09c660eb435dc62a609d.jpg",
      title: "@giselle_fuentes",
    },
    {
      href: "/",
      img: "https://static.pxlecdn.com/photos/593220149/xl/e3ed63ddef593a71bdbf.jpg",
      title: "@xheni_mrt",
    },
    
  ];
  
  return (
    <main className="relative w-full h-auto pb-8">
    <section className="relative h-auto w-full pb-8">
      <div className="relative">
      
      <video
        className="xs:hidden  object-cover w-full h-full"
        poster="https://static.bershka.net/4/static/images/home/2023/0628/D_slide_bsk_novedades_-1.mp4?20230629021205"
        src="https://static.bershka.net/4/static/images/home/2023/0628/D_slide_bsk_novedades_-1.mp4?20230629021205"
        playsInline
        muted
        autoPlay
        loop
      ></video>
      <p className="xs:hidden absolute z-50 top-[92%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-black text-[2rem] font-Whyte font-medium  pb-6">
        New
      </p>
      <video
        className="xl:hidden object-cover w-full h-full"
        poster="https://static.bershka.net/4/static/images/home/2023/0628/M_slide_bsk_novedades_-1.mp4?20230629021206"
        src="https://static.bershka.net/4/static/images/home/2023/0628/M_slide_bsk_novedades_-1.mp4?20230629021206"
        playsInline
        muted
        autoPlay
        loop
      ></video>
      <p className="xl:hidden absolute z-50 top-[96%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-white text-[1.5rem] font-semibold pb-6">
        New
      </p>
      </div>
      <div className=" w-full  h-auto ">
        <Product m1={topCategory} title="Viral now"/>
        <div className="relative">
      
      <video
        className="xs:hidden  object-cover w-full h-full"
        poster="https://static.bershka.net/4/static/images/home/2023/0628/D_slide_woman_printshop_-1.mp4?20230629021205"
        src="https://static.bershka.net/4/static/images/home/2023/0628/D_slide_woman_printshop_-1.mp4?20230629021205"
        playsInline
        muted
        autoPlay
        loop
      ></video>
  
      <video
        className="xl:hidden object-cover w-full h-full"
        poster="https://static.bershka.net/4/static/images/home/2023/0628/M_slide_woman_printshop_-1.mp4?20230629021206"
        src="https://static.bershka.net/4/static/images/home/2023/0628/M_slide_woman_printshop_-1.mp4?20230629021206"
        playsInline
        muted
        autoPlay
        loop
      ></video>
      </div>
        <figure className="w-full  xl:pb-16">
          <img className="w-full h-auto xl:hidden"
            src={`https://static.bershka.net/4/static/images/home/2023/0623/M_slide_bresh_-1.jpg?20230623022006`}
            alt=""
          />
          <img className="w-full h-auto xs:hidden"
            src="https://static.bershka.net/4/static/images/home/2023/0623/D_slide_bresh_-1.jpg?20230624020206"
            alt=""
          />
        </figure>
        <Models m3={bershkaStyle}/>
      </div>
    </section>
    <section className="xl:hidden">
      <Category /> 
    </section>
    <section className="w-full xl:max-w-[800px] xl:mx-auto h-auto mt-12 px-5">
      <article>
        <h2 className="text-lg font-bold">Get 10% off</h2>
        <p className="text-xs py-3 text-[#636363]">Subscribe to the newsletter and get 10% off your next shop, access to special offers and much more!</p>
      </article>
      <div className="">
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