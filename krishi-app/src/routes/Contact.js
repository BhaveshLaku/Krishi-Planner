import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/contact.jpg";
import Footer from "../components/Footer";


function Contact(){
    return(
        <>
         <Navbar/>
        <Hero  cName="hero-mid" heroImg={AboutImg}  title="Contact Us" btnClass="hide"
        />
        <Footer/>
        </>
    )
    }
    export default Contact