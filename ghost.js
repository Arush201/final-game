class Ghost{
    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height)
        this.image = loadImage("images/ghost.png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }

}
