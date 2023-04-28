import React from "react";
import ListItem from "../mocks/tasks"
import Item from "./Item";

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
          items : ListItem
        };
    }    
  render() {

    let items = this.state.items;

    const element = items.map((item, index)=>{
        return (
            <Item key={index}  item = {item} index = {index} />
        );
    })
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
          
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {element}
          </tbody>
        </table>
      </div>
    );
  }
}
export default List;
