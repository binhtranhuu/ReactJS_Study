import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: "",
        }
    }

    isShowButton = () => {
        if (this.props.displayFormAddUser === true) {
            return <button onClick={() => this.props.changeDisplayFormAddUser()} className="btn btn-outline-secondary">Đóng</button>
        } else {
            return <button onClick={() => this.props.changeDisplayFormAddUser()} className="btn btn-outline-success">Thêm mới</button>
        }
    }

    isChange = (event) => {
        const value = event.target.value;
        this.setState({
            textSearch: value
        });
        this.props.getDataSearch(this.state.textSearch)
    }

    getEditUserData = (data) => {
        this.props.saveEditUserData(data);
    }

    checkDisplayFormEditUser = () => {
        if(this.props.displayFormEditUser === true){
            return <EditUser 
                    statusDisplayFormEditUser={() => this.props.statusDisplayFormEditUser()}
                    editUserData={() => this.props.editUserData()}
                    getEditUserData = {(data) => this.getEditUserData(data)}
                    />
        }
    }
    render() {
        return (
            <div>
                <div className="row my-3">
                    {
                        this.checkDisplayFormEditUser()
                    }
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                            <div className="input-group-append">
                                <button onClick={(data) => this.props.getDataSearch(this.state.textSearch)} type="button" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {
                            this.isShowButton()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;