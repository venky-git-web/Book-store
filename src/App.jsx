import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Books from "./components/BookSlider/Books";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import Popup from "./components/Popup/Popup.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }
  
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration : 800,
      easing:"ease-in-sine",
      delay : 100,
    });
   AOS.refresh();
  },[]);

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <BestBooks handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <AppStoreBanner/>
        <Books />
        <Testimonial/>
        <Footer/>
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
      </div>
    </>
  );
};

export default App;
