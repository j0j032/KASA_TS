import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "../modules/views/Home/Home";
import {Error} from "../modules/views/Error/Error";
import {Booking} from "../modules/views/Booking/Booking";

function RouterConfig() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>

                {/*public*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/logement/:id' element={<Booking/>}/>

                {/*catch all*/}
                <Route path='*' element={<Error/>}/>

            </Route>
        </Routes>
    )
}

export default RouterConfig
