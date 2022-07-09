import React, { useEffect, useState } from 'react'
import "./case-study.css";
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
export default function CaseStudy() {
    const [displaycases, setDisplaycases] = useState([]);
    const [changeimagestate, setChangeimagestate] = useState('https://www.w3schools.com/bootstrap/la.jpg');
    const [table_json, setTable_json] = useState(true);
    const [currentImage,setCurrentImage]=useState({});
    const columns = [
        {"id":1,"url":"https://www.w3schools.com/bootstrap/la.jpg"},
        {"id":2,"url":"https://www.w3schools.com/bootstrap/bs_themes.jpg"},
        {"id":3,"url":"https://www.w3schools.com/bootstrap/bs_templates2.jpg"},
        {"id":4,"url":"https://www.w3schools.com/bootstrap/la.jpg"},
        {"id":5,"url":"https://www.w3schools.com/bootstrap/bs_themes.jpg"},
        {"id":6,"url":"https://www.w3schools.com/bootstrap/la.jpg"},
        {"id":7,"url":"https://www.w3schools.com/bootstrap/bs_templates2.jpg"}
    ];

    useEffect(()=>{
        //setDisplaycases(columns);
        axios.get("/").then(r=>setDisplaycases(r.data));
    },[])

    const change_image_state = (path,pothole)=>{
        setChangeimagestate(path);
        setCurrentImage(pothole);
    }
    axios.get("/").then(r=>console.log(r.data));


    var jsonObj = {
        "height" : 6.2,
        "width" : 7.3,
        "length" : 9.1,
        "color" : {
            "r" : 255,
            "g" : 200,
            "b" : 10
        }
    }

    displaycases.map(r=>console.log(r.url));
  return (
    <div>
        <div className='display-6 font-weight-bold  text-center'>Driver's License Verification with AI Based OCR</div>
        <div className='cases-container'>
            <div className='cases-sub-container'>
                    <div className='cases-sub-container-buttons'>
{
                displaycases.map(r=><button className='cases-sub-container-button' onClick={()=>change_image_state(r.picture,r)}>              
                                <img src={r.picture} className='cases-image-display' width={80} height={50} />
                        </button>)}


     
                    </div>
                <div>
                    <img src={changeimagestate===null?'https://www.w3schools.com/bootstrap/la.jpg':changeimagestate} className='cases-image-display cases-image-display-1' width={500} height={300}  />

                </div>
            </div>
            <div className='cases-sub-container'>
                <div className='cases-sub-container'>
                    <button onClick={()=>setTable_json(true)}>TABLE</button>
                    <button onClick={()=>setTable_json(false)}>JSON</button>
                </div>
                <div className='cases-sub-container'>
                    {table_json===true?
                    <div className='cases-table'>
                        
                        <div>
                            <label>ID</label>
                            <h6>{currentImage.id}</h6>
                        </div>

                        <div>
                            <label>Name</label>
                            <h6>{currentImage.name}</h6>
                        </div>

                        <div>
                            <label>db</label>
                            <h6>{currentImage.db}</h6>
                        </div>

                        <div>
                            <label>sex</label>
                            <h6>{currentImage.sex}</h6>
                        </div>

                        <div>
                            <label>adresse</label>
                            <h6>{currentImage.adresse}</h6>
                        </div>

                        <div>
                            <label>licenseno</label>
                            <h6>{currentImage.licenseno}</h6>
                        </div>
                    </div>
                    
                    :<div>
                    
                    <p>{"{"}</p>
                    {'...'} {' "height":'+jsonObj.height}<br></br>
                    {'...'} {'  "color":'+jsonObj.color}<br></br>
                    {'...'} {'  "width":'+jsonObj.width}<br></br>
                    {'...'} {'  "length":'+jsonObj.length}<br></br>
                    {'...'} {'  "height":'+jsonObj.height}<br></br>
                    {'...'} {'  "color":'+jsonObj.color}<br></br>
                    {'...'} {'  "width":'+jsonObj.width}<br></br>
                    {'...'} {'  "length":'+jsonObj.length}<br></br>
                    {'...'} {'  "height":'+jsonObj.height}<br></br>
                    {'...'} {'  "color":'+jsonObj.color}<br></br>
                    {'...'} {'  "width":'+jsonObj.width}<br></br>
                    {'...'} {'  "length":'+jsonObj.length}<br></br>

                    <p>{"}"}</p>
                    </div>}
                </div>
            </div>           
            
                     {changeimagestate}

        </div>



     
    </div>
  )
}
