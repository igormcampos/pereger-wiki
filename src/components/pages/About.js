import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">About</h4>
                <p>Feel free to send feedback on the wiki to me:</p>
                <p><b>Email: </b><a href="mailto:igorcampos@protonmail.com?subject=Wiki Feedback">igorcampos@protonmail.com</a></p>
                <p><b>Discord: </b> Yun#2052</p>
                <h5>TODO List:</h5>
                <ul>
                    <li>Add images to all items and monsters based on className</li>
                    <li>Change IDs into human readable text everywhere</li>
                    <li>Search bar fuzzy</li>
                    <li>Update world map</li>
                    <li>Link items to quests</li>
                </ul>
            </div>
        )
    }
}

export default About