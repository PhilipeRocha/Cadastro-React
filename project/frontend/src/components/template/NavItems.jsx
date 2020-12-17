import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

export default props => 
    <Link to={props.destino}>
        <i className={props.icone}></i> {props.nome}
    </Link>