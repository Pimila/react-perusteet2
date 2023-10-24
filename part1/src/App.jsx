const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.kurssi}</h1>
    </header>
  )
}
const Content = (props) => {
  console.log(props);
  return (
    <main id={props.tunti}>
      <p>{props.tunti} {props.ops}</p>
    </main>
  )
}
const Total = (props) => {
  console.log(props);
    return (
      <footer id = {props.summ}>
        <p>Number of exercises {props.summ}</p>
      </footer>
    )
}
const Part = ({ part, exercises }) => (
  <p>{part} {exercises}</p>
)
  
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <hr />
      <p>Tämän rivin alapuolella on ratkaisu 1.1: kurssitiedot, step 1</p>
      <hr />
      <Header kurssi={course} />
      <Content tunti={part1} ops={exercises1} />
      <Content tunti={part2} ops={exercises2} /> 
      <Content tunti={part3} ops={exercises3} />
      <Total summ= {exercises1 + exercises2 + exercises3} />
      <hr />
      <p>Tämän rivin alapuolella on ratkaisu 1.2: kurssitiedot, step 2</p>
      <hr />
      <Part  part={part1} exercises={exercises1} />
      <Part  part={part2} exercises={exercises2} />
      <Part  part={part3} exercises={exercises3} />
    </div>
  );
};
export default App;