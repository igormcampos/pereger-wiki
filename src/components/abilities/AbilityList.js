import React from 'react'
import {connect} from 'react-redux'

import AbilityItem from './AbilityItem'

class AbilityList extends React.Component {
    render() {
        const allAbilities = {
            data: [
                {
                    type: 'Active Skills', abilities: this.props.abilities.filter(ability => {
                        return ability.geralCategory === "Active Skills"
                    })
                },
                {
                    type: 'Passive Skills', abilities: this.props.abilities.filter(ability => {
                        return ability.geralCategory === "Passive Skills"
                    })
                },
                {
                    type: 'Condition Skills', abilities: this.props.abilities.filter(ability => {
                        return ability.geralCategory === "Condition Skills"
                    })
                },
                {
                    type: 'Enemy Skills', abilities: this.props.abilities.filter(ability => {
                        return ability.geralCategory === "Enemy Skills"
                    })
                }
            ]
        };

        const tables = allAbilities.data.map(category => {
            return (
                <div>
                    <h5>{category.type}</h5>
                    <table className="highlight responsive-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            {category.type !== 'Enemy Skills' && <th>Per Level</th>}
                            <th>Passive?</th>
                            <th>Description</th>
                            {category.type !== 'Enemy Skills' && <th>Equipment</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {category.abilities.map(ability => {
                            return (<AbilityItem key={ability.id} data={ability}/>)
                        })}
                        </tbody>
                    </table>
                </div>
            )
        });

        return (
            <div>
                <h4>Abilities</h4>
                {tables}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        abilities: state.abilities
    }
};

export default connect(mapStateToProps)(AbilityList)