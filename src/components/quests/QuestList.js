import React from 'react'
import {connect} from 'react-redux'

import QuestListItem from './QuestListItem'

class QuestList extends React.Component {
    render() {
        if (this.props.quests) {
            const quests = this.props.quests.map(quest => {
                return (<QuestListItem key={quest.id} data={quest}/>)
            });

            return (
                <div>
                    <h4 className="center">Quests</h4>
                    <table className="highlight">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th className='hide-on-med-and-down'>Description</th>
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
        return (
            <div>
                <h4>Loading quests...</h4>
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