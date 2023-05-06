import React from "react";

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        strSearch : ''
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSearch = this.handlerSearch.bind(this);
    this.handlerClear = this.handlerClear.bind(this);
  }
  handlerSearch(){
      this.props.onClickSearch(this.state.strSearch);
    
  }
  handlerChange(event){
    this.setState({
      strSearch: event.target.value
    })
    
  }
  handlerClear(){
    this.setState(
      {
        strSearch : ''
      }
    );
    this.props.onClickSearch('');
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            value={this.state.strSearch}
            onChange = {this.handlerChange}
            type="text"
            className="form-control"
            placeholder="Nhập tìm kiếm..."
          />
          <span className="input-group-btn">
            <button onClick = {this.handlerSearch} className="btn btn-info" type="button">
             Tìm kiếm
            </button>
            <button onClick = {this.handlerClear} className="btn btn-info" type="button">
             Xóa
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
