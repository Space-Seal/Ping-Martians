var msgBoxText;
var repliedText;
var SceneGameC = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneBinaryGame ()
	{
		Phaser.Scene.call(this, { key: 'sceneGameC' });
	},

	preload: function ()
	{
		this.load.image('bg_gameC', 'assets/bg_gameC.png');
		this.load.image('buttonClear', 'assets/button_clear.png');
		this.load.image('buttonSend', 'assets/button_send.png');
	},

	create: function ()
	{
		//Setting Update Timer
	    var timer = this.time.addEvent({
		    delay: 200,                // ms
		    callback: this.updateMsgBox,
		    //args: [],
		    callbackScope: this,
		    loop: true
		});

		if (localStorage.getItem("inputNum") == null){
			inputNum = "> ";	//first played, init
		}else{
			var inputNum = localStorage.getItem("inputNum");
		}	

		var bg_gameC = this.add.image(0, 0, 'bg_gameC').setOrigin(0).setScale(0.711);
		var btnExit = this.add.rectangle(1280, 60, 20, 20, 0xff0000, 0);
		var btnC = this.add.rectangle(280, 720, 80, 40, 0xff0000, 0);
		var btnS = this.add.rectangle(1210, 720, 80, 40, 0xff0000, 0);

		var text2Send = this.add.text(250, 600, inputNum,{'fontSize': '16px', 'color': '#fff'}).setOrigin(0, 0);
		msgBoxText = this.add.text(1200, 400, "",{'fontSize': '16px', 'color': '#fff'}).setOrigin(1, 0);
		repliedText = this.add.text(250, 250, gameC_MSG1, {'backgroundColor': '#fff', 'fontStyle':'bold', 'fontSize': '16px', 'color': '#000'}).setOrigin(0, 0);
		transmitTimeText = this.add.text(1030, 170, "Estimated reply time:",{'fontSize': '12px', 'color': '#fff'}).setOrigin(0, 0);
		// event handles
		this.input.keyboard.on('keydown', function (event) {
			if(event.key.length<2){
				inputNum += event.key;
				localStorage.setItem("inputNum", inputNum);
				text2Send.setText(inputNum);
			}
		});
		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);
		btnC.on('pointerdown', function (event) {
			inputNum = "> ";
			text2Send.setText(inputNum);
			localStorage.setItem("inputNum", inputNum);
		}, this);
		btnS.on('pointerdown', function (event) {
			if (CalcRemainTime() != 0){
				gtc.add('gameC', CalcRemainTime()*1000, inputNum, function(data){if(data == "> 011"){console.log('success');}else{console.log('fail');}})
			}else{
				gtc.add('gameC',10000, "Transmission failed: connection lost\n(Earth out of sight)", function(data){})
			}

			inputNum = "> ";
			text2Send.setText(inputNum);
			localStorage.setItem("inputNum", inputNum);
		}, this);
		btnExit.setInteractive({ cursor: 'pointer' });
		btnC.setInteractive({ cursor: 'pointer' });
		btnS.setInteractive({ cursor: 'pointer' });
	},
	updateMsgBox: function ()
	{
		msgBoxText.setText("");
		for(obj of gtc.list()){
			var ETA = Math.round((obj.timestamp + obj.delay - new Date().getTime())/1000);
			if(obj.data =="Transmission failed: connection lost\n(Earth out of sight)"){
				msgBoxText.setText(msgBoxText.text+obj.data+"\n");
			}else{
				msgBoxText.setText(msgBoxText.text+obj.data+"\t\tETA: "+ETA+"sec\n");
			}			
		}

		if (CalcRemainTime() != 0){
			transmitTimeText.setText("Estimated reply time: " + Math.floor(CalcRemainTime())+" sec")
		}else{
			transmitTimeText.setText("No Connection")
		}
	}

});
