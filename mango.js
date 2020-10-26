class mango{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution :0,
      friction :1,
			}
				this.image=loadImage("sprites/mango.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
			pop()
 }
} 