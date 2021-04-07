import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
   const { expenses } = useContext(AppContext);

   if (!expenses) return console.log('Expenses esta vacio');

   return (
      <ul className="list-group">
         {expenses.map(item => (
            <ExpenseItem
               key={item.id}
               id={item.id}
               name={item.name}
               cost={item.cost}
            />
         ))}
      </ul>
   );
};

export default ExpenseList;
