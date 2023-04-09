let leftPoints = [];
let rightPoints = [];
let numRight = 10;
let numLeft = 10;
let sz = 50;
let rightSlider;
let leftSlider;
let caLeftPoints = [];
let caLeftRightPoints = [];
let canumRight = 10;
let canumLeft = 10;
let casz = 50;
let carightSlider;
let caleftSlider;

function setup() {
  createCanvas(1000, 500);
  ellipseMode(CORNER);
  myDiv = createDiv("concentration of red molecule in cytosol:");
  leftSlider = createSlider(0, 30, 10);
  myDiv.style('color', '#fff');
  myDiv2 = createDiv("concentration of red molecule in extracellular fluid:");
  rightSlider = createSlider(0, 30, 10);
  myDiv2.style('color', '#fff');
  
  let mid = width / 2;
  
  for(let i = 0; i < numRight; i++) {
    rightPoints.push([random(mid, width), random(height), sz]);
  }
  for(let i = 0; i < numLeft; i++) {
    leftPoints.push([random(0, mid), random(height), sz]);
  }
  myDiv3 = createDiv("concentration of green  molecule in cytosol:");
  caleftSlider = createSlider(0, 30, 10);
  myDiv4 = createDiv("concentration of green  molecule in extracellular fluid:");
  myDiv3.style('color', '#fff');
  myDiv4.style('color', '#fff');
  carightSlider = createSlider(0, 30, 10);
  
  
  for(let i = 0; i < canumRight; i++) {
    caLeftRightPoints.push([random(mid, width), random(height), casz]);
  }
  for(let i = 0; i < canumLeft; i++) {
    caLeftPoints.push([random(0, mid), random(height), casz]);
  }
  
}



function draw() {
  
  let mid = width / 2;
  background(0);
  fill(255);
  textSize(32);
  text('cytosol', 190, height/2);
  text('extracellular fluid', 190 + mid, height/2);
  
  rect(mid, 0, 50, height);
  fill(255,0,0);

  for(let p of rightPoints) {
    updatePoint(p);
  }
  
  for(let p of leftPoints) {
    updatePoint(p);
  }
  
  while(leftSlider.value() < leftPoints.length) {
    leftPoints.pop();
  }
  
  while(rightSlider.value() < rightPoints.length) {
    rightPoints.pop();
  }
  
  while(rightSlider.value() > rightPoints.length) {
    rightPoints.push([random(mid, width), random(height), sz]);
  }
  
  
  while(leftSlider.value() > leftPoints.length) {
    leftPoints.push([random(0, mid), random(height), sz]);
  }
  fill(0,255,0);
  for(let p of caLeftRightPoints) {
    caupdatePoint(p);
  }
  
  for(let p of caLeftPoints) {
    caupdatePoint(p);
  }
  
  while(caleftSlider.value() < caLeftPoints.length) {
    caLeftPoints.pop();
  }
  
  while(carightSlider.value() < caLeftRightPoints.length) {
    caLeftRightPoints.pop();
  }
  
  while(carightSlider.value() > caLeftRightPoints.length) {
    caLeftRightPoints.push([random(mid, width), random(height), casz]);
  }
  
  
  while(caleftSlider.value() > caLeftPoints.length) {
    caLeftPoints.push([random(0, mid), random(height), casz]);
  }
}

function updatePoint(p) {
  circle(p[0], p[1], p[2]);
    let ang = random(2 * PI);
    p[0] += 15 * cos(ang);
    p[1] += 15 * sin(ang);
    if(p[0] > 500 && p[0] < 550) {
      if((p[1] > 75 && p[1] < 175) || (p[1] > 325 && p[1] < 425)) {
        p[0] = 400;
        
      }
      else {
        p[0] = 600;
      }
    }
    
    if(p[0] > 450 && p[0] < 500) {
      if((p[1] > 75 && p[1] < 175) || (p[1] > 325 && p[1] < 425)) {
        p[0] = 600;
      }
      else {
        p[0] = 400;
      }
    }
    
    while(p[0] < 0 || p[0] > width - 0) {
      p[0] -= 5 * cos(ang);
      p[1] -= 5 * sin(ang);
    }
    while(p[1] < 0 || p[1] > height - 0){
      p[0] -= 5 * cos(ang);
      p[1] -= 5 * sin(ang);
    }
}

function caupdatePoint(p) {
  square(p[0], p[1], p[2]);
    let ang = random(2 * PI);
    p[0] += 15 * cos(ang);
    p[1] += 15 * sin(ang);
    if(p[0] > 500 && p[0] < 550) {
      if((p[1] > 75 && p[1] < 175) || (p[1] > 325 && p[1] < 425)) {
        p[0] = 400;
        
      }
      else {
        p[0] = 600;
      }
    }
    
    if(p[0] > 450 && p[0] < 500) {
      let num = random(1);
      if(num > 0.95)
        p[0] = 600;
      else
        p[0] = 400;
    }
    
    while(p[0] < 0 || p[0] > width - 0) {
      p[0] -= 5 * cos(ang);
      p[1] -= 5 * sin(ang);
    }
    while(p[1] < 0 || p[1] > height - 0){
      p[0] -= 5 * cos(ang);
      p[1] -= 5 * sin(ang);
    }
}