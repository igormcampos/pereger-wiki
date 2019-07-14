import React from 'react'
import {connect} from 'react-redux'

class ItemDetail extends React.Component {
    render() {
        if (this.props.monster) {
            const {desc, className, bonus, req, name, currency, sellPrice, price, tradable, matReq, points, generalCategory} = this.props.monster;
            const isEquipment = generalCategory !== 'Consumables' && generalCategory !== 'Materials' && generalCategory !== 'Money' && generalCategory !== 'None';
            const isUpgradeable = isEquipment && generalCategory !== 'Necklaces' && generalCategory !== 'Rings';


            return (
                <div>
                    <h4>{className}</h4>
                    <p>{desc}</p>
                    {isEquipment && bonus && <p className="upper">{bonus}</p>}
                    {isEquipment && req && <p className="upper"><b>Requirements:</b> {req}</p>}
                    {generalCategory === 'Materials' && <p className="capital"><b>Category:</b> {name}</p>}
                    {generalCategory === 'Materials' && <p><b>Minae:</b> {points}</p>}
                    {generalCategory === 'Consumables' && <p><b>Buy Price:</b> {price} {currency === 'nummus' && currency}</p>}
                    {generalCategory !== 'Money' && <p><b>Sell Price:</b> {sellPrice}</p>}
                    {isUpgradeable && <p><b>Upgrade:</b> {matReq}</p>}
                    {generalCategory === 'Consumables' && <p>{tradable === false ? "This item is not tradable" : "This item is tradable"}</p>}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading item...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let itemName = ownProps.match.params.item_name;
    if (itemName.includes(' ')) {
        return {
            monster: state.items && state.items.find(item => item.className === itemName)
        }
    } else {
        return {
            monster: state.items && state.items.find(item => item.name === itemName)
        }
    }
};

export default connect(mapStateToProps)(ItemDetail)