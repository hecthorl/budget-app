import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = props => {
   const { dispatch } = useContext(AppContext);
   const { name, cost, id } = props;

   const handleDelete = () => {
      const action = {
         type: 'DELETE_EXPENSE',
         payload: id,
      };
      dispatch(action);
   };

   return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
         {name}
         <div>
            <span className="badge badge-primary badge-pill mr-3">${cost}</span>
            <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
         </div>
      </li>
   );
};

export default ExpenseItem;
