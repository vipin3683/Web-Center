window.addEventListener("mousemove",function(details){
    gsap.to('#rect',function(){
       left:details.clientX +"px",
       ease; Power3
    });
    
});