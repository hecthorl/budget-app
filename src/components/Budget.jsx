import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
   const { budget, dispatch } = useContext(AppContext);
   const [input, setInput] = useState('');

   const handleBudget = e => {
      e.preventDefault();

      if (isNaN(input)) return console.log('Debe ser un numero');
      const newInput = input.trim();

      const action = {
         type: 'INITIAL_BUDGET',
         payload: newInput,
      };
      dispatch(action);
      setInput('');
   };

   return (
      <div className="alert alert-secondary d-flex justify-content-between align-items-center">
         {!budget ? (
            <>
               <form onSubmit={handleBudget}>
                  <input
                     value={input}
                     onChange={e => setInput(e.target.value)}
                     type="text"
                     className="form-control"
                  />
               </form>
               <button type="submit" className="btn btn-outline-success ml-2">
                  Abonar
               </button>
            </>
         ) : (
            <span>Incial: ${budget}</span>
         )}
      </div>
   );
};

export default Budget;
