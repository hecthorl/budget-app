const appReducer = (state, { type, payload }) => {
   switch (type) {
      case 'ADD_EXPENSE':
         return {
            ...state,
            expenses: [...state.expenses, payload],
         };
      case 'DELETE_EXPENSE':
         const newExpenses = state.expenses.filter(item => item.id !== payload);
         return {
            ...state,
            expenses: newExpenses,
         };
      case 'INITIAL_BUDGET':
         return {
            ...state,
            budget: payload,
         };

      default:
         return state;
   }
};

export default appReducer;
