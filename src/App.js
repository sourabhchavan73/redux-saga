import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getUser,deleteUser } from './redux/actions';
import './app.css';

class App extends React.Component {
    componentDidMount(){
        this.props.getUser();
        // this.props.deleteUser();
    }

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUser())
    // }, [])

    // const users = useSelector((state) => state.user.user);
    
    
    renderUserList() {
        return this.props.users.map(user => {
            return (
                <div className="col-md-4" key={user.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">
                                { user.email}
                            </p>
                            <button
                                onClick={() => deleteUser(user.id)} 
                                className="btn btn-primary">
                                    Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.users)
        return (
            <div className="container">
                Hello world <br />
                is the saga application
                <div className="row">
                    {this.props.users.length > 0 ? this.renderUserList() : "Loading"}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: Object.values(state.user)}
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser()),
    deleteuser: () => dispatch(deleteUser())
})


export default connect( mapStateToProps, mapDispatchToProps)(App)
