class Ghost{
    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height)
        this.ghostSprite = createSprite(x,y,width,height)
        this.ghostSprite.visible = false
        this.image = loadImage("images/ghost.png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        this.ghostSprite.x = this.body.position.x
        this.ghostSprite.y = this.body.position.y
        pop()

    }

}
