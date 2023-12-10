let ps = []
function setup(){
   createCanvas(windowWidth, windowHeight)
   background(0,0,0)
}

function draw(){
    background(0, 30)
    ps = ps.filter((p) => {
        return p.y < height
    })
    
    for (let i = 0; i< ps.length; i++){
        ps[i].draw()
        ps[i].update()
    }

}

function mousePressed(){
    for (let i = 0; i<50; i++) {
        ps.push(new Pacticle(mouseX, mouseY))
    }
}