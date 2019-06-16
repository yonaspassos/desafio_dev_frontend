import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const main = props => {
    return <div className="container userList">
        <div className="list">
            <ul className="list-group list-group-flush">
                {props.users.map(user => {
                    return (<li key={user.id} className="list-group-item">
                        <span className="p-2 bd-highlight">{user.name} ({user.username})</span>
                        <div className="actions-wrapper">
                            <Link to={`/details/${user.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                            <Link to={`/edit/${user.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                            <button className="delete" onClick={e => props.onUserDelete(user.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    </div>;
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserDelete: userId => dispatch({type: 'REMOVE', userId: userId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(main);