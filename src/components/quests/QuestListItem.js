import React from 'react'
import {withRouter} from "react-router-dom";

class QuestListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/quests/' + this.props.data.name)
    };

    render() {
        const {id, title, desc, target, reward, amount, rewardAmt} = this.props.data;

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{title}</td>
                <td>{desc}</td>
                <td>{target && amount && target + ' x ' + amount}</td>
                <td>{reward && rewardAmt && reward + ' x ' + rewardAmt}</td>
            </tr>
        )
    }
}

export default withRouter(QuestListItem)