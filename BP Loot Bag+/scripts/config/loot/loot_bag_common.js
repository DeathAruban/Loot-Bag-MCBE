/**
 * item:{
 *   1:{id:"minecraft:emerald",name:'base', amount:5},
 *   2:{id:"minecraft:emerald_block",name:'Good Emerald',lore:'cool block emerald',amount:1},
 * }
 * sound:
 * effect:{
 *   1:{id:'haste',time:10,amplifer:1,particle:false},
 *   2:{id:'strength',time:10,amplifer:1,particle:false}
 * }
 * message:{
 *   1:'ciao come stai',
 *   2:'spero bene'
 * }
 * 
 * command:{
 *   1:'title @s title ciao',
 *   2:'title @s actionbar gg'
 * }
 * 
 * particles:'minecraft:totem_particle',
 * 
 * effect:{
 *   1:{id:'haste',time:10,amplifer:1,particle:false},
 *   2:{id:'strength',time:10,amplifer:1,particle:false},
 * }    
 */
const loot_bag_common = {
    loot:{
        1:{
            chance:40,
            name:'Stone and Gravel',
            description:'are you short of stone?',
            drop:{
                item:{
                    1:{id:"minecraft:cobblestone", amount:8},
                    2:{id:"minecraft:gravel", amount:6}
                }
            }
        },
        2:{
            chance:50,
            name:'Dirt',
            description:'Are you short on dirt?',
            drop:{
                item:{
                    1:{id:"minecraft:dirt", amount:16}
                }
            }
        },
        3:{
            chance:40,
            name:'Oak Wood and Birch Wood',
            description:'are you short of Wood?',
            drop:{
                item:{
                    1:{id:"minecraft:oak_log", amount:8},
                    2:{id:"minecraft:birch_log", amount:8}
                }
            }
        },
        4:{
            chance:10,
            name:'Coal and Raw Iron',
            description:'are you short of Coal?',
            drop:{
                item:{
                    1:{id:"minecraft:coal", amount:3},
                    2:{id:"minecraft:raw_iron", amount:2}
                }
            }
        },
        5:{
            chance:30,
            name:'Bread and Apple',
            description:'are you hungry?',
            drop:{
                item:{
                    1:{id:"minecraft:apple", amount:5},
                    2:{id:"minecraft:bread", amount:3}
                }
            }
        },
        6:{
            chance:30,
            name:'Wheat Seeds and Pumpkin Seeds',
            description:'do you want to do your own cultivation?',
            drop:{
                item:{
                    1:{id:"minecraft:pumpkin_seeds", amount:3},
                    2:{id:"minecraft:wheat_seeds", amount:5}
                }
            }
        },
        7:{
            chance:30,
            name:'Torch',
            description:'do you need light?',
            drop:{
                item:{
                    1:{id:"minecraft:torch", amount:16},
                }
            }
        },
        8:{
            chance:30,
            name:'Stone and Gravel',
            description:'are you short of stone?',
            drop:{
                item:{
                    1:{id:"minecraft:oak_log", amount:8},
                    2:{id:"minecraft:birch_log", amount:8}
                }
            }
        },
        9:{
            chance:10,
            name:'Stone Shovel and Stone Pickaxe',
            description:'do you need tools?',
            drop:{
                item:{
                    1:{id:"minecraft:stone_pickaxe", name:'§6Super Stone Pickaxe', lore:'no effect sorry...', amount:1},
                    2:{id:"minecraft:stone_shovel", amount:1}
                }
            }
        },
        10:{
            chance:20,
            name:'Crafting Table and Furnace',
            description:'do you want to create or cook?',
            drop:{
                item:{
                    1:{id:"minecraft:crafting_table", amount:1},
                    2:{id:"minecraft:furnace", amount:1}
                }
            }
        }
    }
    
}
export {loot_bag_common}


/**
 * settings:{
    chance:'20.2000',
    entity:false,
    chest:false,
},
 */