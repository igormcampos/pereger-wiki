import React from 'react'
import {connect} from 'react-redux'
import _ from 'underscore'

import MonsterListItem from './MonsterListItem'

class MonsterList extends React.Component {
    render() {
        if (this.props.monsters) {
            const allMonsters = _.groupBy(this.props.monsters, "generalCategory");

            const tables = Object.values(allMonsters).map(category => {
                const ct = category[0].generalCategory;

                return (
                    <div key={ct}>
                        <h5>{ct}</h5>
                        <table className='highlight responsive-table'>
                            <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {category.map(monster => {
                                return (<MonsterListItem key={monster.id} data={monster}/>)
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            });

            return (
                <div>
                    <h4 className="center">Monsters</h4>
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