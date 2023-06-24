import Header from "../../sections/header"
import Content from "../../sections/content"
import Footer from "../../sections/footer";


function AppWomen() {
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
    {
      href: "/",
      img: "https://static.bershka.net/4/static/images/home/2023/0621/D_slide_woman_trousers_-1.jpg?20230622045700",
      title: "Trousers",
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
      <>
      <Header/>
      <Content m1={viralNow} m2={newItems} m3={bershkaStyle}/>
      <Footer/>
   
      </>
    )
  }
  
  export default AppWomen