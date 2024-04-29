import React, {Component} from 'react';
import Nav from "./nav/nav"
import Header from "./header/header"
import Feature from './feature/feature'
import Map from "./map/map"
import Villa from "./villa/villa"
import Footer from './footer/footer';
class App extends Component{
render(){
  return(
    <div className="container">
        <Nav/>
        <Header/>
        <Feature/>
        <Map/>
        <Villa/>
        <Footer/>
    </div>
  )
}
}

export default App;
