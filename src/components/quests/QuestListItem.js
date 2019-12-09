import React from 'react'
import {withRouter} from "react-router-dom";

class QuestListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/quests/' + this.props.data.name)
    };

    render() {
        const {id, title, desc, target, reward, amount, rewardAmt, objective} = this.props.data;

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{title}</td>
                <td>{desc}</td>
                <td>{target && amount ?
                    // objective 0; quest = 1; talk = 2; kill = 3; action = 4
                    objective === 2 ?
                        'Talk to ' + target.name
                    : objective === 3 ?
                        'Kill ' + amount + ' ' + target.name
                    : target.className + ' x ' + amount
                    : ''
                }</td>
                <td>{reward && rewardAmt && reward.className + ' x ' + rewardAmt}</td>
            </tr>
        )
    }
}

export default withRouter(QuestListItem)