import React, { Component } from "react";
import Header from "./component/Header";
import Control from "./component/Control";
import Form from "./component/Form";
import List from "./component/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Học Toán",
          level: 0,
        },
        {
          name: "Học Văn",
          level: 1,
        },
        {
          name: "Học Lý",
          level: 2,
        },
      ],
      showForm: false,
      isSearch: ''
    };

    this.handler = this.handler.bind(this);
    this.handlerCancel = this.handlerCancel.bind(this);
    this.handlerSearch = this.handlerSearch.bind(this);
  }

  handler() {
    this.setState({
      isShowForm: !this.state.isShowForm,
    });
  }

  handlerCancel() {
    this.setState({
      isShowForm: false,
    });
  }

  handlerSearch(value){
    this.setState({
      isSearch: value
    });
  }

  render() {

    console.log(this.state.isSearch);
    let items = this.state.items;

    let showFormAdd = this.state.isShowForm;

    let elementShowForm = null;

    if (showFormAdd) {
      elementShowForm = <Form onClickCancel={this.handlerCancel} />;
    }
    return (
      <div className="container">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
        onClickSearch={this.handlerSearch}
        onClickAdd={this.handler} 
        showFormAdd={showFormAdd} />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/*----form task----*/}
        {elementShowForm}
        {/*----form task----*/}
        {/*----list task----*/}
        <List items={items} />
        {/*----list task----*/}
      </div>
    );
  }
}

export default App;
