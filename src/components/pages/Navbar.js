import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import M from 'materialize-css'
import styled from "styled-components";
import {connect} from "react-redux";
import {doSearch, typeOnSearch} from "../../actions/rootActions";

const MediaImg = styled.img({
    height: '2em',
    width: '2em'
});

const MediaLink = styled.a({
    padding: 0,
    marginRight: '1.5em'
});

const SearchContainer = styled.div({
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px 0 0 10px',
    paddingLeft: 16,
    width: '25%'
});

class Navbar extends React.Component {
    state = {
        searchText: ''
    };

    componentDidMount() {
        M.AutoInit();
        M.Autocomplete.init(document.getElementById('omni-search'))
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

    omniSearch = (e) => {
        const text = e.target.value;
        this.setState({
            searchText: text
        });
        this.props.typeOnSearch(text);
        M.Autocomplete.getInstance(e.target).updateData(this.props.searchResultList)
    };

    doSearch = (e) => {
        e.preventDefault();
        this.setState({
            searchText: ''
        });
        this.props.doSearch(this.props.history.push)
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
                        <SearchContainer className="input-field right">
                            <form onSubmit={this.doSearch}>
                                <input type="text" placeholder="(WIP) Search Bar" autoComplete="off" onChange={this.omniSearch} value={this.state.searchText} id="omni-search" className="autocomplete white-text"/>
                            </form>
                        </SearchContainer>
                        {/* <ul className="right">
                            <li><MediaLink href="https://peregeronline.com/" target="_blank">
                                <MediaImg src={pereger} alt="Pereger"/>
                            </MediaLink></li>
                            <li><MediaLink href="https://discord.gg/8uF4F8X" target="_blank">
                                <MediaImg src={discord} alt="Discord"/>
                            </MediaLink></li>
                        </ul> */}
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

const mapStateToProps = (state) => {
    return {
        searchBarText: state.searchBarText,
        searchResultList: state.searchResultList
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        typeOnSearch: (text) => {
            dispatch(typeOnSearch(text))
        },
        doSearch: (history) => {
            dispatch(doSearch(history))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))