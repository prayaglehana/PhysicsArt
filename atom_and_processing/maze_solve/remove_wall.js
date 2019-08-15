function remove_wall(c,n)
{

   var x=c.i-n.i;
   var y=c.j-n.j;

  if(x==-1)//right wall of current
      {c.walls[1]=false;
      n.walls[3]=false;}
  else if(x==1)//left wall of current
        {c.walls[3]=false;
        n.walls[1]=false;}

  if(y==1)// top wall of current
            {c.walls[0]=false;
            n.walls[2]=false;}
  else if(y==-1)			//bottom wall of current
              {c.walls[2]=false;
              n.walls[0]=false;}


}
