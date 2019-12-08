import React from 'react'
import {connect} from 'react-redux'

import AbilityListItem from './AbilityListItem'
import _ from "underscore";

class AbilityList extends React.Component {
    render() {
        if (this.props.abilities) {
            const allAbilities = _.groupBy(this.props.abilities, "generalCategory");

            const tables = Object.values(allAbilities).map(category => {
                const generalCategory = category[0].generalCategory;
                const responsiveTable = generalCategory !== 'Enemy Skills' ? 'responsive-table' : '';
                const hideDescription = generalCategory !== 'Enemy Skills' ? 'hide-on-med-and-down' : '';

                return (
                    <div key={generalCategory}>
                        <h5>{generalCategory}</h5>
                        <table className={'highlight ' + responsiveTable}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                {!['Enemy Skills', 'Enemy Condition Skills'].includes(generalCategory) && <th>Category</th>}
                                {generalCategory !== 'Enemy Skills' && generalCategory !== 'Active Skills' && <th>Per Level</th>}
                                {generalCategory === 'Active Skills' && <th>Mana</th>}
                                {generalCategory !== 'Active Skills' && generalCategory !== 'Enemy Skills' && <th>Passive?</th>}
                                <th className={hideDescription}>Description</th>
                                {!['Enemy Skills', 'Enemy Condition Skills'].includes(generalCategory) && <th>Equipment</th>}
                                {generalCategory === 'Enemy Skills' && <th>Passive</th>}
                                {generalCategory === 'Enemy Skills' && <th>Cooldown</th>}
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

            return (
                <div>
                    <h4 className="center">Abilities</h4>
                    <p>Every passive skill value increases your <b>current</b> stat of that skill by a percentage, it <b>doesn't</b> add it to your current stats.</p>
                    {tables}
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
        abilities: state.abilities
    }
};

export default connect(mapStateToProps)(AbilityList)