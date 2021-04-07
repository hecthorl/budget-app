import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
   const { expenses } = useContext(AppContext);

   const totalExpenses = expenses.reduce((acc, item) => (acc += item.cost), 0);

   return (
      <div className="alert alert-primary">
         <span>spent so far: ${totalExpenses}</span>
      </div>
   );
};

export default ExpenseTotal;
