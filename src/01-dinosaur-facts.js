/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const dinosaurs = require("../data/dinosaurs");
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 * 
 *  function getLongestDinosaur(arr){
 * let longestDinosaur = null;
 *  for (let i = 0; i < arr.length; i++){
 *  const obj = arr[i];
 *  if (obj.lengthInMeters === lengthInMeters){
 * }
 * 
 * }
 * }
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  let longestDino = dinosaurs[0];
    if (!longestDino) return {};
    

  for (let i = 1; i< dinosaurs.length; i++) {
    if (longestDino.lengthInMeters < dinosaurs[i].lengthInMeters) {
      longestDino = dinosaurs[i];
      
    }
        
  } 
  const answer = { 
    [longestDino.name]: longestDino.lengthInMeters * 3.281
  }
  return answer;
}
//[longestDino.name]: longestDino.lengthInMeters * 3.281
// getLongestDinosaur();

// 1. Find the longest dinosaurs

// // function getLongestDinosaur(dinosaur) {
//   if (!dinosaurs.length){

//   } return {};
//   let longestDino = dinosaur[0];
//    for(let currDino of dinosaurs) {
//     if (currDino.lengthInMeters > longestDino.lengthInMeters) {
//       longestDino = currDino;
//     }

//    }
//    return {
//      [longestDino.name] : longestDino.lengthInMeters * 3.281
//    }
// }

// getLongestDinosaur();

// return a new obj with the dino name as a key (dino.name) and lengthinfeet is the value * 3.281

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  let str;
  let dinoName = dinosaurs[0];
  for(let i = 0; i< dinosaurs.length; i++) {
     if (dinosaurs[i].dinosaurId  === id) {

     }
  }
  return str;
}
       
 
  
 //console.log(getDinosaurDescription(dinosaurs,"BFjjLjea-O"));
/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
 function getDinosaursAliveMya(dinosaurs, mya, key) {
  const arr= [];
  let dinoMya;
   for (let i = 0; i < dinosaurs.length; i++) {
    dinoMya= dinosaurs[i].mya;
    if (dinosaurs[i].mya.length === 2) {
      if (dinoMya[1] <= mya && mya <= dinoMya[0]) {
        if (dinosaurs[i][key]) {
            arr.push(dinosaurs[i][key]);
        } else {
            arr.push(dinosaurs[i].dinosaurId);
        }
      }
    } else if (dinoMya.length === 1) {
        if (dinoMya[0] === mya || dinoMya[0] === (mya + 1)) {
          if (dinosaurs[i][key]) {
            arr.push(dinosaurs[i][key]);
          } else {
            arr.push(dinosaurs[i].dinosaurId);
          }
        }
      //return arr;    
    }
  }
  return arr;
};
    

console.log(getDinosaursAliveMya(exampleDinosaurData, 65));


     
          

   
module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
