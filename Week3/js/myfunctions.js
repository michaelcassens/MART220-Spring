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