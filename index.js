const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const consola = require('consola');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`
 Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('xDast#8745')} - Credit : @dkmpostor & @Eskey & Zenix
`);

  const auth = rs.question('Enter Authentication Code! : ');
  chalk.bgYellow.bold('STARTING');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      chalk.bgRed.bold('Terjadi Kesalahan Saat Login Menggunakan Cookie,Mungkin Cookie Expired Atau Salah');
      break

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

var _0x26f5b4=_0xa2f4;function _0xa2f4(_0x1dbece,_0x504334){var _0x191eec=_0x191e();return _0xa2f4=function(_0xa2f478,_0x55127d){_0xa2f478=_0xa2f478-0xf2;var _0x1b4966=_0x191eec[_0xa2f478];return _0x1b4966;},_0xa2f4(_0x1dbece,_0x504334);}function _0x191e(){var _0x127b0f=['⟩\x20Server\x20:\x20','1636692OPdmXH','798476nzRanp','336DXLqNl','50049gVHiXN','format','229244FsHwRC','⟩\x20User\x20:\x20','⟩\x20Trophy\x20:\x20','bold','bgYellow','Done\x20+1\x20Crown\x20+\x2030\x20Trophy\x20By\x20Zenix77','192749KhgBCo','3EFESnm','log','bgGreen','\x20\x0a\x0a','2460Eralwd','58944gXJLWk','bgBlue','1163355ylKjqO','bgWhite'];_0x191e=function(){return _0x127b0f;};return _0x191e();}(function(_0x41fe82,_0x15cfa5){var _0x5cf321=_0xa2f4,_0x22b85e=_0x41fe82();while(!![]){try{var _0x24cea8=-parseInt(_0x5cf321(0x101))/0x1+parseInt(_0x5cf321(0xfb))/0x2+-parseInt(_0x5cf321(0x102))/0x3*(parseInt(_0x5cf321(0xf7))/0x4)+-parseInt(_0x5cf321(0xf3))/0x5+-parseInt(_0x5cf321(0xf6))/0x6+parseInt(_0x5cf321(0xf8))/0x7*(-parseInt(_0x5cf321(0x107))/0x8)+-parseInt(_0x5cf321(0xf9))/0x9*(-parseInt(_0x5cf321(0x106))/0xa);if(_0x24cea8===_0x15cfa5)break;else _0x22b85e['push'](_0x22b85e['shift']());}catch(_0x1372d9){_0x22b85e['push'](_0x22b85e['shift']());}}}(_0x191e,0x386e7),console[_0x26f5b4(0x103)]('\x0a\x0a╭━━━━━━━━━━━━━╮\x0a\x0a┃╱╱╱╱╱╱╱╱┏┓╱╱╱┃\x0a\x0a┃╱╱╱┏┓╱╱┏╯┃╱╱╱┃\x0a\x0a┃╱╱┏┛┗┓╱┗┓┃╱╱╱┃\x0a\x0a┃╱╱┗┓┏┛╱╱┃┃╱╱╱┃\x0a\x0a┃╱╱╱┗┛╱╱╱┃┃╱╱╱┃\x0a\x0a┃╱╱╱╱╱╱╱╱┗┛╱╱╱┃\x0a\x0a╰━━━━━━━━━━━━━\x20\x0a\x0a'+console[_0x26f5b4(0x103)]('[\x20'+moment()[_0x26f5b4(0xfa)]('HH:mm:ss')+'\x20]')+'\x0a\x0a'+chalk['bgRed']['bold'](_0x26f5b4(0xfc)+username)+'\x20\x0a\x0a'+chalk[_0x26f5b4(0x104)][_0x26f5b4(0xfe)](_0x26f5b4(0xf5)+country)+_0x26f5b4(0x105)+chalk[_0x26f5b4(0xf2)][_0x26f5b4(0xfe)](_0x26f5b4(0xfd)+trophy)+_0x26f5b4(0x105)+chalk[_0x26f5b4(0xff)][_0x26f5b4(0xfe)]['red']('⟩\x20Crown\x20:\x20'+crown)+'\x0a\x0a'+chalk[_0x26f5b4(0xf4)]['black'](_0x26f5b4(0x100))),await sleep(0x1d4c));

    } else if (result == 'BANNED') {
      console.log(consola.error(`Akun lu di band makanya jan cheat`));
     break;
    }
  }


})();
