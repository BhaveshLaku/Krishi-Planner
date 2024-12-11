import "./Distinctive.css"
import DistData  from "./DistinctiveData";
import Smallchatbot from "../Assets/smallchatbot.jpg"
import Smallweather from "../Assets/smallweather.jpg"
import benifit from "../Assets/benifit.jpg"

function Dist(){
    return(
        <div className="dist">
            <h1>Distinctives</h1>
            <p>Following are the distinctives Achieved.</p>
            <div className="tripcard">
                <DistData
                image={Smallchatbot}
                heading="Transforming Farming Efficiency"
                text="Revolutionize your farming approach with our chatbot's distinctive prowess, offering swift assistance and tailored insights. Seamlessly integrated into our platform, it becomes your unique ally, streamlining communication and enhancing efficiency for unparalleled agricultural success. Accessible 24/7, our chatbot ensures that assistance is just a click away, providing immediate solutions and empowering you to make informed decisions at any time. Embrace a new era in farming where technology meets personalized support, revolutionizing the way you cultivate success."
                />

                <DistData
                image={Smallweather}
                heading="Elevating Farming Precision"
                text="Transform your farming strategy with our weather forecasting, a distinctive tool delivering real-time insights. Seamlessly integrated, it becomes your unique ally, providing invaluable information for strategic planning, crop management, and minimizing risks in agriculture. Stay ahead of changing conditions with timely notifications, allowing you to adapt to weather fluctuations effectively. Whether it's preparing for unexpected rainfall or optimizing irrigation during dry spells, our weather forecasting feature ensures that you have the foresight needed for successful farming and success is cultivated through informed decision-making."
                />

                <DistData
                image={benifit}
                heading="Pioneering Innovation in Farming"
                text="Embark on a revolutionary farming experience with our distinctive use of technology. Our platform seamlessly integrates cutting-edge innovations to enhance every facet of agriculture. From intelligent chatbots providing real-time assistance to precision weather forecasting, technology becomes a unique ally in optimizing crop management and decision-making. Embrace a future where the fusion of agriculture and technology transforms traditional practices into efficient, sustainable, and successful farming endeavors."
                />


                </div>
        </div>
    )
}

export default Dist;