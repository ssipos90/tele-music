const { Client } = require('tdl');
const { TDLib } = require('tdl-tdlib-ffi');
const hmr = require('./hot.js');
require('dotenv').config();

const { API_ID, API_HASH, PHONE_NUMBER, AUTH_NUMBER, AUTH_PASSWORD } = process.env;

const getLogin = () => ({
  getPhoneNumber: async (retry) => {
    if (retry) throw new Error('Phone number retry.');
    
    return PHONE_NUMBER;
  },
  getAuthCode: async (retry) => {
    if (retry) throw new Error('Auth code retry.');

    return AUTH_NUMBER;
  },
  getPassword: async (passwordHint, retry) => {
    console.log('Password hint: ', passwordHint);
    if (retry) throw new Error('Password retry.');

    return AUTH_PASSWORD;
  },
  getName: async () => ({ firstName: 'Sebastian', lastName: 'Sipos' })
});

const run = async () => {
  const client = new Client(new TDLib(), {
    apiId: API_ID,
    apiHash: API_HASH
    // useTestDc: true
  });
  client.on('error', console.error);

  await client.connect();
  console.log('connected.');

  await client.login(getLogin);
  console.log('logged in.');

  hmr(client);
  if (module.hot) {
    console.log('hot active');
    module.hot.accept('./hot.js', function() {
      console.log('accept update');
      require('./hot.js')(client);
    });
  }
}

run().catch(console.error);
