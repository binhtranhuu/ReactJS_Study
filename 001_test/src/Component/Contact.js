import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
        }
    }
    onChange = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }

    isChangeFile = (event) => {
        const anh = event.target.files[0].name;
        this.setState({
            fAnh: anh
        });
    }

    isChange = (event) => {
        let ten = event.target.name;
        let giatri = event.target.value;
        this.setState({
            [ten]: giatri
        });
    }

    getGiaTri = () => {
        let noiDung = "";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += "/ Email nhan duoc la: " + this.state.fEmail;
        noiDung += "/ Phone nhan duoc la: " + this.state.fPhone;
        noiDung += "/ Message nhan duoc la: " + this.state.fMess;
        noiDung += "/ Ảnh nhan duoc la: " + this.state.fAnh;
        return noiDung;
    }
    render() {
        if(this.state.isRedirect){
            console.log(this.getGiaTri());
            return <Redirect to="/" />
        }
        return (
            <div>
                <header className="masthead custom-masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Contact of my blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Begin contact */}
                <div className="container my-4">
                    <h1 className="text-center">Contact me</h1>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input name="fName" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input name="fEmail" onChange={(event) => this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input name="fPhone" onChange={(event) => this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea name="fMess" onChange={(event) => this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chọn ảnh</label>
                                        <input onChange={(event) => this.isChangeFile(event)} type="file" className="form-control-file" name="fAnh" id="" placeholder="" aria-describedby="fileHelpId" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group"><button onClick={(event) => this.onChange(event)} className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;