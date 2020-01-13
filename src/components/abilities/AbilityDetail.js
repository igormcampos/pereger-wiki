import React from 'react'
import {connect} from 'react-redux'

class AbilityDetail extends React.Component {
    render() {
        if (this.props.ability) {
            const {name, category, value, passive, desc, generalCategory, mana, equip, cool, spell} = this.props.ability;

            return (
                <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <p>{passive ? "Is a passive skill." : "Is an active skill."}</p>
                    <p>{generalCategory === 'Enemy Skills' && cool && `Has a cooldown of ${cool} seconds.`}</p>
                    {spell && <p>Category: {category}</p>}
                    {!['Enemy Skills', 'Active Skills'].includes(generalCategory) && value && <p>Per Level: {value}</p>}
                    {!passive && category !== 'Enemy' && <p>Mana: {mana}</p>}
                    {spell && equip && <p>Equipment: {equip}</p>}
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
    let abilities = state.abilities.concat(state.spells);
    return {
        ability: abilities && abilities.find(ability => ability.className === abilityClass)
    }
};

export default connect(mapStateToProps)(AbilityDetail)
