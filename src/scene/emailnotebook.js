var SceneEmail = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneEmail()
	{
		Phaser.Scene.call(this, { key: 'sceneEmail' });
	},

	preload: function ()
	{
		// this.load.image('background', 'assets/background.png');
		this.load.image('bg_email', 'assets/bg_EMAIL.png');
		this.load.image('txt_email', 'assets/txt_EMAIL.png');
		this.load.image('cross', 'assets/cross.png')
	},

	create: function ()
	{
		var bg_StoryA1 = this.add.image(0, 0, 'bg_email').setOrigin(0).setScale(0.711);
		// var t = this.add.text(700, 500, 'Some info from machine2\nMore info from machine2', {'fontSize': '40px'})
		 var btnExit = this.add.image(1280, 60, 'cross');

		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);
		btnExit.setInteractive({ cursor: 'pointer' })
	},

	update: function()
	{
		console.log(currentGameProgress);
	}
});
