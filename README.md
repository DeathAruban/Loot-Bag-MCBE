<p align="center">
     <a href="https://github.com/DeathAruban/Loot-Bag">
		<img src="https://github.com/DeathAruban/Loot-Bag/blob/main/img/loot_bag_mcbe.png" loading="eager" />
	</a><br>
	<b>Loot Bag + for Minecraft Bedrock Edition 1.20.60 without using Experimental mode, use</b></p>
 <p align="center"><b>module_name:@minecraft/server v1.8.0</b></p>
 <p align="center"><b>module_name:@minecraft/server-ui v1.1.0</b></p>
<p align="center">
	<a href="https://github.com/DeathAruban/Lore-Item-MCBE/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Loot-Bag?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Lore-Item-MCBE/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Loot-Bag/latest/total?sort=semver"></a>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DeathAruban/Loot-Bag">
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
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
```json5
scripts/config/loot
```
