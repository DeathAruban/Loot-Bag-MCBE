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

const loot_bag_epic = {
    loot:{
        1:{
            chance:40,
            name:'To lend a hand',
            description:'you will find something useful',
            drop:{
                item:{
                    1:{id:"minecraft:obsidian", amount:16},
                    2:{id:"minecraft:leather", amount:16},
                    3:{id:"minecraft:ender_pearl", amount:4}
                }
            }
        },
        2:{
            chance:2,
            name:'Xp Day',
            description:'do you need xp?',
            drop:{
                command:{
                    1:'xp 60L @s'
                 }
            }
        },
        3:{
            chance:20,
            name:'Gold Day',
            description:'are you looking for gold?',
            drop:{
                item:{
                    1:{id:"minecraft:golden_apple", amount:2},
                    2:{id:"minecraft:gold_ingot", amount:32},
                    3:{id:"minecraft:gold_nugget", amount:16}
                }
            }
        },
        4:{
            chance:5,
            name:'Diamond',
            description:'are you short of Diamond?',
            drop:{
                item:{
                    1:{id:"minecraft:diamond", amount:10},
                    2:{id:"minecraft:diamond_block",name:'§bSpecial Diamond Block',lore:'keep it carefully!', amount:1}
                }
            }
        },
        5:{
            chance:30,
            name:'Cooked Food',
            description:'are you hungry?',
            drop:{
                item:{
                    1:{id:"minecraft:cooked_beef", amount:16},
                    2:{id:"minecraft:cooked_chicken", amount:16},
                    3:{id:"minecraft:cooked_mutton", amount:16},
                    4:{id:"minecraft:cooked_cod", amount:16},
                    5:{id:"minecraft:cooked_rabbit", amount:16},
                    6:{id:"minecraft:cooked_salmon", amount:16},
                }
            }
        },
        6:{
            chance:16,
            name:'Potion Day',
            description:'do you need potions?',
            drop:{
                item:{
                    1:{id:"minecraft:potion", amount:16},
                    2:{id:"minecraft:blaze_rod", amount:3}
                },
                command:{
                    1:'give @s potion 1 13',
                    2:'give @s potion 1 5',
                    3:'give @s potion 1 9',
                 },
            }
        },
        7:{
            chance:15,
            name:'Sea Lantern',
            description:'do you need light?',
            drop:{
                item:{
                    1:{id:"minecraft:sea_lantern", amount:16},
                    2:{id:"minecraft:glowstone", amount:16},
                }
            }
        },
        8:{
            chance:1,
            name:'Loot Bag legendary free',
            description:'do you need more loot bags?',
            drop:{
                item:{
                    1:{id:"da:loot_bag_legendary", amount:1},
                    2:{id:"da:loot_bag_common", amount:16},
                    3:{id:"da:loot_bag_rare", amount:3}
                },
                sound:'random.totem'
            }
        },
        9:{
            chance:3,
            name:'Diamond tools',
            description:'do you need tools?',
            drop:{
                item:{
                    1:{id:"minecraft:diamond_pickaxe", amount:1},
                    4:{id:"minecraft:diamond_axe", amount:1},
                    5:{id:"minecraft:diamond_sword", amount:1},
                }
            }
        },
        10:{
            chance:20,
            name:'Heart Of The Sea',
            description:'do you need Heart Of The Sea?',
            drop:{
                item:{
                    1:{id:"minecraft:heart_of_the_sea", amount:1}
                }
            }
        }
    }    
}
export {loot_bag_epic}