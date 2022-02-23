class mycircle
{
    constructor(x, y, diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    drawcircle()
    {
        circle(this.x, this.y, this.diameter);
    }
}