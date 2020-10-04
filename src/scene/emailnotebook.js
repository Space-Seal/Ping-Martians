var EmailDATA = {
	txt1:{
		btn:0 ,
		gameprocess:0 ,
		x: 677,
		y: 242,
		h: 73,
		w: 1015,
		txt: "NASA's InSight mission 的通訊(洞察號)",
		txtbox: '',
		essaybg: '',
		essaybox: '',
		fullessay: 'InSight Mission(簡稱IM)使用了\n深空網路(Deep Space Network),\n來提供星球間的探索、航天器與\n其他地球團隊的通訊連接。火星\n人在這個任務中需要透過火星軌\n道上的航天器中繼數據到深空網\n路的天線。',
	},

	txt2:{
		btn:0 ,
		gameprocess:0 ,
		x: 677,
		y: 315,
		h: 73,
		w: 1015,
		txt: "Deep Space Network",
		txtbox: '',
		essaybg: '',
		essaybox: '',
		fullessay: '深空網路由三個通訊站點組成，\n	在地球上經度相距一百二十度，\n	分別位於加州、西班牙和澳大利\n	亞。透過這樣的設置確表遙遠的\n	航天器落入地平線前，另外一個\n	站點可以接收到他的訊號。\n',
	},
	
	

	txt3:{
		btn:0 ,
		gameprocess:0 ,
		x: 677,
		y: 388,
		h: 73,
		w: 1015,
		txt: "首次進入Deep Space的立方體衛星",
		txtbox: '',
		essaybg: '',
		essaybox: '',
		fullessay: '你知道嗎，在NASA的一篇報告中\n	顯示了關於Deep Space的規範為\n距離地球一萬六千公里到太陽系最\n遠的行星之間。也就是說，在火星\n部屬的MarS Cube One為第一個進\n	入Deep Space的立方衛星。',
	},
	
	

	epochStart:1600000000000,
	updatedt: 1000, //ms
	planet_timescale: 0.00007,
	// planet_timescale: 0.007,
	au2screen: 200,
	deg2rad: 0.017444,

	timeString: 0,
	timeText: 0,
	distanceText:0
};
var SceneEmail = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function SceneEmail()
	{
		Phaser.Scene.call(this, { key: 'sceneEmail' , EmailDATA});
	},

	preload: function ()
	{
		// this.load.image('background', 'assets/background.png');
		this.load.image('bg_email', 'assets/bg_EMAIL.png');
		this.load.image('txt_email', 'assets/txt_EMAIL.png');
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
		var bg_StoryA1 = this.add.image(0, 0, 'bg_email').setOrigin(0).setScale(0.711);
		// var t = this.add.text(700, 500, 'Some info from machine2\nMore info from machine2', {'fontSize': '40px'})
		 // var btnExit = this.add.image(1280, 60, 'cross');
		
		EmailDATA.txt1.btn = this.add.rectangle(EmailDATA.txt1.x, EmailDATA.txt1.y, EmailDATA.txt1.w, EmailDATA.txt1.h, 0xffffff, 0);
		EmailDATA.txt1.txtbox = EmailDATA.txt1.essaybox=this.add.text((this.cameras.main.worldView.x + this.cameras.main.width / 2), EmailDATA.txt1.btn.y-17, EmailDATA.txt1.txt,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0.5, 0);
		EmailDATA.txt1.btn.on('pointerdown', function (event) {
			EmailDATA.txt1.essaybg=this.add.image(0, 0, 'txt_email').setOrigin(0).setScale(0.711);
			EmailDATA.txt1.essaybox=this.add.text(450, 200, EmailDATA.txt1.fullessay,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0, 0);
			EmailDATA.txt1.essaybg.on('pointerdown', function (event) {
				EmailDATA.txt1.essaybox.destroy();
				EmailDATA.txt1.essaybg.destroy();
			}, this);
			EmailDATA.txt1.essaybg.setInteractive({ cursor: 'pointer' });
		}, this);
		EmailDATA.txt1.btn.setInteractive({ cursor: 'pointer' })	

		EmailDATA.txt2.btn = this.add.rectangle(EmailDATA.txt2.x, EmailDATA.txt2.y, EmailDATA.txt2.w, EmailDATA.txt2.h, 0xffffff, 0);
		EmailDATA.txt2.txtbox = EmailDATA.txt2.essaybox=this.add.text((this.cameras.main.worldView.x + this.cameras.main.width / 2), EmailDATA.txt2.btn.y-17, EmailDATA.txt2.txt,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0.5, 0);
		EmailDATA.txt2.btn.on('pointerdown', function (event) {
			EmailDATA.txt2.essaybg=this.add.image(0, 0, 'txt_email').setOrigin(0).setScale(0.711);
			EmailDATA.txt2.essaybox=this.add.text(450, 200, EmailDATA.txt2.fullessay,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0, 0);
			EmailDATA.txt2.essaybg.on('pointerdown', function (event) {
				EmailDATA.txt2.essaybox.destroy();
				EmailDATA.txt2.essaybg.destroy();
			}, this);
			EmailDATA.txt2.essaybg.setInteractive({ cursor: 'pointer' });
		}, this);
		EmailDATA.txt2.btn.setInteractive({ cursor: 'pointer' })	

		EmailDATA.txt3.btn = this.add.rectangle(EmailDATA.txt3.x, EmailDATA.txt3.y, EmailDATA.txt3.w, EmailDATA.txt3.h, 0xffffff, 0);
		EmailDATA.txt3.txtbox = EmailDATA.txt3.essaybox=this.add.text((this.cameras.main.worldView.x + this.cameras.main.width / 2), EmailDATA.txt3.btn.y-17, EmailDATA.txt3.txt,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0.5, 0);
		EmailDATA.txt3.btn.on('pointerdown', function (event) {
			EmailDATA.txt3.essaybg=this.add.image(0, 0, 'txt_email').setOrigin(0).setScale(0.711);
			EmailDATA.txt3.essaybox=this.add.text(450, 200, EmailDATA.txt3.fullessay,{fontFamily: 'Georgia', 'fontSize': '32px', 'color': '#000000'}).setOrigin(0, 0);
			EmailDATA.txt3.essaybg.on('pointerdown', function (event) {
				EmailDATA.txt3.essaybox.destroy();
				EmailDATA.txt3.essaybg.destroy();
			}, this);
			EmailDATA.txt3.essaybg.setInteractive({ cursor: 'pointer' });
		}, this);
		EmailDATA.txt3.btn.setInteractive({ cursor: 'pointer' })	

		var btnExit = this.add.rectangle(1280, 60, 20, 20, 0xff0000, 0);
		btnExit.on('pointerdown', function (event) {
			this.scene.transition({ target: 'sceneStoryA1', duration: 0});
		}, this);
		btnExit.setInteractive({ cursor: 'pointer' })
	},

	update: function()
	{
		console.log(currentGameProgress);
	},

	updategameprocess: function()
	{
		// currentGameProgress++;
	}
});
