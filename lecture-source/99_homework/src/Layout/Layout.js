import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import {Outlet} from 'react-router-dom'

function Layout() {

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;