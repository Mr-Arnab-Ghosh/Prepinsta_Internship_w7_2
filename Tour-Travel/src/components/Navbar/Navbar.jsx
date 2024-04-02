import { Component } from "react";
import "./Navbar.css";   // importing the CSS file
import { MenuItems } from "./MenuItems";  // importing MenuItems variable from MenuItems file
import { Link } from "react-router-dom";

class Navbar extends Component {

    state = { clicked : false };     // initializing a boolean value 'clicked' as false in the component's state that means at first "this.state.clicked" will return false meaning we will see three line icon("fas-fa-bars")
    
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked });  // changing the boolean value 'clicked' to true    // After first click we will set the "clicked" value true and then we will see close icon("fas-fa-times")
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ZTravel</h1>
                <div className="menuSection-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>   {/* Here "fas-fa-times" is for close icon and "fas-fa-bars" is for three line icon */}
                </div>
                <ul className={this.state.clicked? "nav-menu active":"nav-menu"} >
                    {MenuItems.map((menu, index) =>{
                        return (
                            <li key={index}>
                                <Link to={menu.url} className={menu.cName}><i className={menu.icon}></i>{menu.title}</Link>   {/* icon from "https://fontawesome.com" */}
                            </li>
                        )
                    })}
                    <button className="signup_btn">Signup</button>
                </ul>
            </nav>
        )        
    }
}

export default Navbar;  // exporting the class as a module