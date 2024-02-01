import './App.css';
import { useState } from 'react';

function App() {

  let [logo] = useState('reactBlog'); 

  let [글제목, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '우동 맛집']);    // 글제목은 변수, b는 변경용 함수 state는 변수가 변경되면 바로 렌더링 됨 

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [상세정보, set상세정보] = useState(['무신사 코트', '유튜브', '오니기리']);

  let [titles, setTitles] = useState(0); 
  
  let [inputValue, setInputValue] = useState('');

  let [inputInpo, setInpo] = useState('');

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

      <button className='setString' onClick={ 가나다순정렬 }>가나다순정렬</button>
       

      
        {
          글제목.map(function(a, i){             // i는 반복 실행 될때마다 1씩 증가함
            return ( <div className='list'>
                    <h4 onClick={ ()=>{ setModal(!modal); setTitles(i)} } >{글제목[i]} </h4> 

                    <span onClick={ () => { 
                      let copy따봉 = [...따봉];
                      따봉변경(copy따봉);
                      copy따봉[i] = copy따봉[i] + 1;
                     } }>👍</span> {따봉[i]} 

                    <p>{발행일}</p>
                  </div> )
          })
        }

       
        <div className='extra'>
    
          <input type='textbox' onChange={  
            function handleInputChange(event){

              setInputValue(event.target.value)

            }  }></input>   

          <button onClick={ 
            function(){
              
              setTitle([...글제목, inputValue]);
              setInputValue(' ');
              따봉변경([...따봉, 0])

            } }>게시</button>

            <textarea onChange={ function(event){
              setInpo(event.target.value)
            } }></textarea>

            <button onClick={ function(){

              set상세정보([...상세정보, inputInpo]);
              setInpo('');

            } }>상세정보 작성하기</button>

          </div>  


{
  modal === true ?  <Modal  titles={titles} setTitleFunction={setTitle} setTitle={글제목}  date={발행일} inpo={상세정보} className='modal1'></Modal> : null
} 


     
    </div>
  );
} 
  
  
// 변수를 갖다가 컴포넌트에 넣고싶으면 무조건 props를 통하여



function Modal(props){
  return ( 
    <div className='modal'>
      <h4>{props.setTitle[props.titles]}</h4>      
      <p>{props.date}</p>
      <p>{props.inpo[props.titles]}</p>
      <button onClick={ function(){
        let modal글제목 = [...props.setTitle]
        modal글제목[0] = "여자 코트 추천"
        props.setTitleFunction(modal글제목)
      } }>↺</button>
    </div>
  )
}

export default App;