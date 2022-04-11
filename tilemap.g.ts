// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010002020202020000010000000000010100000000000000010000000000000101000000000000010000000000000001010000000003030303030000000001010100000000010000000000000001000101000000010000000000000001000001010000010000000000000001000000010100010000000000000001000000000101010000000000000001000000000001010000000000000001000000000000010100000000000001000000000000000101000000000001000000000000000001010000000001000000000000000000010100000001000000000000000000000101010101010101010101010101010101`, img`
2 . 2 . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . 2 . 2 . . . . . . . . . . . 
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
         }
        return null;
    })

}
// Auto-generated code. Do not edit.
