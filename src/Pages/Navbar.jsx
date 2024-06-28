import { MdPhoneInTalk, MdMarkEmailRead } from "react-icons/md";

function Navbar(){
    return(
        <nav className="fixed top-4 left-10 right-10 z-50  p-7 text-white bg-white/10 flex justify-between">
          <div className="flex gap-16">
            <div className="font-bold text-xl">LOGO</div> 
                <ul className="flex gap-8">
                    <li className="hover:text-zinc-500 cursor-pointer">Home</li>            
                    <li className="hover:text-zinc-500 cursor-pointer">About</li>            
                    <li className="hover:text-zinc-500 cursor-pointer">courses</li>            
                    <li className="hover:text-zinc-500 cursor-pointer">Result</li>            
                    <li className="hover:text-zinc-500 cursor-pointer">Contact</li>            
                </ul> 
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center hover:text-zinc-500 cursor-pointer"><MdPhoneInTalk/>+91 987654321</div>
            <div className="flex gap-3 items-center hover:text-zinc-500 cursor-pointer"><MdMarkEmailRead/>abc@gmail.com</div>
          </div>
        </nav>
    )
}

export default Navbar;