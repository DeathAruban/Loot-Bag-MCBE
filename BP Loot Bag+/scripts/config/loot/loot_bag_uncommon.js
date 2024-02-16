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
const loot_bag_uncommon = {
    loot:{
        1:{
            chance:40,
            name:'Stone and Diorite',
            description:'are you short of stone?',
            drop:{
                item:{
                    1:{id:"minecraft:stone", amount:16},
                    2:{id:"minecraft:diorite", amount:12}
                }
            }
        },
        2:{
            chance:20,
            name:'book',
            description:'Are you short on book?',
            drop:{
                item:{
                    1:{id:"minecraft:book", amount:8}
                }
            }
        },
        3:{
            chance:40,
            name:'Oak Wood and Birch Wood',
            description:'are you short of Wood?',
            drop:{
                item:{
                    1:{id:"minecraft:oak_log", amount:16},
                    2:{id:"minecraft:birch_log", amount:16},
                    3:{id:"minecraft:spruce_log", amount:16}
                }
            }
        },
        4:{
            chance:10,
            name:'Iron Ingot',
            description:'are you short of Iron?',
            drop:{
                item:{
                    2:{id:"minecraft:iron_ingot", amount:3}
                }
            }
        },
        5:{
            chance:30,
            name:'Cake',
            description:'are you hungry?',
            drop:{
                item:{
                    1:{id:"minecraft:cake", amount:3},
                }
            }
        },
        6:{
            chance:40,
            name:'Sugar Cane and Bamboo',
            description:'do you want to do your own cultivation?',
            drop:{
                item:{
                    1:{id:"minecraft:sugar_cane", amount:6},
                    2:{id:"minecraft:bamboo", amount:4}
                }
            }
        },
        7:{
            chance:15,
            name:'Lantern',
            description:'do you need light?',
            drop:{
                item:{
                    1:{id:"minecraft:lantern", amount:8},
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
            name:'Iron Pickaxe',
            description:'do you need tools?',
            drop:{
                item:{
                    1:{id:"minecraft:iron_pickaxe", amount:1},
                }
            }
        },
        10:{
            chance:30,
            name:'Bed and Chest',
            description:'do you need to sleep and store materials?',
            drop:{
                item:{
                    1:{id:"minecraft:bed", amount:1},
                    2:{id:"minecraft:chest", amount:2}
                }
            }
        }
    }  
}
export {loot_bag_uncommon}