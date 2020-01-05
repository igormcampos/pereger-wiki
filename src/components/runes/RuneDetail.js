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
    marginTop: 100,
    justifySelf: 'center'
});

const Image = styled.img({
    width: 50,
    height: 50
});

class RuneDetail extends React.Component {
    render() {
        if (this.props.rune) {
            const {desc, className, sellPrice, name, ability} = this.props.rune;
            const imageName = name.replace(/-/g, '');
            const upgradeTable = this.props.upgrades && this.props.upgrades.map(upgrade => {
               return (
                   <tr key={upgrade.id}>
                       <td>{upgrade.T}</td>
                       <td>{upgrade.L}</td>
                       {upgrade.mats && upgrade.mats.length === 3 && upgrade.mats.map((mat, index) => {
                           return <td key={index}>{mat}</td>
                       })}
                   </tr>
               )
            });

            return (
                <DetailContainer>
                    <div>
                        <h4>{className}</h4>
                        <p>{desc}</p>
                        {ability && <p>Ability: <Link to={'/abilities/' + ability}>{className}</Link></p>}
                        <p><b>Sell Price:</b> {sellPrice}</p>

                        <h5>Upgrade Table</h5>
                        {upgradeTable && <table className='highlight responsive-table'>
                            <thead>
                            <tr>
                                <th>Tier</th>
                                <th>Level</th>
                                <th>Minae</th>
                                <th>Legendary</th>
                                <th>Aurum</th>
                            </tr>
                            </thead>
                            <tbody>
                            {upgradeTable}
                            </tbody>
                        </table>}
                    </div>
                    <ImageContainer>
                        <Image src={itemsImages[imageName]} alt={className}/>
                    </ImageContainer>
                </DetailContainer>
            )
        }
        return (
            <div>
                <h4>Loading rune...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let runeId = ownProps.match.params.runeId;
    let rune = state.runes && state.runes.find(rune => rune.itemId == runeId);
    return {
        rune: rune,
        upgrades: state.upgrades
    }
};

export default connect(mapStateToProps)(RuneDetail)