import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import HomeComponent from './HomePage';
import ListComponent from './ListPage';
import AhujaComponent from './ListBrands/AhujaBrand';
import JblComponent from './ListBrands/JblBrand';
import PAudioComponent from './ListBrands/PAudioBrand';
import TechnoComponent from './ListBrands/TechnoBrand';
import BlogComponent from './BlogPage/BlogPage';
import Blog1 from './BlogPage/Blog1';
import Blog2 from './BlogPage/Blog2';

function RoutingFile(){
        return (
            <div>
                <br />
                <br />
                <br />
                &emsp;
                <Link to="/homepage"><b>Home</b></Link>&emsp;
                <Link to="/brandlistPage"><b>List Brand</b></Link>&emsp;
                <Link to="blog"><b>Blogs</b></Link>
                <Routes>
                    <Route path="/homepage" element={<HomeComponent />} />
                    <Route path="/brandlistPage/" element={<ListComponent />}>
                        <Route path="ahujabrand" element={<AhujaComponent />} />
                        <Route path="jblbrand" element={<JblComponent />} />
                        <Route path="technobrand" element={<TechnoComponent />} />
                        <Route path="paudiobrand" element={<PAudioComponent />} />
                    </Route>
                    <Route path="blog/" element={<BlogComponent />}>
                        <Route path="mid-range/:id" element={<Blog1 />} />
                        <Route path="lower-range/:id" element={<Blog2 />} />
                    </Route>
                </Routes>
            </div>
        )
}
export default RoutingFile;