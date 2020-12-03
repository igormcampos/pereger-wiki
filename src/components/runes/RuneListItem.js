import React from 'react'
import {withRouter} from "react-router-dom";
import styled from 'styled-components'
import {connect} from "react-redux";
import SpriteItem from './../images/SpriteItem'

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
                <td><SpriteItem key={this.props.sprite.filename} data={this.props.sprite}/></td>
                <td>{className}</td>
                <td>{sellPrice}</td>
                <td>{equip}</td>
            </tr>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprite: state.sprites.frames.find(sprite => sprite.filename === ownProps.data.name)
    }
};

export default connect(mapStateToProps)(withRouter(RuneListItem))