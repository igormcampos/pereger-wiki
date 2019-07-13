import React from 'react'
import {connect} from 'react-redux'

class AbilityItem extends React.Component {
    render() {
        const {title, desc, target, amount, reward, rewardAmt} = this.props.quest;

        const quest = this.props.quest ? (
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p>Requirement: {target} x {amount}</p>
                <p>Rewards: {reward} x {rewardAmt}</p>
            </div>
        ) : (
            <h4>Loading Quest...</h4>
        );

        return (
            <div>
                {quest}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let questName = ownProps.match.params.quest_name;
    return {
        quest: state.quests.find(quest => quest.name === questName)
    }
};

export default connect(mapStateToProps)(AbilityItem)