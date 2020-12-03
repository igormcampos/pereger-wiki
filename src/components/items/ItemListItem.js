import React from 'react'
import {withRouter} from "react-router-dom";
import styled from 'styled-components'
import {connect} from "react-redux";
import SpriteItem from './../images/SpriteItem'

const ItemImage = styled.img({
    width: 30,
    height: 30
});

class ItemListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/items/' + this.props.data.itemId)
    };

    render() {
        const {itemId, className, bonus, req, name, currency, sellPrice, price, tradable, points, generalCategory} = this.props.data;
        const isEquipment = generalCategory !== 'Consumables' && generalCategory !== 'Materials' && generalCategory !== 'Money' && generalCategory !== 'None';

        return (
            
            <tr key={itemId} onClick={this.handleDetail}>
                {this.props.sprite!==undefined && <td><SpriteItem key={this.props.sprite.filename} data={this.props.sprite}/></td>}
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

const mapStateToProps = (state, ownProps) => {
    let sprite = state.sprites && state.sprites.frames && state.sprites.frames.find(sprite => sprite.filename == ownProps.data.name);
    return {
        sprite: sprite
    }
};

export default connect(mapStateToProps)(withRouter(ItemListItem))