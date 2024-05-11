export default function Part1({title,items}){
    return(
        <div id="ed">
            <h2 class="text-3xl mt-6 ">{title}</h2>
            <ul class=" flex flex-col items-center px-10 gap-y-5">
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>

            </ul>
        </div>
    )
}