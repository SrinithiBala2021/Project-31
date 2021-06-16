class PARTICLE{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options)
        this.color= color(random(0,225),random(0,225),random(0,225))
        World.add(world,this.body)
    }

    display(){

        push()
        ellipseMode(CENTER)
        fill(this.color)
        ellipse(this.body.position.x,this.body.position.y,20,20)
        pop()
    }

}