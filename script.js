//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(width,height){
		return width*height;
	}
}

class Square extends Animal {
	constructor(side){
		this.side=side;
	}
	getPerimeter(side){
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
