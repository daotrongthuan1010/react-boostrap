import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handlerCancel = this.handlerCancel.bind(this);
  }

  handlerCancel() {
    this.props.onClickCancel();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form action method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only" htmlFor>
                label
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập nhiệm vụ..."
                ref="task_name"
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor>
                label
              </label>
              <select
                name="ds"
                id="inputDs"
                className="form-control"
                required="required"
                ref="task_level"
              >
                Dễ
                <option value={1}>Trung Bình</option>
                <option value={2}>Khó</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">
              Đồng ý
            </button>
            <button
              type="button"
              onClick={this.handlerCancel}
              className="btn btn-default"
            >
              Hủy Bỏ
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
