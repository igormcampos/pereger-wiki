import React from 'react'
import {withRouter} from "react-router-dom";

class ItemListItem extends React.Component {
    handleDetail = () => {
        if (this.props.data.generalCategory === 'Materials') {
            this.props.history.push('/items/' + this.props.data.className)
        } else {
            this.props.history.push('/items/' + this.props.data.name)
        }
    };

    render() {
        const {itemId, className, bonus, req, name, currency, sellPrice, price, tradable, matReq, points, generalCategory} = this.props.data;
        const isEquipment = generalCategory !== 'Consumables' && generalCategory !== 'Materials' && generalCategory !== 'Money' && generalCategory !== 'None';
        const isUpgradeable = isEquipment && generalCategory !== 'Necklaces' && generalCategory !== 'Rings';

        return (
            <tr key={itemId} onClick={this.handleDetail}>
                <td>{className}</td>
                {isEquipment && <td className="upper">{bonus}</td>}
                {isEquipment && <td className="upper">{req}</td>}
                {generalCategory === 'Materials' && <td className="capital">{name}</td>}
                {generalCategory === 'Materials' && <td>{points}</td>}
                {generalCategory === 'Consumables' && <td>{price} {currency === 'nummus' && currency}</td>}
                {generalCategory !== 'Money' && <td>{sellPrice}</td>}
                {isUpgradeable && <td>{matReq}</td>}
                {generalCategory === 'Consumables' && <td>{tradable === false ? "No" : "Yes"}</td>}
            </tr>
        )
    }
}

export default withRouter(ItemListItem)