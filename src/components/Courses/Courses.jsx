import { useEffect, useState } from "react";
import Course from '../Course/Course';

const Courses = ({ handleCart }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="md:w-[80%] grid grid-cols-3 gap-4">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleCart={handleCart}
                ></Course>)
            }
        </div>
    );
};


export default Courses;