// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Logo from './components/Logo';
// import Btn from './components/Btn';
// import avatar from './avatar.png';
// import ModeToggler from './ModeToggler';
import MealsProvider from './provider/MealsProvider';
import Counter from './mealcomponents/Counter'
import Mealslist from './mealcomponents/Mealslist'
// import Child from './Child';
import './App.css';


function App() {
  // const date = new Date()
  return (
   <div className='App'>
    {/* <Header name="Hello World" />
    <ModeToggler /> */}
      <div>
        {/* <Child message={date.toLocaleDateString()} /> */}
        {/* <Main username="Marquinhos" num={5}/>
        {/* <Btn />
        <Sidebar greet="Eu sou a sidebar"/>  */}
        <MealsProvider>
        <Mealslist />
        <Counter />
        </MealsProvider>
      </div>
 
      {/* <Logo logo={avatar} alt="Logo image"/> */}
   </div>
  )
}

export default App;
