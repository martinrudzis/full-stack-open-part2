const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => 
  <b>
    Total exercises = {
      parts.map(parts => parts.exercises).reduce(
        (sum, exerciseCount) => sum + exerciseCount, 0
      )
    }
  </b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.name} part={part} />
    )}     
  </>

const Course = ({ course }) => 
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App