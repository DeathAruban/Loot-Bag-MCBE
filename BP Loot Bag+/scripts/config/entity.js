/**
 * ||========================================================================================================================||
 * ||                                                                                                                        ||
 * ||  ________  _______   ________  _________  ___  ___  ________  ________  ___  ___  ________  ________  ________         ||
 * || |\   ___ \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \       ||
 * ||  \ \  \_|\ \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\ /\ \  \|\  \ \  \\ \  \     ||
 * ||   \ \  \ \\ \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \   __  \ \   _  _\ \  \\\  \ \   __  \ \   __  \ \  \\ \  \    ||
 * ||    \ \  \_\\ \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \ \  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \ \  \ \  \\ \  \   ||
 * ||     \ \_______\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\\ \__\  ||
 * ||      \|_______|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\|__| \|__|  ||
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 * ||                                                                                                                        ||  
 * ||                                               ★ Please do not modify this code ★                                      ||  
 * ||                                   ► This Mod was created for Minecraft Bedrock Edition ◄                               || 
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 */

/**
* @made_by Death_Aruban
* @version [1.0.0-Alpha]
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

const entitys = {

    /**
     * entities not belonging to minecraft bedrock, first add the value before : and then its name da:floating_text
     * example
     * 
     * 74: {                                                        ==> follow the present numerical order we are currently in 73, continuing from 74
     * id: 'da:floating_text',                                      ==> entity id to release
     * drop: false,                                                 ==> whether the entity must release it or not
     * loot: {
     *  0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 30},  ==> item that must be released,with min and max indicating how much and the probability it can release
     *  1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 30}
     * }
     *},
     */

    //Hostile mobs list

    1: {
        id: 'minecraft:blaze',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    2: {
        id: 'minecraft:creeper',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    3: {
        id: 'minecraft:drowned',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    4: {
        id: 'minecraft:elder_guardian',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 5, chance: 60},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 5, chance: 40},
            2: {id: 'da:loot_bag_rare', min: 1, max: 5, chance: 40},
            3: {id: 'da:loot_bag_epic', min: 1, max: 2, chance: 20},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 10}
        }
    },
    5: {
        id: 'minecraft:ender_dragon',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 5, chance: 60},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 5, chance: 40},
            2: {id: 'da:loot_bag_rare', min: 1, max: 5, chance: 40},
            3: {id: 'da:loot_bag_epic', min: 1, max: 2, chance: 20},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 50}
        }
    },
    6: {
        id: 'minecraft:enderman',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    7: {
        id: 'minecraft:endermite',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    8: {
        id: 'minecraft:evocation_illager',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    9: {
        id: 'minecraft:ghast',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    10: {
        id: 'minecraft:guardian',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    11: {
        id: 'minecraft:hoglin',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    12: {
        id: 'minecraft:husk',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    13: {
        id: 'minecraft:magma_cube',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    14: {
        id: 'minecraft:phantom',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    15: {
        id: 'minecraft:piglin_brute',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    16: {
        id: 'minecraft:piglin',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    17: {
        id: 'minecraft:pillager',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    18: {
        id: 'minecraft:ravager',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    19: {
        id: 'minecraft:shulker',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    20: {
        id: 'minecraft:silverfish',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    21: {
        id: 'minecraft:skeleton',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    22: {
        id: 'minecraft:slime',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    23: {
        id: 'minecraft:spider',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    24: {
        id: 'minecraft:stray',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    25: {
        id: 'minecraft:vex',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    26: {
        id: 'minecraft:vindicator',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    27: {
        id: 'minecraft:warden',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 5, chance: 60},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 5, chance: 40},
            2: {id: 'da:loot_bag_rare', min: 1, max: 5, chance: 40},
            3: {id: 'da:loot_bag_epic', min: 1, max: 2, chance: 20},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 50}
        }
    },
    28: {
        id: 'minecraft:witch',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    29: {
        id: 'minecraft:wither_skeleton',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    30: {
        id: 'minecraft:wither',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 5, chance: 60},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 5, chance: 40},
            2: {id: 'da:loot_bag_rare', min: 1, max: 5, chance: 40},
            3: {id: 'da:loot_bag_epic', min: 1, max: 2, chance: 20},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 50}
        }
    },
    31: {
        id: 'minecraft:zoglin',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    32: {
        id: 'minecraft:zombie_horse',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    33: {
        id: 'minecraft:zombie_pigman',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    34: {
        id: 'minecraft:zombie_villager_v2',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    35: {
        id: 'minecraft:zombie_villager',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    36: {
        id: 'minecraft:zombie',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    //Passive and neutral mobs list

37: {
        id: 'minecraft:allay',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    38: {
        id: 'minecraft:axolotl',
        drop: false,
        loot: {}
    },
    39: {
        id: 'minecraft:bat',
        drop: false,
        loot: {}
    },
    40: {
        id: 'minecraft:bee',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    41: {
        id: 'minecraft:cat',
        drop: false,
        loot: {}
    },
    42: {
        id: 'minecraft:chicken',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    43: {
        id: 'minecraft:cow',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    44: {
        id: 'minecraft:dolphin',
        drop: false,
        loot: {}
    },
    45: {
        id: 'minecraft:donkey',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    46: {
        id: 'minecraft:fish',
        drop: false,
        loot: {}
    },
    47: {
        id: 'minecraft:fox',
        drop: false,
        loot: {}
    },
    48: {
        id: 'minecraft:frog',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    49: {
        id: 'minecraft:glow_squid',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    50: {
        id: 'minecraft:goat',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    51: {
        id: 'minecraft:horse',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    52: {
        id: 'minecraft:iron_golem',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 3, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    53: {
        id: 'minecraft:llama',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    54: {
        id: 'minecraft:mooshroom',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    55: {
        id: 'minecraft:mule',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    56: {
        id: 'minecraft:ocelot',
        drop: false,
        loot: {}
    },
    57: {
        id: 'minecraft:panda',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    58: {
        id: 'minecraft:parrot',
        drop: false,
        loot: {}
    },
    59: {
        id: 'minecraft:pig',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    60: {
        id: 'minecraft:polar_bear',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    61: {
        id: 'minecraft:rabbit',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    62: {
        id: 'minecraft:salmon',
        drop: false,
        loot: {}
    },
    63: {
        id: 'minecraft:sheep',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    64: {
        id: 'minecraft:sniffer',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    65: {
        id: 'minecraft:snow_golem',
        drop: false,
        loot: {}
    },
    66: {
        id: 'minecraft:squid',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    67: {
        id: 'minecraft:strider',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    68: {
        id: 'minecraft:tropicalfish',
        drop: false,
        loot: { 0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 30}}
    },
    69: {
        id: 'minecraft:turtle',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    70: {
        id: 'minecraft:villager_v2',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    71: {
        id: 'minecraft:villager',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    72: {
        id: 'minecraft:wandering_trader',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    73: {
        id: 'minecraft:wolf',
        drop: false,
        loot: {}
    },
    //player

    73: {
        id: 'minecraft:player',
        drop: false,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 10},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 4},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 3},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 2},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
    //Education Edition list

    73: {
        id: 'minecraft:npc',
        drop: false,
        loot: {}
    },
    /**
     * entities not belonging to minecraft bedrock, first add the value before : and then its name da:floating_text
     * example
     * 
     * 74: {                                                        ==> follow the present numerical order we are currently in 73, continuing from 74
     * id: 'da:floating_text',                                      ==> entity id to release
     * drop: false,                                                 ==> whether the entity must release it or not
     * loot: {
     *  0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 30},  ==> item that must be released,with min and max indicating how much and the probability it can release
     *  1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 30}
     * }
     *},
     */
}
export {entitys}