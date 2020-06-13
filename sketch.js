var database;
var voter;
var voterEmail =[];
var title;
var enterButton;
var nameInput;
var donation = [];
var donationInput;
var greeting,greeting2;
var yesB1,yesB2,noB1,noB2,mB1,mb2,mb3,mb4;
var vo;
var voem;
var canvas;



function setup(){
    canvas = createCanvas(1000,650);
    database = firebase.database();
    title = createElement('h1');
    /*vo = database.ref("/voter");
    voem = database.ref("/voter/voterEmail");*/
    title.html("A Survey To Help Our Migrant Labourers");
    title.position(450,20);
    /*nameInput = createInput("Enter Email here");
    nameInput.position(600,400);
    voterEmail.push(nameInput);
    donation.push(donationInput);
    enterButton = createButton('enter');
    enterButton.position(750,450);
    var voterEmailref = database.ref(voem);
        voterEmailref.on("value",function(data){
            voterEmail[0] = data.val();
        });
    //voterEmail = nameInput.value();*/
    yesB1 = createButton('yes');
    yesB1.position(400,150);
    //yesB1.hide();
    noB1 = createButton('no');
    noB1.position(700,150);
    //noB1.hide();    
    yesB2 = createButton("yes");
    yesB2.position(400,300);
    yesB2.hide();
    noB2 = createButton("no");
    noB2.position(700,300);
    noB2.hide();
    mb1 = createButton("Rs.100");
    mb1.position(400,485);
    mb1.hide();
    mb2 = createButton("Rs.200");
    mb2.position(500,485);
    mb2.hide();
    mb3 = createButton("Rs.500");
    mb3.position(600,485);
    mb3.hide();
    mb4 = createButton("more");
    mb4.position(700,485);
    mb4.hide();
    greeting = createElement('h2');
        greeting.html("Do you think we should do something to ease the pain of our migrant labourers? ");
        greeting.position(300,75);
    /*donationInput = createInput("enter amount here");
    donationInput.hide();*/
   
}
function draw(){
    //background("yellow");
   
        
        
      
            yesB1.mousePressed(()=>{     
                //formState = 2;
                greeting2 = createElement('h2');
                greeting2.html("Would you be willing to pay a small amount every month for this cause?");
                greeting2.position(300,250);
                yesB2.show();
                noB2.show();
                vote2(450,100);
                yesB1.hide();
                noB1.hide();
            });

            noB1.mousePressed(()=>{
                yesB1.hide();
                noB1.hide();
                vote1(450,100);
                sgreeting2 = createElement('h2');
                sgreeting2.html("Would you be willing to pay a small amount every month for this cause?");
                sgreeting2.position(300,250);
                yesB2.show();
                noB2.show();
            });
            
           
                yesB2.mousePressed(()=>{
                   //formState = 3;
        greeting3 = createElement('h2');
        greeting3.html("What amount of money per month would you be willing to pay? ");
        greeting3.position(300,425);
        mb1.show();
        mb2.show();
        mb3.show();
        mb4.show();
        yesB2.hide();
        noB2.hide();
        vote2(450,300);
        
        
                });
                noB2.mousePressed(()=>{
                    yesB2.hide();
                    noB2.hide();
                    vote1(450,300);
                })
                  
                mb1.mousePressed(()=>{       
                    thanks(450,500);
                    mb1.hide();
                    mb2.hide();
                    mb3.hide();
                    mb4.hide();
                  }); 

                mb2.mousePressed(()=>{       
                    thanks(450,500);
                    mb1.hide();
                    mb2.hide();
                    mb3.hide();
                    mb4.hide();
                  }); 

                mb3.mousePressed(()=>{       
                    thanks(450,500);
                    mb1.hide();
                    mb2.hide();
                    mb3.hide();
                    mb4.hide();
                  });  

                mb4.mousePressed(()=>{       
                  thanks(450,500);
                  mb1.hide();
                  mb2.hide();
                  mb3.hide();
                  mb4.hide();
                });  
    
    
    
}

function vote1(px,py){
    var greetingl = createElement('h1');
    greetingl.html("hmmm");
    greetingl.position(px,py);
}
function vote2(px,py){
    var greetingl = createElement('h1');
    greetingl.html("Voted!!");
    greetingl.position(px,py);
    //greeting.hide();
}
function thanks(pox,poy){
    var greetingl = createElement('h1');
    greetingl.html("THANK YOU FOR YOUR DONATION!!:-):D");
    greetingl.position(pox,poy);
   
}

