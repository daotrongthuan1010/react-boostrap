import React from "react";
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item, index} = this.props.items;
    return (
      
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span className="label label-default">{item.level} </span>
        </td>
        <td>
          <button type="button" className="btn btn-warning">
            Sửa
          </button>
          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
