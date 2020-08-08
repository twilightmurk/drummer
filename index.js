for(var i=0 ; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener('click', function ()
  {
    switch(this.innerHTML){
      case "w":
        var crash =new Audio('sounds/crash.mp3');
        crash.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[0].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "a":
        var bass =new Audio('sounds/kick-bass.mp3');
        bass.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[1].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "s":
        var snare =new Audio('sounds/snare.mp3');
        snare.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[2].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "d":
        var tom1 =new Audio('sounds/tom-1.mp3');
        tom1.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[3].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "j":
        var tom2 =new Audio('sounds/tom-2.mp3');
        tom2.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[4].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "k":
        var tom3 =new Audio('sounds/tom-3.mp3');
        tom3.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[5].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;

      case "l":
        var tom4 =new Audio('sounds/tom-4.mp3');
        tom4.play();
        document.querySelectorAll(".drum")[0].classList.add("pressed");
        setTimeout(function(){document.querySelectorAll(".drum")[6].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
      break;
    }
  }
);
document.addEventListener('keypress', function (event)
{
  switch(event.key){
    case "w":
      var crash =new Audio('sounds/crash.mp3');
      crash.play();
      document.querySelectorAll(".drum")[0].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[0].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "a":
      var bass =new Audio('sounds/kick-bass.mp3');
      bass.play();
      document.querySelectorAll(".drum")[1].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[1].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "s":
      var snare =new Audio('sounds/snare.mp3');
      snare.play();
      document.querySelectorAll(".drum")[2].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[2].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "d":
      var tom1 =new Audio('sounds/tom-1.mp3');
      tom1.play();
      document.querySelectorAll(".drum")[3].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[3].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "j":
      var tom2 =new Audio('sounds/tom-2.mp3');
      tom2.play();
      document.querySelectorAll(".drum")[4].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[4].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "k":
      var tom3 =new Audio('sounds/tom-3.mp3');
      tom3.play();
      document.querySelectorAll(".drum")[5].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[5].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;

    case "l":
      var tom4 =new Audio('sounds/tom-4.mp3');
      tom4.play();
      document.querySelectorAll(".drum")[6].classList.add("pressed");
      setTimeout(function(){document.querySelectorAll(".drum")[6].classList.remove("pressed");this.style.color = "#f1f8fd";}, 100);
    break;
  }
}
);
}
