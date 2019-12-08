import React from 'react'
import {connect} from 'react-redux'

class QuestDetail extends React.Component {
    render() {
        if (this.props.quest) {
            const {title, desc, target, amount, reward, rewardAmt} = this.props.quest;

            return (
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <p>{target && amount && 'Requirement: ' + target + ' x ' + amount}</p>
                    <p>{reward && rewardAmt && 'Rewards: ' + reward + ' x ' + rewardAmt}</p>
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