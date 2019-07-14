import React from 'react'
import {connect} from 'react-redux'

class AbilityDetail extends React.Component {
    render() {
        if (this.props.ability) {
            const {name, category, value, passive, desc, generalCategory, mana, equip} = this.props.ability;

            return (
                <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <p>{passive ? "Is a passive skill." : "Is an active skill."}</p>
                    {category !== 'Enemy' && <p>Category: {category}</p>}
                    {category !== 'Enemy' && value && generalCategory !== "Active Skills" && <p>Per Level: {value}</p>}
                    {!passive && category !== 'Enemy' && <p>Mana: {mana}</p>}
                    {category !== 'Enemy' && equip && <p>Equipment: {equip}</p>}
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

export default connect(mapStateToProps)(AbilityDetail)