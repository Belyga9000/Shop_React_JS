import { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <>
        <h2>{this.props.category_name}</h2>
        <ul>
          {this.props.products.length > 0 &&
            this.props.products.map((a) => (
              <li key={a.name}>
                <img alt={a.name} src={a.gallery[0]}></img>
                <p>{a.name}</p>
                <span>
                  {a.prices[0].currency.symbol}
                  {a.prices[0].amount}
                </span>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
