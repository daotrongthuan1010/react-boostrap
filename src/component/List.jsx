import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let items = this.props.items;

    const element = items.map((item, index) => {
      return <Item key={index} item={item} index={index} />;
    });
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Danh sách việc cần làm</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                STT
              </th>
              <th>Nhiệm vụ</th>
              <th style={{ width: "20%" }} className="text-center">
                Cấp độ
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{element}</tbody>
        </table>
      </div>
    );
  }
}
export default List;
