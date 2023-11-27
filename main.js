
alert('Please use Console for better experience (Right Click anywhere -> inspect -> Console tab) then reload page')

let ready = prompt('Need to reload? Y/N').toUpperCase()

if (ready != 'Y') { 
    console.log("Welcome to Js RPG: Egg")


    class egg {
        constructor (name, hp, attack, lvl, xp, lvlup) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.lvl = lvl;
            this.xp = xp;
            this.lvlup = lvlup;
        }
        
    }

    function hpReset () {
        if (You['lvl'] > 1) {
        You['hp'] = 10 + (You['lvl'] * 5);
        } else {
            You['hp'] = 10;
        }
    }

    const You = new egg ('You', 10, 3, 1, 0, 10);
    console.log(You['hp'])
    console.log(You['lvlup'])

    let yourAtkroll = function youAttack () {
        return Math.floor(Math.random()*3+1);
    }

    let youBraceroll = function youBrace () {
        return Math.floor(Math.random()*6+1);
    }

    let youScareroll = function youScare () {
        return Math.floor(Math.random()*9+1);
    }
    let yourAtk = yourAtkroll()

    let yourBrc = youBraceroll ()

    let yourScre = youScareroll () 
    
    /*
    console.log(yourAtk)
    yourAtk = yourAtkroll()
    console.log(yourAtk)
    yourAtk = yourAtkroll()
    console.log(yourAtk)
    yourAtk = yourAtkroll()
    console.log(yourAtk)
    yourAtk = yourAtkroll()
    console.log(yourAtk)
    yourAtk = yourAtkroll()
    console.log(yourAtk)
    This was a test for the attack roll value.
    */

    alert('You are now an egg')

    console.log("In case you didn't notice, you are now an Egg")

    function stats() {
        console.log("your stats are:")
        console.log(You)
    }

    stats()

    alert("You're not just any egg though, you're a weird egg. You also seem to be unusually tasty. Luckily your weirdness might be just the thing to keep you safe until you're ready to hatch.")
    enemLoad()

    do {
        alert("Watch out! A predator is coming your way, prepare to defend yourself or be eaten!")
      
        let rdmEnem = Math.floor(Math.random()*3+1)

        class enemEcounter {
            constructor ( name, attack, hp, xpYield ) {
                this.name = enemy[rdmEnem]['name'];
                this.attack = enemy[rdmEnem]['attack'];
                this.hp = enemy[rdmEnem]['hp'];
                this.xpYield = enemy[rdmEnem]['xpYield'];
            }
        }
        
        const activEnemy = new enemEcounter ()

        alert("You've been spotted by a " + activEnemy['name'])
        console.log(activEnemy['name'] + "'s stats are")
        console.log(activEnemy)
        let enemRun = false

        while (((You['hp'] > 0 ) && (activEnemy['hp'] > 0)) && (enemRun == false)) {
            let action = prompt('What will you do? Attack / Brace / Scare').toUpperCase();
            switch (action) {
                case "ATTACK" :
                    alert('You attacked ' + activEnemy['name'] )
                    yourAtk = yourAtkroll()
                    enemAtk = enemAtkroll()
                    if ( (yourAtk > enemAtk) || ( (yourAtk == 1) && (enemAtk == 3) ) ) {
                        alert('Your attack was successful');
                        activEnemy['hp'] = activEnemy['hp'] - You['attack'];
                        console.log("You attacked enemy " + activEnemy['name'] + " successfully.");
                        console.log(activEnemy['name'] + " has " + activEnemy['hp'] + " hp left.");
                    }
                    else if ( (yourAtk < enemAtk) || ( (yourAtk == 3) && (enemAtk == 1) ) ) {
                        alert('Your attack failed, enemy ' + activEnemy['name'] + " attacked you");
                        You['hp'] = You['hp'] - activEnemy['attack'];
                        console.log("You were attacked by enemy " + activEnemy['name']);
                        console.log("You have " + You['hp'] + " hp left.");
                    } else {
                        alert('Both attacks failed');
                        console.log("No attacks connected.");
                    }
                    action = "";
                    break;
                case "BRACE" :
                    alert ('You braced to resist ' + activEnemy['name'] + "'s attack using some dark outer shell of your eggy being.")
                    yourBrc = youBraceroll ()
                    enemBrc = enemBraceroll ()
                    if ( yourBrc > enemBrc ) {
                        alert('Your weirdness protects you. You resisted ' + activEnemy['name'] + "'s attack.");
                        alert('Enemy ' +  activEnemy['name'] + ' was damaged by your defenses.');
                        activEnemy['hp'] = activEnemy['hp'] - You['lvl'];
                        console.log("Enemy " + activEnemy['name'] + " could not break through your weird aura and was hurt in the process.");
                        console.log(activEnemy['name'] + " has " + activEnemy['hp'] + " hp left.");
                    }
                    else if ( (yourBrc < enemBrc ) ) {
                        alert(activEnemy['name'] + "'s attack overcame your weird defenses.");
                        You['hp'] = You['hp'] - (activEnemy['attack'] - You['lvl']);
                        console.log("Enemy " + activEnemy['name'] + " was mightier than your loathesome defenses.")
                        console.log("You have " + You['hp'] + " hp left.");
                    }
                    else {
                        alert('You and ' + activEnemy['name'] + 'clashed. It was disgusting for everyone.');
                        You['hp'] = You['hp'] - (activEnemy['attack'] - 1);
                        activEnemy['hp'] = activEnemy['hp'] - You['lvl'];
                        console.log("You and enemy " + activEnemy['name'] + " met with equal force. You were damaged equally.");
                        console.log("You have " + You['hp'] + " hp left.");
                        console.log(activEnemy['name'] + " has " + activEnemy['hp'] + " hp left.");
                    }
                    action = "";
                    break;
                case "SCARE" :
                    alert( "You conjured your weird semblance to scare enemy " +  activEnemy['name'] + " away.");
                    yourScre = youScareroll ()
                    enemScre = enemScareroll ()
                    if ( yourScre > enemScre ) {
                        alert('Enemy ' + activEnemy['name'] + ' got a glimpse of your weird, dark yolk and ran away.' );
                        console.log('Enemy ' + activEnemy['name'] + ' escaped.');
                        console.log('Enemy ' + activEnemy['name'] + "'s sanity will remain mostly intact, but the world will never be the same.");
                        enemRun = true;
                    } 
                    else {
                        alert('Enemy ' + activEnemy['name'] + ' was not fazed by the weird aura sorrounding your shell.');
                        console.log('Enemy ' + activEnemy['name'] + ' is not scared.');
                        console.log('Lesser beings cannot fathom the horror that gestates within you...');
                    }
                    action = "";
                    break;
                /* Case WIN is only for testing purposes*/
                case "WIN" :
                    activEnemy['hp'] = 0;
                    break;
                default :
                    alert('YOU MUST ANSWER THE CALL!');
                    action = "";
                    break;

            }
        }

        if ((You['hp'] > 0 ) && (activEnemy['hp'] <= 0)) {
            alert("Enemy " + activEnemy['name'] + " is no more. Congratulations, you'll live to hatch another day.");
            You['xp'] = You['xp'] + activEnemy['xpYield'];
            console.log("You feed on " + activEnemy['xpYield'] + " xp.");
            hpReset ();
            if ( You['xp'] >= You['lvlup']) {
                You['lvl'] = You['lvl'] + 1;
                alert('You leveled up from this traumatic experience.');
                console.log('Your level is ' + You['lvl']  + ' now.');
                You['xp'] = You['xp'] - You['lvlup'];
                You['lvlup'] = You['lvlup'] + (You['lvl'] * 2);
                You['hp'] = You['hp'] + (You['lvl'] * 2);
                You['attack'] = You['attack'] + 1;
            }
            stats();
            console.log("Keep growing, soon they'll witness..")
            console.log('..you.')

        } else if ((You['hp'] > 0 ) && (enemRun == true )) {
            hpReset ();
            alert("Another will find us soon enough...");
            stats();
            console.log("Though it may seem like a waste, just surviving is enough of a victory for now.")
        } else {
            let alive = false;
            alert("Your shell has cracked, your contents ingested. Everyone else is safe.");
            stats();
            console.log("Let this be a reminder, some things are not meant to see the light of day.")
        }
    } while ((You['hp'] > 0 ) && (You['lvl'] < 5))

    if (You['hp'] > 0) {
        alert('The time has come!')
        console.log("You're about to hatch.")
        alert('Can you feel your weird contents roiling into flesh?')
        console.log("Your shell is cracking, a foul odor seeps into the world, you can smell it too.")
        alert('Welcome in all your nauseous glory!')
        console.log("You spread your appendages one by one, the soil feels your touch for the first time, it's disgusting.")
        alert('Open your eyes, let them gaze into the abyss.')
        console.log("You feel the air pierce its way through whatever ungodly conducts connect to your innards. It's painful and endless.")
        alert('Now go, do not be afraid.')
        console.log("The last tendrils that restrained you to the womb are collapsing. The fluids in the ground burn but not more than your hunger.")
        alert("It's all over now.")
        console.log("It's over.")
    }

    console.log("Thank you for testing Js RPG: Egg.")

} else {
    alert('Please open Console and reload')
}
