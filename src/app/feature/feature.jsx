import img1 from "../assets/icon_1.png"
import img2 from "../assets/icon_2.png"
import img3 from "../assets/icon_3.png"
import img4 from "../assets/icon_4.png"
import img5 from "../assets/icon_5.png"
import pic1 from "../assets/listing_1.jpg"
import pic2 from "../assets/listing_2.jpg"
import pic3 from "../assets/listing_3.jpg"
import React from "react"
const Feature=()=>{
      return(
          <div className="feature">
<p>THE BEST DEAL</p>
<h1>Featured Properties</h1>
<div className="divs">
<DIV price="$ 217 346" p="2500 sq ft" pic={pic1} span="280 Doe Meadow Drive Landover, MD 20785"/>
<DIV price="$ 515 957" p="1234 sq ft" pic={pic2} span="4812 Haul Road Saint Paul, MN 55102"/>
<DIV price="$ 375 255" p="2000 sq ft" pic={pic3} span="4067 Wolf Pen Road Mountain View, CA 94041"/>
</div>
          </div>
      )
}
export default Feature;

const DIV=(props)=>{
return(
    <div className="div">
        <button className="green">HOUSE </button>
        <button className="blue">FOR SALE</button>
        <button className="pink">{props.price}</button>
        <img className="img" src={props.pic} alt=""/>
        <div className="uppers">
        <img src={img1} alt=""/>
        <span>{props.span}</span>
        </div>
        <div className="lowers">
            <img src={img2} alt=""/>
           <p>{props.p}</p>
            <img src={img3} alt=""/>
            <p>2</p>
            <img src={img4} alt=""/>
            <p>5</p>
            <img src={img5} alt=""/>
            <p>2</p>
        </div>

    </div>
)
}