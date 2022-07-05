const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 211,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
  // <Course course={course} />
};

const Course = ({ course }) => {
  let courseArray = course.parts;
  let exerciseCount = courseArray.map((part) => part.exercises);
  return (
    <div>
      <h1>{course.name}</h1>
      {courseArray.map((course) => (
        <p key={course.id}>
          {course.name} has {course.exercises} exercises{" "}
        </p>
      ))}
      <p>
        The total of all the excercises is{" "}
        {exerciseCount.reduce((a, b) => a + b, 0)}
      </p>
    </div>
  );
};

export default App;
