import logo from './logo.svg';
import './App.css';

const data = [
  {
    id: "1",
    title: "Tiramisu",
    description : "The best tiramisu in Town",
    image: "https://picsum.photos/200/300/?random",
    price : "5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description : "The best Ice Cream in the World",
    image: "https://picsum.photos/200/300/?random",
    price : "50.00",
  },{
    id: "3",
    title: "Chocolate mousse",
    description : "The best Chocolate mousse in the Universe",
    image: "https://picsum.photos/200/300/?random",
    price : "500.00",
  }

]

const topDesserts = data.map(dessert => {
  return {
    content : `${dessert.title} - | ${dessert.description}`,
    price : dessert.price,
  }
})
function App() {
  console.log(topDesserts)
  return (
    <div>
      <h1>Examine the console log</h1>
    </div>
  );
}

export default App;
