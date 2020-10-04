// 0: show gameA_OS1
// 1: keyboard pressed
//    show gameA_OS2
// 4or5: one binary btn pressed
// 10: two binary btn pressed
//     show gameA_OS3
// 13: wrong data
//     show gameA_OS4
// 15: gameA passed
//     show gameA_OS5

var currentGameProgress = 0
if (localStorage.getItem("currentGameProgress") != null){
	var inputVal = localStorage.getItem("currentGameProgress");
}
/*	Example:

	currentGameProgress = 2000;
	localStorage.setItem("currentGameProgress", currentGameProgress);
*/

var sentMSG = new Array()
if (localStorage.getItem("sentMSG") != null){
	sentMSG = JSON.parse(localStorage.getItem("sentMSG"));
}
/*	Example:

	sentMSG.push({MSG:inputVal, ETA:2000});
	localStorage.setItem("sentMSG", JSON.stringify(sentMSG));
*/

var gameA_OS1 = "Oh no. There's only 27% of energy left.\n\nI have to report this to NASA."
var gameA_OS2 = "Hmmm, I can't send anything \n\nfrom the damaged keyboard."
var gameA_OS3 = "Ah! It's binary input.\n\nI can convert 27 into binary numbers."
var gameA_OS4 = "Oooops, I sent the wrong data."
var gameA_OS5 = "Perfect!\n\nNASA is sending someone to help me \n\nsolve the power issue"

