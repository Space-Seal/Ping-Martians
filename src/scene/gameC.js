var msgBoxText

var SceneGameC = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneBinaryGame ()
	{
		Phaser.Scene.call(this, { key: 'sceneGameC' });
	},

	preload: function ()
	{
		this.load.image('bg_gameC', 'assets/bg_gameA.png');
		this.load.html('msgbox', 'assets/msgbox.html');
		this.load.image('buttonClear', 'assets/button_clear.png');
		this.load.image('buttonSend', 'assets/button_send.png');
	},

	create: function ()
	{
		//Setting Update Timer
	    var timer = this.time.addEvent({
		    delay: 500,                // ms
		    callback: this.updateMsgBox,
		    //args: [],
		    callbackScope: this,
		    loop: true
		});

		var bbg_gameAgg = this.add.image(0, 0, 'bg_gameC').setOrigin(0).setScale(0.711);
		var eleMsgBox = this.add.dom(400, 200).createFromCache('msgbox');
		// eleMsgBox.setPerspective(800);
		eleMsgBox.addListener('click');
    	eleMsgBox.on('click', function (event) {});

		this.tweens.add({targets: eleMsgBox, y: 300, duration: 3000, ease: 'Power3'});



		if (localStorage.getItem("inputNum") == null){
			inputNum = "> ";	//first played, init
		}
		else{
			var inputNum = localStorage.getItem("inputNum");
		}

		var btnExit = this.add.rectangle(1280, 55, 20, 20, 0xff0000, 0.5);
		var btnC = this.add.image(1150, 700, 'buttonClear').setScale(0.3);
		var btnS = this.add.image(1200, 700, 'buttonSend').setScale(0.3);

		var text2Send = this.add.text(875, 680, inputNum,{'backgroundColor':'#0f0', 'fontSize': '16px', 'color': '#00f'});
		msgBoxText = this.add.text(875, 400, "",{'backgroundColor':'#0f0', 'fontSize': '16px', 'color': '#00f'}).setOrigin(0, 0);

		// event handles
		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);
		btnC.on('pointerdown', function (event) {
			inputNum = "> ";
			text2Send.setText(inputNum);
			localStorage.setItem("inputNum", inputNum);
		}, this);
		btnS.on('pointerdown', function (event) {
			gtc.add('gameA', 10000, inputNum, function(data){if(data == "> 008"){console.log('success');}else{console.log('fail');}})
			
			/*
			msgBoxText.setText("");
			for(obj of gtc.list()){
				var ETA = Math.round((obj.timestamp + obj.delay - new Date().getTime())/1000);
				msgBoxText.setText(msgBoxText.text+obj.data+"\t\tETA: "+ETA+"sec\n");
			}
			*/
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
			msgBoxText.setText(msgBoxText.text+obj.data+"\t\tETA: "+ETA+"sec\n");
		};
	}

});
