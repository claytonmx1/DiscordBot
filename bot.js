const botsettings = require("./botsettings");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const prefix = botsettings.prefix;
const api = "https://redrumrp.com/api/v1/server.json";
const fetch = require('node-fetch');
const { isRegExp } = require("util");

client.commands = new Discord.Collection();
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);


fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
        console.log("You Have No Commands Moron...");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} Loaded!`);
        client.commands.set(props.help.name, props);
    });

});



client.on("ready", async () => {
    console.log(`Bot Is Live! ${client.user.username}`);
    console.log(client.commands);
    client.user.setActivity(`Currently in ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;

let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = messageArray.slice(1);

if(!command.startsWith(prefix)) return;

if(command === `${prefix}getusers`){
    
    const ricp = await fetch('https://redrumrp.com/api/v1/server.json').then(response => response.json());

    const jsonfiletosave = JSON.stringify(ricp.server.playersOnline);

    fs.writeFile('playerlist.json', jsonfiletosave, (err) => {
        if (err) throw err;
    })

     fs.readFile('./playerlist.json', (err, data) => {
        if(err) {throw err;}

        var jobname = "IDK YET";
         thelist = JSON.parse(data);

         thelist.sort(function(a, b){
            return a.id - b.id;
        });

         const filteredData = thelist.filter((p) => p.id);
         const embed = new Discord.MessageEmbed().setTitle('CMx RedRum Server Query');
         embed.color = '#2ECC71'
         const obj = { id: '', name: '', job: '' };
         var onlinecount = 0;

         filteredData.forEach((spawn) => {
            onlinecount = onlinecount + 1;
             /*List of players we know the job of --*/
        if(spawn.name === "obito" || spawn.name === "SaltyDogs" || spawn.name === "DustyDogs" || spawn.name === "drroo2006" || spawn.name === "kanye heft" || spawn.name === "GameTime" 
        || spawn.name === "Rex Lexington" || spawn.name === "dennishallard96" || spawn.name === "Supreme" || spawn.name === "Cheeseyblunt420" || spawn.name === "itsAutomatic" 
        || spawn.name === "joe" || spawn.name === "XeCo" || spawn.name === "OG_CaptainHarris" || spawn.name === "Medavac" || spawn.name === "Pack3rfan12" || spawn.name === "kyleschwiss" 
        || spawn.name === "Redneck Cade" || spawn.name === "Aaron Goodwin w/ Hair" || spawn.name === "Mp5 Stealer" || spawn.name === "remjamin" || spawn.name === "MasterP" 
        || spawn.name === "Ditzy" || spawn.name === "Herrera" || spawn.name === "EleetsOfficial" || spawn.name === "Foxtrot" || spawn.name === "RedrumIzBak" || spawn.name === "NovaVII" 
        || spawn.name === "SinVII" || spawn.name === "SuddenlyStoopid" || spawn.name === "PangolinDrip" || spawn.name === "Hendo4Gaming" || spawn.name === "Vision" || spawn.name === "SirGerbain" 
        || spawn.name === "kevinmccann101" || spawn.name === "Beenz." || spawn.name === "SkySucks" || spawn.name === "Gravel" || spawn.name === "laweisy" || spawn.name === "Whooty" 
        || spawn.name === "Lil_Cheppy" || spawn.name === "Wheresthepath" || spawn.name === "Suddenly Woosah" || spawn.name === "Banjo Briggs" || spawn.name === "RIPTVDead" || spawn.name === "WheresTheJuice"){
           
            //putthing the jobs to the players
            if(spawn.name === "obito"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "SaltyDogs"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "DustyDogs"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "drroo2006"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Cop"}`;
            }
            if(spawn.name === "kanye heft"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "GameTime"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "Rex Lexington"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "dennishallard96"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "Supreme"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "Cheeseyblunt420"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "itsAutomatic"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "joe"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Taxi"}`;
            }
            if(spawn.name === "XeCo"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "OG_CaptainHarris"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "Medavac"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"AirportBoss"}`;
            }
            if(spawn.name === "Pack3rfan12"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Orange"}`;
            }
            if(spawn.name === "kyleschwiss"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Orange"}`;
            }
            if(spawn.name === "Redneck Cade"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Billy"}`;
            }
            if(spawn.name === "Aaron Goodwin w/ Hair"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Kevin"}`;
            }
            if(spawn.name === "Mp5 Stealer"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "remjamin"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "MasterP"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "Ditzy"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "Herrera"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Ballas"}`;
            }
            if(spawn.name === "EleetsOfficial"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Cop"}`;
            }
            if(spawn.name === "Foxtrot"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Pablo"}`;
            }
            if(spawn.name === "RedrumIzBak"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mayor"}`;
            }
            if(spawn.name === "NovaVII"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"UserCarDealer"}`;
            }
            if(spawn.name === "SinVII"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"UsedCarDealer"}`;
            }
            if(spawn.name === "SuddenlyStoopid"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Steve"}`;
            }
            if(spawn.name === "PangolinDrip"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Vagos"}`;
            }
            if(spawn.name === "Hendo4Gaming"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Rodger"}`;
            }
            if(spawn.name === "Vision"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "SirGerbain"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Cop/Adam"}`;
            }
            if(spawn.name === "kevinmccann101"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "Beenz."){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Cop/Reds"}`;
            }
            if(spawn.name === "Gravel"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"LSC"}`;
            }
            if(spawn.name === "SkySucks"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Reds"}`;
            }
            if(spawn.name === "laweisy"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Vagos"}`;
            }
            if(spawn.name === "Whooty"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Vagos"}`;
            }
            if(spawn.name === "Lil_Cheppy"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Airport"}`;
            }
            if(spawn.name === "Wheresthepath"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Airport"}`;
            }
            if(spawn.name === "Suddenly Woosah"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            if(spawn.name === "Banjo Briggs"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Cop"}`;
            }
            if(spawn.name === "RIPTVDead"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Airport"}`;
            }
            if(spawn.name === "WheresTheJuice"){

                obj.id += `\n${spawn.id}`;
                obj.name += `\n${spawn.name}`;
                obj.job += `\n${"Mechanic"}`;
            }
            //end of putting the jobs to the players
            
        }else{
           obj.id += `\n${spawn.id}`;
           obj.name += `\n${spawn.name}`;
           obj.job += `\n${jobname}`;
        }
         });
       
         embed.setDescription("Total Online: " + onlinecount);
         embed.addFields(
           { name: 'ID', value: obj.id, inline: true },
           { name: 'Name', value: obj.name, inline: true },
           { name: 'Job', value: obj.job, inline: true },
         );
       
         message.channel.send(embed);


    });


  }
//end if the getusers command

//Calculate amount of revs to make command
if(command === `${prefix}revs`){
    let amountsarg = args[0];

    fs.readFile('./revitems.json', (err, revsdata) => {
        if(err) {throw err;}
            revsjsonparsed = JSON.parse(revsdata);

         const filteredData = revsjsonparsed.filter((c) => c.name);
         const embed2 = new Discord.MessageEmbed().setTitle('CMx RedRum Rev Calculator');
         embed2.color = '#2ECC71'
         const obj = { name: '', amount: '' };
       
         filteredData.forEach((calc) => {
            
           obj.name += `\n${calc.name}`;
           obj.amount += `\n${calc.amount * amountsarg}`;
         });
       
         embed2.addFields(
           { name: 'Item', value: obj.name, inline: true },
           { name: 'Amount', value: obj.amount, inline: true },
         );
       
         message.channel.send(embed2);


    });


  }
//end of rev calc command

//Start of full upgrade command
if(command === `${prefix}maxupgrade`){
    let vehicleamountsarg = args[0];

    fs.readFile('./fullupgrade.json', (err, upgradedata) => {
        if(err) {throw err;}
            upgradejsonparsed = JSON.parse(upgradedata);

         const filteredData = upgradejsonparsed.filter((u) => u.name);
         const embed3 = new Discord.MessageEmbed().setTitle('CMx RedRum VehicleFullUpgrade Calculator');
         embed3.color = '#2ECC71'
         const obj = { name: '', amount: '' };
       
         filteredData.forEach((vehicle) => {
            
            
           obj.name += `\n${vehicle.name}`;
           obj.amount += `\n${vehicle.amount * vehicleamountsarg}`;
         });
       
         embed3.addFields(
           { name: 'Item', value: obj.name, inline: true },
           { name: 'Amount', value: obj.amount, inline: true },
         );
       
         message.channel.send(embed3);


    });


  }
//end of full upgrade command

//start of driftchip command
if(command === `${prefix}driftchip`){
    let chipamountsarg = args[0];

    fs.readFile('./driftchip.json', (err, chipdata) => {
        if(err) {throw err;}
            chipjsonparsed = JSON.parse(chipdata);

         const filteredData = chipjsonparsed.filter((d) => d.name);
         const embed4 = new Discord.MessageEmbed().setTitle('CMx RedRum DriftChip Calculator');
         embed4.color = '#2ECC71'
         const obj = { name: '', amount: '' };
       
         filteredData.forEach((driftchip) => {
            
           obj.name += `\n${driftchip.name}`;
           obj.amount += `\n${driftchip.amount * chipamountsarg}`;
         });
       
         embed4.addFields(
           { name: 'Item', value: obj.name, inline: true },
           { name: 'Amount', value: obj.amount, inline: true },
         );
       
         message.channel.send(embed4);


    });


  }
  //end of drift chip command

  //start of coke crafting
  if(command === `${prefix}coke`){
    let cokeamountsarg = args[0];
    let leaveamount = 5;

    fs.readFile('./coke.json', (err, cokedata) => {
        if(err) {throw err;}
            cokejsonparsed = JSON.parse(cokedata);

         const filteredData = cokejsonparsed.filter((f) => f.name);
         const embed6 = new Discord.MessageEmbed().setTitle('CMx RedRum CokeProcessing Calculator');
         embed6.color = '#2ECC71'
         const obj = { name: '', amount: '' };
       
         filteredData.forEach((cocainamounts) => {
            if(cocainamounts.name == "Bags"){
                obj.name += `\n${"Bags"}`;
                obj.amount += `\n${cokeamountsarg / 5}`;
            }
            if(cocainamounts.name == "Scale"){
                obj.name += `\n${"Scale"}`;
                obj.amount += `\n${cokeamountsarg / 5 / 2}`;
            }

         });
       
         embed6.setDescription("Assuming 1 Scale Every 2 Crafts");
         embed6.addFields(
           { name: 'Item', value: obj.name, inline: true },
           { name: 'Amount', value: obj.amount, inline: true },
         );
       
         message.channel.send(embed6);


    });


  }

  //end of coke crafting

  //drug sell info
  if(command === `${prefix}drugprices`){

    fs.readFile('./drugs.json', (err, drugdata) => {
        if(err) {throw err;}
            drugjsonparsed = JSON.parse(drugdata);

         const filteredData = drugjsonparsed.filter((t) => t.name);
         const embed8 = new Discord.MessageEmbed().setTitle('CMx RedRum Drug Selling Information');
         embed8.color = '#2ECC71'
         const obj = { name: '', amount: '' };
       
         filteredData.forEach((drugsellamount) => {
            
            obj.name += `\n${drugsellamount.name}`;
            obj.amount += `\n${drugsellamount.amount}`;
          });
       
         embed8.setDescription("2% chance to get robbed, max rob amount is 2,000$ and 15% chance cops get called. You also have 7.5 seconds to stop them from calling the cops. If you sell for any higher than this they will not buy!");
         embed8.addFields(
           { name: 'Item', value: obj.name, inline: true },
           { name: 'Max Price Each', value: obj.amount, inline: true },
         );
       
         message.channel.send(embed8);


    });


  }


//end of drug info command

//start of plane command
if(command === `${prefix}plane`){
    let planename = args[0];
    let path = "";
        if(planename === "alphazr1"){
            path = "alphazr1.png";
        }
        if(planename === "besra"){
            path = "besra.png";
        }
        if(planename === "blimp"){
            path = "blimp.png";
        }
        if(planename === "buzzard2"){
            path = "buzzard2.png";
        }
        if(planename === "cargobob"){
            path = "cargobob.png";
        }
        if(planename === "cuban800"){
            path = "cuban800.png";
        }
        if(planename === "dodo"){
            path = "dodo.png";
        }
        if(planename === "duster"){
            path = "duster.png";
        }
        if(planename === "f4"){
            path = "f4.png";
        }
        if(planename === "fbovehicle"){
            path = "fbovehicle.png";
        }
        if(planename === "howard"){
            path = "howard.png";
        }
        if(planename === "jet"){
            path = "jet.png";
        }
        if(planename === "luxorb"){
            path = "luxorb.png";
        }
        if(planename === "luxorg.png"){
            path = "luxorg.png";
        }
        if(planename === "mammutas"){
            path = "mammutas.png";
        }
        if(planename === "maverick"){
            path = "maverick.png";
        }
        if(planename === "microlight"){
            path = "microlight.png";
        }
        if(planename === "milljet"){
            path = "milljet.png";
        }
        if(planename === "mirror"){
            path = "mirror.png";
        }
        if(planename === "mirror2"){
            path = "mirror2.png";
        }
        if(planename === "nimbus"){
            path = "nimbus.png";
        }
        if(planename === "seabreeze.png"){
            path = "seabreeze.png";
        }
        if(planename === "seasparrow"){
            path = "seasparrow.png";
        }
        if(planename === "skylift"){
            path = "skylift.png";
        }
        if(planename === "stunt"){
            path = "stunt.png";
        }
        if(planename === "superviolito"){
            path = "superviolito.png";
        }
        if(planename === "velum"){
            path = "velum.png";
        }
        

         const embed9 = new Discord.MessageEmbed().setTitle('CMx RedRum Plane Information');
         const attachment = new Discord.MessageAttachment('Planes/' + path, path);
         embed9.color = '#2ECC71'
       
        embed9.attachFiles(attachment)
        embed9.setImage('attachment://' + path);
        embed9.addFields(
           { name: 'Name Of Plane', value: planename, inline: true },
         );
       
         message.channel.send(embed9);


  }

  // end of plane command

//start of get commands
if(command === `${prefix}commands`){

    fs.readFile('./commandlist.json', (err, commanddata) => {
        if(err) {throw err;}
            commandsjsonparsed = JSON.parse(commanddata);

         const filteredData = commandsjsonparsed.filter((i) => i.name);
         const embed10 = new Discord.MessageEmbed().setTitle('CMx RedRum BotCommand List');
         embed10.color = '#2ECC71'
         const obj = { name: '', description: '' };
       
         filteredData.forEach((listofcommands) => {
            
            obj.name += `\n${listofcommands.name}`;
            obj.description += `\n${listofcommands.description}`;
          });
          
         embed10.addFields(
           { name: 'CommandName', value: obj.name, inline: true },
           { name: 'Description', value: obj.description, inline: true },
         );
       
         message.channel.send(embed10);


    });


  }

  //end of get commands









});


client.login(botsettings.token);