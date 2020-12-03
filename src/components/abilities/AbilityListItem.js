import React from 'react'
import {withRouter} from "react-router-dom";
import SpriteItem from './../images/SpriteItem'
import styled from "styled-components";
import {connect} from "react-redux";

const RuneImage = styled.img({
    width: 30,
    height: 30
});

class AbilityListItem extends React.Component {
    handleDetail = () => {
        this.props.history.push('/abilities/' + this.props.data.id)
    };

    render() {
        const {id, name, category, mana, passive, generalCategory, desc, cool} = this.props.data;
        const hideDescription = category !== 'Enemy' ? 'hide-on-med-and-down' : '';

        return (
            <tr key={id} onClick={this.handleDetail}>
                <td>{name}</td>
                {!passive && generalCategory !== 'Enemy Skills' && <td>{mana}</td>}
                <td className={hideDescription}>{desc}</td>
                {generalCategory === 'Enemy Skills' && <td>{cool ? cool + 's' : undefined}</td>}
                {['Passive Skills', 'Condition Skills'].includes(generalCategory) && this.props.rune && 
                this.props.sprite!==undefined && <td><SpriteItem key={this.props.sprite.filename} data={this.props.sprite}/></td>}
            </tr>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let rune = state.runes.find(rune => rune.ability === ownProps.data.id);
    let sprite = rune && state.sprites && state.sprites.frames && state.sprites.frames.find(sprite => sprite.filename == rune.name);

    return {
        rune: rune,
        sprite: sprite
    }
};

export default connect(mapStateToProps)(withRouter(AbilityListItem))
