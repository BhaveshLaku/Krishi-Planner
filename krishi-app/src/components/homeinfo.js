import Forcast1 from "../Assets/forcast1.jpg"
import Forcast2 from "../Assets/forcast2.jpg"
import Chatbot1 from "../Assets/chatbot1.jpg"
import Chatbot2 from "../Assets/chatbot2.jpg"
import "./homeinfocss.css"
import HomeinfoData from "./homeinfoData"


const homeinfo = () =>{
    return(
        <div className="destination">
            <h1>Exclusive Features.</h1>
            <p>Cultivate success with our website's seamless blend of intelligent support, precise weather forecasts, and expert advice tailored for thriving in agriculture</p>
        
        <HomeinfoData 
        className="first-des"
        heading="Weather Forecasts" 
        text="Our website's weather forecasting feature is a crucial tool designed to empower farmers in making informed decisions for their agricultural endeavors. With real-time and accurate weather updates, users can stay ahead of changing conditions, allowing for strategic planning in planting, harvesting, and pest control. Whether it's anticipating rainfall, temperature fluctuations, or extreme weather events, our forecasting service provides invaluable insights to optimize crop management. By harnessing the power of meteorological data, farmers can enhance crop yields, minimize risks, and cultivate success in their agricultural pursuits."
        img1={Forcast1}
        img2={Forcast2}/>

        <HomeinfoData
        className="first-des-reverse"
        heading="Chatbot Assistance" 
        text="Elevate your farming experience with our intuitive chatbot function, an indispensable companion on your agricultural journey. Seamlessly integrated into our website, the chatbot serves as a virtual assistant, providing instant and personalized support to farmers. Whether you have queries about crop management, pest control, or need real-time advice, our chatbot is here to assist 24/7. With its robust knowledge base and adaptive learning capabilities, the chatbot not only streamlines communication but also empowers farmers with valuable insights and recommendations. Embrace the future of agriculture with a virtual ally that enhances efficiency and fosters success in every aspect of your farming endeavors."
        img1={Chatbot1}
        img2={Chatbot2}/>


        </div>



    )
}
 export default homeinfo