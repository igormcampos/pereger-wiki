import React from 'react'
import {withRouter} from "react-router-dom";
import monstersImages from './../../files/monstersImages'
import styled from "styled-components";

const MonsterImage = styled.img({
    width: 40,
    height: 40
});

class MonsterListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/monsters/' + this.props.data.className)
    };

    render() {
        const {monsterId, name, level, exp, hp, sp, atkStat, acc, agi, def, spd, generalCategory} = this.props.data;
        const isMonster = generalCategory === 'Normal Monsters' || generalCategory === 'Bosses';

        return (
            <tr key={monsterId} onClick={this.handleDetail}>
                {generalCategory !== "Friendly NPC's" && <td><MonsterImage src={monstersImages[monsterId]} alt={name}/></td>}
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