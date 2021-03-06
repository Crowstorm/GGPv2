import leatherArmorIcon from '../../assets/interface/equipment/armor/leatherArmor.png';
import steelArmorIcon from '../../assets/interface/equipment/armor/steelArmor.png';

import steelHelmetIcon from '../../assets/interface/equipment/armor/steelHelmet.png';
import leatherHelmetIcon from '../../assets/interface/equipment/armor/leatherHelmet.png';

import leatherBootsIcon from '../../assets/interface/equipment/armor/leatherBoots.png';
import steelBootsIcon from '../../assets/interface/equipment/armor/steelBoots.png';

import woodenShieldIcon from '../../assets/interface/equipment/armor/woodenShield.png';




export const woodenHelmet = {
    name: "Wooden Helmet",
    slot: "head",
    icon: leatherHelmetIcon,
    bonus: {
        defence: 1
    },
    price: 100,
    itemType: 'items'
}

export const woodenShirt = {
    name: "Wooden Shirt",
    slot: "chest",
    icon: leatherArmorIcon,
    bonus: {
        defence: 2
    },
    price: 150,
    itemType: 'items'
}

export const woodenLegs = {
    name: "Wooden Legs",
    slot: "legs",
    icon: leatherBootsIcon,
    bonus: {
        defence: 1
    },
    price: 100,
    itemType: 'items'
}

export const woodenShield = {
    name: "Wooden Shield",
    slot: "leftHand",
    icon: woodenShieldIcon,
    bonus: {
        defence: 1
    },
    price: 100,
    itemType: 'items'
}

export const steelArmor = {
    name: "Steel Armor",
    slot: "chest",
    icon: steelArmorIcon,
    bonus: {
        defence: 4
    },
    price: 400,
    itemType: 'items'
}
export const steelHelmet = {
    name: "Steel Helmet",
    slot: "head",
    icon: steelHelmetIcon,
    bonus: {
        defence: 2
    },
    price: 150,
    itemType: 'items'
}
export const steelLegs = {
    name: "Steel Legs",
    slot: "legs",
    icon: steelBootsIcon,
    bonus: {
        defence: 3
    },
    price: 250,
    itemType: 'items'
}

