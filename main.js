function preload() {
    face = loadImage("face2.jpg")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
}

function draw() {

    image(face, 25, 25, 250, 250)

    fill("black")
    rect(25, 17, 250, 15)
    rect(25, 267, 250, 15)
    rect(17, 25, 15, 250)
    rect(267, 25, 15, 250)
    fill("red")
    circle(25, 25, 30)
    circle(275, 25, 30)
    circle(25, 275, 30)
    circle(275, 275, 30)
}

function takeSnapshot(){
    save("face.png")
}