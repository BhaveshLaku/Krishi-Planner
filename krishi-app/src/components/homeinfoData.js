import Forcast1 from "../Assets/forcast1.jpg"
import Forcast2 from "../Assets/forcast2.jpg"
import Chatbot1 from "../Assets/chatbot1.jpg"
import Chatbot2 from "../Assets/chatbot2.jpg"
import { Component } from "react";
import "./homeinfocss.css"

class homeinfoData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>

            </div>
        <div className="image">
          <img alt="img" src={this.props.img1}/>
          <img alt="img" src={this.props.img2}/>   
        </div>    
        </div>
        )
    }
}

export default homeinfoData