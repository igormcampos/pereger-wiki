import React from 'react'
import {withRouter} from "react-router-dom";

class AbilityItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.className)
    };

    render() {
        const {id, name, className, category, passive, desc, equip} = this.props.data;
        let {value} = this.props.data;
        if (className === 'BetterBows') {
            value += 'ms'
        } else if (className !== 'Paramedic') {
            value = (value * 100) + '%'
        }

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

export default withRouter(AbilityItem)