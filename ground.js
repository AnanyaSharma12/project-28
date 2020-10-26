class ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
				this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
						pop()

	}

} 