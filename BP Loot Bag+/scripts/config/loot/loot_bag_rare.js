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

const loot_bag_rare = {
    loot:{
        1:{
            chance:40,
            name:'Granite, Diorite and Andesite',
            description:'are you short of stones?',
            drop:{
                item:{
                    1:{id:"minecraft:andesite", amount:16},
                    2:{id:"minecraft:diorite", amount:16},
                    2:{id:"minecraft:granite", amount:16}
                }
            }
        },
        2:{
            chance:2,
            name:'Enchanting',
            description:'Are you short on book?',
            drop:{
                item:{
                    1:{id:"minecraft:enchanting_table", amount:1}
                },
                command:{
                    1:'xp 5L @s',
                    2:'title @s title §dEnchanting Day'
                 },
            }
        },
        3:{
            chance:40,
            name:'Woods',
            description:'are you short of Wood?',
            drop:{
                item:{
                    1:{id:"minecraft:oak_log", amount:16},
                    2:{id:"minecraft:birch_log", amount:16},
                    3:{id:"minecraft:spruce_log", amount:16},
                    4:{id:"minecraft:acacia_log", amount:16},
                    5:{id:"minecraft:dark_oak_log", amount:16},
                }
            }
        },
        4:{
            chance:5,
            name:'Diamond',
            description:'are you short of Diamond?',
            drop:{
                item:{
                    2:{id:"minecraft:diamond", amount:2}
                }
            }
        },
        5:{
            chance:30,
            name:'Beef,Chicken And Mutton',
            description:'are you hungry?',
            drop:{
                item:{
                    1:{id:"minecraft:cooked_beef", amount:16},
                    2:{id:"minecraft:cooked_chicken", amount:16},
                    3:{id:"minecraft:cooked_mutton", amount:16},
                }
            }
        },
        6:{
            chance:40,
            name:'Seeds and Berries',
            description:'do you want to do your own cultivation?',
            drop:{
                item:{
                    1:{id:"minecraft:glow_berries", amount:7},
                    2:{id:"minecraft:sweet_berries", amount:8},
                    3:{id:"minecraft:melon_seeds", amount:3},
                    4:{id:"minecraft:beetroot_seeds", amount:3},

                }
            }
        },
        7:{
            chance:15,
            name:'Sea Lantern',
            description:'do you need light?',
            drop:{
                item:{
                    1:{id:"minecraft:sea_lantern", amount:4},
                }
            }
        },
        8:{
            chance:1,
            name:'Loot Bag epic free',
            description:'do you need more loot bags?',
            drop:{
                item:{
                    1:{id:"da:loot_bag_epic", amount:1}
                },
                sound:'random.totem'
            }
        },
        9:{
            chance:3,
            name:'Iron tools',
            description:'do you need tools?',
            drop:{
                item:{
                    1:{id:"minecraft:iron_pickaxe", amount:1},
                    2:{id:"minecraft:iron_shovel", amount:1},
                    3:{id:"minecraft:iron_hoe", amount:1},
                    4:{id:"minecraft:iron_axe", amount:1},
                    5:{id:"minecraft:iron_sword", amount:1},
                }
            }
        },
        10:{
            chance:30,
            name:'Nautilus Shell',
            description:'do you need Nautilus Shell?',
            drop:{
                item:{
                    1:{id:"minecraft:nautilus_shell", amount:3}
                }
            }
        }
    }    
}
export {loot_bag_rare}