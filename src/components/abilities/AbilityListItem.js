import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.className)
    };

    render() {
        const {id, name, value, category, mana, passive, generalCategory, desc, equip, cool} = this.props.data;
        const hideDescription = category !== 'Enemy' ? 'hide-on-med-and-down' : '';

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                {!['Enemy Skills', 'Enemy Condition Skills'].includes(generalCategory) && <td>{category}</td>}
                {generalCategory !== 'Enemy Skills' && generalCategory !== "Active Skills" && <td>{value}</td>}
                {!passive && generalCategory !== 'Enemy Skills' && <td>{mana}</td>}
                {generalCategory !== "Active Skills" && generalCategory !== "Enemy Skills" && <td>{passive ? "Yes" : "No"}</td>}
                <td className={hideDescription}>{desc}</td>
                {!['Enemy Skills', 'Enemy Condition Skills'].includes(generalCategory) && <td>{equip}</td>}
                {generalCategory === 'Enemy Skills' && <td>{passive ? 'Yes' : 'No'}</td>}
                {generalCategory === 'Enemy Skills' && <td>{cool ? cool + 's' : undefined}</td>}
            </tr>
        )
    }
}

export default withRouter(AbilityListItem)
