var InfopageDATA = {
	bg:{
		btn:0 ,
		gameprocess:0 ,
		x: 677,
		y: 242,
		h: 73,
		w: 1015,
	},
};
var SceneInfopage = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneInfopage()
	{
		Phaser.Scene.call(this, { key: 'sceneInfopage' , InfopageDATA});
	},

	preload: function ()
	{
		// this.load.image('background', 'assets/background.png');
		this.load.image('bg_info', 'assets/bg_INFO.png');
		// this.load.image('txt_email', 'assets/txt_EMAIL.png');
		// this.load.image('cross', 'assets/cross.png');
	},

	create: function ()
	{

		var timer = this.time.addEvent({
		    delay: EmailDATA.updatedt,                // ms
		    callback: this.updateEmail,
		    //args: [],
		    callbackScope: this,
		    loop: true
		});
		var bg_infopage = this.add.image(0, 0, 'bg_info').setOrigin(0).setScale(0.711);
		// var t = this.add.text(700, 500, 'Some info from machine2\nMore info from machine2', {'fontSize': '40px'})
		 // var btnExit = this.add.image(1280, 60, 'cross');

		var btnExit = this.add.rectangle(1280, 60, 20, 20, 0xff0000, 0);
		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);
		btnExit.setInteractive({ cursor: 'pointer' })
	},

	update: function()
	{
		// console.log(currentGameProgress);
	},

	updategameprocess: function()
	{
		// currentGameProgress++;
	}
});
