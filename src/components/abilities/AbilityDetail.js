import React from 'react'
import {connect} from 'react-redux'

class AbilityDetail extends React.Component {
    render() {
        if (this.props.ability) {
            const {name, category, passive, desc, generalCategory, mana, equip, cool, spell} = this.props.ability;

            return (
                <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <p>{passive ? "Is a passive skill." : "Is an active skill."}</p>
                    {generalCategory === 'Enemy Skills' && <p>Is an enemy skill.</p>}
                    {generalCategory === 'Enemy Skills' && cool && <p>Has a cooldown of {cool} seconds.</p>}
                    {spell && <p>Category: {category}</p>}
                    {spell && <p>Mana: {mana}</p>}
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
    let id = ownProps.match.params.abilityId;
    let abilities = state.abilities.concat(state.spells);
    return {
        ability: abilities && abilities.find(ability => ability.id == id)
    }
};

export default connect(mapStateToProps)(AbilityDetail)
