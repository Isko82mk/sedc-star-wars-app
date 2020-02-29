
let swPeopleUrl="https://swapi.co/api/people/?page=1&format=json";
let swShipsUrl="https://swapi.co/api/starships/?page=1&format=json";

let myTable=document.getElementById("sWarsPeople");
let myTableOne=document.getElementById("sWarsShips");

let loader=document.getElementById("loaderGif")
let loaderOne=document.getElementById("loader1Gif")


let imgPeople= document.getElementById("imageOne")
let imgStarShips= document.getElementById("imageTwo")

let  wrapperDiv =document.getElementById("rootDiv")

let  falconAudio = document.getElementById("falconAudio");
let  blastersAudio=document.getElementById("blasters");

function sWarsPeople(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        loaderOne.style.opacity="0"
       // console.log(data)
       
        tableBody(data.results)
    })
    
}

//sWarsPeople(swPeopleUrl)

function tableHead(name,height,mass,species,birth,films){

 let tableHead=document.createElement("thead");
 let tRow=document.createElement("tr");
 tableHead.append(tRow);   
 myTable.append(tableHead);

 let tdNodeName=document.createElement("td");
 let tdNodeHeight=document.createElement("td");
 let tdNodeMass=document.createElement("td");
 let tdNodeSpecies=document.createElement("td");
 let tdNodeBirth=document.createElement("td");
 let tdNodeFilms=document.createElement("td");
  
    tRow.append(tdNodeName);
    tRow.append(tdNodeHeight);
    tRow.append(tdNodeMass);
    tRow.append(tdNodeSpecies);
    tRow.append(tdNodeBirth);
    tRow.append(tdNodeFilms);

    tdNodeName.innerHTML=name;

        tdNodeName.addEventListener("click", (e)=>{
            loader.style.opacity="1"
             myTable.innerHTML="";
       
            fetch(swPeopleUrl)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                 loader.style.opacity="0"

         let sortedName=data.results.sort(function(a,b){
             if(a.name.toLowerCase()< b.name.toLowerCase()){
                 return -1
             }if(a.name.toLowerCase()>b.name.toLowerCase()){
                 return 1
             }
             return 0
         })        
                
                tableBody(sortedName)
            
            })
        })
      
       
    tdNodeHeight.innerHTML=height;
     
    tdNodeHeight.addEventListener("click",(e)=>{
        loader.style.opacity="1"
        myTable.innerHTML="";

        fetch(swPeopleUrl)
        .then(res=>res.json())
        .then(data=>{
            loader.style.opacity="0"
            let sortedHeight =data.results.sort((a,b)=>{
                return a.height-b.height
            })
            tableBody(sortedHeight)
        })
    })

    tdNodeMass.innerHTML=mass;
    tdNodeMass.addEventListener("click",(e)=>{
        myTable.innerHTML="";
        loader.style.opacity="1"
        fetch(swPeopleUrl)
        .then(res=>res.json())
        .then(data=>{
          
            loader.style.opacity="0"
           let sortedMass = data.results.sort((a,b)=>{
               return a.mass-b.mass
           }) 
           tableBody(sortedMass)
        })
    });

    tdNodeSpecies.innerHTML=species;
     
    tdNodeBirth.innerHTML=birth;
    tdNodeBirth.addEventListener("click", (e)=>{
        myTable.innerHTML="";
        loader.style.opacity="1"
        fetch(swPeopleUrl)
      
        .then(res=>res.json())
        .then(data=>{

            loader.style.opacity="0"
            let sortedBirth=data.results.sort((a,b)=>{
                return a.birth - b.birth
            })  
            tableBody(sortedBirth) 
        })
      
        

    })
    tdNodeFilms.innerHTML=films;
    tdNodeFilms.addEventListener("click",(e)=>{
        myTable.innerHTML="";
        loader.style.opacity="1"

         fetch(swPeopleUrl)
         .then(res=>res.json())
         .then(data=>{
            loader.style.opacity="0"
             let sortedFilms=data.results.sort((a,b)=>{
                 return a.films.length -b.films.length
             })
             tableBody(sortedFilms)
         })
    })

}

function tableBody(data){
    tableHead("Name","Height (sm)","Mass (kg)","Species Name","Birth Year","Appearances ")

    let tableBody=document.createElement("tbody")
    for(let i =0; i<data.length;i++){
        let tRow = document.createElement("tr")
        tableBody.append(tRow)


        let tDataName=document.createElement("td")
        tRow.append(tDataName)
        tDataName.innerHTML=data[i].name;

        let tDataHeight=document.createElement("td")
        tRow.append(tDataHeight)
        tDataHeight.innerHTML=data[i].height;

        let tDataMass=document.createElement("td")
        tRow.append(tDataMass)
        tDataMass.innerHTML=data[i].mass;


        let tDataSpicies=document.createElement("td")
        tRow.append(tDataSpicies)
        tDataSpicies.innerHTML=data[i].species.length;

        let tDataBirth=document.createElement("td")
        tRow.append(tDataBirth)
        tDataBirth.innerHTML=data[i].birth_year;

        let tDataFilms=document.createElement("td")
        tRow.append(tDataFilms)
        tDataFilms.innerHTML=data[i].films.length;



    }
    myTable.append(tableBody)
  
}

//numbers.sort((a, b) => a - b);
// let button=document.createElement("button");
// button.innerText="click"
// document.body.append(button)






///SW SHIPS


function getShips(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        loader.style.opacity="0"
        console.log(data)
       
        tBodyStarShips(data.results)
    })
}
//getShips(swShipsUrl)

function tableHeadShips(name,model,manufacturer,cost,capacity,starship_class){
    let tableHeadShips = document.createElement("thead")
    myTableOne.append(tableHeadShips)

     let tRowShips=document.createElement("tr")
     tableHeadShips.append(tRowShips)

     let tdShipName=document.createElement("td")
     let tdShipModel=document.createElement("td")
     let tdShipManufacturer=document.createElement("td")
     let tdShipCost=document.createElement("td")
     let tdShipPeopleCapacity=document.createElement("td")
     let tdShipClass=document.createElement("td")

     tRowShips.append(tdShipName)
     tRowShips.append(tdShipModel)
     tRowShips.append(tdShipManufacturer)
     tRowShips.append(tdShipCost)
     tRowShips.append(tdShipPeopleCapacity)
     tRowShips.append(tdShipClass)

     tdShipName.innerHTML=name;

      tdShipName.addEventListener("click",(e)=>{
        myTable.innerHTML="";
        loader.style.opacity="1"

         fetch(swShipsUrl)
         .then(res=>res.json())
         .then(data=>{
            loader.style.opacity="0"
            myTableOne.innerHTML=""
           
           let namesSorted= data.results.sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1
                }if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1
                }
                return 0
            })
            tBodyStarShips(namesSorted)
         })
    })

   
     tdShipModel.innerHTML=model;
    
      tdShipModel.addEventListener("click",(e)=>{
        myTable.innerHTML="";
        myTableOne.innerHTML=""
        loader.style.opacity="1"

        fetch(swShipsUrl)
         .then(res=>res.json())
         .then(data=>{
            loader.style.opacity="0"
        let sortedModel = data.results.sort((a,b)=>{
              if(a.model.toLowerCase()< b.model.toLowerCase()){
                  return -1
              }if(a.model.toLowerCase()>b.model.toLowerCase()){
                  return 1
              }
              return 0
          })
          tBodyStarShips(sortedModel)
         })


      })

     tdShipManufacturer.innerHTML=manufacturer;
     
     tdShipManufacturer.addEventListener("click", (e)=>{
        myTable.innerHTML="";
        myTableOne.innerHTML=""
        loader.style.opacity="1"
         
          fetch(swShipsUrl)
           .then(res=>res.json())
           .then(data=>{

            loader.style.opacity="0"

          let sortedManuf=data.results.sort((a,b)=>{
                   if(a.manufacturer.toLowerCase()<b.manufacturer.toLowerCase()){
                       return -1
                   }if(a.manufacturer.toLowerCase() > b.manufacturer.toLowerCase()){
                       return 1
                   }
                   return 0
               })
               tBodyStarShips(sortedManuf)
           })
     })
     
     tdShipCost.innerHTML=cost;

        tdShipCost.addEventListener("click",(e)=>{
            myTable.innerHTML="";
            myTableOne.innerHTML=""
            loader.style.opacity="1"
   
                fetch(swShipsUrl)
                .then(res=>res.json())
                .then(data=>{

                    loader.style.opacity="0"
              let costSorted=data.results.sort((a,b)=>{
          
                   return a.cost_in_credits-b.cost_in_credits
                    })
                    tBodyStarShips(costSorted)
                })
               })
      tdShipPeopleCapacity.innerHTML=capacity;
      
    //   tdShipPeopleCapacity.addEventListener("click", (e)=>{
    //     myTable.innerHTML="";
    //     myTableOne.innerHTML=""
    //     loader.style.opacity="1"


    //     fetch(swShipsUrl)
    //     .then(res=>res.json())
    //     .then(data=>{
           
    //         for(let i =0; i<data.results.length; i++){
    //       let result=data.results.sort((a,b)=>{
    //                 a.crew - b.crew + a.passengers-b.passengers
    //             })
               
    //         }
           
    //     })
         

         

    //   })
    
    tdShipClass.innerHTML=starship_class;
    
   tdShipClass.addEventListener("click",(e)=>{
        myTable.innerHTML="";
        myTableOne.innerHTML=""
        loader.style.opacity="1"

       fetch(swShipsUrl)
       .then(res=>res.json())
       .then(data=>{
        loader.style.opacity="0"
      let sortedClasShips= data.results.sort((a,b)=>{
               if(a.starship_class.toLowerCase()<b.starship_class.toLowerCase()){
                   return -1
               }if(a.starship_class.toLowerCase()>b.starship_class.toLowerCase()){
                   return 1
               }
               return 0
           })
           tBodyStarShips(sortedClasShips)

       })

   })

    
}


function tBodyStarShips(data){
     tableHeadShips("Name","Model","Manufacturer","Cost ( credits )","People Capacity ","ClassShips")
    let bodyShips=document.createElement("tbody")
     for(let i =0; i<data.length;i++){
        let trShips=document.createElement("tr")
        bodyShips.append(trShips)

        let tdShipName=document.createElement("td")
        let tdShipModel=document.createElement("td")
        let tdShipManufacturer=document.createElement("td")
        let tdShipCost=document.createElement("td")
        let tdShipCapacity =document.createElement("td")
        let tdShipClass=document.createElement("td")
     
             trShips.append(tdShipName)
             trShips.append(tdShipModel)
             trShips.append(tdShipManufacturer)
             trShips.append(tdShipCost)
             trShips.append(tdShipCapacity)
             trShips.append(tdShipClass)

             tdShipName.innerHTML=data[i].name
             tdShipModel.innerHTML=data[i].model
             tdShipManufacturer.innerHTML=data[i].manufacturer
             tdShipCost.innerHTML=data[i].cost_in_credits
             tdShipCapacity.innerHTML= parseInt( data[i].crew )  + parseInt(data[i].passengers)
             tdShipClass.innerHTML=data[i].starship_class




     }
     myTableOne.append(bodyShips)
}
//ADD EVENT LISTENER

imgPeople.addEventListener("click",(e)=>{
    blastersAudio.play()
    myTableOne.innerHTML=""
   loaderOne.style.opacity="1"
   myTable.innerHTML=sWarsPeople(swPeopleUrl)
   
  
   // wrapperDiv.style.display="none"
})

imgStarShips.addEventListener("click",(e)=>{
  
    falconAudio.play()
    myTable.innerHTML=""
   
    loader.style.opacity="1"
    myTableOne.innerHTML=getShips(swShipsUrl)
    //wrapperDiv.style.display="none"
})



let button1 = document.createElement("button")
button1.className="buttonOne"
button1.innerText="SW-People"
wrapperDiv.append(button1)


let button2=document.createElement("button");
button2.className="buttonTwo";
button2.innerText="SW-Ships"
wrapperDiv.append(button2)

button1.addEventListener("click",(e)=>{
    
})





























