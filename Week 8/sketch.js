const particles = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }

}