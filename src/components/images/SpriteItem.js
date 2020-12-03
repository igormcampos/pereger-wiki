import React from 'react'
import {withRouter} from "react-router-dom";
import SpriteSheet  from 'react-spritesheet';

const spriteSheetURL = 'https://peregeronline.com/game-files/graphics.png';

class SpriteItem extends React.Component {
    render() {
        const {filename, frame, rotated, trimmed, spriteSourceSize, sourceSize} = this.props.data;
            
        return (
            <SpriteSheet.Sprite filename={spriteSheetURL} x={frame.x} y={frame.y} width={frame.w} height={frame.h} />
        )
    }
}

export default withRouter(SpriteItem)