import React from 'react'
import {connect} from 'react-redux'

class AbilityItem extends React.Component {
    render() {
        const {name, category, value, passive, desc, equip} = this.props.ability;

        const ab = this.props.ability ? (
            <div>
                <h4>{name}</h4>
                <p>{desc}</p>
                <p>Category: {category}</p>
                <p>Per Level: {value}</p>
                <p>Passive? {passive ? 'True' : 'False'}</p>
                <p>Equipment: {equip}</p>
            </div>
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

const mapStateToProps = (state, ownProps) => {
    let abilityClass = ownProps.match.params.ability_class;
    return {
        ability: state.abilities.find(ability => ability.className === abilityClass)
    }
};

export default connect(mapStateToProps)(AbilityItem)