class Particle {

    constructor() {
      this.x = 300;
      this.y = 300;
      this.vx = random(-1, 3);
      this.vy = random(-5, 1);
      this.alpha = 255;
      var path = "taco.png";
      this.img = loadImage(path);
    }

    
    finished() {
     return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      fill(255, this.alpha);
      //ellipse(this.x, this.y, 16);
      image(this.img, this.x, this.y);
    }
  
  }
  