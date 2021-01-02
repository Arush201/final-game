class Boy{
    constructor(x,y,width,height){
        var options={
            restitution : 0.2
        }
        this.boySprite = createSprite(x,y,width,height)
        this.boySprite.visible = false
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        this.boySprite.x = this.body.position.x
        this.boySprite.y = this.body.position.y
        pop()
    }

}
