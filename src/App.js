const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
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
        name: "Using props to pass data",
        exercises: 7,
        id: 5
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 6
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 91
      },
      {
        name: "Using props to pass data",
        exercises: 37,
        id: 90
      },
      {
        name: "Using props to pass data",
        exercises: 17,
        id: 97
      },
      {
        name: "State of a component",
        exercises: 24,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
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
