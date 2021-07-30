import './App.css';
import Header from './components/Header'
import BoardWrapper from './components/BoardWrapper'
import SolveBtn from './components/SolveBtn'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BoardWrapper></BoardWrapper>
      <SolveBtn></SolveBtn>
    </div>
  );
}

export default App;
