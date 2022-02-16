class imageclass
{
    constructor(img, x, y, w, h)
    {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    getImage()
    {
        return this.img;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }

    moveX(speed)
    {
        this.x += speed;
    }
}