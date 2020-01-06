import React from 'react'
import {connect} from 'react-redux'

import RuneListItem from './RuneListItem'
import {updateTabs} from "../../actions/rootActions";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ImageHeader = styled.th({
    height: 66
});

class RuneList extends React.Component {
    state = {};

    render() {
        if (this.props.runes) {
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
                <div>
                    <h4 className="center">Runes</h4>

                    <h5>What is the rune System?</h5>
                    <p>The rune system is the new way to upgrade your equipment!
                    With it, when equips drop it will have from 0 to 4 rune slots at random. Each slot can hold a rune that grants the player a passive ability.
                    The rune drop chance is based on the monster level, higher level monsters will drop easier, it will only drop from normal monsters near the player level, players with level higher than 70 will still have chance from dropping from the level 70 monsters because there are not stronger monsters on the game right now.
                    It is not possible to equip more than one rune of the same type on each equipment.
                    Runes can be attached, removed and upgraded at <Link to='/monsters/2004'>Grego</Link>(Karabranth) or <Link to='/monsters/2010'>Aegon</Link>(Taragin), that are now our local rune-smiths.</p>

                    <h5>How does it work?</h5>
                    <p>Upgrades in runes work by using materials, as players are used to, and can go from tier 1 level 1 (T1L1) all the way to tier 5 level 5 (T5L5).
                    Runes always drop from monsters at T1L1. Runes can be upgrade from level 1 to 5 using materials. To upgrade a rune from T1L5 to T2L1 the player will need to fuse two runes that are T1L5 to receive one T2L1 rune.
                    In total players would need 16 base runes to fully upgrade a rune to tier 5 if they have all the materials.
                    All runes are trade-able, and all runes can drop from all normal monsters.</p>

                    <h5>Equips Slots Chance</h5>
                    <table className='highlight'>
                        <thead>
                        <tr>
                            <th>Slots</th>
                            <th>Normal Loot</th>
                            <th>Legendary Loot</th>
                            <th>Bellator Loot</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>0</td>
                            <td>70%</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>30%</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>15%</td>
                            <td>70%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>5%</td>
                            <td>30%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td>100%</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className='highlight'>
                        <thead>
                        <tr>
                            <ImageHeader>Image</ImageHeader>
                            <th>Name</th>
                            <th>Sell Price</th>
                            <th>Equipment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.runes.map(rune => {
                            return (<RuneListItem key={rune.itemId} data={rune}/>)
                        })}
                        </tbody>
                    </table>

                    {upgradeTable && <div>
                        <h5>Upgrade Table</h5>
                        <table className='highlight responsive-table'>
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
                        </table>
                    </div>}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading runes...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        runes: state.runes,
        upgrades: state.upgrades
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabs: (tabs) => {
            dispatch(updateTabs(tabs))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RuneList)