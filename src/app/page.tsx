import Navbar from "@/app/components/navbar/page"
import Content from "@/app/components/content/page";


export default function Home() {
    return(
        <div className="flex w-[1440px] h-[1132px] absolute top[-650px] left-[120px] bg-[#252B42]">
            <Navbar />
             <Content />
        </div>
    );
};