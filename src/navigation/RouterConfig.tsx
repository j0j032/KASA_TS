import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Lodging from "../pages/Lodging/Lodging";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error/Error404";

function RouterConfig() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                
                {/*public*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/lodging/:id' element={<Lodging/>}/>

                {/*catch all*/}
                <Route path='*' element={<Error404/>}/>

            </Route>
        </Routes>
    )
}

export default RouterConfig
