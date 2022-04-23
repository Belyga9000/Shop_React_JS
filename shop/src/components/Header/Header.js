import React, { Component } from "react";
import "../../scss/_variables.scss";
import "../../scss/_general.scss";
import "./Header.scss";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../img/Logo.svg";
import cart from "../../img/Cart.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: this.props.productType,
    };
  }
  handleCategoryChange = (e) => {
    this.setState({ category_name: e.target.text });
  };

  render() {
    return (
      <>
        <header className="container">
          <ul className="header-navlist">
            {this.props.categories?.map((category) => (
              <li className="header-navlist_item" key={category.name}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={`products/${category.name}`}
                  onClick={this.handleCategoryChange}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <img src={logo} alt="logo icon"></img>
          <div>
            <select name="currencies">
              {this.props.currencies?.map((currency) => (
                <option key={currency.label} name={currency.label}>
                  {currency.symbol} {currency.label}
                </option>
              ))}
            </select>
            <img src={cart} alt="cart icon"></img>
            <div>
              <h3>My Bag, 2 items</h3>
              <div></div>
              <h3>asd</h3>
              <NavLink to={`cart`}>
                <button>view bag</button>
              </NavLink>
              <button>check out</button>
            </div>
          </div>
        </header>
        <Outlet context={this.state?.category_name} />
      </>
    );
  }
}
