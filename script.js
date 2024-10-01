const button = document.querySelector(".button");

const spinner = document.querySelector(".spin");
const i = document.querySelector(".i");

console.log(spinner);   


button.addEventListener("click",()=>{
    const random = parseInt(Math.random()*10);
    button.disabled = true;
    game(random);
    setTimeout(()=>{

        i.style.animation = " arrow 0.5s infinite linear"
    },700)
    
})

let animationAngle = 0;
function game(random){
  

    if(random === 0 || random === 1)
    {
        setTimeout(()=>{
          spinner.style.rotate = `${animationAngle}deg`
        //   spinner.stle.transition = "1s"
        animationAngle += 7200
          spinner.style.rotate = `${animationAngle+165}deg`
        //   spinner.style.rotate = "7200deg";

        },500)
       
    }

    
    else if(random === 2)
        {
            setTimeout(()=>{

              spinner.style.rotate = `${animationAngle}deg`
            //   spinner.stle.transition = "1s"
            animationAngle += 7200;
              spinner.style.rotate = `${animationAngle+120}deg`
            //   spinner.style.rotate = "7200deg";
    
            },500)
           
        }

        else if(random === 3)
            {
                setTimeout(()=>{
                  spinner.style.rotate = `${animationAngle}deg`
                //   spinner.stle.transition = "1s"
                animationAngle += 7200;
                  spinner.style.rotate = `${animationAngle+75}deg`
                //   spinner.style.rotate = "7200deg";
                },500)
               
            }

            else if(random === 4)
                {
                    setTimeout(()=>{
                      spinner.style.rotate = `${animationAngle}deg`
                    //   spinner.stle.transition = "1s"
                    animationAngle += 7200;
                      spinner.style.rotate = `${animationAngle+30}deg`
                    //   spinner.style.rotate = "7200deg";
            
                    },500)
                   
                }

                else if(random === 5)
                    {
                        setTimeout(()=>{
                          spinner.style.rotate = `${animationAngle}deg`
                        //   spinner.stle.transition = "1s"
                        animationAngle += 7200;
                          spinner.style.rotate = `${animationAngle-15}deg`
                        //   spinner.style.rotate = "7200deg";
                        },500)
                       
                    }
                    
                else if(random === 6)
                    {
                        setTimeout(()=>{
                          spinner.style.rotate = `${animationAngle}deg`
                        //   spinner.stle.transition = "1s"
                        animationAngle += 7200;
                          spinner.style.rotate = `${animationAngle-60}deg`
                        //   spinner.style.rotate = "7200deg";
                
                        },500)
                       
                    }

                    else if(random === 7)
                        {
                            setTimeout(()=>{
                              spinner.style.rotate = `${animationAngle}deg`
                            //   spinner.stle.transition = "1s"
                            animationAngle += 7200;
                              spinner.style.rotate = `${animationAngle-105}deg`
                            //   spinner.style.rotate = "7200deg";
                    
                            },500)
                           
                        }
                        else if(random === 8 || random ===9)
                            {
                                setTimeout(()=>{
                                  spinner.style.rotate = `${animationAngle}deg`
                                //   spinner.stle.transition = "1s"
                                animationAngle += 7200;
                                  spinner.style.rotate = `${animationAngle-150}deg`
                                //   spinner.style.rotate = "7200deg";
                        
                                },500)
                               
                            }
                            setTimeout(() => {
                                
                               
                                    i.style.animation = " arrow  infinite linear"

                            }, 7500);
                            
                            setTimeout(()=>{
                                if(random >=0 && random <=9)
                                    if(random == 0)
                                    {
                                        alert(`CONGARTULATIONS😎 YOU WIN 10% OFF`)

                                    }
                                    else if(random >=1 && random <=7){
                                        alert(`CONGARTULATIONS😎 YOU WIN ${random*10}% OFF`)
                                    }
                                    else{
                                        alert(`BETTER LUCK NEXT TIME😂`)
                                    }
                            },8000)
                            

                            setTimeout(() => {
                                console.log("jellp")
                                button.disabled = false;
                            }, 15000);                            
                            
}



