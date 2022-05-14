import { Component } from "react";
import "./Content.scss";

export class Content extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="content-category">{this.props.category_name}</h2>
        <ul className="content-wrap">
          {this.props.products.length > 0 &&
            this.props.products
              .filter((product) => product.inStock === true)
              .map((a) => (
                <li key={a.name} className="content-card">
                  <div className="content-card_container">
                    <img
                      className="content-card_image"
                      alt={a.name}
                      src={a.gallery[0]}
                    ></img>
                    <p className="content-card_name">{a.name}</p>
                    <span className="content-card_price">
                      {a.prices[0].currency.symbol}
                      {a.prices[0].amount}
                    </span>
                  </div>
                </li>
              ))}
          {this.props.products.length > 0 &&
            this.props.products
              .filter((product) => product.inStock === false)
              .map((a) => (
                <li key={a.name} className="content-card">
                  <div className="content-card_container">
                    <img
                      className="content-card_image outOfStock"
                      alt={a.name}
                      src={a.gallery[0]}
                    ></img>
                    <div className="content-card_image_text">out sf stock</div>
                    <p className="content-card_name">{a.name}</p>
                    <span className="content-card_price">
                      {a.prices[0].currency.symbol}
                      {a.prices[0].amount}
                    </span>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}
