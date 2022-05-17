import { Component } from "react";
import green_cart from "../../img/Green_cart.png";
import "./Content.scss";

export class Content extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="content-category">{this.props.category_name}</h2>
        <ul className="content-wrap">
          {this.props.products.length > 0 &&
            this.props.products.map((a) => (
              <li key={a.name} className="content-card">
                <div className="content-card_container">
                  <img
                    className={
                      a.inStock
                        ? "content-card_image"
                        : "content-card_image outOfStock"
                    }
                    alt={a.name}
                    src={a.gallery[0]}
                  ></img>
                  {a.inStock ? (
                    ""
                  ) : (
                    <div className="content-card_outOfStock_text">
                      out sf stock
                    </div>
                  )}
                  {a.inStock ? (
                    <img
                      src={green_cart}
                      alt="add to cart"
                      className="content-card_cart"
                    ></img>
                  ) : (
                    ""
                  )}
                  <div className="content-card_infoArea">
                    <p
                      className={
                        a.inStock
                          ? "content-card_name"
                          : "content-card_name grayText"
                      }
                    >
                      {a.name}
                    </p>
                    <span
                      className={
                        a.inStock
                          ? "content-card_price"
                          : "content-card_price grayText"
                      }
                    >
                      {a.prices[0].currency.symbol}
                      {a.prices[0].amount}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
