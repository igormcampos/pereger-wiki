import React from 'react'
import {connect} from 'react-redux'
import _ from 'underscore'

import MonsterListItem from './MonsterListItem'
import {Link} from "react-router-dom";

class MonsterList extends React.Component {
    render() {
        if (this.props.monsters) {
            const allMonsters = _.groupBy(this.props.monsters, "generalCategory");

            const tables = Object.values(allMonsters).map(category => {
                const ct = category[0].generalCategory;
                const isMonster = category[0].generalCategory === 'Normal Monsters' || category[0].generalCategory === 'Bosses';
                const responsiveTable = isMonster ? 'responsive-table' : '';

                return (
                    <div key={ct}>
                        <h5>{ct}</h5>
                        <table className={'highlight ' + responsiveTable}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                {isMonster && <th>Level</th>}
                                {isMonster && <th>EXP</th>}
                                {isMonster && <th>HP</th>}
                                {isMonster && <th>SP</th>}
                                {isMonster && <th>ATK</th>}
                                {isMonster && <th>ACC</th>}
                                {isMonster && <th>AGI</th>}
                                {isMonster && <th>DEF</th>}
                                {isMonster && <th>SPD</th>}
                            </tr>
                            </thead>
                            <tbody>
                            {category.map(monster => {
                                return (<MonsterListItem key={monster.monsterId} data={monster}/>)
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            });

            return (
                <div>
                    <h4 className="center">Monsters</h4>
                    <p>Notice that the XP shown is a relative to the level difference between the enemy and the player. The XP will also be greater in parties or if a <Link to="/items/ticket-red">Realm XP Event</Link> is active.</p>
                    <p>Every enemy takes 90 seconds to respawn.</p>
                    {tables}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading monsters...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        monsters: state.monsters
    }
};

export default connect(mapStateToProps)(MonsterList)