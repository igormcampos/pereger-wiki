import React from 'react'
import {connect} from 'react-redux'

import AbilityListItem from './AbilityListItem'
import _ from "underscore";
import SpellListItem from "./SpellListItem";

class AbilityList extends React.Component {
    render() {
        if (this.props.abilities && this.props.spells) {
            const allAbilities = _.groupBy(this.props.abilities, "generalCategory");

            const abilityTables = Object.values(allAbilities).map(category => {
                const generalCategory = category[0].generalCategory;

                return (
                    <div key={generalCategory}>
                        <h5>{generalCategory}</h5>
                        <table className={'highlight'}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                {generalCategory === 'Active Skills' && <th>Mana</th>}
                                {generalCategory === 'Enemy Skills' && <th>Passive</th>}
                                <th className='hide-on-med-and-down'>Description</th>
                                {generalCategory === 'Enemy Skills' && <th>Cooldown</th>}
                                {['Passive Skills', 'Condition Skills'].includes(generalCategory) && <th>Rune</th>}
                            </tr>
                            </thead>
                            <tbody>
                            {category.map(ability => {
                                return (<AbilityListItem key={ability.id} data={ability}/>)
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            });

            const spellsTable = (
                <div key='Spells'>
                    <h5>Spells</h5>
                    <table className='highlight responsive-table'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Mana</th>
                            <th className='hide-on-med-and-down'>Description</th>
                            <th>Equipment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.spells.map(spell => {
                            return (<SpellListItem key={spell.id} data={spell}/>)
                        })}
                        </tbody>
                    </table>
                </div>
            );

            return (
                <div>
                    <h4 className="center">Abilities</h4>
                    {spellsTable}
                    {abilityTables}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading abilities...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        abilities: state.abilities,
        spells: state.spells,
        runes: state.runes
    }
};

export default connect(mapStateToProps)(AbilityList)