import React from 'react'
import {withRouter} from "react-router-dom";
import itemsImages from '../../files/itemsImages'
import styled from 'styled-components'

const ItemImage = styled.img({
    width: 30,
    height: 30
});

class RuneListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/runes/' + this.props.data.itemId)
    };

    render() {
        const {itemId, className, sellPrice, equip, name} = this.props.data;
        let imageName = name.replace(/-/g, '');

        return (
            <tr key={itemId} onClick={this.handleDetail}>
                <td><ItemImage src={itemsImages[imageName]} alt={className}/></td>
                <td>{className}</td>
                <td>{sellPrice}</td>
                <td>{equip}</td>
            </tr>
        )
    }
}

export default withRouter(RuneListItem)