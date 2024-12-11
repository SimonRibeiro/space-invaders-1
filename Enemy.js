export default class Enemy {
  constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;
    this.width = 44;
    this.height = 32;

    this.image = new Image();
    this.image.src = `images/enemy${imageNumber}.png`;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  reachBase(canvas) {
      if (this.y + this.height > canvas.height - 75) { //Same pop-off as Player (make a variable ?)
          return true;
      } else {
          return false;
      }
  }
}
