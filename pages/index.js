import React from 'react';

const CourseHome = () => {
  return (
<>
Hero Banner

<div>
  <h2>Trending Courses</h2>
  <p>Check out whats trending and teach your child the technologies of tomorrow!</p>
</div>

<div>
  {['Course 1','Course 2'].map(
    (course)=>course)}
</div>

Footer
</>
  )
}

export default CourseHome;
