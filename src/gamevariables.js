// 0: show notification on FSapp
//    show gameA_OS1
// 1: keyboard pressed
//    show gameA_OS2
// 4or5: one binary btn pressed
// 10: two binary btn pressed
//     show gameA_OS3
// 13: wrong data
//     show gameA_OS4
// 15: gameA passed
//     show gameA_OS5
//     show notification on MBapp
//     show gameC_MSG1
// 20: any number sent
//     show gameC_MSG2
// 23: reply invalid number
//     show gameC_MSG3
// 25: reply valid number
//     show gameC_MSG4
// 28: reply wrong answer
//     show gameC_MSG5
// 30: reply correct answer
//     show gameC_MSG6
var currentGameProgress = 0
if (localStorage.getItem("currentGameProgress") != null){
	var currentGameProgress = localStorage.getItem("currentGameProgress");
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
var gameA_OS5 = "Perfect!\n\nNASA is sending someone to help me \n\nsolve the power issue."

var gameC_MSG1 = "How's everything? I heard you just saved the Mars base by communication with binary."
var gameC_MSG2 = "Ah, I forget that the communication is limited to numbers only.\n\n(001)I'm fine\n(002)I'm worried\n(003)I'm happy"
var gameC_MSG3 = "??\n\n(001)I'm fine\n(002)I'm worried\n(003)I'm happy"
var gameC_MSG4 = "Just remember that I'm always by your side. I love you.\n\n (001)Love you, too."
var gameC_MSG5 = ":(\n\n(001)Love you, too."
var gameC_MSG6 = "Hope that the communication will be upgraded soon."

var transmitTimeAcc = 1;

