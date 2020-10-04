var SceneWelcomeVideo = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneWelcome ()
	{
		Phaser.Scene.call(this, { key: 'sceneWelcomeVideo' });
	},

	preload: function ()
	{
		this.load.video('space', 'assets/video/video1.mp4')//.on('complete', () => {console.log('load complate')});
	},

	create: function ()
	{
		var video = this.add.video(300, 300, 'space').on('complete', () => {});
		video.setAlpha(0);
		this.tweens.add({'targets': video, 'alpha': 1, 'duration': 1500});
		var t = this.add.text(850, 1000, '2025年\n第一批人類火星探險家成功在\n火星極點建立科學觀測站\n\n妳，Sandy 是研究火星生態系的科學家\n伴隨著在地球擔任 NASA\n通訊工程師的女友 Annie 的期待\n你準備開始\n新的工作環境與新的挑戰\n\n但你沒想到的是\n第一個挑戰居然來的這麼快...', {'fontSize': '26px'})
		video.play(true);
		this.tweens.add({'targets': t, 'y': -450, 'duration': 12000}).on('complete', () => {
			this.tweens.add({'targets': video, 'alpha': 0, 'duration': 2000}).on('complete',() => {
				video.destroy();
				this.scene.transition({ target: 'sceneStoryA1', duration: 0});
			})
			});
		
	}

});
