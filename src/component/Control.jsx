import React from "react";
import Search from "./Search";
import Sort from "./Sort";


class Control extends React.Component {

  constructor(props){
    super(props);

    this.handler = this.handler.bind(this);
   

   
  }

  handler(){
    this.props.onClickAdd();
  }


  render() {
    return (
      <div className="row">
        <Search />
        <Sort />
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button"  onClick={this.handler}  className="btn btn-info btn-block">
          Thêm Nhiệm Vụ
        </button>
      </div>
      </div>
    );
  }
}

export default Control;
