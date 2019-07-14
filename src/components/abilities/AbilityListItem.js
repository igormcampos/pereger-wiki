import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/items/' + this.props.data.className)
    };

    render() {
        const {id, name, value, category, mana, passive, generalCategory, desc, equip} = this.props.data;
        const hideDescription = category !== 'Enemy' ? 'hide-on-med-and-down' : '';

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                {category !== 'Enemy' && <td>{category}</td>}
                {category !== 'Enemy' && generalCategory !== "Active Skills" && <td>{value}</td>}
                {!passive && category !== 'Enemy' && <td>{mana}</td>}
                {generalCategory !== "Active Skills" && generalCategory !== "Enemy Skills" && <td>{passive ? "Yes" : "No"}</td>}
                <td className={hideDescription}>{desc}</td>
                {category !== 'Enemy' && <td>{equip}</td>}
            </tr>
        )
    }
}

export default withRouter(AbilityListItem)