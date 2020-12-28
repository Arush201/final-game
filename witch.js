class Witch{
    constructor(x,y,width,height){

        var options={
            isStatic : true
        }
        this.witchSprite = createSprite(x,y,width,height)
        this.witchSprite.visible = false
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("images/witch.png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
        this.witchSprite.x = this.body.position.x
        this.witchSprite.y = this.body.position.y
    }

}
