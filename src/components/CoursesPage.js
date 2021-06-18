import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) {
      loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
