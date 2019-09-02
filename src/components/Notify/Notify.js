import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { actChangeNotify } from '../../actions/index';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notify extends Component {

    /**----------------------------------------
    * Function: Kiem tra trang thai moi lan nhan props
    * Component: MenuContainer
    ----------------------------------------**/
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.notify.isShowNotify === true) {
            return true;
        }
        return false;
    }

    /**----------------------------------------
    * Function: Truyen bien mau sac va noi dung cho notify
    * Component: MenuContainer
    ----------------------------------------**/
    notify = (style, content) => {
        switch (style) {
            case "success":
                toast(`${content}`);
                break;
            case "info":
                toast.info(`${content}`);
                break;
            case "warning":
                toast.warning(`${content}`);
                break;
            case "error":
                toast.error(`${content}`);
                break;
            default: return toast(`${content}`);
        }
    };

    /**----------------------------------------
    * Function: Reset lai moi lan show form
    * Component: MenuContainer
    ----------------------------------------**/
    handelResetIsShowNotify = () => {
        this.props.changeNotify("", "", false)
    }

    render() {

        let { style, content, isShowNotify } = this.props.notify;

        if (isShowNotify === false) {
            return null;
        }

        return (

            <Fragment>
                <div>
                    {this.notify(style, content)}
                    <ToastContainer />
                </div>

                {this.handelResetIsShowNotify()}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        notify: state.notify
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        changeNotify: (style, content, isShowNotify) => {
            dispatch(actChangeNotify(style, content, isShowNotify));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify);