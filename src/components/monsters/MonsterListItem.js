import React from 'react'
import {withRouter} from "react-router-dom";

class MonsterListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/monsters/' + this.props.data.className)
    };

    render() {
        const {id, name, level, exp, hp, sp, atkStat, acc, agi, def, spd, generalCategory} = this.props.data;
        const isMonster = generalCategory === 'Normal Monsters' || generalCategory === 'Bosses';

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                {isMonster && <td>{level}</td>}
                {isMonster && <td>{exp}</td>}
                {isMonster && <td>{hp}</td>}
                {isMonster && <td>{sp}</td>}
                {isMonster && <td>{atkStat}</td>}
                {isMonster && <td>{acc}</td>}
                {isMonster && <td>{agi}</td>}
                {isMonster && <td>{def}</td>}
                {isMonster && <td>{spd}</td>}
            </tr>
        )
    }
}

export default withRouter(MonsterListItem)