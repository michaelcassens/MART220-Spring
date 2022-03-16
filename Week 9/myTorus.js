class myTorus{

    constructor(radius, tubeRadius, detailX, detailY, locationX, locationY)
    {
        this.radius = radius;
        this.tubeRadius = tubeRadius;
        this.detailX = detailX;
        this.detailY = detailY;
        this.locationX = locationX;
        this.locationY = locationY;
    }

    show()
    {
        
        torus(this.radius, this.tubeRadius, this.detailX, this.detailY);
    }

    translateTorus()
    {
        translate(this.locationX,this.locationY);
    }

    rotateTorus(amount)
    {
        rotateX(amount);
        rotateY(amount);
    }


}