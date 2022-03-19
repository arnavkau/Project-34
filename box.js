class Box {
    constructor(x, y, w, h,angle) {
      let options = {
        restitution: 0.5,
        density: 0.0007

      };

      rectMode(CENTER)
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.color = "green"
      this.image = loadImage("obstacle.png");
      this.angle= angle
      console.log("error")
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(CENTER);
      fill("#14e34b")
      image( this.image,0,0, this.w, this.h);
      pop();
    }
  }
  