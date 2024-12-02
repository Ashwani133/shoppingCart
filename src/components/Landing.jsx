import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
export function Landing(){
 return <div className="sticky top-0 h-[100vh] flex justify-center items-center z-0">
        <div className="h-[85%] w-[85%]   rounded-lg p-5">
            <div className="h-[15%]">
            <Navbar />
            </div>
            <div className="h-[75%] flex">
            <Hero />
            </div>
        </div>
    </div>
}