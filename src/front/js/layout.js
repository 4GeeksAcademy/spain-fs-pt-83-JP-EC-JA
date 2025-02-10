import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";


import { ShopAll } from "./pages/shopAll";
import { Jewelery } from "./pages/jewelery";
import { MenClothes } from "./pages/mensclothes";
import { WomanClothes } from "./pages/womansclothes";
import { Electronics } from "./pages/electronics";
import injectContext from "./store/appContext";
import { ProductDetail } from "./pages/productdetail";
import { Favorites } from "./pages/favorites";
import { Perfil } from "./pages/perfil";


import { Navbar } from "./component/navbar/navbar";
import { Footer } from "./component/footer";
import { SearchResults } from "./component/navbar/searchResult";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ShopAll />} path="/shopall" />
                        <Route element={<Jewelery />} path="/jewelery" />
                        <Route element={<MenClothes />} path="/menclothes" />
                        <Route element={<WomanClothes />} path="/womanclothes" />
                        <Route element={<Electronics />} path="/electronics" />
                        <Route element={<ProductDetail />} path="/detail/:id" />
                        <Route element={<Favorites/>} path="/favorites"/>
                        <Route element={<SearchResults/>} path="/search"/>
                        <Route element={<Perfil/>} path="/profile"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
