import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class ConfirmTransactionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: this.props.title ?? "",
            subtitle: this.props.subtitle ?? "",
            onConfirm: null,
            onCancel: null,
            items: [{ title: "", value: "" }],
            password: "",
        }
        this.sweetAlertModalElement = React.createRef();
    }



    closeModal = () => {
        this.setState({
            show: false
        });
    };

    openModal = (title, subtitle, content, hasPassword = false) => {
        this.setState({
            show: true,
            title: title,
            subtitle: subtitle,
            items: content,
            // callbackAction: callback,
        });

        this.setState({
            content: this.buildContent(content, hasPassword)
        })
    };

    buildContent(items = [{ title: "", value: "" }], hasPassword) {
        let content = [];
        for (let i = 0; i < items.length; i++) {
            content.push(
                <div className="d-flex justify-content-between mt-1 mb-1">
                    <div>{items[i].title}</div>
                    <div>{items[i].value}</div>
                </div>
            );
        }
        content.push(this.buildPasswordForm(hasPassword));
        return content;
    }


    buildPasswordForm(hasPassword) {
        return (
            <form className="mt-3" onSubmit={(event) => { event.preventDefault();
                    this.props.onPasswordDone(hasPassword ? document.getElementById("confirm_transaction_pw_input_field").value : "");
                    document.getElementById("confirm_transaction_pw_spinner").classList.remove("d-none")
                }}>
                { hasPassword && <div className="input-group mb-4">
                    {/* <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div> */}
                    <input type="password" className="form-control" name="password" placeholder="Enter Password" id="confirm_transaction_pw_input_field" required />
                </div>
                }

                <div className="text-center">
                    <button className="btn btn-danger  btn-lg mb-3 mr-3" onClick={this.closeModal}>
                        Cancel
                    </button>
                    <button className="btn btn-success  btn-lg mb-3 mr-3">
                        <div className="spinner-border d-none text-white mr-2 align-self-center loader-sm " id="confirm_transaction_pw_spinner" />
                        Proceed
                </button>
                </div>
            </form>
        );
    }


    render() {
        return (
            <SweetAlert
                show={this.state.show}
                type="custom"
                title={this.state.title}
                showConfirm={false}
            onConfirm= {() => {}}
            onCancel={false}>
                {this.state.content}
            </SweetAlert>
        );
    }
}