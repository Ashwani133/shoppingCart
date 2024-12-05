import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
export function Landing(){
 return <div className="sticky top-0 h-[100vh] z-0">
        <Navbar />
        <div className="p-2 px-10 mt-20"><Hero /></div>
    </div>
}