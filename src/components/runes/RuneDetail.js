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

class RuneDetail extends React.Component {
    render() {
        if (this.props.rune) {
            const {desc, className, sellPrice, name} = this.props.rune;
            let imageName = name.replace(/-/g, '');

            return (
                <DetailContainer>
                    <div>
                        <h4>{className}</h4>
                        <p>{desc}</p>
                        <p><b>Sell Price:</b> {sellPrice}</p>
                        UPGRADE TABLE HERE
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
        rune: rune
    }
};

export default connect(mapStateToProps)(RuneDetail)