<p align="center">
     <a href="https://github.com/DeathAruban/Loot-Bag">
		<img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_mcbe.png" loading="eager" />
	</a><br>
	<b>Loot Bag + for Minecraft Bedrock Edition 1.20.60 without using Experimental mode, use</b></p>
 <p align="center"><b>module_name:@minecraft/server v1.8.0</b></p>
 <p align="center"><b>module_name:@minecraft/server-ui v1.1.0</b></p>
<p align="center">
	<a href="https://github.com/DeathAruban/Loot-Bag/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Loot-Bag?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Loot-Bag/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Loot-Bag/latest/total?sort=semver"></a>
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
<img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/cT3YZJbOkBw?style=social">
<img alt="GitHub" src="https://img.shields.io/github/license/DeathAruban/Loot-Bag">
</p>

# Description
This component enriches your gaming experience, allowing you to discover various treasures by killing entities. Based on the difficulty of the entity, the reward will be higher. In addition, the following addon offers maximum customization. For more information, see the section below.

## Language support 🌍
- English (United States)
- English (United Kingdom)
- if you find errors or your language is missing, send me a message, if you provide me with a correct translation I will add credits for support 🤝

# Check if the version or where you are using the addon is compatible

| Supported | World | Realms |Server Dedicated | Custom servers | Windows | Mobile | PS4/PS5 | Xbox | Nintendo Switch |
| ------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| 1.20.60   |:white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| previous versions   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 

# How does it work
## Through the give command or in the creative you can find 6 item  Loot Bag ( common, uncommon, rare, epic, legendary ), one Loot Bag Book

<p align="center">
 <img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_item.png" loading="eager" />
</p>

# Loot Bag Book
This item will allow you to preview the treasures you might find inside the loot bags.
Crafting item: 
<p align="center"><img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/crafting_book.png" loading="eager" /></p>
By clicking on one of the loot bag icons, you will be able to view information about the bag itself and its contents. You can navigate between pages using the arrows. Pages are automatically generated each time you add a new loot in the appropriate file of the configuration folder.
<p align="center"><img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_page.png" loading="eager" /></p>
<p align="center"><img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_content.png" loading="eager" /></p>

## Loot Bag base 🌍
in the bags you can find random loots in this case there are 10 loots per bag, which based on the rarity of the bag increases the rarity and quantity of the item or other.
going into the addon folder obviously in your world you have to go to:
```json5
scripts/config/loot
```
here you will find 5 js files in which you can customize your loot, the files are divided by rarity of the bags.
to add an extra loot or modify the existing one it is simple, let's take an example:
```json5
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
```
its value in this case is 1, already in the config you will find up to 10, to add others just do in numerical order so 11 12 13 and so on
- chance: ( the probability of that loot coming out )
- name : ( name of the loot that will appear in the book )
- description : ( description of the loot that will appear in the book )
- drop : ( here is everything you can do if this loot comes out )

in the drop you can insert:
# Item
item: ( in the item enter what type of object you want to give the player a block, an item whatever you want as in the example below but every time you add an item increase the value, here for example I give 2 items so value 1 item and value 2 item, if you add more you increase )
Inside the item you can insert other values to customize the object when it is given, you can put
- id:( here is the id of the item )
- name: ( the name you want to give the item when it is given to the player )
- amount ( the quantity of that item that must give the player 1 diamond or 3 diamonds )
- lore ( the description then the lore you want to give to the item when it is given to the player )
```json5
 item:{
   1:{id:"minecraft:emerald",name:'base', amount:5},
   2:{id:"minecraft:emerald_block",name:'Good Emerald',lore:'cool block emerald',amount:1},
 }
```
# Sound
sound: ( enter this value if you want it to play a sound )
```json5
sound:'block.lantern.hit'
```  
# Message
message: ( here insert a message that will be sent to the player, if you want more messages just do as in the example below and increase its value )
```json5
message:{
 1:'He how are you',
 2:'I hope so'
 }
```
# Command
command: ( here instead enter the commands that will have to be performed on the player, to add others just increase the value )
```json5
command:{
 1:'title @s title Hii',
 2:'title @s actionbar gg'
 }
```
# Particles
particles: ( if you want it to make particles on the player enter the name of the particle as in the example )
```json5
particles:'minecraft:totem_particle',
```
# Effect
effect: ( instead, if you want to insert classic status effects, just do as in the example and if you want to insert others, just increase the value )
On effects you can decide the time and power of the state using these parameters
- id: ( the name of the effect you want to run )
- time: ( how long the effect should last )
- amplifer: ( when the effect needs to be enhanced )
- particle: ( if you want the particles of the effect to be seen, if you set true they are not seen, if you set false they are seen )
```json5
 effect:{
   1:{id:'haste',time:10000,amplifer:3,particle:true},
   2:{id:'strength',time:10000,amplifer:3,particle:true},
 }
```
obviously you can decide what you want to insert in the drop, like the same thing for the item to give the name and lore, these are data that you can also not insert, they simply serve to give greater customization.

# Enity Drop
To find loot bags they are obtained by killing mobs, obviously based on the difficulty the drop reward increases, but if you want to modify or add entities just go to:
```json5
scripts/config/entity
```
Once you will already find the basic Minecraft entities, to add external entities just enter their ID as in the example below.
As per the item, you must each time increase the value which here in the example is 1, but already in the file you will find 73, because all the Minecraft Bedrock entities are present.
This does not affect the classic loot drop of mobs, but only adds.
```json5
    1: {
        id: 'da:floating_text',
        drop: true,
        loot: { 
            0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
            1: {id: 'da:loot_bag_uncommon', min: 1, max: 2, chance: 15},
            2: {id: 'da:loot_bag_rare', min: 1, max: 1, chance: 10},
            3: {id: 'da:loot_bag_epic', min: 1, max: 1, chance: 5},
            4: {id: 'da:loot_bag_legendary', min: 1, max: 1, chance: 1}
        }
    },
```
- Id: ( name of the entity that must release the loot after death )
- drop : ( if you set true when that entity dies it will give loot, if you set false that entity will not drop loot )
- loot : ( item that must drop after deat )
inside the loot you have to put in order all the items you want to give, which in my case are 5 different Loot Bags
```json5
0: {id: 'da:loot_bag_common', min: 1, max: 2, chance: 25},
```
what you have to put in the drop inside the values
- id: ( name of the item it must give )
- min: ( minimum quantity you must give of that item )
- max :  ( maximum quantity you can give of that item )
- chance : ( probability that from that item )

# Join world message
instead, if you want to deactivate the message when you enter the world of the loot bag, just go to
```json5
scripts/config/config
```
just go to status and set false so the message will no longer come out when you enter the world
```json5
state: false
```

# How to install

## 🖥️ Computer

📁.mcaddon version
- Download the loot_bag.mcaddon version
- click on it to open and it will automatically insert it into the game
- 
📦.zip version
- go to 
 ```bash
%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\
```
- pull the texture into the resources folder instead the behavior into the behaviors folder

## 📱 Mobile

📁.mcaddon version
- Download the loot_bag.mcaddon version
- click on it to open and it will automatically insert it into the game

📦.zip version
- download or use an application to manage files in the phone, I recommend this [RS Gestore File - Explorer EX](https://play.google.com/store/apps/details?id=com.rs.explorer.filemanager&hl=it&gl=US)
- (ANDROID & AMAZON FIRE OS) go to 
 ```bash
/Android/data/com.mojang.minecraftpe/files/games/com.mojang/
```

- (APPLE IOS ) go to

 ```bash
/On My iPhone/Minecraft/games/com.mojang/
```

- pull the texture into the resources folder instead the behavior into the behaviors folder

## 🕹️ Console (PS4/PS5/Switch/Xbox and other)

📦.zip version
- create dedicated bedrock realm or server
- pull the texture into the resources folder instead the behavior into the behaviors folder (Realm or Server)
- enter the realm or the server and you will find your component,remember to enable the settings necessary for operation listed before
- ⛔you can't put it directly in the console, the manufacturer things don't allow to import external files, it is possible only in case you have made a modification of your console

## For more info visit my discord or watch the video guide on my channel
- ✉️ Discord Link : [Click](https://discord.gg/NKy9A9RAe8)
- 💻 Youtube Link :[Click](https://www.youtube.com/watch?v=cT3YZJbOkBw&ab_channel=Death_Aruban%E2%84%A2)

## Thank you for choosing this component and to appreciate how it works 😄

