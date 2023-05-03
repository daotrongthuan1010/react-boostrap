import React from "react";
class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const index = this.props.index;
    return (
      <tr>
        <td className="text-center"> {index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.showLevel(item.level)}</td>
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
  showLevel(level) {
    let levelElement = "";
    if (level === 1) {
      levelElement = <span className="label label-info">Dễ</span>;
    }
    if (level === 0) {
      levelElement = <span className="label label-default">Khó</span>;
    } else {
      levelElement = <span className="label label-danger">Trung Bình</span>;
    }

    return levelElement;
  }
}

export default Item;
