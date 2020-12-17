import "./Nav.css"
import React from "react"
import Items from "./NavItems"

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Items destino="/" icone="fa fa-home" nome="Início"/>
            <Items destino="/users" icone="fa fa-users" nome="Usuários"/>
        </nav>
    </aside>