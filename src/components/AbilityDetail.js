import React from 'react'
import {abilities} from "../json/abilities";

class AbilityItem extends React.Component {
    state = {
        ability: null
    };

    componentDidMount() {
        let abilityClass = this.props.match.params.ability_class;
        this.setState({
            ability: abilities.find(ability => {
                return ability.className === abilityClass
            })
        })
    }

    render() {
        const ab = this.state.ability ? (
            <h4>{this.state.ability.name}</h4>
        ) : (
            <h4>Loading Ability...</h4>
        );

        return (
            <div>
                {ab}
            </div>
        )
    }
}

export default AbilityItem