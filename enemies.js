"use strict";

function enemLoad() {
    console.log('Enemies loaded')
}

const enemy = [
    null,
    {
        'name' : 'finch',
        'attack' : 2,
        'hp' : 10,
        'xpYield' : 5,
    },
    {
        'name' : 'snake',
        'attack' : 3,
        'hp' : 20,
        'xpYield' : 10,
    },
    
    {
        'name' : 'fox',
        'attack' : 5,
        'hp' : 30,
        'xpYield' : 15,
    }
]

console.log(enemy[1]['name'])

let rdmEnem = Math.floor(Math.random()*3+1)


class enemEcounter {
    constructor ( name, attack, hp, xpYield ) {
        this.name = enemy[rdmEnem]['name'];
        this.attack = enemy[rdmEnem]['attack'];
        this.hp = enemy[rdmEnem]['hp'];
        this.xpYield = enemy[rdmEnem]['xpYield'];
    }
}

let enemAtkroll = function enemAttack () {
    return Math.floor(Math.random()*3+1);
}

let enemAtk = enemAtkroll ()

let enemBraceroll = function enemBrace () {
    return Math.floor(Math.random()*6+1);
}

let enemBrc = enemBraceroll ()

let enemScareroll = function enemScare () {
    return Math.floor(Math.random()*9+1);
}

let enemScre = enemScareroll ()

const activEnemy = new enemEcounter ()

//console.log(activEnemy)