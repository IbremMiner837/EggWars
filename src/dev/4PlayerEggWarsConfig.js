let EggWarsConfig = {
    mapName: 'EggWars',
    mapLocation: '',
    mapDescription: 'EggWars is a game where you have to collect eggs and avoid the enemies.',
    mapVersion: '0.0.1',
    mapAuthor: 'EggWars',

    minPlayers: 2,
    maxPlayers: 4,
    gameTime: 10 * 60 * 20, // 10 minutes

    iron_spawner_config: {
        item_drop_time_lvl_1: 2.6 * 20, // 2.6 seconds
        item_drop_time_lvl_2: 1.6 * 20, // 1.6 seconds
        item_drop_time_lvl_3: 0.6 * 20, // 0.6 seconds
        price_for_level_1: 20,
        price_for_level_2: 36,
    },

    iron_spawner_locations: [
        {x: -1, y: 1, z: -1},
        {x: 1, y: 1, z: -1},
        {x: -1, y: 1, z: 1},
        {x: 1, y: 1, z: 1}
    ],

    gold_spawner_config: {
        item_drop_time_lvl_1: 8 * 20, // 8 seconds
        item_drop_time_lvl_2: 5 * 20, // 5 seconds
        item_drop_time_lvl_3: 2.5 * 20, // 2.5 seconds
        price_for_level_1: 10,
        price_for_level_2: 25,
    },

    gold_spawner_locations: [
        {x: -1, y: 1, z: -1},
        {x: 1, y: 1, z: -1},
        {x: -1, y: 1, z: 1},
        {x: 1, y: 1, z: 1}
    ],

    diamond_spawner_config: {
        item_drop_time_lvl_1: 15 * 20, // 15 seconds
        item_drop_time_lvl_2: 12 * 20, // 12 seconds
        item_drop_time_lvl_3: 8 * 20, // 8 second
        price_for_level_1: 15,
        price_for_level_2: 25,
    },

    diamond_spawner_locations: [
        {x: -1, y: 1, z: -1},
        {x: 1, y: 1, z: -1},
        {x: -1, y: 1, z: 1},
        {x: 1, y: 1, z: 1}
    ]
}