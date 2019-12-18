const debug = require('debug')('music');
// const { filter, map, from, reject, pluck, forEach } = require('list/curried');
// const { pick } = require('rambda');

const isIncomming = ({ is_outgoing }) => is_outgoing;
const isAudioMessage = ({ _ }) => _ === 'messageAudio';

const getChat = (client, chat_id) =>
  client.invoke({
    _: 'getChat',
    chat_id
  });

const downloadFile = (client, file_id) =>
  client.invoke({
    _: 'downloadFile',
    file_id,
    priority: 10
  });

const getMessages = (client, id) =>
  client.invoke({
    _: 'getChatHistory',
    chat_id: id,
    from_message: 0,
    offset: -10,
    limit: 15
  });

// const makeFlow = client =>
//   client
//     |> from
//     |> reject(isIncomming)
//     |> pluck('content')
//     |> filter(isAudioMessage)
//     |> pluck('audio')
//     |> map(pick(['title', 'performer', 'file_name', 'audio']))
//     |> forEach(msg => {
//       console.log(msg);
//       // downloadFile(client, msg.audio.id)
//       //   .then(arg => console.log('finished download', arg))
//       //   .catch(console.log);
//     });

const chats = {
  'UndergroundCultura': -1001288891972
};

module.exports = client => {
  // const flow = makeFlow(client);
  debug('Starting to look back.');

  // debug(chats);
  // chats
  //   |> from
  //   |> forEach(([name, id]) => {
  //       console.log(name, id);

  //       // getChat(client, id)
  //       //   .then(chat => {
  //       //     debug('chat', name, chat);
  //       //     lazy(getMessages)
  //       //   })
  //     })
};
