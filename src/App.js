import React, { useEffect, useState } from 'react';
import * as C from './App.styles'
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from "./components/TableArea";
import { InfoArea } from './components/InfoArea/index';
import { AddArea } from './components/AddArea/index';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filteredList]);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  const addItemToList = (e) => {
    let [year, month, day] = document.querySelector('#dateForm').value.split('-')

    console.log(year, month, day);
    
    let itemAdd = {
        date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
        category: document.querySelector('#selectForm').value,
        title: document.querySelector('#titleForm').value,
        value: parseFloat(document.querySelector('#valueForm').value)
    }
    setList([...list, itemAdd])
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Finaceiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <AddArea addItemToList={addItemToList}/>

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  )
}

export default App;
