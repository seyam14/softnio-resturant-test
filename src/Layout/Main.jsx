import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div>
          <div className='max-w-6xl mx-auto'>
          <Header></Header>
          </div>  
          <Outlet/>  
          <Footer></Footer>
        </div>
    );
};

export default Main;