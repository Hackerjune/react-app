import './App.css';
import { useState } from 'react';

function App() {

  let [logo] = useState('reactBlog'); 

  let [글제목, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '우동 맛집']);    // 글제목은 변수, b는 변경용 함수 state는 변수가 변경되면 바로 렌더링 됨 

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  

  // let [글제목2, setTitle2] = useState('우동 맛집');

  // let [글제목3, setTitle3] = useState('파이썬독학');

  // [1,2,3].map(function(it){     // map 함수에서 매개변수는 상위 배열의 자료를 호출한다
  //   return 123                  // map 함수 => 상위 배열의 자료 갯수만큼 리턴값 호출, 호출한 값으로 새로운 배열 생성
  // })

  let 발행일 = '2024-1-29'

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
      <span onClick={ () => { 
        let copy = [...글제목];       // 새로운 배열에 기존 배열 삽입
        copy[0] = '여자 코트 추천';        // 원본 보존형 코딩
        setTitle(copy); } }>↺</span> 

      
        {
          글제목.map(function(a, i){             // i는 반복 실행 될때마다 1씩 증가함
            return ( <div className='list'>
                    <h4 onClick={ ()=>{ setModal(!modal)
                     
                      } } >{글제목[i]} </h4> 

                    <span onClick={ () => { 
                      let copy따봉 = [...따봉];
                      따봉변경(copy따봉);
                      copy따봉[i] = copy따봉[i] + 1;
                     } }>👍</span> {따봉[i]} 

                    <p>{발행일}</p>
                  </div> )
          })
        }



{
  modal === true ?  <Modal  setTitleFunction={setTitle} setTitle={글제목} title={글제목[0]} date={발행일} inpo='상세정보' className='modal1'></Modal> : null
} 

     
    </div>
  );
} 

function Modal(props){
  return ( 
    <div className='modal'>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.inpo}</p>
      <button onClick={ function(){
        let modal글제목 = [...props.setTitle]
        modal글제목[0] = "여자 코트 추천"
        props.setTitleFunction(modal글제목)
      } }>↺</button>
    </div>
  )
}

export default App;