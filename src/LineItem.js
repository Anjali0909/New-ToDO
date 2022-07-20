import React, { Component } from 'react'

export class LineItem extends Component {
  render( ) {
    return (
        <li className="item" >
        <input type="checkbox"
        onChange={() =>  this.props.handleCheck(this.props.item.id)}
            checked ={this.props.item.checked}
        />
        <label 
        style={(this.props.item.checked) ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() =>  this.props.handleCheck(this.props.item.id)}
        >{this.props.item.item}</label>
        <button onClick={() =>  this.props.handleDelete(this.props.item.id)}
        >Delete</button>
    </li>
    )
  }
}

export default LineItem