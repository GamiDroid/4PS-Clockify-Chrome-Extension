
let storageKeyApiKey: string = "clockify-api-key";
let apiKey = chrome.storage.local.get(storageKeyApiKey);
if (apiKey == undefined) {
    chrome.storage.local.set({ storageKeyApiKey: 1 });
}

console.log('clockify api key: ' + apiKey);

let message: string = 'Hello world';
console.log(message);