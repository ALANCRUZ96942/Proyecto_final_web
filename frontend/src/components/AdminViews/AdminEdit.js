import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DummyImage } from 'react-simple-placeholder-image'
import Swal from 'sweetalert2'



function AdminEdit() {

  useEffect(() => {

    getAll();

  }, []);

  const id = useParams();
  const _id = useParams();
  const [data, setData] = useState([]);

  function getAll() {

      axios.get(`http://localhost:4000/api/courses/${id.id}`)
      .then((respuesta) => {
        console.log("la respuesta es", respuesta)
        setData(respuesta.data)
        setLessons(respuesta.data.lessons);
      });
  }





  const [nombre, setNombre] = useState([]);
  const [desc, setDesc] = useState([]);
  const [slug, setSlug] = useState([]);
  const [file, setFile] = useState([]);

  const [lecciones, setLessons] = useState([]);

  const [titulol, setLessonTitle] = useState([]);
  const [contentl, setLessonContent] = useState([]);
  const [videol, setLessonVideo] = useState([]);

  function  getNombre(val){
    setNombre(val.target.value);

  };
  function  getDesc(val){
    setDesc(val.target.value);


  };
  function  getSlug(val){
    setSlug(val.target.value);
    console.log(slug);

  };

  function  getFile(val){
    const files = val.target.files[0];
    setFile(files);
    console.log(file);
  };

  
  function getLessons(e){
    e.preventDefault();

  if((titulol.length !==  0) && (contentl.length  !==  0)  && (videol.length  !==  0)) {
      const newlesson = {
        title: titulol,
        content: contentl,
        video : videol,
      }

      setLessons(lecciones => [...lecciones, newlesson]);
      console.log(lecciones);
      
   }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta algún dato por ingresar',
      });
    }

  };




  function  getLessonTitle(val){
    setLessonTitle(val.target.value);

  };
  function  getLessonContent(val){
    
    setLessonContent(val.target.value);


  };
  function  getLessonVideo(val){
    setLessonVideo(val.target.value);
  };

  
  var body = {
    slug: slug,
    name:  nombre,
    description: desc,
    image : file,
    lessons: lecciones,
  }



  function update(){
    if((nombre.length !==  0) && (desc.length  !==  0)  && (slug.length  !==  0)){
      axios.patch(`http://localhost:4000/api/courses/edit/${id.id}`,body).then((respuesta) => {
        Swal.fire({
          icon: 'success',
          title: 'Curso subido con éxito',
          showConfirmButton: false,
          timer: 1500
        });
  
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo algun error',err,
        });
    
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta algún dato por ingresar',
      });
    }

  }










  return (



    <div className="container  pt-5 pb-5 pr-5 pl-5 ">
      <div className="row ">
      <h1>
        Editar curso:
    </h1>
      <form>
            <div className="form-group m-3">
                <label >Nombre del curso:</label>
                <input type="text" defaultValue ={data.name}className="form-control" onChange={getNombre}/>
            </div>
            <div className="form-group m-3">
                <label >Descripción del curso:</label>
                <input type="text" defaultValue ={data.description} className="form-control" onChange={getDesc}/>
            </div>
            <div className="form-group m-3">
                <label >Slug</label>
                <input type="text" defaultValue ={data.slug} className="form-control" onChange={getSlug}/>
            </div>
            <div className="form-group m-3">
                <label >Imagen</label>
                <input
                  type="file"
                  id="file"
                  onChange={getFile}
                />            
            </div>

            <h2>Insertar nuevas lecciones</h2>

            <div className="form-group m-3">
                <label >Titulo</label>
                <input type="text" className="form-control" onChange={getLessonTitle} />
            
                <label >Contenido</label>
                <input type="text" className="form-control" onChange={getLessonContent} />

                <label >Video</label>
                <input type="text" className="form-control" onChange={getLessonVideo} />
                <button className="btn btn-sm btn-dark mt-3" onClick={getLessons}>Agregar lección</button>

            </div>
            

            

            {lecciones.map((userInfo,index) => (

<li className="list-group-item" key={index}>
  <h5>Titulo de la lección: {` ${userInfo.title}`}</h5>
  <h5>Contenido: {` ${userInfo.content}`}</h5>
  <h5>Link de Youtube: {` ${userInfo.video}`}</h5>
  <hr />
</li>
))}


            <button type="submit" className="btn btn-primary" onClick={update} >Subir</button>
            </form>
      </div>


     

    </div>
  );
}


export default AdminEdit;