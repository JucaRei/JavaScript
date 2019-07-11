import React from "react";

// export default, normalmente coloca a função sem nome, função anônima, que é retornada por padrão, quando esse modulo for importado
//export default (BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>);

// caso não use o default , tem que colocar o tipo da variavel
// export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>;

// export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>;
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>;

const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>;

export default { BoaTarde, BoaNoite }; // exportando tanto como export default , tanto quanto normal
export { BoaTarde, BoaNoite };
