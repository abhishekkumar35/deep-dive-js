import { getCourseByName, getCourseMetaData } from "@utils/serverCourseQueries";

export async function generateMetadata({ params: { courseName } }) {
  const course = await getCourseMetaData({ courseName });
  return course.metaData;
}

const Course = async ({ params: { courseName } }) => {
  const { courseDescription, courseOverview, topics } = await getCourseByName({
    courseName,
    projectionField: {
      courseName: 1,
      courseDescription: 1,
      courseOverview: 1,
      topics: 1,
    },
  });
  return (
    <div>
      <h1>This is the Topic component </h1>
      <h1>Course Name {courseName} </h1>
      <h2>Course description: {courseDescription}</h2>
      <h2>Course Overview: {courseOverview}</h2>
      <div>
        {topics.map((topic) => {
          return <li key={topic._id}>{topic._id}</li>;
        })}
      </div>
    </div>
  );
};

export default Course;
