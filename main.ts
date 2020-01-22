namespace SpriteKind {
    export const aaa = SpriteKind.create()
    export const Key = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.aaa, function (sprite, otherSprite) {
    game.over(true)
})
function life () {
    info.setLife(1)
}
function hero2 () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . f f 2 2 2 2 2 2 2 f f . . . . . . . . . . . 
. . . . . . . . . f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . 
. . . . . . . . . f 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . 
. . . . . . . . . 2 f f 2 2 2 2 2 2 2 f f 2 . . . . . . . . . . 
. . . . . . . . . f 1 1 f 2 2 2 2 2 f 1 1 f . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 f 2 2 2 f 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 f 2 f 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . f f 1 1 1 f 2 f 1 1 1 f f . . . . . . . . . . 
. . . . . . . . . f 2 f f f 2 2 2 f f f 2 f . . . . . . . . . . 
. . . . . . . . . . f 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . . 
. . . . . . . . . . . f f 2 2 2 2 2 f f . . . . . . . . . . . . 
. . . . . . . . . . f 2 2 f f f f f 2 2 f . . . . . . . . . . . 
. . . . . . . . . f 2 2 2 f 2 f 2 f 2 2 2 f . . . . . . . . . . 
. . . . . . . . f 8 8 f 8 2 f f f 2 8 f 8 8 f . . . . . . . . . 
. . . . . . . f 2 2 8 f 8 f 2 f 2 f 8 f 8 2 2 f . . . . . . . . 
. . . . . . . f 2 2 f f 2 2 2 2 2 2 2 f f 2 2 f . . . . . . . . 
. . . . . . . . f f . f 8 8 8 8 8 8 8 f . f f . . . . . . . . . 
. . . . . . . . . . f 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . 
. . . . . . . . . . f 8 8 8 f f f 8 8 8 f . . . . . . . . . . . 
. . . . . . . . . f f 2 2 f . . . f 2 2 f f . . . . . . . . . . 
. . . . . . . . . f 2 2 2 f . . . f 2 2 2 f . . . . . . . . . . 
. . . . . . . . . f f f f f . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    // It moves the hero x and y
    controller.moveSprite(hero, 300, 300)
    hero.setPosition(272, 495)
}
function countdown () {
    info.startCountdown(100)
}
function background () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f c 2 b b b b b f c c c c b c b c f f f 6 6 6 6 b b b f e e b f 
f 2 c f f f f f f f f f f f f f b f f f 5 f f f b f b f f f b f 
f f f f c c c b b c c c e c c c c f f 8 a 5 4 4 b b b b f f b f 
f b b b b f f f f f f f f f f f f f f f 5 f f f b f b f f b b f 
f b f f b b b b b b b c c c c c c f f f 7 7 7 7 b b b b f b f f 
f b c f b f f f f f f f f f f c f f f f f f f f b f b b f b b f 
f f b f b f b f b b b b c c f c f f f f f f f f f f f b f b b f 
f c c f c f b f f f f f f b f c f f c b f f c f b b f b f b f f 
f e b f b f b b b b b b f b b c c c f b b b c f b f f b f b b f 
f b f f b b b b f f f f f b f b f c f b c c f f b f b b f f b f 
f b f f b f f b f f f f f b f b f c f b f c c f b f f b f b b f 
f b e f c f b b b b f b b b f b f c f c b f c f b f e b f b f f 
f f b f b f f f f b b f f b f b f b f f c f c f b f f b b b e f 
f b b f b f f f f f b b f e f b f b f f f f c f b f b b f f f f 
f b f f b b b f 9 f f b f b f b f e b b b b b f b f b f b f f f 
f b e f b f f f b f f b f b f b f f f f f f b f b b b f b b f f 
f f b f b b f f b f f f f b f b f b b b c f b f e b f f f b e f 
f e c f e b b f b f b b b b f b f b f f f f b f b b b b b b b f 
f c e f b f b f b b b f f f f c f b f e f b b f f f f f f f b f 
f f f f f f b f f f f f b e b c b c f c f f f f b f b f b b b f 
f b f f f f b f e c b b b b f f f f f b f e c f b b b b c f f f 
f b b b b b b f f f f f f b b c b b b b f c e f b f f f b f b f 
f f b f b f f f f f f f f f f f f f f f f f b f b f f c c f b f 
f b b f e b b b b b c b b b c b b b b b b f b b b f f e f f b f 
f f b f f f f f f f f f f f c f b f f f b f f f f f f b f f b f 
f f b b b b b b b b b f f f b f b f b e b f b b b b b b b f b f 
f f f f f b f b f f b b f f b f b f b f f f b f f f f f f f b f 
f b b e f b f b b f f b b f b f b f b b b f b b b b b b b f b f 
f b f f f b f f f f f f b b b f f f f f b f b f f f f b f f b f 
f b b b b b b e b f b b b f b f b b b b b e b f b b b c c c b f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.ThirtyTwo)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
}
function camera () {
    scene.cameraFollowSprite(hero)
}
scene.onOverlapTile(SpriteKind.Player, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
function prize () {
    Prize = sprites.create(img`
. . . . . . . . . . . . . f f f . f f f . . f f f . f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f e e e f e e e f f e e e f e e e e f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e 5 5 5 e 5 5 5 e e 5 5 5 e 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . f f e 5 e e e 5 e e e 5 5 e e e 5 e e e 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . f e e 5 e 5 5 5 e 5 5 5 e e 5 5 5 5 5 5 5 e e f f f . . . . . . . . . . . . . . 
. . . . . . . . f e 5 e 5 5 4 5 5 5 2 5 5 5 5 8 5 5 5 a 5 5 e e e e f . . . . . . . . . . . . . 
. . . . . . . . f e e 5 5 4 4 4 5 2 2 2 5 5 8 8 8 5 a a a 5 e e 5 5 e f . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 4 4 4 5 2 2 2 5 5 8 8 8 5 a a a 5 5 e e 5 e f . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 5 4 5 5 5 2 5 5 5 5 8 5 5 5 a 5 5 5 e e 5 5 e f . . . . . . . . . . . 
. . . . . . . . . f e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e 5 5 e f . . . . . . . . . . . 
. . . . . . . . . f e e e 5 5 5 e 5 5 5 5 5 5 5 5 e 5 5 5 e e e e 5 e e f . . . . . . . . . . . 
. . . . . . . . . f e 5 5 e e e 5 e 5 5 5 5 5 5 e 5 e e e 5 5 e e e 7 e f . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 e 5 5 5 5 5 5 e 5 5 5 5 5 5 e e 7 9 e f . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 e 5 5 5 5 5 5 e 5 5 5 5 5 5 e e 7 9 e f . . . . . . . . . . . 
. . . . . . . . . . . f e 5 5 5 5 5 e 5 5 5 5 e 5 5 5 5 5 5 5 e e e 7 e f . . . . . . . . . . . 
. . . . . . . . . . . f e 5 5 5 5 5 5 e 5 5 e 5 5 5 5 5 5 5 5 e 5 e e f . . . . . . . . . . . . 
. . . . . . . . . . . f e 5 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e e 5 5 e f . . . . . . . . . . . . . 
. . . . . . . . . . . f e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 5 5 e e e f . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e 5 5 5 5 5 5 5 5 5 5 5 5 e 5 e e f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e 5 e 5 e e 5 5 5 5 5 5 5 e 5 e 5 e f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 e 5 5 e e e e e e e 5 e 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 e e 5 5 5 5 5 5 e e 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 5 e e 5 5 e e 5 5 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e e e e e e e 5 5 e e 5 5 e e e e e e e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 5 e e e e e e 5 5 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 e 5 e e e e 5 e 5 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 e 5 e e e e 5 e 5 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 e 5 5 5 e 5 5 e f f e 5 5 e 5 5 5 e 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 e 5 5 5 e 5 5 e 5 5 e 5 5 e 5 5 5 e 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 e 5 5 e 5 5 e f f e 5 5 e 5 5 e 5 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 5 e 5 e 5 5 e 5 5 e 5 5 e 5 e 5 5 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 5 5 e e 5 5 e f f e 5 5 e e 5 5 5 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . f e 5 5 5 5 5 5 e e e 5 5 e e e 5 5 5 5 5 5 e f . . . . . . . . . . . . . . . 
. . . . . . . . . . f e 5 5 5 5 5 5 5 e f f e 5 5 5 5 5 5 5 e f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e 5 5 5 5 5 5 e e 5 5 5 5 5 5 e e f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e 5 5 5 5 5 5 5 5 5 5 e e f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f e e 5 5 5 5 5 5 e e f f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f e e e e e e f f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.aaa)
    Prize.setPosition(658, 115)
}
function villian1 () {
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 8 5 5 8 8 f f . . . . . . . . . . . . 
. . . . . . . . . f 8 8 8 8 5 5 8 8 8 8 f . . . . . . . . . . . 
. . . . . . . . f 8 8 8 8 8 5 5 8 8 8 8 8 f . . . . . . . . . . 
. . . . . . . . f 8 8 8 8 8 5 5 8 8 8 8 8 f . . . . . . . . . . 
. . . . . . . f 8 5 8 8 8 8 5 5 8 8 8 8 5 8 f . . . . . . . . . 
. . . . . . . f 8 5 5 5 8 8 5 5 8 8 5 5 5 8 f . . . . . . . . . 
. . . . . . f 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 8 f . . . . . . . . 
. . . . . . f 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 8 f . . . . . . . . 
. . . . . . f 8 8 5 5 5 5 5 5 5 5 5 5 5 5 8 8 f . . . . . . . . 
. . . . . . f 8 5 a a a a a a a a a a a a 5 8 f . . . . . . . . 
. . . . . . f 8 5 a f 1 a a a a a a f 1 a 5 8 f . . . . . . . . 
. . . . . . . f 5 a f f a a a a a a f f a 5 f . . . . . . . . . 
. . . . . . . f 5 a a a a a a a a a a a a 5 f . . . . . . . . . 
. . . . . . f 5 f 5 a 1 1 1 1 1 1 1 1 a 5 f 5 f . . . . . . . . 
. . . . . f 5 5 5 f a a a a a a a a a a f 5 5 5 f . . . . . . . 
. . . . . f f 5 5 5 f f f f f f f f f f 5 5 5 f f . . . . . . . 
. . . . . . . f 8 8 5 5 5 5 5 5 5 5 5 5 8 8 f . . . . . . . . . 
. . . . . . f 8 8 f 8 8 5 5 5 5 5 5 8 8 f 8 8 f f . . . . . . . 
. . . . . f 5 5 5 f 8 8 8 8 5 5 8 8 8 8 f 5 5 5 5 f . . . . . . 
. . . . . f 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f 4 2 8 f . . . . . . 
. . . . . . f f . f 5 5 5 8 5 5 8 5 5 5 f . f 7 3 f . . . . . . 
. . . . . . . . . f 8 8 8 8 5 5 8 8 8 8 f . . f f . . . . . . . 
. . . . . . . . f 8 8 8 8 f f f f 8 8 8 8 f . . . . . . . . . . 
. . . . . . . . f 5 5 5 f . . . . f 5 5 5 f . . . . . . . . . . 
. . . . . . . f f 5 5 5 f . . . . f 5 5 5 f f . . . . . . . . . 
. . . . . . f 5 5 5 5 5 f . . . . f 5 5 5 5 5 f . . . . . . . . 
. . . . . . f 5 5 5 5 5 f . . . . f 5 5 5 5 5 f . . . . . . . . 
. . . . . . f f f f f f f . . . . f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    villian.setPosition(620, 110)
}
info.onLifeZero(function () {
    game.over(false)
})
let projectile: Sprite = null
let villian: Sprite = null
let Prize: Sprite = null
let hero: Sprite = null
hero2()
camera()
background()
villian1()
countdown()
prize()
life()
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a a a a a a a a . 
. . . a a a a a 5 5 5 a a a a . 
. . . 5 5 5 5 5 5 5 5 a a a a . 
. . . a a a a a 5 5 5 a a a a . 
. . . . . . . a a a a a a a a . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, villian, 400, 0)
})
