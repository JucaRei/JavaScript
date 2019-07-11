import React, { Component } from "react";
// Component , quando cria um componente de classe , eu vou herdar desse component

//criar a classe
export default class Saudacao extends Component {
  // função responsável por renderizar o componente

  // o estado onChange do input text
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  };
  // dessa forma eu tenho o nome e que eu recebi a partir do parâmetro, que foi passado pro componente, setei o estado com o mesmo parâmetro inicial

  //função contrutora
  constructor(props) {
    super(props); // tem que chamar o super para que as propriedade enviem pro super

    this.setTipo = this.setTipo.bind(this); // passando a instancia de saudação dando um bind
    //this.setNome = this.setNome.bind(this);

    // this.state = {
    //   tipo: this.props.tipo,
    //   nome: this.props.nome
    // };
  }

  setTipo(e) {
    // função setTipo atualiza o estado
    // alterar o estado onChange
    this.setState({ tipo: e.target.value }); // quero alterar a variavel tipo, dentro do state , agora consegue alterar o estado
  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  render() {
    // para acessar as propriedades eu uso o this.props , na função render
    const { tipo, nome } = this.state; // referenciando de this.props o atributo tipo e nome
    return (
      <div>
        <h1>
          {tipo} {nome}!
        </h1>
        <hr />
        {/* referenciando o tipo, que eu extrai usando o destructuring */}
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          //   onChange={e => this.setTipo(e)}
          onChange={this.setTipo}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          //   onChange={e => this.setNome(e)}
          onChange={e => this.setNome(e)} // vai chamar esse função setNome quando o onChange ocorrer
        />
      </div>
    );
  }
}

// Outra maneira interessante : https://medium.com/front-end-weekly/react-quick-tip-easy-data-binding-with-a-generic-onchange-handler-fb0254a7094e
