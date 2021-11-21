
import './App.css';
import Product from './Product'
import Spec from './Spec'

function App() {
  return (
    <div className="App">
        <div 
          className="App__products">
            <h1>Imagine your brand here</h1> 
            <Product/>
            <Product/>
            <Product/>
        </div>

          <div
            className="App__specs"
          > 
          <Spec/>
          <Spec/>
          <Spec/>
          </div>
    
    </div>
  );
}

export default App;
