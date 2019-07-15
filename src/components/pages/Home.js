import React from 'react'
import {NavLink} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Welcome to the Pereger Wiki!</p>
                <p>We are still building this page, so some things may be a little outdated or strange, please bear with it for now.</p>
                <ul className="collection">
                    <li className="collection-item"><NavLink to='/items'>Items</NavLink></li>
                    {/*<li className="collection-item"><NavLink to='/'>Weapons</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Melee Weapons</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Ranged Weapons</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Magic Weapons</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Secondary Weapons</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Books</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Shields</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Quivers</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Armours</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Boots</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Gloves</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Helmets</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Rings</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Necklaces</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Consumables</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Materials</NavLink></li>*/}
                    <li className="collection-item"><NavLink to='/abilities'>Abilities</NavLink></li>
                    {/*<li className="collection-item"><NavLink to='/'>General Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Fighter Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Magic Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Defense Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Knight Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Miscellaneous Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Buff Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Survival Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Hunter Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Support Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Conditions Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Offense Condition Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Defense Condition Abilities</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Spells (active abilities)</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Elemental Spells</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Knight Spells</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Hunter Spells</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Enemy Abilities</NavLink></li>*/}
                    <li className="collection-item"><NavLink to='/quests'>Quests</NavLink></li>
                    {/*<li className="collection-item"><NavLink to='/'>Conditions</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Maps</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Locations</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>World Map</NavLink></li>*/}
                    <li className="collection-item"><NavLink to='/monsters'>Monsters</NavLink></li>
                    {/*<li className="collection-item"><NavLink to='/'>Normal Monsters</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Boss Monsters</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>Friendly Monsters</NavLink></li>*/}
                    {/*<li className="collection-item"><NavLink to='/'>XP Table</NavLink></li>*/}
                </ul>
            </div>
        )
    }
}

export default Home