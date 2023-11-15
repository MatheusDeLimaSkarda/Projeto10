var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["744a641f-2b8b-4379-a006-5cdfc429c23a","cd7b779b-8e65-4543-8b4a-307b217c0ef7","3cece793-62fd-41e2-b29b-6c8d35d5ed08"],"propsByKey":{"744a641f-2b8b-4379-a006-5cdfc429c23a":{"name":"123","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"q.ci82WEs8az3Uz576GI7mNidz5GL08P","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/744a641f-2b8b-4379-a006-5cdfc429c23a.png"},"cd7b779b-8e65-4543-8b4a-307b217c0ef7":{"name":"321","sourceUrl":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png","frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png"},"3cece793-62fd-41e2-b29b-6c8d35d5ed08":{"name":"231","sourceUrl":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png","frameSize":{"x":212,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"kAoR44db1dgeltHCNTVFPZHx0yVhiBww","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var trofeu;
var par;

  trofeu    = createSprite(370,200,20,20);
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  par = createSprite(200,190,300,130);
 par.shapeColor="brown";
  trofeu.setAnimation("123");
  trofeu.scale=0.5;
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("321");
  sam.scale=0.050;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car1.velocityY=7;
  car2.velocityY=7;
  car3.velocityY=-7;
  car4.velocityY=-7;
playSound("assets/category_background/progression.mp3",true);
 car1.setAnimation("231");
  car2.setAnimation("231");
  car3.setAnimation("231");
  car4.setAnimation("231");
  car1.scale=0.080;
  car2.scale=0.080;
  car3.scale=0.080;
  car4.scale=0.080;
function draw() {
   background("gray");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1);
  car2.bounceOff(boundary1);
  car3.bounceOff(boundary1);
  car4.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary2);
  if (keyDown("left")){
  sam.x=sam.x -3 ;}
  if (keyDown("right")){
  sam.x=sam.x +3;}
  if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  playSound("assets/category_transition/ball_throw_bowl_8.mp3",false);
  }
  if (sam.isTouching(trofeu)){
 playSound("assets/category_achievements/vibrant_game_hype_game_positive_ring_bling.mp3", false);
 trofeu.destroy();
  }
 if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life = life +1;}
 drawSprites();
 
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
