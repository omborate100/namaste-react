import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpg";
import resLogo from "./images/res-logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-comp">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) =>{
	console.log(props); // props is an object
	return (
		<div className="res-card">
			<img className= "res-logo" src={resLogo} alt="res-logo" />
			<h3>{props.resName}</h3>
			<h4>{props.cuisine}</h4>
			<h4>4.4 ⭐</h4>
			<h4>38 minutes</h4>
		</div>
	)
}
const Body = ()=>{
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<ResCard resName="Meghana Foods" cuisine="Biryani, South Indian, Seafoods"/>
				<ResCard resName="KFC" cuisine="Burger, Fast Foods"/>
			</div>
			
		</div>
	)
}

const AppLayout = () => {
  return (
    <div className="main-component">
      <Header />
	  <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
