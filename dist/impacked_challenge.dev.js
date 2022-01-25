"use strict";

// step 1: download json file
var url = 'https://gist.githubusercontent.com/packardlabs/1c82043aef13c498f32ebc658f8ef297/raw/1ee1b8e35eba94195f6e485f653e09f8c03a9309/packtypes.json';
fetch(url).then(function (res) {
  return res.json();
}).then(function (out) {
  console.log('Checkout this JSON!', out);
})["catch"](function (err) {
  throw err;
});