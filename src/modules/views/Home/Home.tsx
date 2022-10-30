import Header from "../../components/Header/Header";
import Filters from '../../components/Filters/Filters'
import {Gallery} from "./Gallery/Gallery";
import MainMap from "./Map/MainMap";
import {useQuery} from "react-query";
import {Lodgings} from "../../../types";
import {AxiosError} from "axios";
import {getLodgings} from "../../../api/lodging.requests";
import {useGetLodgings} from "../../../api/useGetLodgings";
import filters from "../../components/Filters/Filters";
import {useState} from "react";
import {isIncluded} from "../../../utils/search";

const Home = () => {
    const [filter, setFilter] = useState('')
    const {
        data,
        isLoading,
        isError,
        error
    } = useGetLodgings(filter, {
        select: (data) => data.filter(item => isIncluded(item.title, filter))
    })
    console.log(data)

    if (isError) return <p>Error: {error.message}</p>
    if (isLoading) return <p>LOADING ...</p>


    return (
        <>
            <Header setFilter={setFilter}/>
            <Filters/>
            <main className='divide-content'>
                <Gallery lodgings={data}/>
                <MainMap lodgings={data}/>
            </main>
        </>
    );
};

export default Home
