import { Component } from "react";
import styled from "styled-components";


const Element = styled.div`
    margin:1%;
    background-color:white;

`;

const Image = styled.img`
    width:15vw;
    height:15vh;

`;
export class PotholeItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            pothole:{}
        }
    }

    componentDidMount(){
        this.setState({...this.state,pothole:this.props.pothole});
        console.log(this.props.pothole);
    }

    render(){
        return(
            <Element>
                
                <Image src={this.props.pothole.picture}></Image>
                <h6 className="text-dark font-weight-bold ">{this.props.pothole.country} </h6>
            </Element>
        );
    }
}