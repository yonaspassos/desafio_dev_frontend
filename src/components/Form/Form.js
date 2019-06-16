import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Form extends Component {
    state = {
        user: {
            id: null,
            name: '',
            phone: '',
            mail: '',
            username: '',
            password: ''
        },
        redirect: false        
    }

    populateUser = userId => {
        const user = this.props.users.find(user => user.id === userId);
        this.setState({user: user});
    }

    nameChangedHandler = event => {
        let user = {...this.state.user};
        user.name = event.target.value;
        this.setState({user: user})
    }

    phoneChangedHandler = event => {
        let user = {...this.state.user};
        user.phone = event.target.value;
        this.setState({user: user})
    }

    mailChangedHandler = event => {
        let user = {...this.state.user};
        user.mail = event.target.value;
        this.setState({user: user})
    }

    usernameChangedHandler = event => {
        let user = {...this.state.user};
        user.username = event.target.value;
        this.setState({user: user})
    }

    passwordChangedHandler = event => {
        let user = {...this.state.user};
        user.password = event.target.value;
        this.setState({user: user})
    }

    formSavedHandler = event => {
        event.preventDefault();
        const user = {...this.state.user};
        if (this.props.match.params.id) {
            this.props.onUserEdit(user);
        } else {
            this.props.onUserAdd(user);
        }
        this.setState({redirect: true});
    }
    
    componentDidMount() {
        if (this.props.match.params.id) {
            this.populateUser(parseInt(this.props.match.params.id))
        }
    }

    render () {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }  
        return <div className="container">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="inputName">Nome</label>
                            <input type="text" className="form-control" onChange={this.nameChangedHandler} placeholder="Nome" value={this.state.user.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPhone">Telefone</label>
                            <input type="text" className="form-control" onChange={this.phoneChangedHandler} placeholder="Telefone" value={this.state.user.phone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail1">Endereço de email</label>
                            <input type="email" className="form-control" onChange={this.mailChangedHandler} id="inputEmail1" aria-describedby="emailHelp" placeholder="Seu email" value={this.state.user.mail} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="inputLogin">Login</label>
                            <input type="text" className="form-control" onChange={this.usernameChangedHandler} id="inputLogin" placeholder="Login" value={this.state.user.username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Senha</label>
                            <input type="password" className="form-control" onChange={this.passwordChangedHandler} id="inputPassword" placeholder="Senha" value={this.state.user.password} />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={this.formSavedHandler} className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserAdd: user => dispatch({type: 'ADD', user: user}),
        onUserEdit: user => dispatch({type: 'EDIT', user: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);