import React from "react"
const Nav=()=>{
      return(
        <div className="nav">
            <div className="upper">
<div className="left">
<p><ICON i="fas fa-phone"/> &nbsp;<P p="+546 990221 123"/></p>
<p><ICON i="fas fa-map-marker-alt"/> &nbsp;<P p="Main Str, no 23, New York"/></p>
<p><ICON i="fas fa-envelope-square"/> &nbsp;<P p="hosting@contact.com"/></p>
</div>
<div className="right">
<ICON i="fab fa-pinterest"/>
<ICON i="fab fa-facebook-f"/>
<ICON i="fab fa-twitter"/>
<ICON i="fas fa-futbol"/>
<ICON i="fas fa-link"/>
<BTN btn="LOGIN / REGISTER"/>
</div>
            </div>
            <div className="lower">
                <div className="left">
               <h1>myHOME</h1>
                <ul>
<LI li="Home"/>
<LI li="About us"/>
<LI li="Listing"/>
<LI li="News"/>
<LI li="Contact"/>
                </ul>
                </div>
                <BTN btn="SUBMIT LISTING"/>

            </div>
        </div>
      )
    }
    
    
    export default Nav;



    const ICON=(props)=>{
return(
    <i class={props.i}></i>
)
    }

    const P=(props)=>{
 return(
            <p>{props.p}</p>
        )
    }

    const BTN=(props)=>{
return(
        <button>{props.btn}</button>
        )
    }

    const IMG=(props)=>{
return(
    <img src={props.src} alt=""/>
)
    }
    const LI=(props)=>{
        return(
        <li>{props.li}</li>
        )
    }