
import Category from "../components/category";
import Product from "../components/product";
import NewProduct from "../components/newProduct";
import Models from "../components/models";


export default function Content() {
 
  const viralNow = [
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_dresses_-1.jpg?20230622045700",
      title: "Dresses",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_tops_-1.jpg?20230622045700",
      title: "Tops and corsets",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_skirts_-1.jpg?20230622045700",
      title: "Skirts",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_shorts_-1.jpg?20230622045700",
      title: "Shorts and bermudas",
    },
  ],
  newItems = [
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/0102/707/706//01/fbfa4c14aecac94e3bfdeb019925e937-0102707706_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/0102/707/706//01/806e3dedd1a8f5d1b436654b1f4e9395-0102707706_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Wide-leg linen blend trousers with gathered waist",
      price: "19,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/7018/187/712/23258a4e2825ec89ddc27ddf2b97a88a-7018187712_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/7018/187/712/d135d49152dcd2d635477d3816f1dd61-7018187712_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Crochet cardigan",
      price: "17,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/V/0/1/p/3522/714/500/859fd209cf648d7529149b1f0039cb21-3522714500_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/V/0/1/p/3522/714/500/e8ad0550cffc521461ddc9796c439d79-3522714500_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Open knit top",
      price: "19,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/V/0/1/p/3483/777/710//02/16310699c4030fe2443d69ccc698b7be-3483777710_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/V/0/1/p/3483/777/710//02/6bd784ff4d392c08f051713f42ca754c-3483777710_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Knit detail halter top",
      price: "17,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/0651/187/800//02/20a6fea2800577d7dd425a561fcfc74d-0651187800_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/0651/187/800//02/24503c49a5031645345a78eeedc6d298-0651187800_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Long strapless ruffled dress",
      price: "25,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/V/0/1/p/0094/602/250//02/67d48f2d8fe83e831defd416e2a28fcc-0094602250_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/V/0/1/p/0094/602/250//02/71544d7d036271e68f3e0668eb8fbada-0094602250_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description:
        "Basic wide-leg linen blend trousers with an elasticated waistband",
      price: "25,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/0102/707/706//01/fbfa4c14aecac94e3bfdeb019925e937-0102707706_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/0102/707/706//01/806e3dedd1a8f5d1b436654b1f4e9395-0102707706_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Wide-leg linen blend trousers with gathered waist",
      price: "19,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/5821/602/800//01/149d6e08fec1ea34082f7f995efad12f-5821602800_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/1/p/5821/602/800//01/62ec021cc90a49ea48714aff0bce3bc2-5821602800_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Long gathered crepe dress",
      price: "25,99 €",
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
      </div>
      <div className=" w-full  h-auto ">
        <Product m1={viralNow} title="Viral now"/>
        <figure className="w-full xl: py-4 xl:py-0 xl:pb-16">
          <img className="w-full h-auto xl:hidden"
            src={`https://static.bershka.net/4/static/images/home/2023/0623/M_slide_bresh_-1.jpg?20230623022006`}
            alt=""
          />
          <img className="w-full h-auto xs:hidden"
            src="https://static.bershka.net/4/static/images/home/2023/0623/D_slide_bresh_-1.jpg?20230624020206"
            alt=""
          />
        </figure>
        <NewProduct m2={newItems} title="New items that you can’t miss out on"/>
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








//  <ul className="grid grid-flow-col xl:grid-cols-6 xl:grid-rows-4  overflow-x-auto xl:overflow-x-hidden  object-cover gap-3 xl:gap-1 h-full py-6 xl:w-full md:h-[100vh]">
// <article className="xs:hidden bg-black text-white px-5 pb-6 xl:row-span-1 xl:col-span-2 xl:w-full]">
//   <h3 className="text-[2.5rem] font-bold mt-8 pb-4">#bershkastyle</h3>
//   <p className="text-[0.9375rem] pb-5">We´d love to see how you style your Bershka clothes. Share your look with @bershka and #bershkastyle.</p>
//   <Link to="/" className="flex items-center">
//   <p className="text-[0.8125rem] font-bold">See gallery</p>
//   </Link>
// </article>
// {
//     return (
//     list.map((item,index)=>{
//       return (
//         <li key={index} className={`w-[58.4vw] h-full xl:w-full  ${index!==0?"xl:row-span-2 xl:col-span-2": ""} ${index===0?"xl:row-span-3 xl:col-span-2 ": ""} `}>
//         <Link to={item.href} className=" xl:relative w-full ]">
          
//             <img src={item.img} alt="" className="xl:w-full xl:h-full xl:object-cover" />

        
//           <figurecaption className="xl:absolute xl:bottom-4 text-[#636363] text-xs xs:mt-2">
//             {item.title}
//           </figurecaption>
//         </Link>
//       </li>

//       )
//     })
//     )
//   }

// </ul> 