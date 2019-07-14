import React from 'react'
import {connect} from 'react-redux'

import AbilityListItem from './AbilityListItem'
import _ from "underscore";

class AbilityList extends React.Component {
    render() {
        if (this.props.abilities) {
            const allAbilities = _.groupBy(this.props.abilities, "generalCategory");

            const tables = Object.values(allAbilities).map(category => {
                const ct = category[0].generalCategory;
                console.log(ct);
                const responsiveTable = ct !== 'Enemy Skills' ? 'responsive-table' : '';
                const hideDescription = ct !== 'Enemy Skills' ? 'hide-on-med-and-down' : '';
                return (
                    <div key={ct}>
                        <h5>{ct}</h5>
                        <table className={'highlight ' + responsiveTable}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                {ct !== 'Enemy Skills' && <th>Category</th>}
                                {ct !== 'Enemy Skills' && ct !== 'Active Skills' && <th>Per Level</th>}
                                {ct === 'Active Skills' && category !== 'Enemy Skills' && <th>Mana</th>}
                                {ct !== 'Active Skills' && ct !== 'Enemy Skills' && <th>Passive?</th>}
                                <th className={hideDescription}>Description</th>
                                {ct !== 'Enemy Skills' && <th>Equipment</th>}
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