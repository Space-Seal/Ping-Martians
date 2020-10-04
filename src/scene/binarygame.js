var systemLogText;
var transmitTimeText;
var baseStatText;
var OSText;
function gameA_progress1(whichBtn) {
	if(currentGameProgress>=13){
		currentGameProgress = currentGameProgress;
	}else if(whichBtn==3){
		currentGameProgress = 9;
	}else if(currentGameProgress>=10){
		currentGameProgress = currentGameProgress;
	}else if (whichBtn==0 && currentGameProgress==5){
		currentGameProgress = 10;
	}else if (whichBtn==1 && currentGameProgress==4){
		currentGameProgress = 10;
	}else if (whichBtn == 0){
		currentGameProgress = 4;
	}else if (whichBtn == 1){
		currentGameProgress = 5;
	}
	console.log("currentGameProgress: "+currentGameProgress)
}


var SceneBinaryGame = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneBinaryGame ()
	{
		Phaser.Scene.call(this, { key: 'sceneBinaryGame' });
	},

	preload: function ()
	{
		this.load.image('bg_gameA', 'assets/bg_gameA.png');
		this.load.image('button0', 'assets/button0.png');
		this.load.image('button1', 'assets/button1.png');
	},

	create: function ()
	{

		//Setting Update Timer
	    var timer = this.time.addEvent({
		    delay: 200,                // ms
		    callback: this.updateSystemLog,
		    //args: [],
		    callbackScope: this,
		    loop: true
		});

		
		if (localStorage.getItem("inputVal") == null){
			inputVal = "> ";	//first played, init
		}else{
			var inputVal = localStorage.getItem("inputVal");
		}

		var bg_gameA = this.add.image(0, 0, 'bg_gameA').setOrigin(0).setScale(0.711);
		var btnExit = this.add.rectangle(1280, 60, 20, 20, 0xff0000, 0);
		var btn0 = this.add.image(670, 230, 'button0').setScale(0.8);
		var btn1 = this.add.image(770, 230, 'button1').setScale(0.8);
		var btnC = this.add.rectangle(890, 720, 80, 40, 0xff0000, 0);
		var btnS = this.add.rectangle(1210, 720, 80, 40, 0xff0000, 0);

		var text2Send = this.add.text(875, 670, inputVal,{'fontSize': '16px', 'color': '#fff'});
		systemLogText = this.add.text(875, 200, "",{'fontSize': '16px', 'color': '#fff'}).setOrigin(0, 0);
		transmitTimeText = this.add.text(860, 170, "Estimated reply time:",{'fontSize': '12px', 'color': '#fff'}).setOrigin(0, 0);
		baseStatText = this.add.text(170,400, "Base Electrical Power Storage: 27%\nMars-Earth Communication Signal: BAD\nCurrent Distance to Earth:", {'fontSize': '16px', 'color': '#f00'}).setOrigin(0, 0);
		OSText = this.add.text(400,550, gameA_OS1, {'fontSize': '16px', 'color': '#000'}).setOrigin(0, 0);
		// event handles
		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);

		btn0.on('pointerdown', function (event) {
            inputVal += "0";
			text2Send.setText(inputVal);
			localStorage.setItem("inputVal", inputVal);
			gameA_progress1(0);
		}, this);
        btn1.on('pointerdown', function (event) {
			inputVal += "1";
			text2Send.setText(inputVal);
			localStorage.setItem("inputVal", inputVal);
			gameA_progress1(1);
		}, this);
		btnC.on('pointerdown', function (event) {
			inputVal = "> ";
			text2Send.setText(inputVal);
			localStorage.setItem("inputVal", inputVal);
		}, this);
		btnS.on('pointerdown', function (event) {
			if (CalcRemainTime() != 0){
				if(inputVal.length>7){
					gtc.add('gameA',10000, "Transmission failed:\n insufficient bandwidth\n (Message too long)", function(data){});
				}else{
					gtc.add('gameA', CalcRemainTime()*10, inputVal, function(data){if(data == "> 11011"){console.log('success');currentGameProgress=15;}else{console.log('fail');currentGameProgress=13;}})
			}}else{
				gtc.add('gameA',10000, "Transmission failed: connection lost\n(Earth out of sight)", function(data){});
			}

			inputVal = "> ";
			text2Send.setText(inputVal);
			localStorage.setItem("inputVal", inputVal);
		}, this);
		btnExit.setInteractive({ cursor: 'pointer' });
		btn0.setInteractive({ cursor: 'pointer' });
		btn1.setInteractive({ cursor: 'pointer' });
		btnC.setInteractive({ cursor: 'pointer' });
		btnS.setInteractive({ cursor: 'pointer' });
		this.input.keyboard.on('keydown', function (event) {
			gameA_progress1(3);
		});
	},

	updateSystemLog: function ()
	{
		systemLogText.setText("");
		for(obj of gtc.list()){
			var ETA = Math.round((obj.timestamp + obj.delay - new Date().getTime())/1000);
			if(obj.data.length>10){
				systemLogText.setText(systemLogText.text+obj.data+"\n\n");
			}else{
				systemLogText.setText(systemLogText.text+obj.data+"\t\tETA: "+ETA+"sec\n\n");
			}			
		}

		if (CalcRemainTime() != 0){
			transmitTimeText.setText("Estimated reply time: " + Math.round(CalcRemainTime())+" sec")
		}else{
			transmitTimeText.setText("No Connection")
		}

		baseStatText.setText("Base Electrical Power Storage: 27%\n\nMars-Earth Communication Signal: BAD\n\nCurrent Distance to Earth: "+StarmapDATA.EMdistance+" AU")

		if(currentGameProgress >= 15){
			OSText.setText(gameA_OS5);
			localStorage.setItem("currentGameProgress", currentGameProgress);
		}else if(currentGameProgress>=13){
			OSText.setText(gameA_OS4);
			localStorage.setItem("currentGameProgress", currentGameProgress);
		}else if(currentGameProgress >= 10){
			OSText.setText(gameA_OS3);
			localStorage.setItem("currentGameProgress", currentGameProgress);
		}else if (currentGameProgress == 9){
			OSText.setText(gameA_OS2);
		}
		
	}

});
