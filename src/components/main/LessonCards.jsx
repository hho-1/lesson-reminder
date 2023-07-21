import React, { useState } from "react";




const LessonCards = ({ data }) => {
  const [lesson, setLesson] = useState(data);

  return (
    
    <div className="container d-flex  justify-content-center text-center">
      <h1>{lesson.length} lessons today</h1>

      {lesson.map(({ image, name, hour, id }) => (
        <div className="card col-lg-6 col-md-12 bg-transparent border border-0" key={id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} alt="" />
            </div>
            <div className="card-body col-md-8">
              <p className="card-text">
                <span>Lesson Name:</span> {name}
              </p>
              <p className="card-text">
                <span>Lesson Hour:</span> {hour}
              </p>
            </div>
          </div>
        </div>
      ))}


    

      <button type="button" className="btn btn-primary btn-lg" onClick={()=>setLesson([])}>
        Clear All
      </button>
      
    </div>
  );
};

export default LessonCards;
