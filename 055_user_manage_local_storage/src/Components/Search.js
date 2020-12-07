import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ""
        }
    }

    showFormAddUser = () => {
        if (this.props.showFormAddUser === false) {
            return <button onClick={() => this.props.changeShowFormAddUser()} className="btn btn-outline-success">Thêm mới</button>
        } else {
            return <button onClick={() => this.props.changeShowFormAddUser()} className="btn btn-outline-secondary">Đóng</button>
        }
    }

    isChange = (event) => {
        this.setState({
            textSearch: event.target.value
        });
        this.props.getTextSeach(this.state.textSearch);
    }

    getInfoEditUserData = (item) => {
        this.props.getInfoEditUserData(item)
    }

    showFormEditUser = () => {
        if (this.props.showFormEditUser === true) {
            return <EditUser
                    changeShowFormEditUser={() => this.props.changeShowFormEditUser()}
                    sendEditUserData={this.props.sendEditUserData}
                    getInfoEditUserData={(item) => this.getInfoEditUserData(item)}
                    />
        }
    }

    render() {
        return (
            <div>
                <div className="row my-3">
                    {
                        this.showFormEditUser()
                    }
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                            <div className="input-group-append">
                                <button onClick={(info) => this.props.getTextSeach(this.state.textSearch)} type="submit" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {
                            this.showFormAddUser()
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;