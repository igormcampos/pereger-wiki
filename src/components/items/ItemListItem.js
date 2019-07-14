import React from 'react'
import {withRouter} from "react-router-dom";

class ItemListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.className)
    };

    render() {
        const {id, name, value, category, passive, desc, equip} = this.props.data;

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                <td>{category}</td>
                {category !== 'Enemy' && <td>{value}</td>}
                <td>{passive ? "Yes" : "No"}</td>
                <td>{desc}</td>
                {category !== 'Enemy' && <td>{equip}</td>}
            </tr>
        )
    }
}

export default withRouter(ItemListItem)