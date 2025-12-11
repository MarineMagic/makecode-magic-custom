/**
 * Give & Equip using commands in MakeCode Minecraft Education
 */

//% color=#00bfff
namespace AutoEquip {

    export enum ArmorSlot {
        //% block="Head"
        Head,
        //% block="Chest"
        Chest,
        //% block="Legs"
        Legs,
        //% block="Feet"
        Feet,
        //% block="Hand"
        Hand
    }

    //% block="give %item to %entity and equip in slot %slot"
export function autoEquip(entity: Entity, item: MinecraftItem, slot: ArmorSlot): void {
    commands.run(replaceitem entity @s slot.armor.head acacia_slab 1);
}

}



