import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

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
                    {this.props.rune && <p>Ability given by a rune: <Link to={`/runes/${this.props.rune.itemId}`}>{this.props.rune.className}</Link></p>}
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
    const id = ownProps.match.params.abilityId;
    const abilities = state.abilities.concat(state.spells);
    const ability = abilities && abilities.find(ability => ability.id == id);
    return {
        ability: ability,
        rune: state.runes && ability && state.runes.find(rune => rune.ability === ability.id)
    }
};

export default connect(mapStateToProps)(AbilityDetail)
