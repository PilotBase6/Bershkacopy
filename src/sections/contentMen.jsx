import Category from "../components/category";
import Product from "../components/product";
import NewProduct from "../components/newProduct";
import Models from "../components/models";


export default function ContentMen() {
 
  const topCategory = [
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_man_tshirts_-1.jpg?20230629021206",
      title: "T-shirts",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_man_jeans_-1.jpg?20230629021206",
      title: "Jeans",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/slide_man_shirts_-1.jpg?20230629021206",
      title: "Shirts",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_man_shorts_-1.jpg?20230629021206",
      title: "Shorts",
    },
  ],
  newItems = [
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/7951/130/250/eefbe0daa43b2941a54d86c19964e185-7951130250_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7951/130/250/f8802782d7e6df374e57fb65e730d8d6-7951130250_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Naruto print boxy fit short sleeve T-shirt",
      price: "15,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/7953/169/802//01/4e1147f068b0efc73f9a086abf2a24a5-7953169802_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7953/169/802//01/9fd1dda6532fee708c5475dafc792cbe-7953169802_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Print boxy fit short sleeve T-shirt",
      price: "15,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/2319/700/802/1a1ae131ee4253662c6e5208fa8a4c4a-2319700802_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/2319/700/802/23bd4350254f7d31efe47ce2adf719a1-2319700802_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Short sleeve faded T-shirt",
      price: "17,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/V/0/2/p/0384/665/250/dfd6751542c2875e04603bb2f8061c58-0384665250_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/V/0/2/p/0384/665/250/0346c0f82198684dd06e0d2943c1fa9b-0384665250_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Rustic loose-fit trousers",
      price: "25,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/7955/777/800//01/7955777800_1_1_4.jpg?t=1686064881904",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7955/777/800//01/7955777800_2_4_4.jpg?t=1686053260499",
      description:
        "Sleeveless top with worker print",
      price: "12,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/5398/335/428//01/1f1321fd3190f0c1814a36ffcbd26776-5398335428_2_24_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/5398/335/428//01/e1723a2f0dbfeab6da11ba486ed8b894-5398335428_2_7_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Baggy jeans",
      price: "29,99 €",
    },
    {
      href: "/",
      img: "https://static.bershka.net/4/photos2/2023/I/1/2/p/2432/160/001/b70f126b66b3cfd0420f4c19e1c6e0af-2432160001_1_1_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      hoverImg:
        "https://static.bershka.net/4/photos2/2023/I/1/2/p/2432/160/001/957f7add95a6327e82bfd5eb45bbdea2-2432160001_2_4_0.jpg?cropfixwidth=2052&imwidth=563&impolicy=bershka-crop-fix-width-itxhigh&imformat=chrome",
      description: "Men’s multi-layered trainers",
      price: "29,99 €",
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
        poster="https://static.bershka.net/4/static/images/home/2023/0621/D_slide_man_novedades_-1.mp4?20230629021206"
        src="https://static.bershka.net/4/static/images/home/2023/0621/D_slide_man_novedades_-1.mp4?20230629021206"
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
        poster="https://static.bershka.net/4/static/images/home/2023/0621/M_slide_man_novedades_-1.mp4?20230629021206"
        src="https://static.bershka.net/4/static/images/home/2023/0621/M_slide_man_novedades_-1.mp4?20230629021206"
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
        <Product m1={topCategory} title="Top Category"/>
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