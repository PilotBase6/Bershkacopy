import NavBar from "../components/navbar";
import Banner from "../components/banner";

export default function Header() {

  const navItems=[
    {
      href: "/",
      text: "Sale"
    },
    {
      href: "/",
      text: "New"
    },
    {
      href: "/",
      text: "Clothes"
    },
    {
      href: "/",
      text: "Shoes"
    },
  ]


  return (
    <header className="relative w-full h-auto ">
      <Banner/>  
      <NavBar nav={navItems}/>
    </header>
  );
}
