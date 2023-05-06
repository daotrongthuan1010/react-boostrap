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
      isSearch: "",
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

  handlerSearch(value) {
    this.setState({
      isSearch: value,
    });
  }

  render() {
    let items = this.state.items;

    let pushItem = [];

    let showFormAdd = this.state.isShowForm;

    let search = this.state.isSearch;

    console.log(search);
    let elementShowForm = null;
    if (search.length > 0) {
      items.forEach((item) => {
        if (item.name.indexOf(search) !== -1) {
          pushItem.push(item);
        }
      });
    } else {
      pushItem = items;
    }
    if (showFormAdd) {
      elementShowForm = <Form onClickCancel={this.handlerCancel} />;
    }
    console.log(pushItem);

    return (
      <div className="container">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control
          onClickSearch={this.handlerSearch}
          onClickAdd={this.handler}
          showFormAdd={showFormAdd}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/*----form task----*/}
        {elementShowForm}
        {/*----form task----*/}
        {/*----list task----*/}
        <List items={pushItem} />
        {/*----list task----*/}
      </div>
    );
  }
}

export default App;
