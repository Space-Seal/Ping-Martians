var config = {
	type: Phaser.AUTO,
	autoCenter: Phaser.Scale.CENTER_BOTH,
	width: 1366,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [SceneWelcome, SceneBinaryGame, SceneWelcomeVideo, SceneGameC, SceneStoryA1, SceneMachine1, SceneMachine2, SceneMachine3, SceneStarmap,SceneEmail],
	//scene: [SceneBinaryGame, SceneWelcome, SceneWelcomeVideo, SceneGameC, SceneStoryA1, SceneMachine1, SceneMachine2, SceneMachine3, SceneStarmap],
	dom: {createContainer: true}
};

var game = new Phaser.Game(config);
