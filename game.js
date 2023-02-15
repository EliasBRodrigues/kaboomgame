
kaboom({
    width: 400,
    height: 200,
    stretch: true,
    letterbox: true,
    scale: 4,
    font: "sinko",
})

// Load assets
loadSprite("mario", "/img/smb_mario_sheet.png", {
    sliceX: 16,

    anims: {
        "idle": {
            from: 7,
            to: 8,

            speed: 10,
            loop: true,
        },
        "run": {
            from: 9,
            to: 12,
            speed: 10,
            loop: true,
        },
        "jump": 1
    },
})

const SPEED = 120
const JUMP_FORCE = 240

gravity(640)

// Add our player character
const player = add([
	sprite("mario"),
	pos(center()),
	origin("center"),
	area(),
	body(),
])

// .play is provided by sprite() component, it starts playing the specified animation (the animation information of "idle" is defined above in loadSprite)
player.play("idle")

// Add a platform
add([
	rect(width(), 24),
	area(),
	outline(1),
	pos(0, height() - 24),
	solid(),
])

// Switch to "idle" or "run" animation when player hits ground
player.onGround(() => {
	if (!isKeyDown("left") && !isKeyDown("right")) {
		player.play("idle")
	} else {
		player.play("run")
	}
})

player.onAnimEnd("idle", () => {
	// You can also register an event that runs when certain anim ends
})

onKeyPress("space", () => {
	if (player.isGrounded()) {
		player.jump(JUMP_FORCE)
		player.play("jump")
	}
})

onKeyDown("left", () => {
	player.move(-SPEED, 0)
	player.flipX(true)
	// .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
	if (player.isGrounded() && player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
	player.flipX(false)
	if (player.isGrounded() && player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyRelease(["left", "right"], () => {
	// Only reset to "idle" if player is not holding any of these keys
	if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
		player.play("idle")
	}
})

const getInfo = () => `
Anim: ${player.curAnim()}
Frame: ${player.frame}
`.trim()

// Add some text to show the current animation
const label = add([
	text(getInfo()),
	pos(4),
])

label.onUpdate(() => {
	label.text = getInfo()
})


// loadSprite("enemy", "/img/enemy.png")
// loadSprite("block", "/img/block.png")
// loadSprite("coin", "/img/coin.png")

// // Define player movement speed (pixels per second)
// const SPEED = 480

// gravity(2400)

// const level = addLevel([
//     "@  ^  $$",
//     "================",
// ], {
//     width: 40,
//     height: 50,

//     pos: vec2(200, 500),

//     "@": () => [
//         sprite("bean"),
//         area(),
//         body(),
//         origin("bot"),
//         "player",
//     ],
//     "=": () => [
// 		sprite("block"),
// 		area(),
// 		solid(),
// 		origin("bot"),
// 	],
// 	"$": () => [
// 		sprite("coin"),
// 		area(),
// 		origin("bot"),
// 		"coin",
// 	],
// 	"^": () => [
// 		sprite("enemy"),
// 		area(),
// 		origin("bot"),
// 		"danger",
// 	],
// })



// // Add player game object
// const player = get("player")[0]

// onKeyPress("space", () => {
//     if(player.isGrounded()){
//         player.jump()
//     }
// })

// // onKeyDown() registers an event that runs every frame as long as user is holding a certain key
// onKeyDown("left", () => {
// 	// .move() is provided by pos() component, move by pixels per second
// 	player.move(-SPEED, 0)
// })

// onKeyDown("right", () => {
// 	player.move(SPEED, 0)
// })



// player.onCollide("danger", () => {
//     player.pos = level.getPos(0, 0)
// })


// player.onCollide("coin", (coin) => {
//    destroy(coin)
// })



