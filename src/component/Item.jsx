import React from "react";
class Item extends React.Component {
  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>
          Nhiệm vụ hôm nay phải hoàn thành ngày, hãy chọn nhiệm vụ.
          Hoàn thành ngay !!!
        </td>
        <td className="text-center">
          <span className="label label-default">Small</span>
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
