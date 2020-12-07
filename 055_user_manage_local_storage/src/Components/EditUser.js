import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.sendEditUserData.id,
            name: this.props.sendEditUserData.name,
            phone: this.props.sendEditUserData.phone,
            permission: this.props.sendEditUserData.permission,
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveEditUserData = () => {
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
        this.props.changeShowFormEditUser();
        this.props.getInfoEditUserData(item);
    }
    render() {
        return (
            <div className="col">
                <h3 className="mb-3">Sửa thông tin nhân sự</h3>
                <form className="mt-2">
                    <div className="form-group">
                        <label>Họ tên</label>
                        <input onChange={(event) => this.isChange(event)} defaultValue={this.props.sendEditUserData.name} type="text" name="name" className="form-control" placeholder="Trần Văn A" />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input onChange={(event) => this.isChange(event)} defaultValue={this.props.sendEditUserData.phone} type="text" name="phone" className="form-control" placeholder="0967699314" />
                    </div>
                    <div className="form-group">
                        <label>Quyền</label>
                        <select onChange={(event) => this.isChange(event)} defaultValue={this.props.sendEditUserData.permission} name="permission" className="form-control">
                            <option value>Chọn quyền mặc định</option>
                            <option value="1">Admin</option>
                            <option value="2">Modrator</option>
                            <option value="3">Normal</option>
                        </select>
                    </div>
                    <button onClick={() => this.saveEditUserData()} type="button" className="btn btn-success btn-block">Cập nhật</button>
                </form>
            </div>
        );
    }
}

export default EditUser;