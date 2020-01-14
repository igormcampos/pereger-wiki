import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class QuestDetail extends React.Component {
    render() {
        if (this.props.quest) {
            const {title, desc, target, amount, reward, rewardAmt, objective} = this.props.quest;
            const requirementsLink = <p>Requirements: {target && amount ?
                // objective 0; quest = 1; talk = 2; kill = 3; action = 4
                objective === 2 ?
                    <Link to={'/monsters/' + target.monsterId}>{'Talk to ' + target.name}</Link>
                    : objective === 3 ?
                    <Link to={'/monsters/' + target.monsterId}>{'Kill ' + amount + ' ' + target.name}</Link>
                    : <Link to={'/items/' + target.itemId}>{target.className + ' x ' + amount}</Link>
                : ''}
            </p>;
            const rewardLink = reward && rewardAmt && <Link to={'/items/' + reward.itemId}>{reward.className}</Link>;

            return (
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    {target && amount && requirementsLink}
                    {rewardLink && <p>Rewards: {rewardLink} x {rewardAmt}</p>}
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
    let id = ownProps.match.params.questId;
    return {
        quest: state.quests && state.quests.find(quest => quest.id == id)
    }
};

export default connect(mapStateToProps)(QuestDetail)