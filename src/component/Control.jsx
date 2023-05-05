import React from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.props.onClickAdd();
  }

  

  render() {
    let buttonAdd = (
      <button
        type="button"
        onClick={this.handler}
        className="btn btn-info btn-block"
      >
        Thêm Nhiệm Vụ
      </button>
    );
    if (this.props.showFormAdd) {
      buttonAdd = (
        <button
          type="button"
          onClick={this.handler}
          className="btn btn-success btn-block"
        >
          Đóng Nhiệm Vụ
        </button>
      );
    }
    return (
      <div className="row">
        <Search />
        <Sort />
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{buttonAdd}</div>
      </div>
    );
  }
}

export default Control;
