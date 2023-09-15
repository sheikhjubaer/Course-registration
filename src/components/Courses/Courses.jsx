import { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className="md:w-[80%] grid grid-cols-3 gap-4">
            
        </div>
    );
};


export default Courses;