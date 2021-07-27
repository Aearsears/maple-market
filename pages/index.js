import React from "react"
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Datagrid from "../components/datagrid"
import pic from '../public/butterfly.png'


class Welcome extends React.Component {
    render(props) {
        const item ={
            src:pic,
            alt:'temp'
        }
        return (
            <div>
                <Header />
                <Navbar />
                <h1 className="text-center"> Title </h1>
                <Datagrid data={item}/>
                <Footer />
            </div>
        );
    }
}


export default Welcome;