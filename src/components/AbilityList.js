import React from 'react'

import Ability from './Ability'
import { abilities } from './../json/abilities'

class AbilityList extends React.Component {
    render() {
        const ab = abilities.map(ability => {
            return (<Ability data={ability} />)
        })

        return (
            <div>
                { ab }
            </div>
        )
    }
}

export default AbilityList