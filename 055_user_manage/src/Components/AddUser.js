import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ""
        }
    }
    

    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]: giatri
        });
    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <h3 className="mb-3">Thêm mới nhân sự</h3>
                    <form className="mt-2">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ tên</label>
                            <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" aria-describedby="emailHelp" placeholder="Trần Văn A" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input onChange={(event) => this.isChange(event)} type="text" name="phone" className="form-control" placeholder="0967699314" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Quyền</label>
                            <select onChange={(event) => this.isChange(event)} name="permission" className="form-control">
                                <option value>Chọn quyền mặc định</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Normal</option>
                            </select>
                        </div>
                        <button onClick={(name, phone, permission) => this.props.Add(this.state.name, this.state.phone, this.state.permission)} type="reset" className="btn btn-success btn-block">Thêm mới</button>
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