//random cat picture generator that meows in the console 

//array of images
let images = []


//array of meows
let meows = [
  "meow!",
  "MEOW",
  "mow.",
  "MEEEEEWWWW",
  "MOW.",
  "MEEEEEOOOOOOOWWWWW.",
  "mew!",
  "mow mow!",
  "miaow.",
  "meow?", 
  "MEEEEow",
]

//setting the variable of the index of the images to be randomized
let picIndex = 0

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  
  //preloaded 26 images of cats
  images[0]= loadImage("cat_1.jpg")
  images[1]= loadImage("cat_2.jpg")
  images[2]= loadImage("cat_3.jpg")
  images[3]= loadImage("cat_4.jpg")
  images[4]= loadImage("cat_5.jpg")
  images[5]= loadImage("cat_6.jpg")
  images[6]= loadImage("cat_7.jpg")
  images[7]= loadImage("cat_8.jpg")
  images[8]= loadImage("cat_9.jpg")
  images[9]= loadImage("cat_10.jpg")
  images[10]= loadImage("cat_11.jpg")
  images[11]= loadImage("cat_12.jpg")
  images[12]= loadImage("cat_13.jpg")
  images[13]= loadImage("cat_14.jpg")
  images[14]= loadImage("cat_15.jpg")
  images[15]= loadImage("cat_16.jpg")
  images[16]= loadImage("cat_17.jpg")
  images[17]= loadImage("cat_18.jpg")
  images[18]= loadImage("cat_19.jpg")
  images[19]= loadImage("cat_20.jpg")
  images[20]= loadImage("cat_21.jpg")
  images[21]= loadImage("cat_22.jpg")
  images[22]= loadImage("cat_23.jpg")
  images[23]= loadImage("cat_24.jpg")
  images[24]= loadImage("cat_25.jpg")
  images[25]= loadImage("cat_26.jpg")
  

}

function draw() {

  //puts the image to the canvas
  image(images[picIndex], 0, 0, width, height);
  
}

function mouseClicked() {
  
  //picture will change when mouse is clicked
  background(255)
  picIndex = int(random(20))

//print random meows to the console when mouse is clicked
print(random(meows))
  
  
}