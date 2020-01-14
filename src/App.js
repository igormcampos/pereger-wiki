import React from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Route} from "react-router-dom";

import AbilityList from './components/abilities/AbilityList'
import AbilityDetail from './components/abilities/AbilityDetail'
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import QuestList from "./components/quests/QuestList";
import QuestDetail from "./components/quests/QuestDetail";
import ItemDetail from "./components/items/ItemDetail";
import ItemList from "./components/items/ItemList";
import {fetchAbilities, fetchConditions, fetchExpTable, fetchItems, fetchLoot, fetchMonsters, fetchQuests, fetchRunes, fetchShops, fetchUpgrades, fetchSpells} from "./actions/rootActions";
import {connect} from "react-redux";
import MonsterList from "./components/monsters/MonsterList";
import MonsterDetail from "./components/monsters/MonsterDetail";
import RuneList from "./components/runes/RuneList";
import RuneDetail from "./components/runes/RuneDetail";

class App extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
        this.props.fetchRunes();
        this.props.fetchUpgrades();
        this.props.fetchAbilities();
        this.props.fetchSpells();
        this.props.fetchConditions();
        this.props.fetchExpTable();
        this.props.fetchLoot();
        this.props.fetchMonsters();
        this.props.fetchQuests();
        this.props.fetchShops();
    }

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/abilities" component={AbilityList}/>
                        <Route path="/abilities/:abilityId" component={AbilityDetail}/>
                        <Route exact path="/monsters" component={MonsterList}/>
                        <Route path="/monsters/:monsterId" component={MonsterDetail}/>
                        <Route exact path="/quests" component={QuestList}/>
                        <Route path="/quests/:questId" component={QuestDetail}/>
                        <Route exact path="/items" component={ItemList}/>
                        <Route path="/items/:itemId" component={ItemDetail}/>
                        <Route exact path="/runes" component={RuneList}/>
                        <Route path="/runes/:runeId" component={RuneDetail}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => {
            dispatch(fetchItems())
        },
        fetchRunes: () => {
            dispatch(fetchRunes())
        },
        fetchUpgrades: () => {
            dispatch(fetchUpgrades())
        },
        fetchAbilities: () => {
            dispatch(fetchAbilities())
        },
        fetchSpells: () => {
            dispatch(fetchSpells())
        },
        fetchConditions: () => {
            dispatch(fetchConditions())
        },
        fetchExpTable: () => {
            dispatch(fetchExpTable())
        },
        fetchLoot: () => {
            dispatch(fetchLoot())
        },
        fetchMonsters: () => {
            dispatch(fetchMonsters())
        },
        fetchQuests: () => {
            dispatch(fetchQuests())
        },
        fetchShops: () => {
            dispatch(fetchShops())
        }
    }
};

export default connect(null, mapDispatchToProps)(App)
