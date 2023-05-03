import React from "react";

class Add extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      isShowButton : true
    };  
  }

  handlerButton(){
    this.setState = !true;
  }

  render() {
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" onClick={this.handlerButton} valueButton={this.state.} className="btn btn-info btn-block">
          Thêm Nhiệm Vụ
        </button>
      </div>
    );
  }
}

export default Add;