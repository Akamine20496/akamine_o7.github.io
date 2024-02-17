import Stat from "./Stat.js";

// array of values
const val1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const val2 = [1, 2, 3];
const val3 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const val4 = [5, 10, 15];
const val5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const val6 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const val7 = [1, 2, 3, 4, 5];
const val8 = [5, 10, 15, 20, 25];
const val9 = [10, 20, 30, 40, 50];
const val10 = [3, 6, 9, 12, 15];
// attribute object
export const Attributes = {
    'STR': new Stat('STR', val1),
    'INT': new Stat('INT', val1),
    'VIT': new Stat('VIT', val1),
    'AGI': new Stat('AGI', val1),
    'DEX': new Stat('DEX', val1),
    'STR%': new Stat('STR%', val2),
    'INT%': new Stat('INT%', val2),
    'VIT%': new Stat('VIT%', val2),
    'AGI%': new Stat('AGI%', val2),
    'DEX%': new Stat('DEX%', val2),
    'MaxHP': new Stat('MaxHP', val3),
    'MaxHP%': new Stat('MaxHP%', val4),
    'MaxMP': new Stat('MaxMP', val5),
    'Weapon ATK': new Stat('Weapon ATK', val6),
    'Weapon ATK%': new Stat('Weapon ATK%', val2),
    'ATK': new Stat('ATK', val6),
    'ATK%': new Stat('ATK%', val2),
    'MATK': new Stat('MATK', val6),
    'MATK%': new Stat('MATK%', val2),
    'Stability%': new Stat('Stability%', val2),
    'Accuracy': new Stat('Accuracy', val6),
    'Accuracy%': new Stat('Accuracy%', val2),
    'Dodge': new Stat('Dodge', val6),
    'Dodge%': new Stat('Dodge%', val2),
    'DEF': new Stat('DEF', val5),
    'DEF%': new Stat('DEF%', val7),
    'MDEF': new Stat('MDEF', val5),
    'MDEF%': new Stat('MDEF%', val7),
    'ASPD': new Stat('ASPD', val5),
    'ASPD%': new Stat('ASPD%', val1),
    'CSPD': new Stat('CSPD', val5),
    'CSPD%': new Stat('CSPD%', val1),
    'Natural HP Regen': new Stat('Natural HP Regen', val5),
    'Natural HP Regen%': new Stat('Natural HP Regen%', val8),
    'Natural MP Regen': new Stat('Natural MP Regen', val1),
    'Natural MP Regen%': new Stat('Natural MP Regen%', val8),
    'Attack MP Recovery': new Stat('Attack MP Recovery', val1),
    'Critical Rate': new Stat('Critical Rate', val7),
    'Critical Rate%': new Stat('Critical Rate%', val2),
    'Critical Damage': new Stat('Critical Damage', val7),
    'Critical Damage%': new Stat('Critical Damage%', val2),
    'Ailment Resistance%': new Stat('Ailment Resistance%', val1),
    'Guard Recharge%': new Stat('Guard Recharge%', val2),
    'Guard Power%': new Stat('Guard Power%', val2),
    'Evasion Recharge%': new Stat('Evasion Recharge%', val2),
    'Physical Resistance%': new Stat('Physical Resistance%', val1),
    'Magic Resistance%': new Stat('Magic Resistance%', val1),
    'Physical Pierce%': new Stat('Physical Pierce%', val1),
    'Magic Pierce%': new Stat('Magic Pierce%', val1),
    'damage to Fire%': new Stat('damage to Fire%', val2),
    'damage to Water%': new Stat('damage to Water%', val2),
    'damage to Wind%': new Stat('damage to Wind%', val2),
    'damage to Earth%': new Stat('damage to Earth%', val2),
    'damage to Light%': new Stat('damage to Light%', val2),
    'damage to Dark%': new Stat('damage to Dark%', val2),
    'damage to Neutral%': new Stat('damage to Neutral%', val2),
    '+Aggro%': new Stat('+Aggro%', val1),
    '-Aggro%': new Stat('-Aggro%', val1),
    'Fire Resistance%': new Stat('Fire Resistance%', val1),
    'Water Resistance%': new Stat('Water Resistance%', val1),
    'Wind Resistance%': new Stat('Wind Resistance%', val1),
    'Earth Resistance%': new Stat('Earth Resistance%', val1),
    'Light Resistance%': new Stat('Light Resistance%', val1),
    'Dark Resistance%': new Stat('Dark Resistance%', val1),
    'Neutral Resistance%': new Stat('Neutral Resistance%', val1),
    'Short Range Damage%': new Stat('Short Range Damage%', val2),
    'Long Range Damage%': new Stat('Long Range Damage%', val2),
    'Anticipate%': new Stat('Anticipate%', val2),
    'Guard Break%': new Stat('Guard Break%', val2),
    'Additional Melee%': new Stat('Additional Melee%', val9),
    'Additional Magic%': new Stat('Additional Magic%', val9),
    'Reflect%': new Stat('Reflect%', val4),
    'Physical Barrier': new Stat('Physical Barrier', val3),
    'Magic Barrier': new Stat('Magic Barrier', val3),
    'Fractional Barrier%': new Stat('Fractional Barrier%', val1),
    'Barrier Cooldown%': new Stat('Barrier Cooldown%', val10)
};

// array of attributes
export const AttributeList = new Array();

// add each attribute to the array of attributes
Object.keys(Attributes).forEach(key => {
    AttributeList.push(Attributes[key].getAttribute());
});