import React from 'react';
import { GoogleMap } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';

const mymap = withScriptjs(withGoogleMap(() => 
(<GoogleMap />)));

const MyMap = () =>{
 <div>
     {mymap()}
 </div>
}



export default MyMap;

