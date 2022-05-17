import React, { Component } from "react";
import "./Header.scss";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../img/Logo.svg";
import cart from "../../img/Cart.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header-wrap container">
          <ul className="header-navlist">
            {this.props.categories?.map((category) => (
              <li className="header-navlist_item" key={category.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header-navlist_item_text active"
                      : "header-navlist_item_text"
                  }
                  to={`products/${category.name}`}
                  onClick={this.props.handleCategoryChange}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <img src={logo} alt="logo icon"></img>
          <div className="sideMenu">
            <div
              className="sideMenu-currencies_dropdown"
              name="currencies"
              ref={this.props.currenciesDropdown}
              onClick={this.props.handleCurrencyDropdown}
            >
              {this.props.currentCurrency.symbol}
              <div
                className={
                  this.props.isOpen
                    ? "sideMenu-currencies_dropdown_wrap"
                    : "visually-hidden"
                }
              >
                {this.props.currencies?.map((currency) => (
                  <p
                    className="sideMenu-currencies_dropdown_option"
                    key={currency.label}
                    name={currency.label}
                  >
                    {currency.symbol} {currency.label}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={cart}
              alt="cart icon"
              className="sideMenu-cart_icon"
            ></img>
            <div className="sideMenu-cart_container visually-hidden">
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
        <Outlet />
      </>
    );
  }
}
