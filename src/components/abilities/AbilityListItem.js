import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.className)
    };

    render() {
        const {id, name, value, category, mana, passive, geralCategory, desc, equip} = this.props.data;
        const hideDescription = category !== 'Enemy' ? 'hide-on-med-and-down' : '';

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                {category !== 'Enemy' && <td>{category}</td>}
                {category !== 'Enemy' && geralCategory !== "Active Skills" && <td>{value}</td>}
                {!passive && category !== 'Enemy' && <td>{mana}</td>}
                {geralCategory !== "Active Skills" && geralCategory !== "Enemy Skills" && <td>{passive ? "Yes" : "No"}</td>}
                <td className={hideDescription}>{desc}</td>
                {category !== 'Enemy' && <td>{equip}</td>}
            </tr>
        )
    }
}

export default withRouter(AbilityListItem)