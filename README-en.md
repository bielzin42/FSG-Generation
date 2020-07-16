# Generation Clean Page:sparkles:
[![GitHub issues](https://img.shields.io/github/issues/bielzin42/generation-fresh-page)](https://github.com/bielzin42/generation-fresh-page/issues) [![GitHub stars](https://img.shields.io/github/stars/bielzin42/generation-fresh-page)](https://github.com/bielzin42/generation-fresh-page/stargazers) 

Script that cleans the left side menu and expands the video to facilitate one screen visualization to able coding while the user is  seeing the class :rocket:

>current site for use: [http://generationbrasil.online/login](http://generationbrasil.online/login)

  

## How to use
Open the JS file with your favorite text editor and just copy and paste the code into your favorite browser console.
```
function  wideVideo (){
var  video  =  document.getElementById("myVideo");
video.removeAttribute('width');
var  nav  =  document.getElementsByClassName('navbar-dark');
nav.item(0).remove();
var  col9  =  document.getElementsByClassName('col-md-9');
col9.item(0).classList.add('col-md-12');
}

//to auto use the function after running the code, uncomment the line below.
//wideVideo()
```
Now we have the  ```wideVideo()``` function to use, you need only invocate it when your'e ready to use.

**Note**: Remember, this function needs to be pasted into console every time that you open the site, and the function has to be invocated in every class/refresh


## Cases of use

>case 1 where the video is barely visible to the user difficulting the class 
![caso de uso 1 onde o video está pouco visível ao usuário dificultando o acompanhamento da aula](https://i.imgur.com/QHjvbP8.png](https://i.imgur.com/QHjvbP8.png))

>case 2 where the video is more visible to the user facilitating the class 
![caso de uso 2 onde o video está mais visível ao usuário facilitando o acompanhamento da aula](https://i.imgur.com/f1h0uPo.png)


> Written with [StackEdit](https://stackedit.io/).