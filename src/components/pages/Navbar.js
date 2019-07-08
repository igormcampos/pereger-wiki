import React from 'react'
import {NavLink} from 'react-router-dom'
import M from 'materialize-css'

class Navbar extends React.Component {
    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <a href="/" className="brand-logo">Pereger Wiki</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/abilities">Abilities</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar