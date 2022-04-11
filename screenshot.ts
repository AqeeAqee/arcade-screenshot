 
/**
 * screen shotter device useful especially for devices
 **/
//% color=#03AA74 weight=1 icon="\uf083" 
//% groups='["Basic", "Advanced"]'
//% block="Snapshot"
namespace screenshot{}

namespace console{

    const hex= "0123456789abcdef"
    /**
    * Take a shot of current screen, and transfer its define codes to computer via usb connection, in img`000100...` format. 
    * After called this function, get img define codes from "Show console device", underneath the simulator, copy and paste codes into anywhere of the Code Editor, then you could see the image by click the image icon ahead the first line of img`...`
    */
    //% blockId=takeScreenshot
    //% block="take a snapshot of Screen to console"
    //% blockNamespace=screenshot
    //% group="Basic"
    //% weight=100
    export function takeScreenshot(){
        console.log("img`")
        let strLast=""
        // let str = "img`"
        for (let y = 0; y <screen.height;y++){
            let str="    "
            for(let x=0;x<screen.width;x++){
                str+= hex[screen.getPixel(x,y)]
            }
            if(str==strLast)
                str = " "+str   //avoid be combined of same lines by console log textbox
            console.log(str)
            strLast=str
        }
        console.log("`")
    }


    /**
    * Take a screenshot of current Tilemap, and transfer its define codes to computer via usb connection. 
    * After called this function, get Tilemap define codes from "Show console Device", underneath the simulator, copy and paste codes into anywhere of the Code Editor, then you could see the tilemap by click the icon ahead the first line of these codes
    * [NOTE] The first can be wraped to 2 lines by console textbox, if the tiles hex string splited, join the first 2 lines together before use.
    */
    //% blockId=takeTilemapSnapshot
    //% block="take a snapshot of Tilemap to console"
    //% blockNamespace=screenshot
    //% group="Basic"
    //% weight=98
    export function takeTilemapSnapshot(){
        const TM_DATA_PREFIX_LENGTH = 4;
        const TM_WALL = 2;

        const tm = game.currentScene().tileMap
        if(!tm||!tm.data){
            console.log("[e] [console.takeTilemapSnapshot()] No Tilemap loaded currently, load a tilemap first before call me.")
            return
        }
        const data = tm.data

        let str=""
        //tiles
        const bufTiles= control.createBuffer(TM_DATA_PREFIX_LENGTH*2+data.width*data.height)
        bufTiles.setNumber(NumberFormat.UInt16LE, 0, data.width)
        bufTiles.setNumber(NumberFormat.UInt16LE, 2, data.height)
        let index = TM_DATA_PREFIX_LENGTH
        for (let y = 0; y <data.height;y++){
            for(let x=0;x<data.width;x++){
                bufTiles.setUint8(index++, data.getTile(x, y))
            }
        }
        str+="let myTilemap = tiles.createTilemap(hex`"+bufTiles.toHex()+"`,"

        //wall
        console.log(str + " img`")
        let strLast = ""
        for (let y = 0; y < data.height; y++) {
            str = "    "
            for (let x = 0; x < data.width; x++) {
                str += data.isWall(x, y) ? TM_WALL:"."
            }
            if (str == strLast)
                str = " " + str   //avoid be combined of same lines by console log textbox
            console.log(str)
            strLast = str
        }
        str = "`"

        //tileImages
        str += ", ["
        data.getTileset().forEach((tileImage,index)=>{
            if(index==0){
                str+="myTiles.transparency16,"
            }else{
                console.log(str + " img`")
                strLast = ""
                for (let y = 0; y < tileImage.height; y++) {
                    str="    "
                    for (let x = 0; x < tileImage.width; x++) {
                        const c = tileImage.getPixel(x, y)
                        str += hex[c]
                    }
                    if (str == strLast)
                        str = " " + str   //avoid be combined of same lines by console log textbox
                    console.log(str)
                    strLast = str
                }
                str ="`,"
            }
        })
        console.log(str+"],")

        //scale
        switch(data.scale){
            case TileScale.Eight: console.log("TileScale.Eight"); break
            case TileScale.Sixteen: console.log("TileScale.Sixteen"); break
            case TileScale.ThirtyTwo: console.log("TileScale.ThirtyTwo"); break
        }

        console.log(");")

    }
}
