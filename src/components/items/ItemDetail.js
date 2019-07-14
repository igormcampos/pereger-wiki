import React from 'react'
import {connect} from 'react-redux'

class AbilityItem extends React.Component {
    render() {
        if (this.props.ability) {
            const {name, category, value, passive, desc, equip} = this.props.ability;

            const ab = (
                <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <p>Category: {category}</p>
                    <p>Per Level: {value}</p>
                    <p>Passive? {passive ? 'True' : 'False'}</p>
                    <p>Equipment: {equip}</p>
                </div>
            );

            return (
                <div>
                    {ab}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading ability...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let abilityClass = ownProps.match.params.ability_class;
    return {
        ability: state.abilities && state.abilities.find(ability => ability.className === abilityClass)
    }
};

export default connect(mapStateToProps)(AbilityItem)