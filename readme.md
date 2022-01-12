# Bouncing div side to side with drops 
This is a JavaScript code to practice some functionality


- ## Bouncing div side to side
The brown div will bounce infenitly inside the tomato (red) dev

- ## drops
Some dotes will fall down like rain, to increase the number of dotes :
change this line:
```
function timer() {
    move("car");
    if(Math.random()<0.005){// <= **change this value to have more drops**
        rain();
    }
    if (document.getElementById('drop')) {
        dropRain();
    }else{
        rain();
    }
    my_time = setTimeout('timer()', 10);
}
```
the higher the number, the more dots you will get.

## screenshots
![Sample](pictures/simple.png)
![Sample2](pictures/simple2.png)
When GameOver
![Sample3](pictures/simple3.png)


If you found that useful, don't forget to give a ⭐ *Good luck*
