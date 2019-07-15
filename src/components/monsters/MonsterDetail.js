import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class MonsterDetail extends React.Component {
    render() {
        if (this.props.monster) {
            const {name, level, exp, hp, sp, atkStat, acc, agi, def, spd, generalCategory, passives, actives} = this.props.monster;
            const isMonster = generalCategory === 'Normal Monsters' || generalCategory === 'Bosses';
            const drops = this.props.loot && this.props.loot.map(loot => {
                if (loot.ref) {
                    let amount = '';
                    if (loot.quantity[0] === loot.quantity[1]) {
                        amount = 'x' + loot.quantity[0]
                    } else {
                        amount = 'x' + loot.quantity[0] + ' ~ x' + loot.quantity[1]
                    }
                    return <div key={loot.ref.monsterId}><Link to={loot.ref.generalCategory === 'Materials' ? '/items/' + loot.ref.className : '/items/' + loot.ref.name}>{loot.ref.className}</Link> ({loot.probability}%) {amount}<br/></div>
                } else {
                    return <div>Loading loot...</div>
                }
            });

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
                    {drops && drops.length > 0 && <p><b>Loot:</b></p>}
                    {drops}
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
    let monster = state.monsters && state.monsters.find(item => item.className === monsterClass);
    let loot = monster && state.loot && state.loot.filter(drop => {
        return drop.npc === monster.name.toLowerCase()
    });
    loot = loot && loot.map(drop => {
        drop.ref = state.items && state.items.find(item => {
            return item.itemId === drop.item
        });
        return drop
    });
    return {
        monster: monster,
        loot: loot
    }
};

export default connect(mapStateToProps)(MonsterDetail)