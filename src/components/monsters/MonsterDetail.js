import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import styled from "styled-components";
import monstersImages from "../../files/monstersImages";

const DetailContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr'
});

const ImageContainer = styled.div({
    justifySelf: 'center',
    marginTop: 100
});

const Image = styled.img({
    width: 70,
    height: 70
});

class MonsterDetail extends React.Component {
    render() {
        if (this.props.monster) {
            const {monsterId, name, level, exp, hp, sp, atkStat, acc, agi, def, spd, generalCategory} = this.props.monster;
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
            const activeAbilities = this.props.activeSkills && this.props.activeSkills.map((act, index) => {
                if (act) {
                    return <span key={act.id}>{index > 0 && ', '}<Link to={'/abilities/' + act.className}>{act.name}</Link>{act.level && 'LV' + act.level}</span>
                }
                return ''
            });
            const passiveAbilities = this.props.passiveSkills && this.props.passiveSkills.map((pass, index) => {
                if (pass) {
                    return <span key={pass.id}>{index > 0 && ', '}<Link to={'/abilities/' + pass.className}>{pass.name}</Link>{pass.level && ' LV' + pass.level}</span>
                }
                return ''
            });

            return (
                <DetailContainer>
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
                        {isMonster && passiveAbilities && <p>Passive Skills: {passiveAbilities}</p>}
                        {isMonster && activeAbilities && <p>Active Skills: {activeAbilities}</p>}
                        {drops && drops.length > 0 && <p><b>Loot:</b></p>}
                        {drops}
                    </div>
                    <ImageContainer>
                        {generalCategory !== "Friendly NPC's" && <Image src={monstersImages[monsterId]} alt={name}/>}
                    </ImageContainer>
                </DetailContainer>
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
    let passiveSkills = monster && monster.passives && monster.passives.split(';').map(pass => {
        let ability = pass.split(',');
        pass = state.abilities && state.abilities.find(ab => {
            return ab.id === parseInt(ability[0])
        });
        if (pass && pass.generalCategory !== 'Enemy Skills') {
            pass.level = ability[1];
        }
        return pass
    });
    let activeSkills = monster && monster.actives && monster.actives.split(';').map(act => {
        let ability = act.split(',');
        act = state.abilities && state.abilities.find(ab => {
            return ab.id === parseInt(ability[0])
        });
        if (act && act.generalCategory !== 'Enemy Skills') {
            act.level = ability[1];
        }
        return act
    });
    let loot = monster && state.loot && state.loot.filter(drop => {
        return monster.lootId.includes(drop.lootId);
    });
    loot = loot && loot.map(drop => {
        drop.ref = state.items && state.items.find(item => {
            return item.itemId === drop.item
        });
        return drop
    });
    return {
        monster: monster,
        loot: loot,
        activeSkills: activeSkills,
        passiveSkills: passiveSkills
    }
};

export default connect(mapStateToProps)(MonsterDetail)