import React from 'react'
import {connect} from 'react-redux'

class AbilityItem extends React.Component {
    handleClick = () => {
        this.props.deleteAbility(this.props.ability.id);
        this.props.history.push('/abilities')
    };

    render() {
        const ab = this.props.ability ? (
            <h4>{this.props.ability.name}</h4>
        ) : (
            <h4>Loading Ability...</h4>
        );

        return (
            <div>
                {ab}
                <button className="btn blue" onClick={this.handleClick}>Delete Me</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAbility: (id) => {
            dispatch({type: 'DELETE_ABILITY', id: id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AbilityItem)