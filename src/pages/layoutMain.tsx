import {Outlet} from "react-router";
import {Header} from "../core-components/Header.tsx";
import {Footer} from "../core-components/Footer.tsx";

export const LayoutMain = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between items-center">
            <Header/>
            <main className="my-5 md:my-10 w-11/12 md:w-3/4 lg:w-1/2">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};
