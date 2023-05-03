import React, { Component } from "react";
import Header from "./component/Header";
import Control from "./component/Control";
import Form  from "./component/Form";
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
        ],
        showForm: false 
        

    }

    this.handler = this.handler.bind(this);
   }

   handler(){
    this.setState({
      isShowForm : !this.state.isShowForm
    });
   }

  render() {
    let items = this.state.items;

    let showFormAdd = this.state.isShowForm;

    let elementShowForm = '';
    if(showFormAdd){
      elementShowForm =  <Form />
    }
    return (
      <div className="container">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control onClickAdd={this.handler}/>
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/*----form task----*/}
        {elementShowForm}
        {/*----form task----*/}
        {/*----list task----*/}
        <List items = {items}/>
        {/*----list task----*/}
      </div>
    );
  }
}

export default App;
