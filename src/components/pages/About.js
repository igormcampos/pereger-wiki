import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">About</h4>
                <p>Feel free to send feedback on the wiki to me:</p>
                <p><b>Email: </b><a href="mailto:igorcampos@protonmail.com?subject=Wiki Feedback">igorcampos@protonmail.com</a></p>
                <p><b>Discord: </b> Yun#2052</p>
                <ul className="collection">
                    <li className="collection-header"><b>TODO List:</b></li>
                    <li className="collection-item">Finish search bar</li>
                    <li className="collection-item">Search bar result list</li>
                    <li className="collection-item">Search bar click on the results will search it</li>
                    <li className="collection-item">Search bar show if result is an item/quest/ability etc</li>
                    <li className="collection-item">I'm aware of the Bellator loot table by level, it will be fixed later</li>
                    <li className="collection-item">Conditions list / detail</li>
                    <li className="collection-item">Achievements list / detail</li>
                    <li className="collection-item">Tabs to jump to categories on mobile</li>
                    <li className="collection-item">Breadcrumbs</li>
                    <li className="collection-item">Updated world map</li>
                    <li className="collection-item">XP Table</li>
                    <li className="collection-item">Contact form for this page</li>
                    <li className="collection-item">Calc how much it takes to LV up</li>
                    <li className="collection-item">Calc the approximate loot you will get in X time killing X mob</li>
                    <li className="collection-item">Calc for how much materials you need to upgrade equipment based on mob</li>
                </ul>
            </div>
        )
    }
}

export default About