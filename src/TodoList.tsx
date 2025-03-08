import React, { useState, useEffect} from 'react';
import TodoItem from './TodoItme';

const TodoList = () => {
 const originalTodos = [
   { task: "vakna senaste kl. 06.00-07.00", completed: false },
   { task: "Ta fett bruner + Drick 0.5-1 liter vatten", completed: false },
   { task: "45-60 min morgonpromenad (fastnade mage)", completed: false },
   { task: "Kom hem och ät fukost 5 ägg + havregryn", completed: false },
   { task: "gå till gym", completed: false },
    { task: "Ät högt protein varje måltid + vatten", completed: false },
    { task: "inga snack eller onödliga kolhydrater på kvällen!!", completed: false },
    { task: "lär dig koda", completed: false },
    { task: "Sov senaste kl 22:00-23:00", completed: false },
 ];

    const [todos, setTodos] = useState(originalTodos);

 const toggleComplete = (index: number) => {
   const UpdateTodos = [...todos];
   UpdateTodos[index].completed = !UpdateTodos[index].completed;
   setTodos(UpdateTodos);
 }
 const resetTodos = () => {
    setTodos(originalTodos);  // Återställ till ursprungligt tillstånd
  };
 useEffect(() => {
    const checkTimeAndReset = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      // Kollar om klockan är exakt 00:00
      if (hours === 0 && minutes === 0) {
        resetTodos();  // Återställ TODO-lista
      }
    };

    // Kontrollera varje minut
    const intervalId = setInterval(checkTimeAndReset, 60000);

    // Rensa intervallet när komponenten tas bort
    return () => clearInterval(intervalId);
  }, [todos]);


 return (
   <div>
     <h2 className='font-bold text-xl mb-4'>Morgonrutiner</h2>
     {todos.map((todo, index) => (
       <TodoItem key={index} todo={todo} toggleComplete={() => toggleComplete(index)} />
     ))}
   </div>
 )
};

export default TodoList;