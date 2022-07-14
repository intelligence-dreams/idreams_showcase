import React from 'react'
import styled from 'styled-components';
import GoogleApiWrapper from "./maps";

const Map_container = styled.div`
  width:80vw;
  height:90vh;
`;

function Displaygooglemaps() {
  return (
    <div>
      <Map_container>
                <GoogleApiWrapper />

      </Map_container>

    </div>
  )
}

export default Displaygooglemaps