// First, implement something that works, but has the promise version of the 
// "callback hell" problem we saw in our discussion of using callbacks.

// Next, implement it as a promise chain. Note that there are a few different 
// ways you can write this, because of the different forms you can use for an arrow 
// function. Try some different forms. Which is the most concise? Which do you find the most readable?

// Finally, implement it using async and await.

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceTiming = {
duration: 2000,
iterations: 1,
fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1.animate(aliceTumbling, aliceTiming);

// First Method: Callback
// function doAlice(alice, callback) {
//     alice.animate(aliceTumbling, aliceTiming).onfinish = function() {
//         callback();
//     };
// }

// doAlice(alice1, () => {
//     doAlice(alice2, () => {
//         doAlice(alice3, () => {
//             console.log("yay");
//         })
//     })
// })

// Second Method: Promise
// alice1.animate(aliceTumbling, aliceTiming)
// .finished
// .then(() => {
//     alice2.animate(aliceTumbling, aliceTiming)
//     .finished
//     .then(() => {
//         alice3.animate(aliceTumbling, aliceTiming);
//     })
// })

// Third Method: Async and await
async function doAlice() {
    await aliceAnimate(alice1);
    await aliceAnimate(alice2);
    await aliceAnimate(alice3);
}

function aliceAnimate(alice) {
    return alice.animate(aliceTumbling, aliceTiming).finished;
}

doAlice();
