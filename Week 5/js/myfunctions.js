function moveSquare()
{
    if(keyIsPressed)
    {
      if(key == 'a')
      {
          squareX-=5;
      }
  
      else if(key == 'd')
      {
        squareX+=5;
      }
      else if(key == 'w')
      {
        squareY-=5;
      }
      else if(key == 's')
      {
        squareY+=5;
      }
    }
}

function createCircle(r,g,b,x,y,diameter)
{
  fill(r,g,b);
  circle(x,y,diameter);
}