import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class QuestDetail extends React.Component {
    render() {
        if (this.props.quest) {
            const {title, desc, target, amount, reward, rewardAmt, objective} = this.props.quest;

            return (
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <p>Requirements: {target && amount ?
                        // objective 0; quest = 1; talk = 2; kill = 3; action = 4
                        objective === 2 ?
                            <Link to={'/monsters/' + target.name}>{'Talk to ' + target.name}</Link>
                        : objective === 3 ?
                            <Link to={'/monsters/' + target.className}>{'Kill ' + amount + ' ' + target.name}</Link>
                        : <Link to={target.category === 10 ? '/items/' + target.className : '/items/' + target.name}>{target.className + ' x ' + amount}</Link>
                        : ''}
                    </p>
                    <p>Rewards: {reward && rewardAmt && <Link to={target.category === 10 ? '/items/' + target.className : '/items/' + target.name}>reward.className</Link> + ' x ' + rewardAmt}</p>
                </div>
            )
        }
        return (
            <div>
                <h4>Loading quest...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let questName = ownProps.match.params.quest_name;
    return {
        quest: state.quests && state.quests.find(quest => quest.name === questName)
    }
};

export default connect(mapStateToProps)(QuestDetail)