import axios from "axios";
import { Map ,GoogleApiWrapper, Marker} from "google-maps-react";
import { Component, createRef, useState } from "react";
import styled from "styled-components";
import countryList from "./countries";
import { PotholeItem } from "./pothole_item";
import jQuery from "jquery";

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
    grid-template-rows:10vh 60vh;
    z-index:99;

`;

const PotholeHeader = styled.div`
    background-color:#ddd;
    display:grid;
    grid-template-columns:28vw 10vw;
    width:35vw;
    align-items:baseline;
    padding:1%;

`;

const PotholeContent = styled.div`
    background-color:#ccc;
    width:35vw;
`;

const PotholeHeaderTitle = styled.h3`
    display:flex;
    justify-content:center; 
`;

const PotholeHeaderExit = styled.button`
    background-color:transparent;
    border:none;
    font-weight:900;
    font-size:18px;
    align-content:center;
    text-align:center;  
`;

const PotholeContentImage = styled.img`
    width:33vw;
    height:30vh;
`;


axios.defaults.baseURL = "http://127.0.0.1:8000";
 class PotholesContainer extends Component{


    constructor(){
        super();
        this.state = {
            potholes:[],
            displayPothole:{},
        }
    }
      

  
    

     loadData=()=>{
        axios.get("/potholes/").then(pothole=>this.setState({...this.state,potholes:pothole.data}));

    }
 
    componentDidMount(){
        this.loadData();
    }

    getPosition(e,lat,lng,pothole){
        // e.preventDefault();
        jQuery("#card").fadeIn("slow");
        this.setState({...this.state.displayPothole,displayPothole:pothole});
    }

    closeCardPothole(){
        jQuery("#card").fadeOut("slow");
    }

    render(){
        return(
            <Container_>
            
            <Map
            style={{position:"absolute",left:"0",top:"0"}}
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
            ></Marker>)}
                                         
            </Map>

                <PotholeCard id="card">
                    <PotholeHeader>
                        <PotholeHeaderTitle>{this.state.displayPothole.city}--{this.state.displayPothole.country} </PotholeHeaderTitle>
                        <PotholeHeaderExit onClick={this.closeCardPothole}>X</PotholeHeaderExit>
                    </PotholeHeader>
                    <PotholeContent>
                        <PotholeContentImage src={`${this.state.displayPothole.picture}`}></PotholeContentImage>
                    </PotholeContent>

                </PotholeCard>

            </Container_>
        );
    }
    
}

export default GoogleApiWrapper({
    apiKey:("AIzaSyCbr9mu68Df5JEHLpjoX3UWqpQzQzK1wQo"),
})(PotholesContainer);

