import React from 'react'

import AbilityItem from './AbilityItem'
import {abilities} from './../json/abilities'

class AbilityList extends React.Component {
    render() {
        const ab = abilities.map(ability => {
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

export default AbilityList