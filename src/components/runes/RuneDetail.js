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
    componentDidMount() {
        Number.prototype.countDecimals = function () {
            if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
            return this.toString().split(".")[1].length || 0;
        }
    }

    render() {
        if (this.props.rune) {
            const {desc, className, sellPrice, name, ability, values} = this.props.rune;
            const imageName = name.replace(/-/g, '');
            const upgradeTable = this.props.upgrades && this.props.upgrades.map(upgrade => {
                return (
                    <tr key={upgrade.id}>
                        <td>{upgrade.T}</td>
                        <td>{upgrade.L}</td>
                        {values && Object.values(values[upgrade.T-1]).map((value, index) => {
                            let suffix = '';
                            let header = Object.keys(values[0])[index];
                            if (header !== 'x') {
                                value = (((upgrade.T - 1) * 5 + upgrade.L) * value);
                            }
                            if (['Turbo', 'Better Crits', 'More Crits'].includes(className)) {
                                if (className === 'Turbo') {
                                    value = (1 / (0.5 - value));
                                    value = value.countDecimals() > 2 ? value.toFixed(2) : value;
                                    value = `${value} tiles per second`;
                                } else {
                                    value = value * 100;
                                    value = value.countDecimals() > 2 ? value.toFixed(2) : value;
                                    value = `Add ${value} % to base`;
                                }
                            } else {
                                switch (header) {
                                    case 'critX':
                                    case 'critY':
                                    case 'per':
                                    case 'wpn':
                                    case 'x':
                                        value = value * 100;
                                        suffix = '%';
                                        break;
                                    case 'atkRate':
                                    case 'dur':
                                        suffix = 'ms';
                                        break;
                                }
                                value = value.countDecimals() > 2 ? value.toFixed(2) : value;
                            }
                            return <td key={`stats${index}`}>{`${value} ${suffix}`}</td>
                        })}
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

                        {upgradeTable && <div>
                            <h5>Upgrade Table</h5>
                            <table className='highlight responsive-table'>
                                <thead>
                                <tr>
                                    <th>Tier</th>
                                    <th>Level</th>
                                    {values && Object.keys(values[0]).map(value => {
                                        let header = value;
                                        switch (value) {
                                            case 'critX':
                                                header = 'Critical Chance';
                                                break;
                                            case 'critY':
                                                header = 'Critical Multiplier';
                                                break;
                                            case 'atkRate':
                                                header = 'Attack Rate';
                                                break;
                                            case 'x':
                                                header = 'Chance';
                                                break;
                                            case 'dur':
                                                header = 'Duration';
                                                break;
                                            case 'per':
                                                header = 'Percentage';
                                                break;
                                            case 'wpn':
                                                header = 'Weapon Damage';
                                                break;
                                        }
                                        return <th key={value}>{header.toUpperCase()}</th>
                                    })}
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