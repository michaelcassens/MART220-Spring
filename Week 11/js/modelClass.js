class modelClass
{
    constructor(x,y,speed, myModel, myTexture)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myModel = myModel;
        this.myTexture = myTexture;
    }

    updateSpeed(speed)
    {
        this.speed = speed;
    }

    updateX(x)
    {
        this.x = x;
    }
    updateY(y)
    {
        this.y = y;
    }

    draw()
    {
        push();
        translate(this.x, this.y,-500);
        scale(2); // Scaled to make model fit into canvas
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed);
        normalMaterial(); // For effect
        smooth();
        noStroke();
        texture(this.myTexture);
        // this displays the model using the "model" function
        model(this.myModel,24);
    }

}