import { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <>
        <div>{this.props.category_name}</div>
        {this.props.products.map((a) => (
          <div>{a.name}</div>
        ))}
        <div onClick={this.props.handleclickdouble}>1</div>
      </>
    );
  }
}
