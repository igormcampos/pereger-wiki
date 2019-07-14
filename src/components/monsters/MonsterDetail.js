import React from 'react'
import {connect} from 'react-redux'

class MonsterDetail extends React.Component {
    render() {
        if (this.props.monster) {
            const {name} = this.props.monster;

            return (
                <div>
                    <h4>{name}</h4>
                </div>
            )
        }
        return (
            <div>
                <h4>Loading monster...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let monsterClass = ownProps.match.params.monster_class;
    return {
        monster: state.monsters && state.monsters.find(item => item.className === monsterClass)
    }
};

export default connect(mapStateToProps)(MonsterDetail)