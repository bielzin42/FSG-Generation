
# Generation Clean Page:sparkles:
[![GitHub issues](https://img.shields.io/github/issues/bielzin42/generation-fresh-page)](https://github.com/bielzin42/generation-fresh-page/issues) [![GitHub stars](https://img.shields.io/github/stars/bielzin42/generation-fresh-page)](https://github.com/bielzin42/generation-fresh-page/stargazers) 

Script que limpa o menu lateral e expande o video para facilitar a visualização em uma tela,
sendo assim, capaz de acompanhar a aula e codar ao mesmo tempo :rocket:
>site atual: [http://generationbrasil.online/login](http://generationbrasil.online/login)

> [english version](https://github.com/bielzin42/generation-clean-page/blob/master/README-en.md)

  

## modo de uso 

Abra o arquivo ```clean-me``` JS com seu editor de texto favorito, copie e cole no terminal do seu navegador favorito.
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
A partir deste ponto a função ```wideVideo()``` foi criada e você precisa somente invocá-la no console quando quiser ativar.

**Nota**: Lembrando que essas função tem que ser reescrita no console sempre que o site for aberto e que a função deverá ser invocada a cada aula/refresh.

# Casos de uso

### caso de uso 1 onde o video está pouco visível ao usuário dificultando o acompanhamento da aula

![caso de uso 1 onde o video está pouco visível ao usuário dificultando o acompanhamento da aula](https://i.imgur.com/QHjvbP8.png](https://i.imgur.com/QHjvbP8.png))

### caso de uso 2 onde o video está mais visível ao usuário facilitando o acompanhamento da aula

![caso de uso 2 onde o video está mais visível ao usuário facilitando o acompanhamento da aula](https://i.imgur.com/f1h0uPo.png)


> Written with [StackEdit](https://stackedit.io/).
