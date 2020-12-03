import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.id)
    };

    render() {
        const {id, name, category, mana, desc, equip, value, chance, maxLevel} = this.props.data;
        let modDesc = desc.replace(/\[x]+/g, (1+value)*100+'%');
        modDesc = modDesc.replace(/\[y]+/g, (chance*100)+ '%');
        modDesc = modDesc.replace(/\[z]+/g, maxLevel*value);
        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{mana}</td>
                <td className='hide-on-med-and-down'>{modDesc}</td>
                <td>{equip}</td>
            </tr>
        )
    }
}

export default withRouter(AbilityListItem)
