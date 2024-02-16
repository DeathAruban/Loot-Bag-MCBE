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

const loot_bag_legendary = {
    loot:{
        1:{
            chance:3,
            name:'Beacon Time',
            description:'do you want powers?',
            drop:{
                item:{
                    1:{id:"minecraft:beacon", amount:1},
                },
                effect:{
                    1:{id:'haste',time:10000,amplifer:3,particle:true},
                    2:{id:'strength',time:10000,amplifer:3,particle:true},
                }
            }
        },
        2:{
            chance:2,
            name:'Xp Day',
            description:'do you need xp?',
            drop:{
                item:{
                    1:{id:"minecraft:experience_bottle", amount:32},
                },
                command:{
                    1:'xp 120L @s'
                 }
            }
        },
        3:{
            chance:20,
            name:'Gold Day',
            description:'are you looking for gold?',
            drop:{
                item:{
                    1:{id:"minecraft:enchanted_golden_apple", amount:6},
                    2:{id:"minecraft:gold_ingot", amount:64},
                    3:{id:"minecraft:gold_nugget", amount:64},
                    4:{id:"minecraft:gold_block", amount:15}
                }
            }
        },
        4:{
            chance:30,
            name:'Netherite',
            description:'are you short of netherite?',
            drop:{
                item:{
                    1:{id:"minecraft:netherite_ingot", amount:10}
                }
            }
        },
        5:{
            chance:25,
            name:'I do not know',
            description:'see for yourself',
            drop:{
                item:{
                    1:{id:"minecraft:elytra", amount:1},
                    2:{id:"minecraft:nether_star", amount:1},
                    3:{id:"minecraft:emerald", amount:16},
                }
            }
        },
        6:{
            chance:16,
            name:'Minerals Day',
            description:'Do You Need Minerals?',
            drop:{
                item:{
                    1:{id:"minecraft:iron_ingot", amount:64},
                    2:{id:"minecraft:iron_ingot", amount:64},
                    3:{id:"minecraft:gold_ingot", amount:64},
                    4:{id:"minecraft:gold_ingot", amount:64},
                    5:{id:"minecraft:diamond", amount:16},
                    6:{id:"minecraft:amethyst_shard", amount:32},
                    7:{id:"minecraft:copper_block", amount:64}
                }
            }
        },
        7:{
            chance:15,
            name:'Shulker',
            description:'do you need shulker boxes or parts?',
            drop:{
                item:{
                    1:{id:"minecraft:shulker_shell", amount:10},
                    2:{id:"minecraft:orange_shulker_box", amount:1},
                    3:{id:"minecraft:black_shulker_box", amount:1},
                    4:{id:"minecraft:pink_shulker_box", amount:1},
                    5:{id:"minecraft:light_blue_shulker_box", amount:1},
                }
            }
        },
        8:{
            chance:1,
            name:'Loot Bag legendary free',
            description:'do you need more loot bags?',
            drop:{
                item:{
                    1:{id:"da:loot_bag_legendary", amount:3},
                    2:{id:"da:loot_bag_common", amount:16},
                    3:{id:"da:loot_bag_rare", amount:6},
                    4:{id:"da:loot_bag_uncommon", amount:16},
                    5:{id:"da:loot_bag_epic", amount:4}
                },
                sound:'random.totem'
            }
        },
        9:{
            chance:3,
            name:'Netherite tools',
            description:'do you need tools?',
            drop:{
                item:{
                    1:{id:"minecraft:netherite_pickaxe",name:'§cNetherite Pickaxe',lore:'§r§6Legendary Tool', amount:1},
                    2:{id:"minecraft:netherite_shovel",name:'§cNetherite Shovel',lore:'§r§6Legendary Tool', amount:1},
                    3:{id:"minecraft:netherite_hoe",name:'§cNetherite Hoe',lore:'§r§6Legendary Tool', amount:1},
                    4:{id:"minecraft:netherite_axe",name:'§cNetherite Axe',lore:'§r§6Legendary Tool', amount:1},
                    5:{id:"minecraft:netherite_sword",name:'§cNetherite Sword',lore:'§r§6Legendary Tool', amount:1},
                }
            }
        },
        10:{
            chance:20,
            name:'Smithing Template day',
            description:'Do you want to upgrade or decorate your armor?',
            drop:{
                item:{
                    1:{id:"minecraft:netherite_upgrade_smithing_template", amount:1},
                    2:{id:"minecraft:spire_armor_trim_smithing_template", amount:1},
                    3:{id:"minecraft:wild_armor_trim_smithing_template", amount:1},
                    4:{id:"minecraft:dune_armor_trim_smithing_template", amount:1}
                }
            }
        }
    }       
}
export {loot_bag_legendary}