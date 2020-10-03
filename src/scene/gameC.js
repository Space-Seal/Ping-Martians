var msgBoxText;
var eleMsgBox;
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
		var bbg_gameAgg = this.add.image(0, 0, 'bg_gameC').setOrigin(0).setScale(0.711);
		var eleMsgBox = this.add.dom(400, 200).createFromCache('msgbox');
		// eleMsgBox.setPerspective(800);
		eleMsgBox.addListener('click');
    	eleMsgBox.on('click', function (event) {

			if (event.target.name === 'loginButton')
			{
				var inputUsername = this.getChildByName('username');
				var inputPassword = this.getChildByName('password');

				//  Have they entered anything?
				if (inputUsername.value !== '' && inputPassword.value !== '')
				{
					//  Turn off the click events
					this.removeListener('click');

					//  Tween the login form out
					this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

					this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
						onComplete: function ()
						{
							element.setVisible(false);
						}
					});

					//  Populate the text with whatever they typed in as the username!
					text.setText('Welcome ' + inputUsername.value);
				}
				else
				{
					//  Flash the prompt
					this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
				}
			}

    	});

		this.tweens.add({targets: eleMsgBox, y: 300, duration: 3000, ease: 'Power3'});
	},

});
