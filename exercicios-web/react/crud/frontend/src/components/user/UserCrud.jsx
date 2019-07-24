import React, { Component } from 'react'
import Main from '../template/Main'

//objeto com as propriedades do cabeçalho
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listas, Alterar, Excluir'
}

// Componente de classe
export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}