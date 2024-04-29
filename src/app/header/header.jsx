import React from "react"
const Header=()=>{
      return(
          <div className="header">
              <div className="text">
                  <h2>1234 Main Avenue<br/>Left Town</h2>
                  <h3>$ 482 900</h3>
              </div>
              <h1>Find your home</h1>
               <form>
                   <INP p="Property type"/>
                   <INP p="No rooms"/>
                   <INP p="Location"/>
                   <BTN btn="SUBMIT LISTING"/>
               </form>
          </div>
      )
}
export default Header;

const BTN=(props)=>{
    return(
            <button>{props.btn}</button>
            )
        }
    
        const INP=(props)=>{
    return(
       <input type="text" placeholder={props.p}/>
    )
        }