// name - name of skill
// costType - hp or mp
// costDataType - integer(int) or percentage(perc)
// cost - amount
// multiplier - multiplier of weapon damage + strength 
// bonus - bonus to statistic 
// dmg - damaga
// dmgType - perc or flat
// aoe - true, Area of effect

export const strongBlow = {
    name: "Strong Blow",
    costType: "mp",
    costDataType: 'int',
    cost: 10,
    multiplier: 2,
    description: "A strong attack "
}

export const allIn = {
    name: "All In Attack",
    costType: "hp",
    costDataType: "perc",
    cost: 20,
    multiplier: 2.5,
    bonus: {
        strength: 10,
        duration: 1,
    },
    description: "Devastating blow increasing strength of the user but straining the muscles of the user"
}

export const decimate ={
    name: "Decimate",
    costType: "mp",
    costDataType: "int",
    cost: 10,
    dmg: 10,
    dmgType: "perc",
    description: "Deals 10% of enemy's current health"
}

export const whirlwind ={
    name: "Whirlwind",
    costType: "mp",
    costDataType: "int",
    cost: 7,
    dmg: 7,
    dmgType: "flat",
    aoe: true,
    description: "Whirling strike that hits all enemies"
}