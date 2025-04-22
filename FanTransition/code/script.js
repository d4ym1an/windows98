var transitionPoint = 0.5,
    transitionDuration = 3,
    easingType = "power(0)";

var logo = document.getElementById("logo"),
    showLogo = {showLogo};

if(!showLogo) {
  logo.classList.add("hideLogo");
}

var logoIntro = {logoIntro},
    logoIntroDuration = {logoIntroDuration},
    logoOutro = {logoOutro},
    logoOutroDuration = {logoOutroDuration},
    logoFromX = {logoFromX},
    logoFromY = {logoFromY},
    logoToX = {logoToX},
    logoToY = {logoToY}
;

var params = {
  container: document.getElementById('animationWindow'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://cdn2.nerdordie.com/widgets/transitions/fan/code/fan-transition.json'
};

/* Flipping JS */

flipX = {flipX};
flipY = {flipY};

var transitionElement = document.getElementById("transition");
if(flipX & flipY == false) {
  transitionElement.classList.add("flipX");
} else if(flipY & flipX == false){
  transitionElement.classList.add("flipY");
} else if(flipY & flipY){
  transitionElement.classList.add("flipBoth");
}
/* End Flipping */

var anim = lottie.loadAnimation(params);

anim.addEventListener("DOMLoaded", onDOMLoaded)

function onDOMLoaded(e){
  let proxy = {
    frame: 0
  };
  
  gsap.set("#widgetHolder", {autoAlpha: 1})
  tl.to(proxy, {
    duration: transitionDuration,
    frame: anim.totalFrames-1,
    snap: "frame",
    onUpdate:function(){
      anim.goToAndStop(proxy.frame, true)
    },
    ease: easingType
  })

  .to("#widgetHolder", {duration: 1})
  .to("#sceneOne", {opacity: 0, duration: 0}, transitionPoint)
  .to("#sceneOne", {opacity: 1, duration: 0.3}, "-=.3")
  .from("#logo", {opacity: 0, duration: logoIntroDuration, x: logoFromX, y: logoFromY}, logoIntro)
  .to("#logo", {opacity: 0, duration: logoOutroDuration, x: logoToX, y: logoToY}, logoOutro)
  ; 
}

if(nodenv == 'maker'){
  gsap.set("#scenes", {autoAlpha: 1});
  let tl = window.tl = gsap.timeline({ id: "lottie", repeat: -1 });
} else {
  let tl = window.tl = gsap.timeline({ id: "lottie" }); 
}

window.addEventListener('obsSourceActiveChanged', function(event) {
  if(event.detail.active){
    tl.play(0);
  }else{
    tl.pause(0);
  }
})