import React, { Component } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux';

import { getUser,deleteUser } from './redux/actions';


class DeleteButton extends Component {
    componentDidMount(){
        this.props.deleteUser();
    }

    render() {
        return (
            <button
                
                className="btn btn-primary">
                {this.props.name}
            </button>
        )
    }
}

export default  connect(null, {
    deleteUser
})(DeleteButton)
