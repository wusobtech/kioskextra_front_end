import { Component } from "react";
import Methods from "../../app/helpers/Methods";


const methods = new Methods;

export default class Scaffold extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3 ">
                        <div className={methods.default(this.props.customClass , "card" )+" scaffold-body mt-3"}>
                            <div className="widget widget-account-invoice-one">

                                {this.props.appBar}

                                <div className="widget-content">
                                    {this.props.appBody}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div id="bottom-spacer"></div>
            </div >
        );
    }
}



export function AppBar({ appTitle, appActions, leadingIcon }) {
    return (
        <div className="widget-heading d-flex justify-content-between">
            <div className>
                {!methods.empty(leadingIcon) && <span className="appbar_leading_icon">{leadingIcon}</span>}
               <span className="h5"> {appTitle} </span>
            </div>
            <div className="">
                {appActions}
            </div>
        </div>
    );
}