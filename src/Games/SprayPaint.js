import './SprayPaint.css'
import wallImage from './sprayWall.jpg'

export const SprayPaint = (props) => {

            
    // const mainCanvas = 
    // mainCanvas.addEventListener("mousedown", function(){
    //     console.log("HEYY")
    // } )


    // const handleDraw = function(){

    //     console.log("hi")
    // }
    function printHi(e){

        
        var canv = e.target;
        var ctx = canv.getContext("2d");
        var rect = canv.getBoundingClientRect();
        // console.log(e);

        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(`x: ${x}, y: ${y}`)
    }

    return(

        <div className="sprayGameContainer">


            <h1>{"Please direct all anger to this virtual MVB wall"}</h1>
            <p>{"it's not cool to vandalise physical property"}</p>


            <div className="sprayWall">
            <img className="wall-image" src={wallImage} alt="" 
                width="800px" height="450px"/>
                <div className="canvasContainer">
                    <canvas
                            id="sprayCanvas" className="sprayCanvas"
                            width="800px" height="450px"
                            onMouseMove={printHi}>
                    </canvas>
                </div>
            </div>

        </div>

    )



}


export default SprayPaint;