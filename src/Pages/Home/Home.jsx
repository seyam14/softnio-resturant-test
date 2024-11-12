import About from "../../components/About/About";
import BookingForm from "../../components/BookingForm/BookingForm";
import FoodItems from "../../components/FoodItems/FoodItems";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
           <FoodItems></FoodItems>
           <BookingForm></BookingForm>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;