let starWarsPeople="https://swapi.co/api/people/?page=1&format=json"
let starWarsStarships="https://swapi.co/api/starships/?page=1&format=json"
let table=document.getElementById("sWarsPeople");
let firstImg = document.getElementById("firstImg");

fetch(starWarsPeople)
.then(res=>res.json())
.then(data=>console.log(data))




firstImg.addEventListener("click", function(){

    let dataStarWarsPeople = function data(){

        fetch(starWarsPeople)
        .then(res=>res.json())
        .then(data=>{
    
          let people=[];
    
          for(let i=0;i<data.results.length; i++){
            people.push(data.results[i].name,data.results[i].height,data.results[i].mass,data.results[i].species,data.results[i].birth_year,data.results[i].films)
          }
          
          starWarsPeopleTable(people)
         return people;
        })
    
       
    }
    dataStarWarsPeople()
})



let starWarsPeopleTable=function(arr){
    let table=document.getElementById("sWarsPeople");
 let  tBody=document.createElement("tbody");
 let row= tBody.insertRow()
    let perRow=6;
    let counter=0

  for(let i =0; i<arr.length; i++){
      let cell= row.insertCell()
      cell.innerHTML = arr[i];
      counter++

      if(counter%perRow===0){
       row=tBody.insertRow()
      }
  }

  table.append(tBody)
}

