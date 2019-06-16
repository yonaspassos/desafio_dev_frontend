import React from'react';
import { connect } from 'react-redux';
import './Details.css'

const details = props => {

    const user = props.users.find(user => user.id === parseInt(props.match.params.id));
    if (user) {
        return (
            <div className="details">
                <h3>Cadastro</h3>
                <div className="list-group list-group-flush">
                    <p className="list-group-item"><span>Nome:</span> {user.name}</p>
                    <p className="list-group-item"><span>Telefone:</span> {user.phone}</p>
                    <p className="list-group-item"><span>E-mail:</span> {user.mail}</p>
                    <p className="list-group-item"><span>Username:</span> {user.username}</p>
                </div>
            </div>
        )
    }

    return null;
        
}


const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(details);