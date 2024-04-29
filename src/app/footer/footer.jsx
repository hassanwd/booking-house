import React from "react"
const Footer=()=>{
      return(
          <div className="footer">
              <div className="column">
              <H h="myHOME"/>
              <p>Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</p>
              <div className="right">
<ICON i="fab fa-pinterest"/>
<ICON i="fab fa-facebook-f"/>
<ICON i="fab fa-twitter"/>
<ICON i="fas fa-futbol"/>
<ICON i="fas fa-link"/>
</div>
              </div>
              <div className="column">
              <H h="Information"/>
              <div className="left">
<p><ICON i="fas fa-phone"/> &nbsp;<P p="+546 990221 123"/></p>
<p><ICON i="fas fa-map-marker-alt"/> &nbsp;<P p="Main Str, no 23, New York"/></p>
<p><ICON i="fas fa-envelope-square"/> &nbsp;<P p="hosting@contact.com"/></p>
<BTN btn="SUBMIT LISTING"/>
</div>
              </div>
              <div className="column">
              <H h="Properties Types"/>
              <p>
              Properties for rent<br/>
Properties for sale<br/>
Commercial<br/>
Homes<br/>
Villas<br/>
Office<br/>
Residential<br/>
Appartments
              </p>
              </div>
              <div className="column">
              <H h="Usefull Links"/>
              <p>
              Testimonials<br/>
Listings<br/>
Featured Properties<br/>
Contact Agents<br/>
About us
              </p>
              </div>
              <div className="copy">
                  <p>Copyright ©2020 All rights reserved | This template is made with by <span>Colorlib</span></p>
                  <ul>
<LI li="Home"/>
<LI li="About us"/>
<LI li="Listing"/>
<LI li="News"/>
<LI li="Contact"/>
                </ul>
              </div>
          </div>
      )
    }
    export default Footer;

    const H=(props)=>{
        return(
        <h2>{props.h}</h2>
        )
    }

    
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
                        
                        const LI=(props)=>{
                            return(
                            <li>{props.li}</li>
                            )
                        }