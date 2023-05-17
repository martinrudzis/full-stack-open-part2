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

export default Course