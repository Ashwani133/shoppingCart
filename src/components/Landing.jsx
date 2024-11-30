import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
export function Landing(){
 return <div className="sticky top-0 h-[100vh] bg-[hsl(213.91_26.44%_82.94%)] flex justify-center items-center z-0">
        <div className="h-[85%] w-[85%] bg-custom-gradient shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] rounded-lg p-10">
            <div className="h-[15%]">
            <Navbar />
            </div>
            <div className="h-[85%] flex items-center justify-center">
            <Hero />
            </div>
        </div>
    </div>
}