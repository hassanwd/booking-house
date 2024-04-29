import React from "react"
import img from '../assets/hot.jpg'
import img1 from "../assets/icon_1.png"
import img2 from "../assets/icon_2.png"
import img3 from "../assets/icon_3.png"
import img4 from "../assets/icon_4.png"
import img5 from "../assets/icon_5.png"
import pics from "../assets/agent_1.jpg"
const Villa=()=>{
    return(
        <div className="villa">
            <p>THE BEST DEALS</p>
            <h1>Today's Hot Deal</h1>
            <div className="villas">
            <img className="imgs" src={img} alt=""/>
            <div className="v-text">
            <button className="greens">HOUSE </button>
        <button className="blues">FOR SALE</button>
        <button className="pinks">$ 562 346</button>
        <div className="upperss">
        <h2>Villa for sale</h2>
        <div className="p">
            <img src={img1} alt=""/>
            <span>280 Doe Meadow Drive Landover, MD 20785</span>
        </div>
        <p>Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</p>
        <div className="pp">
            <img src={pics} alt=""/>
            <p>Maria Smith, Agent</p>
        </div>
        </div>
        <div className="lowerss">
        <img src={img2} alt=""/>
           <p>1234 sq ft</p>
            <img src={img3} alt=""/>
            <p>2</p>
            <img src={img4} alt=""/>
            <p>5</p>
            <img src={img5} alt=""/>
           <p>2</p>
        </div>
            </div>
            </div>
         </div>
      )
}
export default Villa;


