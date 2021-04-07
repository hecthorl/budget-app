import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
   const { budget, expenses } = useContext(AppContext);

   const totalExpenses = expenses.reduce(
      (total, item) => (total = total + item.cost),
      0
   );

   const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-success';

   return (
      <div className={`alert ${alertType}`}>
         <span>Ramaining: $ {budget - totalExpenses}</span>
      </div>
   );
};

export default Remaining;
