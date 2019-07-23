import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (
        <button
            // quando clicar no botão, props recebe o evento
            onClick={e => props.click && props.click(props.label)}      // caso não tenha nada ele não faz nada, se tiver, recebe o conteudo do elemento que será passado, para a função click
            className={classes}>
            {props.label}
        </ button>

    )



}
{/* `button
             ${props.operation ? 'operation' : ''}   // se a propriedade operation for passada pro botão, ele adiciona a classe operation
             ${props.double ? 'double' : ''}
             ${props.triple ? 'triple' : ''}
         `}> */}