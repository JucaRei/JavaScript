import React from "react";
import ReactDOM from "react-dom";

//import Blabla from "./componentes/Primeiro";
//import Dia from "./componentes/BomDia"
//import BoaTarde, { BoaNoite } from './componentes/Multiplus'        // chaves nesse caso é o operador de desestruturação (destructuring), tirando de dentro desse módulo a função BoaTarde, BoaNoite
// export default, e export normal

//import Multi from './componentes/Multiplus.jsx';
//import Multi, { BoaNoite } from './components/Multiplus'

//import Saudacao from './components/Saudacao.jsx'

import Pai from "./components/Pai"
import Filho from './components/Filho'


//ReactDOM.render(<Dia nome="Juca" idade={true} />, document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <Multi.BoaNoite nome="Leo" />
//     </div>
//     , document.getElementById("root"));

ReactDOM.render(
    <div>
        {/* <Saudacao tipo="Bom dia" nome="João" /> */}
        <Pai nome="Paulo" sobrenome="Silva" >
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Cauã" />
            <Filho nome="Maria" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    // <div>
    //     <Multi.BoaTarde nome="Ana" />   {/* Usando pelo objeto Multi  */}
    //     <BoaNoite nome="Leo" /> {/* Usando pelo destructuring */}
    // </div>
    , document.getElementById("root"));


//componente personalizado não pode começar com letra minuscula , senão não vai renderizar corretamente

// const elemento = <h1>React 2</h1>;  parece html, mais é javascript , somente react pode usar // vai ser transpilado

// Componente usa < "nome do componente" />