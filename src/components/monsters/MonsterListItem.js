import React from 'react'
import {withRouter} from "react-router-dom";

class MonsterListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/monsters/' + this.props.data.className)
    };

    render() {
        const {id, name, generalCategory} = this.props.data;

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
            </tr>
        )
    }
}

export default withRouter(MonsterListItem)