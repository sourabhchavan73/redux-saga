import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions';
import './app.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser())
    }, [])

    const users = useSelector((state) => state.user.user);
    
    
    const UserList = () => {
        return (
            <div className="row">
                {users.map(user => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">
                                    { user.email}
                                </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        )
    }

    return (
        <div className="container">
            Hello world <br />
            is the saga application
            { users && <UserList />}
        </div>
    )
}

export default App
