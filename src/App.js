

// function Modal(props){
//   return ( 
//     <div className='modal'>
//       <h4>{props.title}</h4>
//       <p>{props.date}</p>
//       <p>{props.inpo}</p>
//     </div>
//   )
// }

// function App() {

//   let [logo] = useState('reactBlog'); 

//   let [글제목, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '우동 맛집']);    // 글제목은 변수, b는 변경용 함수 state는 변수가 변경되면 바로 렌더링 됨 

//   let [따봉, 따봉변경] = useState(0)

//   // let [글제목2, setTitle2] = useState('우동 맛집');

//   // let [글제목3, setTitle3] = useState('파이썬독학');

//   let 발행일 = '2024-1-29'

//   function 가나다순정렬(){
//     let copy글제목 = [...글제목].sort();      
//     setTitle(copy글제목);
//   }

//   return (
//     <div className='App'>     
//       <div className='nav'>
//         <h4>{logo}</h4>
//       </div>

//       <button onClick={ 가나다순정렬 }>가나다순정렬</button>
//       <span onClick={ () => { 
//         let copy = [...글제목];       // 새로운 배열에 기존 배열 삽입
//         copy[0] = '여자 코트 추천';        // 원본 보존형 코딩
//         setTitle(copy); } }>↺</span> 

//       <div className='list'> 
//         <h4>{글제목[0]}</h4> <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} 
//         <p>{발행일}</p>
//       </div>
//       <div className='list'>
//         <h4>{글제목[1]}</h4>
//         <p>{발행일}</p>
//       </div>
//       <div className='list'>
//         <h4>{글제목[2]}</h4>
//         <p>{발행일}</p> 
//       </div>

//       <Modal title='제목' date={발행일} inpo='상세정보' className='modal1'></Modal>
//     </div>
//   );
// } 

// export default App;

import React, { useState } from 'react';
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '콜라', amount: 2000},
    { id: 2, charge: '빵', amount: 1000},
    { id: 3, charge: '맥북', amount: 3000},
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id)
    setExpenses(newExpense)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      // expenses.push(newExpense); => 불변성 지키지 X
      const newExpenses = [...expenses, newExpense]; //=> 불변성 지키는 0
      setExpenses (newExpenses);
      setCharge("");
      setAmount(0);
    } else {
    console.log('error');
    }
  };


  return(
    <main className='main-container'>
      <div className='sub-container'>
        <h1>장바구니</h1>

        <div style={ {width: '100%', backgroundColor: 'white', padding: '1rem' }}>        
          <ExpenseForm charge={charge} handleSubmit={handleSubmit} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} />
        </div>

        <div style={ {width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
        </div>

        <div style={{ display:'flex', justifyContent: 'start', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}> 총합계 : </p>
        </div>

      </div>
    </main>
  )
}

export default App;