import React from 'react'

import {connect} from 'react-redux'
import SpriteItem from '../images/SpriteItem'



class About extends React.Component {
    render() {
        if (this.props.sprites) {      
            const sprites = this.props.sprites.frames.map(sprite => {
                return (<SpriteItem key={sprite.filename} data={sprite}/>)
            });

            const sprite = sprites.find((sprite) => sprite.props.data.filename === 'pereger-title');

            return (
                <div className="container">
                    <h4 className="center">About</h4>
                    <p>Feel free to send feedback on the wiki to me:</p>
                    <p><b>Email: </b><a href="mailto:igorcampos@protonmail.com?subject=Wiki Feedback">igorcampos@protonmail.com</a></p>
                    <p><b>Discord: </b> Yun#2052</p> 
                    
                    {/* <Spritesheet
                        style={{ width:80, height:80 }}
                        image={spriteSheetURL}
                        widthFrame={40}
                        heightFrame={40}
                        autoplay={false}
                    /> */}
                    

                    <h4 className="center">Sprites</h4>
                    <table className="highlight">
                        <thead>
                        <tr>
                            <th>Filename</th>
                        </tr>
                        </thead>
                        <tbody>
                            {sprite}
                        </tbody>
                    </table>

                </div>
            )
        }

        return (
            <div>
                <h4>Loading about...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sprites: state.sprites
    }
};

export default connect(mapStateToProps)(About)
