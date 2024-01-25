import logo from './logo.svg';
import './App.css';


function Header(props){
console.log('props', props, props.title);
return <header>
        <h1><a href='/'>{props.title}</a></h1>   
      </header>
}

function Nav(){
  return  <nav>
  <ol>
    <li><a href='/'>html</a></li>
    <li><a href='/'>css</a></li>
    <li><a href='/'>js</a></li>
  </ol>
</nav>
}


function Article(props){
  console.log('props', props, props.title, props.body);
 return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
