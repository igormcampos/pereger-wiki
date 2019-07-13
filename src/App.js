import React from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Route} from "react-router-dom";

import AbilityList from './components/abilities/AbilityList'
import AbilityDetail from './components/abilities/AbilityDetail'
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import styled from "styled-components";
import QuestList from "./components/quests/QuestList";
import QuestDetail from "./components/quests/QuestDetail";

const ContentContainer = styled.div({});

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <ContentContainer className="container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/abilities" component={AbilityList}/>
                    <Route path="/abilities/:ability_class" component={AbilityDetail}/>
                    <Route exact path="/quests" component={QuestList}/>
                    <Route path="/abilities/:quest_name" component={QuestDetail}/>
                    <Route path="/about" component={About}/>
                </ContentContainer>
            </div>
        </BrowserRouter>
    );
}

export default App
