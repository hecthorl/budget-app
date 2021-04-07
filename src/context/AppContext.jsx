import { createContext, useReducer } from 'react';
import appReducer from '../reducer/appReducer';

const initialState = {
   budget: 0,
   expenses: [],
};

export const AppContext = createContext();

const AppProvider = props => {
   const [state, dispatch] = useReducer(appReducer, initialState);
   return (
      <AppContext.Provider
         value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export default AppProvider;
