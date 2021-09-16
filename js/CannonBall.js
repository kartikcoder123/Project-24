class CannonBall {
    constructor(x, y) {
        var option = {
            isStatic: true
        }
        this.r = 30
        this.body = Bodies.circle(x, y, this.r, option)
        this.image = loadImage("assets/cannonball.png")
        this.path=[]
        World.add(world, this.body)
    }
    shoot(){
        var new_angle = cannon.angle - 28
        new_angle = new_angle*(3.14/180)
        var velocity = p5.Vector.fromAngle(new_angle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})

    }

    
    display(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()
        if(this.body.velocity.x>0 && this.body.position.x>250){
            var p = [this.body.position.x,this.body.position.y]
            this.path.push(p);
            
        }
        for(var i=0;i<this.path.length;i++){
            image(this.image,this.path[i][0],this.path[i][1],5,5)
        }
    }
}
