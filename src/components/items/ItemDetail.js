import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import itemsImages from "../../files/itemsImages";
import styled from "styled-components";

const DetailContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr'
});

const ImageContainer = styled.div({
    alignSelf: 'center',
    justifySelf: 'center'
});

const Image = styled.img({
    width: 50,
    height: 50
});

class ItemDetail extends React.Component {
    render() {
        if (this.props.item) {
            const {desc, className, bonus, req, name, currency, sellPrice, price, tradable, matReq, points, generalCategory} = this.props.item;
            const isEquipment = generalCategory !== 'Consumables' && generalCategory !== 'Materials' && generalCategory !== 'Money' && generalCategory !== 'None';
            const isUpgradeable = isEquipment && generalCategory !== 'Necklaces' && generalCategory !== 'Rings';
            const drops = this.props.loot && this.props.loot.map(loot => {
                if (loot.monster) {
                    let amount = '';
                    if (loot.quantity[0] === loot.quantity[1]) {
                        amount = 'x' + loot.quantity[0]
                    } else {
                        amount = 'x' + loot.quantity[0] + ' ~ x' + loot.quantity[1]
                    }
                    return <div key={loot.monster.monsterId}><Link to={'/monsters/' + loot.monster.className}>{loot.monster.name}</Link> ({loot.probability}%) {amount}<br/></div>
                } else {
                    return <div>Loading loot...</div>
                }
            });

            let imageName = name.replace(/-/g, '');
            if (imageName === 'betaring') {
                imageName = 'silverring'
            }

            return (
                <DetailContainer>
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
                        {drops && drops.length > 0 && <p><b>Dropped by:</b></p>}
                        {drops}
                    </div>
                    <ImageContainer>
                        {generalCategory !== 'Money' && <Image src={itemsImages[imageName]} alt={className}/>}
                    </ImageContainer>
                </DetailContainer>
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
    let item = state.items && state.items.find(item => item.name === itemName);
    if (item === undefined) {
        item = state.items && state.items.find(item => item.className === itemName);
    }
    let loot = item && state.loot && state.loot.filter(drop => {
        return drop.item === item.itemId
    });
    loot = loot && loot.map(drop => {
        drop.monster = state.monsters && state.monsters.find(monster => {
            return monster.name.toLowerCase() === drop.npc
        });
        return drop
    });
    return {
        item: item,
        loot: loot
    }
};

export default connect(mapStateToProps)(ItemDetail)