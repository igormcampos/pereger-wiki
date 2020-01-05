import React from 'react'
import {connect} from 'react-redux'
import _ from 'underscore'

import RuneListItem from './RuneListItem'
import {updateTabs} from "../../actions/rootActions";
import styled from "styled-components";

const ImageHeader = styled.th({
    height: 66
});

class RuneList extends React.Component {
    state = {};

    render() {
        if (this.props.runes) {
            return (
                <div>
                    <h4 className="center">Runes</h4>
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
                            console.log(rune);
                            return (<RuneListItem key={rune.itemId} data={rune}/>)
                        })}
                        </tbody>
                    </table>
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
        runes: state.runes
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