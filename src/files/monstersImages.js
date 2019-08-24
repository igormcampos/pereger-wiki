const monstersImages = {
// Mobs
    1: require('./../static/img/monsters/animated/crow.gif'),
    2: require('./../static/img/monsters/animated/badger.gif'),
    3: require('./../static/img/monsters/animated/manihot.gif'),
    4: require('./../static/img/monsters/animated/nepetha.gif'),
    5: require('./../static/img/monsters/animated/wolf-pup.gif'),
    6: require('./../static/img/monsters/animated/wolf.gif'),
    7: require('./../static/img/monsters/animated/crab.gif'),
    // 8: require('./../static/img/monsters/animated/'),
    9: require('./../static/img/monsters/animated/scarecrow.gif'),
    // 10: require('./../static/img/monsters/animated/'),
    // 11: require('./../static/img/monsters/animated/'),
    12: require('./../static/img/monsters/animated/wisp.gif'),
    13: require('./../static/img/monsters/animated/clam.gif'),
    14: require('./../static/img/monsters/animated/bear.gif'),
    15: require('./../static/img/monsters/animated/golem.gif'),
    16: require('./../static/img/monsters/animated/volta.gif'),
    17: require('./../static/img/monsters/animated/goblin.gif'),
    18: require('./../static/img/monsters/animated/cabalus.gif'),
    19: require('./../static/img/monsters/animated/gunter.gif'),


    23: require('./../static/img/monsters/animated/lacerta.gif'),
    24: require('./../static/img/monsters/animated/eques-lizard.gif'),
    25: require('./../static/img/monsters/animated/magum-lizard.gif'),
    26: require('./../static/img/monsters/animated/arcum-lizard.gif'),
    27: require('./../static/img/monsters/animated/magma-knight.gif'),
    28: require('./../static/img/monsters/animated/scoria-brute.gif'),
    29: require('./../static/img/monsters/animated/molten-slime.gif'),
    30: require('./../static/img/monsters/animated/mini-slime.gif'),

// { monsterId: 23, className: "Lacerta", name: "Lacerta", level: 61, exp: 1320, hp: 650, sp: 300, str: 70, mag: 1, acc: 70, agi: 72, def: 78, attack: 1, spd: .4, splat: 0, respawn: 90, passives: "8003,1;5023,10", actives: ""},
// { monsterId: 24, className: "EquesLizard", name: "Eques Lizard", level: 66, exp: 1580, hp: 750, sp:300, str: 73, mag: 1, acc: 76, agi: 76, def: 79, attack: 1, spd: .4, splat: 0, respawn: 90, passives: "8001,5", actives: "12008,10,.15"},
// { monsterId: 25, className: "MagumLizard", name: "Magum Lizard", level: 69, exp: 1720, hp: 800, sp: 300, str: 1, mag: 82, acc: 80, agi: 80, def: 80, attack: 24, spd: .4, splat: 0, respawn: 90, passives: "10024,10", actives: "5026,10,.15"},
// { monsterId: 26, className: "ArcumLizard", name: "Arcum Lizard", level: 63, exp: 1440, hp: 700, sp: 300, str: 1, mag: 1, acc: 75, agi: 75, def: 70, dex: 83, attack: 2, spd: .4, splat: 0, respawn: 90, passives: "12009,5", actives: "12007,3,.2"},
// { monsterId: 27, className: "MagmaKnight", name: "Magma Knight", level: 71, exp: 1820, hp: 850, sp: 300, str: 82, mag: 1, acc: 85, agi: 85, def: 88, attack: 1, spd: .3, splat: 0, respawn: 90, passives: "9025,5;8003,5", actives: "12011,5,.2"},
// { monsterId: 28, className: "ScoriaBrute", name: "Scoria Brute", level: 75, exp: 2030, hp: 920, sp: 300, str: 1, mag: 93, dex: 1, acc: 90, agi: 90, def: 87, attack: 23, spd: .3, splat: 0, respawn: 90, passives: "9025,7", actives: "5024,10,.2"},
// { monsterId: 29, className: "MoltenSlime", name: "Molten Slime", level: 79, exp: 2250, hp: 950, sp: 300, str: 1, mag: 98, acc: 95, agi: 95, def: 92, attack: 1, spd: .5, splat: 0, respawn: 90, passives: "9025,3", actives: "5025,10,.3" },
// { monsterId: 30, className: "MiniSlime", name: "Mini Slime", level: 78, exp: 500, hp: 250, sp: 300, str: 1, mag: 98, acc: 95, agi: 95, def: 92, attack: 1, spd: .5, splat: 0, respawn: 90, passives: "9025,3", actives: ""},


//Bosses
    4001: require('./../static/img/monsters/animated/alpha-wolf.gif'),
    4002: require('./../static/img/monsters/animated/alpha-wolf.gif'),
    4003: require('./../static/img/monsters/animated/alpha-wolf.gif'),
    4004: require('./../static/img/monsters/animated/alpha-wolf.gif'),

    4006: require('./../static/img/monsters/animated/king-polypus.gif'),
    4007: require('./../static/img/monsters/animated/king-polypus.gif'),
    4008: require('./../static/img/monsters/animated/king-polypus.gif'),
    4009: require('./../static/img/monsters/animated/king-polypus.gif'),

    4010: require('./../static/img/monsters/animated/visius-ent.gif'),
    4011: require('./../static/img/monsters/animated/visius-ent.gif'),
    4012: require('./../static/img/monsters/animated/visius-ent.gif'),
    4013: require('./../static/img/monsters/animated/visius-ent.gif'),

    4014: require('./../static/img/monsters/animated/vibro-mons.gif'),
    4015: require('./../static/img/monsters/animated/vibro-mons.gif'),
    4016: require('./../static/img/monsters/animated/vibro-mons.gif'),
    4017: require('./../static/img/monsters/animated/vibro-mons.gif'),

    4018: require('./../static/img/monsters/animated/bellator.gif'),

// NPC
//     2001: require('./../static/img/monsters/animated/'),
//     2002: require('./../static/img/monsters/animated/'),
//     2003: require('./../static/img/monsters/animated/'),
//     2004: require('./../static/img/monsters/animated/'),
//     2005: require('./../static/img/monsters/animated/'),
//     2006: require('./../static/img/monsters/animated/'),
//     2007: require('./../static/img/monsters/animated/'),
//     2008: require('./../static/img/monsters/animated/'),
//     2009: require('./../static/img/monsters/animated/'),
//     2010: require('./../static/img/monsters/animated/'),
//     2011: require('./../static/img/monsters/animated/'),
//     2012: require('./../static/img/monsters/animated/'),
//     2013: require('./../static/img/monsters/animated/'),

// Friendly Monsters
    6001: require('./../static/img/monsters/animated/cow.gif'),
};

export default monstersImages