// step 1: download json file
let url = 'https://gist.githubusercontent.com/packardlabs/1c82043aef13c498f32ebc658f8ef297/raw/1ee1b8e35eba94195f6e485f653e09f8c03a9309/packtypes.json';

import fetch from "node-fetch"
globalThis.fetch = fetch

fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Checkout this JSON!', out)
    })
    .catch(err => {
        throw err
    })