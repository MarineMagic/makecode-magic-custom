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
export function autoEquip(entity: TargetSelector, item: Item, slot: ArmorSlot): void {
        if (!entity) return;

    // Give item to inventory not sure if needed, need tests
    //entity.addItem(item, 1);

    // slot selected from dropdown
    let slotName = "";
    switch(slot) {
        case ArmorSlot.Head: slotName = "armor.head"; break;
        case ArmorSlot.Chest: slotName = "armor.chest"; break;
        case ArmorSlot.Legs: slotName = "armor.legs"; break;
        case ArmorSlot.Feet: slotName = "armor.feet"; break;
        case ArmorSlot.Hand: slotName = "weapon.mainhand"; break;
    }

    // run the command
    let temp = `replaceitem entity ${entity} slot.${slotName} 1 ${item} 1`;
    player.execute(temp);
}

}
