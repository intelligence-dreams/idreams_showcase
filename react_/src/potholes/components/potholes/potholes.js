import axios from "axios";
import { Map ,GoogleApiWrapper, Marker, Popup, Circle} from "google-maps-react";
import React, { Component, createRef, useEffect, useState } from "react";
import styled from "styled-components";
import countryList from "./countries";
import { PotholeItem } from "./pothole_item";
import jQuery from "jquery";
import Geocode from "react-geocode";
import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);



const Container_ = styled.div`
    width:90vw;
    height:75vh;
    background:navy;


`;


const PotholeCard = styled.div`
    position:absolute;
    width:35vw;
    height:100vh;
    background-color:white;
    display:grid;
    grid-template-rows:5vh 92vh;
    z-index:99;

`;

const PotholeHeader = styled.div`
    background-color:#ddd;
    display:flex;
    justify-content:flex-end;
    width:35vw;
    align-items:baseline;
    padding:1%;

`;

const PotholeContent = styled.div`
    background-color:#ccc;
    width:35vw;
`;




const PotholeHeaderExit = styled.button`
    background-color:transparent;
    border:none;
    font-weight:900;
    font-size:18px;
    align-content:center;
    text-align:center;  
`;

const PotholeHeaderVoirePageStatique = styled.button`
    background-color:transparent;
    border:none;
    font-weight:900;
    font-size:18px;
    align-content:center;
    text-align:center;  
`;

const PotholeContentImage = styled.img`
    width:35vw;
    height:40vh;
`;

const PotholeContentDetails = styled.div`
    width:35vw;
`;

const PotholeDetailTitle = styled.h4`
    display:flex;
    justify-content:flex-start;
    margin:0 15%; 
`;

const PotholeContentDetailsContent = styled.h6`
    padding:5%;
`;


const ContainerStatistique = styled.div`
    width:99vw;
    height:100vh;
    background-color:#ddd;
    z-index:99;
    position:absolute;
    top:0;
    left:0;
    display:grid;
    grid-template-rows:5vh 90vh;
`;


const ContainerStatistiqueHeader = styled.div`
    width:99vw;
    height:5vh;
    background-color:#bbb;
    display:grid;
    grid-template-columns:93vw 5vw;
`;


const ContainerStatistiqueHeaderExit = styled.button`

    background-color:transparent;
    border:none;
    font-weight:900;
    font-size:28;
    color:black;
`;

const ContainerStatistiqueContent = styled.div`
    background-color:white;
    margin:2%;
`;




axios.defaults.baseURL = "http://127.0.0.1:8000";
 class PotholesContainer extends Component{


    constructor(){
        super();
        this.state = {
            potholes:[],
            countryName:"",
            displayPothole:{},
            chart:{arraychart_titles:[],
            arraychart_data:[],
            
        },
        cities:[]
        }
        this.arraychart_titles_=[]

        jQuery("#card").hide();
        jQuery("#container_statistique").hide();
        //Geocode.setApiKey("AIzaSyAFAjaqHnEHg4mIMveTxQhPqf1Hr1vgYXE");
        this.myChart = null;
        //localStorage.clear();

    }
      

  
    

     loadData=()=>{
        axios.get("/potholes/").then(pothole=>this.setState({...this.state,potholes:pothole.data}));

    }
 
    componentDidMount(){
        this.loadData();
        jQuery("#card").hide();
        jQuery("#container_statistique").hide();
        this.creerChart();
        this.state.potholes.map(r=>console.log(r));

        const groupByCategory = this.state.potholes.reduce((group, pothole) => {
        const { country } = pothole;
        group[country] = group[country] ?? [];
        group[country].push(country);
        return group;
      }, {});
      Object.keys(groupByCategory).forEach(el=>{
        console.log("classe_",el);
          const citie = []
          //this.state.cities.push(el)
          this.setState({...this.state.cities,cities:el});
        }
        );


        //console.log(this.state.cities.length)
        //this.state.cities.map(r=>console.log(r))
    }

    async getPosition(e,lat,lng,pothole){
        // e.preventDefault();
        jQuery("#card").fadeIn("slow");
        this.setState({...this.state.displayPothole,displayPothole:pothole});
        this.setState({...this.state.countryName,countryName:pothole.country});
    }



closeCardPothole(){
    jQuery("#card").fadeOut("slow");
}

displayStatistiqueOfCurrentCountry (){
    jQuery("#container_statistique").fadeIn("slow");
}

closeContainerStatistiqueOfStatistique(){
    jQuery("#container_statistique").fadeOut("slow");
}

// groupBy = (data, key) =>{
//     return data.reduce(function(acc, item) {
//       (acc[item[key]] = acc[item[key]] || []).push(item);
//       return acc;
//     }, {});
//   };

componentDidUpdate(){}

componentWillMount(){
    this.state.potholes.map(r=>console.log(r));
    const groupByCategory = this.state.potholes.reduce((group, pothole) => {
    const { country } = pothole;
    group[country] = group[country] ?? [];
    group[country].push(country);
    return group;
  }, {});
  Object.keys(groupByCategory).forEach(el=>
      this.state.cities.push(el)
    );
}
getData(){ 
    this.state.potholes.map(r=>console.log(r));
    const groupByCategory = this.state.potholes.reduce((group, pothole) => {
    const { country } = pothole;
    group[country] = group[country] ?? [];
    group[country].push(country);
    return group;
  }, {});
//   console.log(groupByCategory);
//   console.log(groupByCategory.sortStable);
Object.keys(groupByCategory).map(d=>console.log(groupByCategory[d].length));
    
}

creerChart(){

/// getting data:
//this.state.potholes.map(r=>console.log(r));
const groupByCategory = this.state.potholes.reduce((group, pothole) => {
const { country } = pothole;
group[country] = group[country] ?? [];
group[country].push(country);
return group;
}, {});
//   console.log(groupByCategory);
//   console.log(groupByCategory.sortStable);
// Object.keys(groupByCategory).map(d=>console.log(groupByCategory[d].length));
// Object.keys(groupByCategory).map(d=>console.log(d));


//prepare chart
Object.keys(groupByCategory).map(d=>
        this.setState({...this.state.chart.arraychart_data},()=>this.setState({
            arraychart_data:groupByCategory[d].length}
            )));
            var arr=[];
            Object.keys(groupByCategory).map(d=>
           {    // console.log(d)
                arr = [...arr];
               arr.push(d);
               console.log(arr);
                this.setState({...this.arraychart_titles_,arraychart_titles_:arr})
                console.log(this.arraychart_titles_.length);
            }
                );

        

// Object.keys(groupByCategory).map(d=>
//         this.setState([...this.state.chart.arraychart_titles,{arraychart_titles:d}])
    
//         );

        [1,2,54,5,78].map(d=>
            this.setState([...this.arraychart_titles_,{arraychart_titles:d}])
        
            );
    



    const ctx = document.getElementById('myChart');
    if(this.myChart!==null){
        this.myChart.destroy();
    }
 this.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}



    render(){
        //this.codeAddress()
      //  this.getDataFromGeo()
    //   this.getDataFromGeo();
   // this.getData();
setTimeout(() => {
    // this.creerChart();
    // this.state.chart.arraychart_data.map(t=>console.log("tzied",t));
    // console.log(this.state.chart.arraychart_data.length);
    // console.log(this.state.chart.arraychart_titles.length);

    // console.log("elem",this.arraychart_titles_.length);
    // this.getData();

}, 6000);
        return(
            <Container_>
            
            <Map
            style={{position:"absolute",left:"0",top:"0",cursor:" url(https://images.vexels.com/media/users/3/142635/isolated/preview/a2666c402d4de7d4854ecd75c5ac2b85-spinning-swirls-round-icon.png);"}}
             google={this.props.google}
             zoom={4}
             initialCenter={{
                    lat:32.93333,
                    lng:10.45000
                }}
            >

            {this.state.potholes.map(po=>
            <Marker
                title={po.city}
                name={'Current location'}
                onClick={(e)=>this.getPosition(e,po.latitude,po.longitude,po)}
                position={{lat:po.latitude,lng:po.longitude}}
                // icon={{
                //     scaledSize:new window.google.maps.Size(15,15),
                //     url:"./images/greencircle.png"
                // }}
                key={po.id}
            >
            <Circle
                
            ></Circle>

            </Marker>)}
                                         
            </Map>

                <PotholeCard id="card">
                    <PotholeHeader>
                        <PotholeHeaderVoirePageStatique onClick={this.displayStatistiqueOfCurrentCountry}>Voir Les Detaille de {this.state.displayPothole.country} </PotholeHeaderVoirePageStatique>
                        <PotholeHeaderExit onClick={this.closeCardPothole}>X</PotholeHeaderExit>
                    </PotholeHeader>
                    <PotholeContent>
                        <PotholeContentImage src={`${this.state.displayPothole.picture}`}></PotholeContentImage>
                        <PotholeContentDetails>
                            <PotholeDetailTitle>city/country:{this.state.displayPothole.city}/{this.state.displayPothole.country} </PotholeDetailTitle>
                            <PotholeContentDetailsContent>latitude/longitude:{this.state.displayPothole.latitude}/{this.state.displayPothole.longitude} </PotholeContentDetailsContent>
                            <PotholeContentDetailsContent>road:{this.state.displayPothole.road} </PotholeContentDetailsContent>
                        </PotholeContentDetails>
                    </PotholeContent>

                </PotholeCard>


                {/* display statistique */}

                <ContainerStatistique id="container_statistique">
                    <ContainerStatistiqueHeader>
                        <div></div>
                        <ContainerStatistiqueHeaderExit onClick={this.closeContainerStatistiqueOfStatistique}>Fermer</ContainerStatistiqueHeaderExit>
                    </ContainerStatistiqueHeader>
                    <ContainerStatistiqueContent>
                        {/* <canvas id="myChart" width="400" height="150"></canvas> */}
                        <PotholeStatistique country={this.state.countryName} />

                    </ContainerStatistiqueContent>
                </ContainerStatistique>



      

            </Container_>
        );
    }
    
}

export default GoogleApiWrapper({
//    apiKey:("AIzaSyCbr9mu68Df5JEHLpjoX3UWqpQzQzK1wQo"),
    apiKey:("AIzaSyAFAjaqHnEHg4mIMveTxQhPqf1Hr1vgYXE"),
})(PotholesContainer);



// function codeAddress() {
//     geocoder.geocode({
//       componentRestrictions: {
//         country: 'AU',
//         postalCode: '2000'
//       }
//     }, function(results, status) {
//       if (status == 'OK') {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//         });
//       } else {
//         window.alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//     }



function PotholeStatistique(props){
    const [first, setFirst] = useState("");
    const [seconde, setSeconde] = useState(4);
    var myChart = null;
    const [potholes, setPotholes] = useState([]);
    const [currentPotholes, setCurrentPotholes] = useState([]);
    let cities = [];
    let data = [];
    const [tabss, setTabss] = useState([]);


    const groupByCategory = potholes.filter(po=>po.country===props.country).reduce((group, pothole) => {
        const { city } = pothole;
        group[city] = group[city] ?? [];
        group[city].push(city);
        return group;
        }, {});
    // const [
        const data_=
        //{
        // , setData_] = useState({
      //  data: 
        {
            labels: 
             Object.keys(groupByCategory).map(o => o)
            //["a","b","c"]
            ,
            datasets: [
              {
                label: 'Potholes By Countries',
                backgroundColor: 
                ['rgba(0, 255, 0)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'],
                borderColor:   
               ['rgba(0, 255, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                borderWidth: 1,
                data:  Object.keys(groupByCategory).map(o => groupByCategory[o].length)
                //Object.keys(groupByCategory).map(o => groupByCategory[o].length)
              }
            ]
          }
          //,
        //   options: {
        //     plugins: {
        //       title: {
        //         display: true,
        //         text: 'Bar Chart'
        //       }
        //     }
        //   }
        
   // }
    //)
     
    // const groupByCategory = potholes.reduce((group, pothole) => {
    //         const { city } = pothole;
    //         group[city] = group[city] ?? [];
    //         group[city].push(city);
    //         return group;
    //         }, {});

     
    //   for(const obj of Object.keys(groupByCategory)){
    //                 console.log("o",obj)
    //                 cities.push(obj)
    //                 data.push(groupByCategory[obj].length);
    //                 localStorage.clear();
    //                 localStorage.setItem('cities', cities);
    //                 localStorage.setItem('data', data);
        
    //             }

    //              //Object.keys(groupByCategory).forEach(el=>cities.push(el))
    //              Object.keys(groupByCategory).forEach(el=>data.push(groupByCategory[el].length))
    //             if(currentPotholes.length===0){
    //             // Object.keys(groupByCategory).forEach(el=>setCurrentPotholes(el))
    //            //  setCurrentPotholes([cities])
    //             }
                 
    //             cities.forEach(elm=>console.log(elm));
    //             data.forEach(elm=>console.log(elm));
    //             console.log(props);
    useEffect(()=>{  
         // myChart=null;

         axios.get("/potholes/").then(pothole=>setPotholes(pothole.data));
        
         potholes.filter(po=>po.country==="tunisie").map(pothole=>setCurrentPotholes([...currentPotholes,pothole]))

        //  if(myChart!==null){
        //      myChart.destroy();
        //  }

        //  setTabss(["a","b","v"]);

        //       for(const obj of Object.keys(groupByCategory)){
        //             console.log("o",obj)
        //             cities.push(obj)
        //             setCurrentPotholes(obj)

        //         }
        // Object.keys(groupByCategory).map(d=>
        //     {     
        //         console.log(d)
        //      //setCurrentPotholes(d);
        //      //console.log(d)
        //      })
        //      setSeconde(7);




            //  const data_={
            //     // , setData_] = useState({
            //     data: {
            //         labels: 
            //         // Object.keys(groupByCategory).map(o => o)
            //         ["a","b","c"]
            //         ,
            //         datasets: [
            //           {
            //             label: 'Users Gained',
            //             backgroundColor: 'rgba(0, 255, 0, 0.2)',
            //             borderColor: 'rgb(0, 255, 0)',
            //             borderWidth: 1,
            //             data: Object.keys(groupByCategory).map(o => groupByCategory[o].length)
            //           }
            //         ]
            //       },
            //       options: {
            //         plugins: {
            //           title: {
            //             display: true,
            //             text: 'Bar Chart'
            //           }
            //         }
            //       }
                
            // }
        
  

        //creerChart();
    
        // setFirst("bonjour "+props.nom);

    },[]);

    // potholes.map(a=>console.log(a))
    // currentPotholes.map(r=>console.log(r));

    const  creerChart=()=>{
        cities.forEach(e=>console.log("e2",e))
        setTabss(["a","b","v"]);


        // setData_({
        //     data: {
        //         labels: Object.keys(groupByCategory).map(o => o),
        //         datasets: [
        //           {
        //             label: 'Users Gained',
        //             backgroundColor: 'rgba(0, 255, 0, 0.2)',
        //             borderColor: 'rgb(0, 255, 0)',
        //             borderWidth: 1,
        //             data: Object.keys(groupByCategory).map(o => groupByCategory[o].length)
        //           }
        //         ]
        //       },
        //       options: {
        //         plugins: {
        //           title: {
        //             display: true,
        //             text: 'Bar Chart'
        //           }
        //         }
        //       }
            
        // });
        /// getting data:
        //this.state.potholes.map(r=>console.log(r));
        const groupByCategory = potholes.reduce((group, pothole) => {
        const { country } = pothole;
        group[country] = group[country] ?? [];
        group[country].push(country);
        return group;
        }, {});

        let cits = [];

       // var a =Object.keys(groupByCategory);
       // a.map(d=>console.log("623",d))


        localStorage.setItem("data",data);
        localStorage.setItem("cities",Object.keys(groupByCategory));
           for(const obj of Object.keys(groupByCategory)){
                    console.log("o",obj)
                    cities.push(obj)
                    setCurrentPotholes(cities)
                    localStorage.setItem("data",data);
                    localStorage.setItem("cities",obj);
                    cits.push(obj)
                }
                setSeconde(9);
        //   console.log(groupByCategory);
        //   console.log(groupByCategory.sortStable);
        // Object.keys(groupByCategory).map(d=>console.log(groupByCategory[d].length));
        // Object.keys(groupByCategory).map(d=>console.log(d));
        
        
        //prepare chart
                
                //     Object.keys(groupByCategory).map(d=>
                //    {     console.log(d)
                //     setCurrentPotholes(d);
                //     //console.log(d)
                //     }
                //         );
        

                      //  console.log(currentPotholes);
                
        
        // Object.keys(groupByCategory).map(d=>
        //         this.setState([...this.state.chart.arraychart_titles,{arraychart_titles:d}])
            
        //         );
        
        
            
        cities.forEach(e=>console.log("e1",e))

        
        // const cits = cities.toString();
        // const tab = cits.split(",");
        console.log(typeof("tab"));
        cities.forEach(i=>{
            localStorage.setItem("data",data);
            localStorage.setItem("cities",i);
        });
            const ctx = document.getElementById('myChart1');
            if(myChart!==null){
                myChart.destroy();
            }
            setSeconde(18);

            cities.forEach(e=>console.log("e",e))
         myChart = new Chart(ctx, {
            type: 'bar',
             data: 
             //data_,
            {
               labels:  tabss.map(r=>r)
               //Object.keys(groupByCategory)?.map(label=>label)
              // potholes.map(a=>a.country)
               ,
                datasets: [{
                    label: '# of Votes',
                    data:  tabss
                    //Object.keys(groupByCategory)?.map(label=>groupByCategory[label])
                    ,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                  
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
           
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    //     myChart.data.labels.push(cities);
    //    // myChart.data.datasets.data.push(data);
    //    myChart.update();
        }
        
        

    return (
        <div>
            {/* {first}{typeof(Object.values(cities))}{cities.at(0)}{typeof(cities.at(0))} */}
            {/* <canvas id="myChart1" width="400" height="150"></canvas> */}
            <Bar data={data_} />
            <button onClick={()=>{
                // setSeconde(78);
                // myChart.update();
                }}>ok</button>

        </div>
    );
}