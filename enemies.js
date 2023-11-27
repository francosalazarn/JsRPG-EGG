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



//console.log(activEnemy)