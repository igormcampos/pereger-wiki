import React from 'react'
import {connect} from 'react-redux'

class MonsterDetail extends React.Component {
    render() {
        if (this.props.monster) {
            const {name, level, exp, hp, sp, atkStat, acc, agi, def, spd, generalCategory, passives, actives} = this.props.monster;
            const isMonster = generalCategory === 'Normal Monsters' || generalCategory === 'Bosses';

            return (
                <div>
                    <h4>{name}</h4>
                    {isMonster && <p>Level: {level}</p>}
                    {isMonster && <p>Experience: {exp}</p>}
                    {isMonster && <p>Health Points: {hp}</p>}
                    {isMonster && <p>Spirit Points: {sp}</p>}
                    {isMonster && <p>Attack: {atkStat}</p>}
                    {isMonster && <p>Accuracy: {acc}</p>}
                    {isMonster && <p>Agility: {agi}</p>}
                    {isMonster && <p>Defense: {def}</p>}
                    {isMonster && <p>Speed: {spd}</p>}
                    {isMonster && passives && <p>Passive Skills: {passives}</p>}
                    {isMonster && actives && <p>Active Skills: {actives}</p>}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading monster...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let monsterClass = ownProps.match.params.monster_class;
    return {
        monster: state.monsters && state.monsters.find(item => item.className === monsterClass)
    }
};

export default connect(mapStateToProps)(MonsterDetail)