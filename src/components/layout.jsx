import Part1 from './part1';

export default function Layout({ haram,children1,children2,children3,children4 }) {
  return (
    <>
      <header className="fixed md:flex md:flex-row bg-gradient-to-r from-[#006663] to-[#111111] md:hover:bg-gradient-to-t md:justify-center md:fixed md:w-full">
        <nav className="flex flex-row p-3 gap-x-10 text-xl font-serif">
          <a className="block border border-black hover:bg-gradient-to-t rounded px-2 py-1 md:hidden "><i className="fa fa-bars"></i></a>
          <a href="./education.html" className="hidden md:block">Education</a>
          <a href="./skills.html" className="hidden md:block">Skills</a>
          <a href="./experience.html" className="hidden md:block">Experience</a>
          <a href="./hobbies.html" className="hidden md:block">Hobbies</a>
          <a href="./projects.html" className="hidden md:block">Projects</a>
          <a href="./contact.html" className="hidden md:block">Contact</a>
        </nav>
      </header>


      <div className="bg-gradient-to-r from-[#006663] to-[#111111]  flex flex-col font-serif ">
        
        <div className="flex flex-col items-center px-10 gap-x-10 text-center md:flex-row md:text-start md:h-screen w-full justify-between">
          <div className="h-[400px] flex flex-col justify-center md:w-[700px] w-full ">
            <h1 className="text-4xl sm:text-6xl">Portfolio</h1>
            <h3 className="text-2xl mb-6">Haram Iqbal Nagra</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente excepturi veniam soluta repellendus
              sit distinctio in eius? Obcaecati veniam provident nam. Magni laudantium, minima libero sequi repellat
              ratione tempore facilis.</p>
          </div>
          {haram}
        </div>


        <div class=' flex flex-col items-center px-10 gap-x-5 text-center md:flex-row md:items-start md:text-start'>
          {children1}
          {children2}
        </div>

        <div
        class=' flex flex-col items-center text-center px-10 gap-x-5 mt-6 md:mt-24 md:flex-row md:items-center md:text-start'>
          {children3}
          {children4}
        </div>

      </div>
      <footer></footer>
    </>
  );
}
