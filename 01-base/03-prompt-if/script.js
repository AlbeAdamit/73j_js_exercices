/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function askCake() {
  // your code here
let hungry = "Wonderful, you'll love it"
let notHungry = "More cake for me then :p !"
let hunger = prompt("Do you want some cake ?");
if (hunger == "Yes") {
  alert(hungry)
} else {
  alert(notHungry)
}
})();