import React from 'react'
import {connect} from 'react-redux'
import _ from 'underscore'

import ItemListItem from './ItemListItem'
import {updateTabs} from "../../actions/rootActions";
import styled from "styled-components";

const ImageHeader = styled.th({
    height: 66
});

class ItemList extends React.Component {
    state = {};

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextProps !== this.props && nextProps.items) {
            let items = _.groupBy(nextProps.items, "generalCategory");
            nextProps.updateTabs(Object.keys(items));
            this.setState({
                allItems: items
            });
        }
    }

    render() {
        if (this.props.items) {
            const allItems = _.groupBy(this.props.items, "generalCategory");

            const tables = Object.values(allItems).map(category => {
                const ct = category[0].generalCategory;
                const isEquipment = ct !== 'Consumables' && ct !== 'Materials' && ct !== 'Money' && ct !== 'None';

                return (
                    <div key={ct}>
                        <h5>{ct}</h5>
                        <table className='highlight responsive-table'>
                            <thead>
                            <tr>
                                {<ImageHeader>Image</ImageHeader>}
                                <th>Name</th>
                                {isEquipment && <th>Bonus</th>}
                                {isEquipment && <th>Requirements</th>}
                                {ct === 'Materials' && <th>Category</th>}
                                {ct === 'Materials' && <th>Minae</th>}
                                {ct === 'Consumables' && <th>Buy</th>}
                                {ct !== 'Money' && <th>Sell</th>}
                                {ct === 'Consumables' && <th>Tradable</th>}
                            </tr>
                            </thead>
                            <tbody>
                            {category.map(item => {
                                return (<ItemListItem key={item.itemId} data={item}/>)
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            });

            return (
                <div>
                    <h4 className="center">Items</h4>
                    {tables}
                </div>
            )
        }
        return (
            <div>
                <h4>Loading items...</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabs: (tabs) => {
            dispatch(updateTabs(tabs))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)