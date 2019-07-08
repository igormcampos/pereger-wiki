import React from 'react'
import {connect} from 'react-redux'

import AbilityItem from './AbilityItem'

class AbilityList extends React.Component {
    render() {
        const ab = this.props.abilities.map(ability => {
            return (<AbilityItem key={ability.id} data={ability}/>)
        });

        return (
            <table className="highlight responsive-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Per Level</th>
                    <th>Passive?</th>
                    <th>Description</th>
                    <th>Equipment</th>
                </tr>
                </thead>
                <tbody>
                { ab }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        abilities: state.abilities
    }
};

export default connect(mapStateToProps)(AbilityList)