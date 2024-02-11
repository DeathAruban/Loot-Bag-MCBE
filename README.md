<p align="center">
     <a href="https://github.com/DeathAruban/Loot-Bag">
		<img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_mcbe.png" loading="eager" />
	</a><br>
	<b>A highly customisable, Addon Loot Bag+ for Minecraft: Bedrock Edition written in Json and javascript MC (API 1.20.60)</b>
</p>
<p align="center">
	<a href="https://github.com/DeathAruban/Lore-Item-MCBE/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Loot-Bag?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Lore-Item-MCBE/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Loot-Bag/latest/total?sort=semver"></a>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DeathAruban/Loot-Bag">
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
<img alt="GitHub" src="https://img.shields.io/github/license/DeathAruban/Loot-Bag">
</p>

# Description
on how to use and a video to better understand the use comes out tomorrow

## Language support 🌍
- English (United States)
- English (United Kingdom)
- if you find errors or your language is missing, send me a message, if you provide me with a correct translation I will add credits for support 🤝

# Check if the version or where you are using the addon is compatible

| Supported | World | Realms |Server Dedicated | Custom servers | Windows | Mobile | PS4/PS5 | Xbox | Nintendo Switch |
| ------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| 1.20.60   |:white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| 1.19.x   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 
| 1.18.x   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 
| 1.17.x   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: |  
| 1.16.x   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 
| < 1.15.x | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: |

# How does it work
## Through the give command or in the creative you can find 6 item  Loot Bag ( common, uncommon, rare, epic, legendary ), one Loot Bag Book

<p align="center">
 <img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_item.png" loading="eager" />
</p>
## Config:
You can find config file in `./config/getoffmylawn.json`. To reload it, just type `/goml admin reload` in chat/console.

```json5
{
  "makeshiftRadius": 10,                // Radius of makeshift claim
  "reinforcedRadius": 25,               // Radius of reinforced claim
  "glisteningRadius": 50,               // Radius of glistening claim
  "crystalRadius": 75,                  // Radius of crystal claim
  "emeradicRadius": 125,                // Radius of emeradic claim
  "witheredRadius": 200,                // Radius of withered claim
  "claimProtectsFullWorldHeight": false,// Makes claim protect area from bottom of the world to top
  "dimensionBlacklist": [               // Allows to blacklist specific dimensions
    "example:dim"
  ],             
  "regionBlacklist": {                  // Allows to blacklist specific regions
    "example:dim": [
      {
        x1: -200,
        y1: -64,
        z1: -200,
        x2: 200,
        y2: 512,
        z2: 200,
      }
    ]
  },
  "enabledAugments": {                  // Allows to enable/disable augments per their id
    "goml:lake_spirit_grace": true,
    "goml:angelic_aura": true,
    "goml:greeter": true,
    "goml:force_field": true,
    "goml:village_core": true,
    "goml:withering_seal": true,
    "goml:ender_binding": true,
    "goml:heaven_wings": true,
    "goml:chaos_zone": true
  },
  "allowedBlockInteraction": [          // Allows to interact with specific blocks in claim
    "somemod:store"
  ],
  "allowedEntityInteraction": [         // Allows to interact with specific entities in claim
    "minecraft:villager"
  ],
  "messagePrefix": "<dark_gray>[<#a1ff59>GOML</color>]", // Default prefix used in messages
  "placeholderNoClaimInfo": "<gray><italic>Wilderness",
  "placeholderNoClaimOwners": "<gray><italic>Nobody",
  "placeholderNoClaimTrusted": "<gray><italic>Nobody",
  "placeholderClaimCanBuildInfo": "${owners} <gray>(<green>${anchor}</green>)",
  "placeholderClaimCantBuildInfo": "${owners} <gray>(<red>${anchor}</red>)"
}
```
