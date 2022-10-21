const venom = require('venom-bot');

venom
  .create({
    session: 'new-session-random' + Math.abs(Math.random() * 999), //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Hi, This is an automated chatbot reply.')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    if (message.body === 'Really?' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Yes really! 😙')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }


    if (message.body === 'What else can you do?' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'A lot of things 🙂. Type menu to know more.')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }


    if ((message.body === 'menu'|| message.body === 'Menu') && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Oops! Sorry. Menu is not supported yet I\'ll learn more at time passes by...🌔')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

  });
}