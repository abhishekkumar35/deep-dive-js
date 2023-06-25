import React from "react";
import { getAllCourses } from "@utils/serverCourseQueries";

const page = async () => {
  let allCourses = [];
  const allCourse = async () => {
    allCourses = await getAllCourses({
      projectionField: {
        courseName: 1,
        courseDescription: 1,
        courseOverview: 1,
      },
    });
  };
  await allCourse();

  return (
    <div>
      <ul>
        {Array.isArray(allCourses) &&
          allCourses.length > 0 &&
          allCourses.map((item) => {
            return <li key={item.id}>{item.courseName}</li>;
          })}
      </ul>
    </div>
  );
};

export default page;
