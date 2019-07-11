import React from "react";
import Filho from "./Filho";
import { childrenWithProps } from "../utils/utils"


//Outro jeito de fazer 
// function childrenWithProps(props) {
//     return React.Children.map(props.children, child => {

//         return React.cloneElement(child, {
//             ...props,
//             ...child.props
//         })
//     })
// }

export default props => (
    <div>
        <h1>
            {props.nome} {props.sobrenome}
        </h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
);

//  função clone element espera somente 1 elemento, para usar varios objetos, tem que ser a função map

/* ..props - peguei as propriedades do pai */


/* props.children.props -  mais as proprias propriedades dos filhos (Usei o nome Filho e o sobrenome Pai, que esta no componente pai) */



{/* <Filho nome="Daniel" sobrenome={props.sobrenome} />
                    <Filho {...props} /> */}
{/* operador spread, todas as propriedades que veio do pai, estou jogando como propriedades, da tag filho  */ }
{/*<Filho {...props} nome="Carla" /> */ }
{/* ???? */ }
{/* {props.children} */ }

{/* além de passar as propriedades do pai, posso passar as minhas propriedade também */ }
{/* função que, além de clonar ela consegue colocar mais propriedades pro elemento */ }