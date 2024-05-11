export default function Form({input}){
    return(
            <input
                class="p-2  h-[30px] w-[300px] bg-transparent border-[1px] border-black rounded-md mt-6 placeholder-black focus:outline-none md:h-[30px] md:w-[400px]"
                type="text" id={input[0]} name={input[1]} placeholder={input[2]}/>


    )
}