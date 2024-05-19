import { Link } from "react-router-dom";

export default function Layout({children}) {
  return (
    <>
    <header className=" flex flex-row text-[#FFFFFF] bg-[#0F0F0F] font-bold">
        <nav className="flex flex-row p-2 px-40 gap-x-10 justify-between w-full bg-[#020811f4] border-b border-b-[#545454] sticky ">
            <div className="flex items-center">
                <Link to={"/"}>Home</Link>
            </div>
            <div className="flex flex-row p-3 gap-x-10 ">
                <Link to={"/attack"} className="hidden text-sm md:block hover:underline" >Attack</Link>
                <Link to={"/decrypt"} className="hidden text-sm md:block hover:underline" >Decrypt</Link>
                <button className=" rounded-xl h-[30px] w-[96px] -mt-1 bg-[#2B4162] hidden md:block hover:scale-125 transition-all duration-300">
                    <Link to={"/encrypt"} className="hidden text-sm md:block">Encrypt</Link>
                </button>
                <a className="block w-[26px] h-[26px]  md:hidden "
                    ><div className="ham bg-auto object-contain h-full w-full"></div></a>
            </div>
        </nav>
    </header>
      <main>{children}</main>
      
      <footer></footer>
    </>
  );
}
