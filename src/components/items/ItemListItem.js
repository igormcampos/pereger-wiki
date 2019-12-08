import React from 'react'
import {withRouter} from "react-router-dom";
import itemsImages from '../../files/itemsImages'
import styled from 'styled-components'

const ItemImage = styled.img({
    width: 30,
    height: 30
});

class ItemListItem extends React.Component {
    handleDetail = () => {
        if (this.props.data.generalCategory === 'Materials') {
            this.props.history.push('/items/' + this.props.data.className)
        } else {
            this.props.history.push('/items/' + this.props.data.name)
        }
    };

    render() {
        const {itemId, className, bonus, req, name, currency, sellPrice, price, tradable, points, generalCategory} = this.props.data;
        const isEquipment = generalCategory !== 'Consumables' && generalCategory !== 'Materials' && generalCategory !== 'Money' && generalCategory !== 'None';

        let imageName = name.replace(/-/g, '');

        return (
            <tr key={itemId} onClick={this.handleDetail}>
                {generalCategory !== 'Money' && <td><ItemImage src={itemsImages[imageName]} alt={className}/></td>}
                <td>{className}</td>
                {isEquipment && <td className="upper">{bonus}</td>}
                {isEquipment && <td className="upper">{req}</td>}
                {generalCategory === 'Materials' && <td className="capital">{name}</td>}
                {generalCategory === 'Materials' && <td>{points}</td>}
                {generalCategory === 'Consumables' && <td>{price} {currency === 'nummus' && currency}</td>}
                {generalCategory !== 'Money' && <td>{sellPrice}</td>}
                {generalCategory === 'Consumables' && <td>{tradable === false ? "No" : "Yes"}</td>}
            </tr>
        )
    }
}

export default withRouter(ItemListItem)