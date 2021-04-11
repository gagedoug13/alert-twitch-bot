const tmi = require('tmi.js')
var player = require('play-sound')
require('dotenv').config()
// const sad = require('sadMusic.mp3')

const opts = {
    identity: {
        username: 'super_maro',
        password: process.env.PASS
    },
    channels: ['nation_live'],
    connection: {
        reconnect: true
    }
}
let currentWord = 0
let arrivingViewers = {
    rrufflz: false,
    classichanky: false,
    tank_vjr: false,
    americanape: false,
    yardmeat: false,
    sixsix229: false,
    hottakesbysoph: false,
    marcuskylebrittney: false,
    sliazx64: false,
    thomkar: false,
    st0rmarksmen: false,
    timmybuoy: false,
    na_blastoise: false,
    cringytony: false,
    maplebento: false,
    ripofff: false
}
const onMessageHandler = (target, context, message, self) => {
    if (self) { return }
    
    // for testing
    if (context.username == 'americanape' && arrivingViewers.americanape == false) {
        // player.play(sad, function(err){
        //     if (err) throw err
        //   })
        // client.say('nation_live', '')
        // play audio clip
        // send request to browser file to queue gif
        // arrivingViewers.americanape = true
    }
    

    if (context.username == 'rrufflz' && arrivingViewers.rrufflz == false) {
        client.say('nation_live', 'PogU rrufflz!')
        // play audio clip
        // send request to browser file to queue gif
        arrivingViewers.rrufflz = true
    }


    
   

    if (context.username == 'maplebento' && arrivingViewers.maplebento == false) {
        client.say('nation_live', 'YOOOOO ITS YUNG FUCKIN DAEMON. LESGOOO. Welcome in bruh.')
        arrivingViewers.maplebento = true
    }
    
}

console.log()

const client = new tmi.client(opts)

client.on('message', onMessageHandler)

client.on('connected', () => console.log('connected'))

client.connect()

 // const trashTalk = ['wow, look who actually showed up', 'yeah, keep talkin LUL', 'what does that even mean? am i the robot or you?', 'psshh, im outta here. yall trippin']
    // if (context.username == 'tank_vjr' && currentWord < trashTalk.length) {
    //     client.say('nation_live', `@ ${context.username} ${trashTalk[currentWord]}`)
    //     currentWord++
    // }