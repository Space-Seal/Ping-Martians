var SceneWelcome = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneWelcome ()
	{
		Phaser.Scene.call(this, { key: 'sceneWelcome' });
	},

	preload: function ()
	{
		this.load.image('logo', 'assets/logo.png');
		this.load.image('bg', 'assets/bg_welcome.png');
	},

	create: function ()
	{
		var bg = this.add.image(0, 0, 'bg').setOrigin(0).setScale(0.711);
		var logo = this.add.image(700, 350, 'logo').setScale(0.7);
		var btn = this.add.rectangle(683, 384, 1366, 768, 0xff0000, 0.0);
		this.tweens.add({'targets': bg, 'y': -690, 'duration': 5000}).on('complete', () => {btn.setInteractive({ cursor: 'pointer' });});
		this.tweens.add({'targets': logo, 'y': 250, 'duration': 4000});
		btn.once('pointerdown', function (event) {
			//this.scene.transition({ target: 'sceneGameC', duration: 0});
			this.tweens.add({targets: bg, 'scale': 1.3, 'x': -560, 'y': -1900, 'alpha': 0,'duration': 6000}).on('complete', () => {this.scene.transition({ target: 'sceneWelcomeVideo', duration: 0})})
			this.tweens.add({'targets': logo, 'alpha': 0, 'duration': 1000});
		}, this);
	}

});
