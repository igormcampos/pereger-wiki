import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import M from 'materialize-css'
import discord from '../../static/img/discord.png'
import pereger from '../../static/img/pereger.png'
import styled from "styled-components";

const MediaImg = styled.img({
    height: '2em',
    width: '2em'
});

const MediaLink = styled.a({
    padding: 0,
    marginRight: '1.5em'
});

class Navbar extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }

    goHome = () => {
        this.props.history.push('/')
    };

    goAbilities = () => {
        this.props.history.push('/abilities')
    };

    goQuests = () => {
        this.props.history.push('/quests')
    };

    goAbout = () => {
        this.props.history.push('/about')
    };

    goItems = () => {
        this.props.history.push('/items')
    };

    goMonsters = () => {
        this.props.history.push('/monsters')
    };

    render() {
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper black">
                        <a href="/" className="brand-logo center">Pereger Wiki</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/items">Items</NavLink></li>
                            <li><NavLink to="/abilities">Abilities</NavLink></li>
                            <li><NavLink to="/monsters">Monsters</NavLink></li>
                            <li><NavLink to="/quests">Quests</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                        <ul className="right">
                            <li><MediaLink href="https://peregeronline.com/" target="_blank">
                                <MediaImg src={pereger} alt="Pereger"/>
                            </MediaLink></li>
                            <li><MediaLink href="https://discord.gg/8uF4F8X" target="_blank">
                                <MediaImg src={discord} alt="Discord"/>
                            </MediaLink></li>
                        </ul>
                    </div>
                    <div className="nav-content black hide-on-large-only">
                        <ul className="tabs tabs-transparent">
                            <li className="tab" onClick={this.goHome}><a href="#">Home</a></li>
                            <li className="tab" onClick={this.goItems}><a href="#">Items</a></li>
                            <li className="tab" onClick={this.goAbilities}><a href="#">Abilities</a></li>
                            <li className="tab" onClick={this.goMonsters}><a href="#">Monsters</a></li>
                            <li className="tab" onClick={this.goQuests}><a href="#">Quests</a></li>
                            <li className="tab" onClick={this.goAbout}><a href="#">About</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/items">Items</NavLink></li>
                    <li><NavLink to="/abilities">Abilities</NavLink></li>
                    <li><NavLink to="/monsters">Monsters</NavLink></li>
                    <li><NavLink to="/quests">Quests</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        )

    }
}

export default withRouter(Navbar)