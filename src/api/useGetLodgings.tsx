import {useQuery} from "react-query";
import {getLodgings} from "./lodging.requests";
import {Lodgings} from "../types";
import {AxiosError} from "axios";

export function useGetLodgings(dep, {select}) {
    return useQuery<Lodgings, AxiosError>(['lodgings', dep], () => getLodgings, {select})
}
