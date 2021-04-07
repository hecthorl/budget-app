import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuid } from 'uuid';

const AddExpenseForm = () => {
   const [name, setName] = useState('');
   const [cost, setCost] = useState('');
   const { dispatch } = useContext(AppContext);

   const handleForm = event => {
      event.preventDefault();

      if (isNaN(cost) || cost <= 0) return console.log('Debe ser un numero');

      const newName = name.trim();
      const newCost = cost.trim();

      if (!newName || !newCost) return console.log('Requerido');

      const expenseItem = { id: uuid(), name, cost: +cost };

      const action = {
         type: 'ADD_EXPENSE',
         payload: expenseItem,
      };

      dispatch(action);

      setName('');
      setCost('');
   };

   return (
      <form onSubmit={handleForm}>
         <div className="row">
            <div className="col-sm">
               <label htmlFor="name">Name</label>
               <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
               />
            </div>
            <div className="col-sm">
               <label htmlFor="cost">Cost</label>
               <input
                  value={cost}
                  onChange={e => setCost(e.target.value)}
                  type="text"
                  className="form-control"
                  id="cost"
               />
            </div>
            <div className="col-sm">
               <button type="submit" className="btn btn-primary mt-3 btn-block">
                  Save
               </button>
            </div>
         </div>
      </form>
   );
};

export default AddExpenseForm;
