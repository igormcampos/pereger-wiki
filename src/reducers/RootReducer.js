const initState = {
    abilities: [
        {
            "id": 10001,
            "className": "HandCombat",
            "name": "Hand Combat",
            "helpLine": "Hand-to-hand Combat",
            "category": "Fighter",
            "value": 0.015,
            "maxLevel": 10,
            "passive": true,
            "desc": "When no weapon is equipped, the player's damage is increased as the player's life increases.",
            "equip": [0]
        },
        {
            "id": 10002,
            "className": "WandCaster",
            "name": "Wand Caster",
            "helpLine": "Improves Wand Stats",
            "category": "Mage",
            "value": 0.05,
            "maxLevel": 10,
            "passive": true,
            "desc": "Improves the stats of wands.",
            "equip": [4]
        },
        {
            "id": 10003,
            "className": "NoArmor",
            "name": "No Armor",
            "helpLine": "Master the Birthday Suit",
            "category": "Defence",
            "value": 0.05,
            "maxLevel": 10,
            "passive": true,
            "desc": "Improves the agility when no chest armor is equipped."
        },
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_ABILITY') {
        return {
            ...state,
            abilities: state.abilities.filter(ability => {
                return action.id !== ability.id
            })
        }
    }
    return state;
};

export default rootReducer