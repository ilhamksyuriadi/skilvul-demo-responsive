import TodoItem from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem id={1} content="Learn how to design" />
      <TodoItem id={2} content="Go to the gym" />
      <TodoItem id={3} content="Launch first application" />
      <TodoItem id={4} content="Try cooking" />
      <TodoItem id={5} content="Attemp online course" />
      <TodoItem id={6} content="Preparation for the interview" />
    </div>
  );
}

export default App;
