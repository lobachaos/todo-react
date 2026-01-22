import {BrowserRouter, Route, Routes} from "react-router";
import {PageHome} from "./pages/pageHome.tsx";
import {LayoutMain} from "./pages/layoutMain.tsx";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutMain/>}>
                    <Route index element={<PageHome/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}