import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Modal(){
  return <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
</div>
}

function App() {

  let [logo, setLogo] = useState('reactBlog'); 

  let [글제목, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '우동 맛집']);    // 글제목은 변수, b는 변경용 함수 state는 변수가 변경되면 바로 렌더링 됨 

  let [따봉, 따봉변경] = useState(0)

  // let [글제목2, setTitle2] = useState('우동 맛집');

  // let [글제목3, setTitle3] = useState('파이썬독학');

  let 발행일 = '2월 17일 발행'

 
  function 가나다순정렬(){
    let copy글제목 = [...글제목].sort();      
    setTitle(copy글제목);
    
  }

  return (
    <div className='App'>     
      <div className='nav'>
        <h4>{logo}</h4>
      </div>

      <button onClick={ 가나다순정렬 }>가나다순정렬</button>

      <div className='list'> <span onClick={ () => { 
        let copy = [...글제목];       // 새로운 배열에 기존 배열 삽입
        copy[0] = '여자 코트 추천';        // 원본 보존형 코딩
        setTitle(copy); } }>↺</span> 
        <h4>{글제목[0]}</h4> <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} 
        <p>{발행일}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{발행일}</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{발행일}</p> 
      </div>

      <Modal></Modal>
    </div>
  );
} 

export default App;