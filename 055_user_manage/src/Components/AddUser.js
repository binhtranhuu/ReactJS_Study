import React, { Component } from 'react';

class AddUser extends Component {
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <h3 className="mb-3">Thêm mới nhân sự</h3>
                    <form className="mt-2">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ tên</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Trần Văn A" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="0967699314" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Quyền</label>
                            <select className="form-control" id="exampleFormControlSelect2">
                                <option value>Chọn quyền mặc định</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Normal</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Thêm mới</button>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }
            </div>
        );
    }
}

export default AddUser;