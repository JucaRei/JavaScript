import React from 'react'
import { Switch, Route, Redirect } from 'react-router'  // react-router server para ficar alternando componentes na mesma pagina

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    // switch coloca as rotas
    <Switch>
        {/* sempre que o usuário navegar pro '/', ele vai renderizar o componente home ,  exact é exatamente aquele path*/}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/* Regra de redirect, caso não caia nenhuma das rotas anteriores, ele vai ser direcionado pro '/' (raiz) */}
        <Redirect from='*' to='/' />
    </Switch>