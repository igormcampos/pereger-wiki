import React from 'react'
import {connect} from 'react-redux'

import QuestListItem from './QuestListItem'

class QuestList extends React.Component {
    render() {
        const quests = this.props.quests.map(quest => {
            return (<QuestListItem key={quest.id} data={quest}/>)
        });

        return (
            <div>
                <h4>Quests</h4>
                <table className="highlight responsive-table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Requirement</th>
                        <th>Reward</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quests}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quests: state.quests
    }
};

export default connect(mapStateToProps)(QuestList)