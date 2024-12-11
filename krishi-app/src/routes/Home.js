import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Homeinfo from "../components/homeinfo";
import Dist from "../components/Distinctive"
import Footer from "../components/Footer"
function Home(){
    return(
        
    <>
    <Navbar/>
    <Hero  
     cName="hero"
     heroImg="https://images.unsplash.com/photo-1483871788521-4f224a86e166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHR1cmUlMjAxNTAwKjgwfGVufDB8fDB8fHww"
     title=" Cultivating Success Through Innovation and Knowledge."
     text="Explore a Bounty of Agricultural Services for Your Farming Journey."
     buttonText="Explore Services"
     url="/"
     btnClass="show"
    />
    <Homeinfo/>
    <Dist/>
    <Footer/>
    </>
)
}
export default Home;