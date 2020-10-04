var StoryA1DATA={
	warningimg: '',
	level: 0,
	fadecount: 0,
	fadetime: 30,
	fadedir:1,
};
var SceneStoryA1 = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneStoryA1 ()
	{
		Phaser.Scene.call(this, { key: 'sceneStoryA1' ,	StoryA1DATA});
	},

	preload: function ()
	{
		this.load.image('bg_StoryA1', 'assets/bg_storyA1.png');
		this.load.image('fs_app', 'assets/fs_app.png');
		this.load.image('mb_app', 'assets/mb_app.png');
		this.load.image('ob_app', 'assets/ob_app.png');
		this.load.image('laptop', 'assets/laptop.png');
		this.load.image('cactus', 'assets/cactus.png');
		this.load.image('ad1', 'assets/screen_logo_1.png');
		this.load.image('ad2', 'assets/screen_logo_2.png');
		this.load.image('fg_StoryA1', 'assets/fg_storyA1_effect.png');
		this.load.image('warning',	'assets/warning.png')
	},

	create: function ()
	{
		var bg_StoryA1 = this.add.image(0, 0, 'bg_StoryA1').setOrigin(0).setScale(0.711);
		var fsapp = this.add.image(440, 410, 'fs_app').setScale(0.7);
		var mbapp = this.add.image(620, 410, 'mb_app').setScale(0.7);
		var obapp = this.add.image(800, 410, 'ob_app').setScale(0.7);
		var machine2 = this.add.image(350, 670, 'laptop').setScale(0.7);
		var machine3 = this.add.image(1230, 640, 'cactus').setScale(0.7);
		StoryA1DATA.warningimg = this.add.image(470, 350, 'warning').setOrigin(0).setScale(0.02);
		var ads = [];
		ads.push(this.add.image(180, 330, 'ad1').setScale(0.7));
		ads.push(this.add.image(180, 330, 'ad2').setScale(0.7));
		ads[1].alpha = 0;
		var fg_StoryA1 = this.add.image(0, 0, 'fg_StoryA1').setOrigin(0).setScale(0.711);

		fsapp.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneBinaryGame', duration: 0});
		}, this);
		mbapp.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneGameC', duration: 0});
		}, this);
		machine2.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneEmail', duration: 0});
		}, this);
		machine3.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneInfopage', duration: 0});
		}, this);
		obapp.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStarmap', duration: 0});
		}, this);
		ads[0].on('pointerdown', function (event) {
			window.open("https://www.nasa.gov");
		}, this);

		fsapp.setInteractive({ cursor: 'pointer' });
		mbapp.setInteractive({ cursor: 'pointer' });
		machine2.setInteractive({ cursor: 'pointer' });
		machine3.setInteractive({ cursor: 'pointer' });
		obapp.setInteractive({ cursor: 'pointer' });
		ads[0].setInteractive({ cursor: 'pointer' });
	},

	update: function() {
		if(currentGameProgress <30)
		{
			if(StoryA1DATA.fadecount >= StoryA1DATA.fadetime)
			{
				StoryA1DATA.fadedir*=(-1);
				StoryA1DATA.fadecount = 0;
			}
			if(StoryA1DATA.fadedir == 1)
			{
				StoryA1DATA.warningimg.alpha = StoryA1DATA.fadecount/StoryA1DATA.fadetime;
			}
			else
			{
				StoryA1DATA.warningimg.alpha = 1-StoryA1DATA.fadecount/StoryA1DATA.fadetime;
			}
			StoryA1DATA.fadecount++;
		}
		if(currentGameProgress >=15)
		{
			StoryA1DATA.warningimg.x = 655;
		}
		if(currentGameProgress >= 30)
		{
			StoryA1DATA.warningimg.alpha = 0;
		}
	}
});
