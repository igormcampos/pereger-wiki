import React from 'react'
import {connect} from 'react-redux'

class AbilityItem extends React.Component {
    render() {
        const ab = this.props.ability ? (
            <h4>{this.props.ability.name}</h4>
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