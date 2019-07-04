import React from 'react'

class Ability extends React.Component {
    render() {
        const {id, className, name, helpLine, category, value, maxLevel, passive, desc, equip} = this.props.data

        return (
            <div>
                <p>ID: { id }</p>
                <p>Class: { className }</p>
                <p>Name: { name }</p>
                <p>Help: { helpLine }</p>
                <p>Category: { category }</p>
                <p>Per level: { value * 100 }%</p>
                <p>Max: { maxLevel }</p>
                <p>Passive: { passive }</p>
                <p>Description: { desc }</p>
                <p>Equip: { equip }</p>
            </div>
        )
    }
}

export default Ability