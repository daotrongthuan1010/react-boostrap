import React, { Component } from "react";
import Header from "./component/Header";
import Control from "./component/Control";
import { Form } from "react-bootstrap";
import List from "./component/List";

class App extends Component {

   constructor (props) {
    super(props);
    this.state ={
        items: [
            {
                name: "Học Toán",
                level: 0
            },
            {
                name: "Học Văn",
                level: 1
            },
            {
                name: "Học Lý",
                level: 2
            },
        ]
    }
   }

  render() {
    let items = this.state.items;
    return (
      <div className="container">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/*----form task----*/}
        <Form />
        {/*----form task----*/}
        {/*----list task----*/}
        <List items = {items}/>
        {/*----list task----*/}
      </div>
    );
  }
}

export default App;
