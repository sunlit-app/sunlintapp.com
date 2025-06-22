import imageLogo from '/logo@0.5x.png';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={imageLogo} className="logo" alt="Sunlit Painting App logo" />
      </div>
      <h1>Sunlit Painting App</h1>
      <p className="description">Coming soon</p>
    </>
  );
}

export default App;
