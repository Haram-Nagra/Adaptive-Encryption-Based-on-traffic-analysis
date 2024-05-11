import Part1 from './part1';

export default function Layout({ haram,children }) {
  return (
    <>
      <header className="fixed md:flex md:flex-row bg-gradient-to-r from-[#006663] to-[#111111] md:hover:bg-gradient-to-t md:justify-center md:fixed md:w-full">
        <nav className="flex flex-row p-3 gap-x-10 text-xl font-serif">
          <a className="block rounded px-2 py-1 md:hidden "><i className="fa fa-bars"></i></a>
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
          {children[0]}
          {children[1]}
        </div>

        <div
        class=' flex flex-col items-center text-center px-10 gap-x-5 mt-6 md:mt-24 md:flex-row md:items-center md:text-start'>
          {children[2]}
          {children[3]}
        </div>

        <div class='flex flex-row justify-center text-center px-10 mt-6 md:mt-24 md:text-start'>
          {children[4]}
        </div>


        <div class='flex flex-col px-10 gap-y-10 mt-8 items-center md:flex-row md:gap-x-10'>
          {children[5]}
          {children[6]}
          {children[7]}
          {children[8]}
          {children[9]}
          {children[10]}
        </div>

        <div id="form" className="h-screen flex flex-col items-center mt-24">
          <h2 className="text-3xl">Let's Connect</h2>
          {children[11]}
          {children[12]}
          <textarea
            class="p-2 h-[400px] w-[300px] bg-transparent mt-6 border-[1px] border-black rounded-md placeholder-black focus:outline-none md:h-[400px] md:w-[400px]"
            id="mname " name="msg" placeholder="Message"></textarea>

        <button class="mt-6 " type="button" onclick="clickhandler()">Submit</button>

        </div>
      </div>
      <footer></footer>
    </>
  );
}
