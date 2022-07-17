import { Component, useCallback, useState } from "react";
import WorldMap,{CountryContext} from "react-svg-worldmap";
import styled from "styled-components";
import jquery from "jquery";

const ContainerMap = styled.div`
    width:100vw;
    background-color:#ffe;
    display:flex;
    justify-content:center;
    overflow-y:scroll;
`;

const ContainerStatistique = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:50vh;
    background-color:#888;
    z-index:99;
    display:grid;
    grid-template-rows:5vh 60vh;
`;

const ContainerStatistiqueHeader = styled.div`
    display:grid;
    grid-template-columns:90vw 10vw;
`;

const ContainerStatistiqueHeaderExit = styled.button`
    padding:2%;
    font-size:28px;
    font-weight:900;
    background-color:transparent;
    border:none;
`;






export class PotholesStatistique extends Component{
    constructor(){
        super();
        this.data = [
            { country: "cn", value: 1389618778 }, // china
            { country: "in", value: 1311559204 }, // india
            { country: "us", value: 331883986 }, // united states
            { country: "id", value: 264935824 }, // indonesia
            { country: "pk", value: 210797836 }, // pakistan
            { country: "br", value: 210301591 }, // brazil
            { country: "ng", value: 208679114 }, // nigeria
            { country: "bd", value: 161062905 }, // bangladesh
            { country: "ru", value: 141944641 }, // russia
            { country: "mx", value: 127318112 }, // mexico
            { country: "tn", value: 1 }, // mexico
          ];
          this.state = {
            displayDataOfCurrentCountry:{}
          }


          jquery("#container_statique").hide();

    }


     getStyle = ({
        countryValue,
        countryCode,
        minValue,
        maxValue,
        color,
      }) => ({
        fill: countryCode === "TN" ? "blue" : color,
        fillOpacity: countryValue
          ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
          : 0,
        stroke: "green",
        strokeWidth: 1,
        strokeOpacity: 1.2,
        cursor: "pointer",
        innerWidth:"100vw",
        outerWidth:"100vw",
      });

      closeTag(){
        jquery("#container_statique").fadeOut("slow");
      }

      getDataAndDisplayDataOfItem(data){
        jquery("#container_statique").fadeIn("slow");
        this.setState({...this.state.displayDataOfCurrentCountry,displayDataOfCurrentCountry:data});
      }
    
    render(){
    return(
        <div style={{overflowY:"scroll",overflowX:"none",height:"90vh",width:"100vw"}}>
        <ContainerMap>
        <WorldMap
        style={{backgroundColor:"#ff0"}}
          color="blue"
        //   title="Top 10 Populous Countries"
          value-suffix="people"
          size="xxl"
          data={this.data}
          styleFunction={this.getStyle}
          onClickFunction={(e)=>this.getDataAndDisplayDataOfItem(e)}

        />
      </ContainerMap>

        <ContainerStatistique id="container_statique">
            <ContainerStatistiqueHeader>
                <div>{this.state.displayDataOfCurrentCountry.countryName} </div>
                <ContainerStatistiqueHeaderExit onClick={this.closeTag}>X</ContainerStatistiqueHeaderExit>
            </ContainerStatistiqueHeader>
        </ContainerStatistique>


      </div>
    );
    }
}




