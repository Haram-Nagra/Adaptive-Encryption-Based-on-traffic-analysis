export default function Card({title}){
    return(
        <div>
            <div class="flex h-[200px] w-[200px] rounded-lg">
                <div class='img bg-cover bg-right object-contain h-full w-full rounded-lg'></div>
            </div>
            <h1>{title}</h1>
        </div>
    )
}