// alert("Hello! We will be counting together today!")

var name=prompt ("Enter name here");
	$("h3").text("Hello " +name+"!");
	

$("#button1").one("click",function(){
	var num=$(".input1").val()
	for(i=num;i<=20;i++){
		$("h4").append(i+",")
	}
	$(document).ready(function() {
  $("#button1").click(function() {
    $("#form1").toggle();
  });
});
})


$("#button2").one("click",function(){
	var int=$(".input2").val()
	for(k=int;k>=0;k--){
		$("h5").append(k+",") 
	}
	$(document).ready(function() {
  $("#button2").click(function() {
    $("#form2").toggle();
  });
});
})


$("#button3").one("click",function(){
	for(l=0;l<=20;l+=2){
		$(".p1").append(l+",")	
	}
	$(document).ready(function() {
  $("#button3").click(function() {
    $(".p1").toggle();
  });
});
})



var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 20,
    easing: "easeOutExpo",
    delay: 1000})
