import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom()

// load assets
loadSprite("seth", "sprites/seth.pedit")
loadSprite("bird2", "sprites/bird2.pedit")
loadSprite("bird", "sprites/bird.pedit")
loadSprite("bird3", "sprites/bird3.pedit")
// add a character to screen
const player = add([
	sprite("seth"),
	pos(80, 40),
	area(),
])

// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)

const level = addLevel([
  " @   ^    ^    @  ",
  "    +   @    +    ",
  "                  ",
  "==================",
  ], {
  width:32,
  height:32,

  "=": () => [
    rect(32, 32),
    color(69, 40, 1),
    area(),
    solid(),
    "wall"
  ],

    "@":[sprite("bird")],
    "^":[sprite("bird2")],
    "+":[sprite("bird3")]
  
  }
         )
const SPEED = 480

onKeyDown("left", () => {
  player.move(-SPEED, 0)
})

onKeyDown("right", () =>{
    player.move(SPEED, 0)
  })
