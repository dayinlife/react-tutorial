import logo from './logo.svg';
import './App.css';
import { Greet }  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NamedList from './components/NamedList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Table /> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder woman"></Greet> */}
     {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}
     {/* <Welcome name="Clark" heroName="Superman"></Welcome>
     <Welcome name="Diana" heroName="Wonder woman"></Welcome> */}
    {/* <Hello /> */}
    {/* <FunctionClick> </FunctionClick>
    <ClassClick/> */}
    {/* <EventBind /> */}
    {/* <ParentComponent></ParentComponent> */}
    {/* <UserGreeting /> */}
    {/* <NamedList /> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <Inline></Inline> */}
    </div>
  );
}

export default App;
