class intervalclass {
    constructor(index, arrayname, speed) {
        this.index = index;
        console.log(this.index);
        this.arrayname = arrayname;
        this.speed = speed;
        console.log(this.speed);
    }

    getIndex() {
        return this.index;
    }
    getArrayName()
    {
        return this.arrayname;
    }
    update() {
        setInterval(this.changeAnimation.bind(this), this.speed);
    }

    changeAnimation() {
        // this increments our frames to display in the animation
        this.index += 1;

        // check to see if we have gone beyond the size of the array
        if (this.index >= this.arrayname.length) {
            // reset to the first index of the array
            this.index = 0;

        }

    }
}