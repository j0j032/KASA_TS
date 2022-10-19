import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Lodging from "../pages/Lodging/Lodging";
import Home from "../pages/Home/Home";

function RouterConfig() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/lodging' element={<Lodging/>}/>
            </Route>
        </Routes>
    )
}

export default RouterConfig
