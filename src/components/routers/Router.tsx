import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from "./consts";
import { Suspense } from "react";
import Layout from "@/components/layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    {ROUTES.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {<route.element/>}
                                </Suspense>
                            }/>
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;