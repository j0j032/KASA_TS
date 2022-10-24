import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterConfig from './navigation/RouterConfig'
import './index.scss'
import 'mapbox-gl/dist/mapbox-gl.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/*' element={<RouterConfig/>}/>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </BrowserRouter>
)
