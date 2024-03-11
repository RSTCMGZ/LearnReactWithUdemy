import './App.css';
import Counter from './components/Counter';
import Products from './components/Products/Products';

// function MyComponent() {
//   return (
//     <div>
//       <h1>Hello Guys!</h1>
//     </div>
//   )
// }


function App() {
  // const paragraph = document.createElement('p')
  // paragraph.textContent = 'hello'
  // document.getElementById('root').append(paragraph)
  return (
    // <div >
    //   <MyComponent />
    //   <p>hello </p>
    //   <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eligendi vitae vero, accusantium enim officia atque. Minima, libero harum dicta ipsam suscipit a reiciendis, ad asperiores, modi ullam eveniet quas.</span>
    // </div>
    <div >
      <Products />
      <Counter />
    </div>
  );
}

export default App;
