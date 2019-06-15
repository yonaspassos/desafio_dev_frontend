import React from 'react';

const form = props => {
    return <div className="container">

        <form>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label for="exampleInputName">Nome</label>
                        <input type="text" class="form-control" placeholder="Nome" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPhone">Telefone</label>
                        <input type="text" class="form-control" placeholder="Telefone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Endereço de email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label for="exampleInputLogin">Login</label>
                        <input type="login" class="form-control" id="exampleInputLogin" placeholder="Login" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </div>
        </form>

    </div>
}

export default form;