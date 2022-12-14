import Header from "../../components/Header/Header";
import Filters from '../../components/Filters/Filters'
import {Gallery} from "./Gallery/Gallery";
import MainMap from "./Map/MainMap";
import {useQuery} from "react-query";
import {Lodgings} from "../../../types";
import {AxiosError} from "axios";
import {getLodgings} from "../../../api/lodging.requests";

// <Array<lodging>, AxiosError>
const Home = () => {
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery<Lodgings, AxiosError>(['lodgings'], () => getLodgings, {
        staleTime: 100_000,
        retry: false,
    })

    if (isError) return <p>Error: {error.message}</p>
    if (isLoading) return <p>LOADING ...</p>


    return (
        <>
            <Header/>
            <Filters/>
            <main className='divide-content'>
                <Gallery lodgings={data}/>
                <MainMap lodgings={data}/>
            </main>
        </>
    );
};

export default Home
