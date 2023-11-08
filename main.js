
alert('Please use Console for better experience (Right Click anywhere -> inspect -> Console tab) then reload page')

let ready = prompt('Need to reload? Y/N').toUpperCase()

if (ready != 'Y') { 
    console.log("Welcome to Js RPG: Egg")


    class egg {
        constructor ( name, hp, attack, lvl, xp ) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.lvl = lvl;
            this.xp = xp;
        }
    }


    const You = new egg ( 'You', 10, 3, 1, 0)

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
    */

    alert('You are now an egg')

    console.log("In case you didn't notice, you are now an Egg")

    function stats() {
        console.log("your stats are:")
        console.log(You)
    }

    stats()

    alert("You're not just any egg though, you're a weird egg. You also seem to be unusually tasty. Luckily your weirdness might be just the thing to keep you safe until you're ready to hatch.")


    alert("Watch out! A predator is coming your way, prepare to defend yourself or be eaten!")

    enemLoad()

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
        You['hp'] = 10;
        stats();
        console.log("Keep growing, soon they'll witness..")
        console.log('..you.')

    } else if ((You['hp'] > 0 ) && (enemRun == true )) {
        alert("Another will find us soon enough...");
        stats();
        console.log("Though it may seem like a waste, just surviving is enough of a victory for now.")
    } else {
        alert("Your shell has cracked, your contents ingested. Everyone else is safe.");
        stats();
        console.log("Let this be a reminder, some things are not meant to see the light of day.")
    }

    console.log("Thank you for testing Js RPG: Egg.")

} else {
    alert('Please open Console and reload')
}
