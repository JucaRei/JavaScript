import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

//objeto com as propriedades do cabeçalho
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listas, Alterar, Excluir'
}

// o usuario cancelar e recuperar o estado inicial do formulario
const baseUrl = 'http://localhost:3001/users'
// definir o estado inicial, no caso vazio
const initialState = {
    user: { name: '', email: '' },
    list: []
}

// Componente de classe
export default class UserCrud extends Component {

    // estado inicial do formulário
    state = { ...initialState }

    // essa função será chamada quando o componente for exibido na tela
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    //função responsável por limpar o formulário, quando clicar no botão cancelar
    clear() {
        this.setState({ user: initialState.user })      // no caso quero limpar o usuário
    }

    // serve para incluir , tanto como para alterar um usuário existente

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    /*save() {
        const user = this.state.user  // verifica se o usuario existe, se tem estado
        // se o usuario ja existir ele vai alterar (put), senão , vai inserir um novo usuário (post)
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl     // se tiver o usuario ele manda pra url com o id, se o usurio não existir, ele apenas adiciona
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)    //atualizar a lista local - resp.data é o usuário que foi obtido do webservice
                this.setState({})       // depois que salvou ou incluiu o usuario, limpa o formulario e atualiza a lista que foi retornada da função getUpdatedList
            })
    } */

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }
    /*getUpdateList(user) {
        // como o filter gera uma outra lista , não é preciso clonar a lista do estado
        const list = this.state.filter(u => u.id !== user.id)
        list.unshift(user)  // o usuario , adicionado ou alterado vai para o primeiro da lista, assim mantém o rastro
        return list
    }*/

    //atualizar os campos
    updateField(event) {
        const user = { ...this.state.user }     // clonar o usuário usando spreed / não é interessante alterar o conteudo do usuario no state e sim clone esse objeto , altere esse clone e depois seta o estado usando a função setState 
        // o react trabalha de uma forma mais funcional e  para não ter referencias sendo alteradas , você evolui o estado do objeto
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // JSX que vai renderizar o formulario
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Nome </label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secundary ml-2"
                            onClick={e => this.clear(e)} >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    // função que renderiza uma tabela
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* função responsavel por renderizar as linhas */}
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        //mapear a lista de usuários que esta dentro do objeto
        return this.state.list.map(user => {
            return (     // retorna uma expressão
                <tr key={user.id} >
                    {/* sempre que retornar um array de jsx tem que ter o atributo key para não gerar a advertência */}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={(e) => this.load(user)} >
                            <i className="fa fa-pencil" ></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={(e) => this.remove(user)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}