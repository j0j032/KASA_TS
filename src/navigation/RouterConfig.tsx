import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {Lodging} from "../modules/views/Lodging/Lodging";
import Home from "../modules/views/Home/Home";
import {Error} from "../modules/views/Error/Error";

function RouterConfig() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>

                {/*public*/}
                <Route path='/' element={<Home/>}/>

                {/*catch all*/}
                <Route path='*' element={<Error/>}/>

            </Route>
        </Routes>
    )
}

export default RouterConfig
