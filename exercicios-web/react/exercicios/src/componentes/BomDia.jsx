import React from "react";
//import React, { Fragment } from "react";

// por convenção se usa props como parâmetro
export default props => [
  <h1 key="h1">Bom dia {props.nome}!</h1>,
  <h2 key="h2">Até breve!</h2> // o key é importante para o react encontrar mais facilmente o elemento desejado
]; // caso queira retornar mais de 1 elemento, é só
// colocar dentro de 1 array , como se fosse 1 javascript

// export default props => (
//   // elementos serem jogados sem ter um elemento que envolva(div), para não quebrar sua página
//   // serve como uma tag que envolve seus componentes internos, mas não vai ser renderizado nada no html (React.Fragment)
//   <Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     {/* props.nome para acessar o nome */}
//     <h2>Até breve!</h2>
//   </Fragment>
// );

// <div>
//     <h1>Bom dia {props.nome}!</h1>
//     {/* props.nome para acessar o nome */}
//     <h2>Até breve!</h2>
// </div>
