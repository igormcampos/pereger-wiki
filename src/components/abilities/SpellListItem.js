import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.className)
    };

    render() {
        const {id, name, category, mana, desc, equip} = this.props.data;
        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{mana}</td>
                <td className='hide-on-med-and-down'>{desc}</td>
                <td>{equip}</td>
            </tr>
        )
    }
}

export default withRouter(AbilityListItem)
