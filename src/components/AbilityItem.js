import React from 'react'
import {Link} from "react-router-dom";

class AbilityItem extends React.Component {
    render() {
        const {id, name, className, category, value, passive, desc, equip} = this.props.data;

        return (
            <tr key={id}>
                <td><Link to={'/abilities/' + className}>{name}</Link></td>
                <td>{category}</td>
                <td>{value * 100}%</td>
                <td>{passive ? "Yes" : "No"}</td>
                <td>{desc}</td>
                <td>{equip}</td>
            </tr>
        )
    }
}

export default AbilityItem