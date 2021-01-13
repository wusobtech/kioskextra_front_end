import React, { Component } from 'react';
import Methods from "../../../app/helpers/Methods";
import SweetAlert from "react-bootstrap-sweetalert";
const methods = new Methods();

export default class SweetAlertModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: methods.default(this.props.show, false),
            // showPreview: !methods.empty(this.props.preview,) ? true : false,
            title: this.props.title,
            preview: this.props.preview,
            alertType: this.props.alertType,
            onConfirm: null,
            onCancel: null,
            content: this.props.content,
            showConfirmBtn: true,
            showPasswordForm: false,
            passwordFormData: {
                url: "",
                // callBack: alert("hi")
            }
        }
        this.sweetAlertModalElement = React.createRef();
    }

    closeModal = () => {
        this.setState({
            show: false
        });
    };

    openModal = (title, alertType, content, showConfirmBtn = true) => {
        this.setState({
            show: true,
            title: title,
            alertType: alertType,
            content: content,
            showConfirmBtn: showConfirmBtn,
        });
    };

    onConfirm = () => {
        this.setState({
            show: false
        });
    };

    onCancel = () => {
        this.setState({
            show: false
        });
    };

    selfOpen = () => {
        this.setState({
            show: true
        });
    };

    customSuccessIcon(){
        return <div className="swal2-icon swal2-success swal2-animate-success-icon" style={{display: 'flex'}}>
        <div className="swal2-success-circular-line-left" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
        <span className="swal2-success-line-tip" />
        <span className="swal2-success-line-long" />
        <div className="swal2-success-ring" /> 
        <div className="swal2-success-fix" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
        <div className="swal2-success-circular-line-right" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
      </div>
    }

    customLoadingIcon(){
        return <div className="spinner-border text-white mr-2 align-self-center loader-sm " />;
    }

    customIcon(type){
        if(type === "success"){
            return this.customSuccessIcon();
        }
        if(type === "loading"){
            return this.customLoadingIcon();
        }
    }


    render() {
        let isCustom= this.state.alertType === "success" || this.state.alertType === "custom" || this.state.alertType === "loading";

        return (
            <div>
                {!methods.empty(this.state.preview) &&
                    <div onClick={this.selfOpen}>
                        {this.state.preview}
                    </div>
                }
                
                <SweetAlert
                    show={this.state.show}
                    type={isCustom ? "custom" : this.state.alertType}
                    customIcon={ isCustom ? this.customIcon(this.state.alertType) : false}                    
                    title={this.state.title}
                    onConfirm={this.onConfirm}
                    showConfirm={this.state.showConfirmBtn}
                    onCancel={this.onCancel}>
                    {this.state.content}
                    {/* {this.buildPasswordForm()} */}
                </SweetAlert>
            </div>
        );
    }
}