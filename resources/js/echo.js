var i = 0;
console.log('hello from echo')
// window.Echo.channel('public-message-channel')
//     .listen('MessageEvent', (data) => {
//     i++;
//     console.log('hello')
// });


window.Echo.channel(`public-message-channel`).listen('.MessageEvent', (data) => {
    console.log('hello with dot')
});