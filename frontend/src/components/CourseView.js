import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";


const CourseView = () =>{
    useEffect(() => {

        getAll()
    
      }, []);
    
      const slug = useParams();
      console.log(slug);
      const [data, setData] = useState([]);
    
      function getAll() {

          axios.get(`http://localhost:4000/api/courses/${slug.slug}`)
          .then((respuesta) => {
            console.log("la respuesta es", respuesta)
            setData(respuesta.data.lessons)
    
          });
      }


 
  return (



    <div className="container">
        {data.map((userInfo, index) => (
                            <div class="row">
            <div class="card shadow-lg m-3 courses" key={index}>
              <div class="card-body">
              <div dangerouslySetInnerHTML={{__html: userInfo.video}} />

                <h5 class="card-title">{` ${userInfo.title}`}</h5>
                <p class="card-text">{` ${userInfo.content}`}</p>


    
              </div>
            </div>
          </div>
        ))}
     


    </div>
  );
}


export default CourseView;