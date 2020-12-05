import React, { Component } from 'react';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject().id,
            name: this.props.userEditObject().name,
            phone: this.props.userEditObject().phone,
            permission: this.props.userEditObject().permission
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveInfo = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col">
                    <h3 className="mb-3">Sửa thông tin nhân sự</h3>
                    <form className="mt-2">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ tên</label>
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject().name} type="text" name="name" className="form-control" aria-describedby="emailHelp" placeholder="Trần Văn A" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject().phone} type="text" name="phone" className="form-control" placeholder="0967699314" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Quyền</label>
                            <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject().permission} name="permission" className="form-control">
                                <option value>Chọn quyền mặc định</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Normal</option>
                            </select>
                        </div>
                        <button onClick={() => this.saveInfo()} type="reset" className="btn btn-success mr-2">Cập nhật</button>
                        <button type="reset" className="btn btn-danger">Reset</button>
                    </form>
                </div>
        );
    }
}

export default EditUserForm;