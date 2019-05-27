import { createSelector } from 'reselect';

const selectStateFoo = ({foo}) => foo;

const selectIsLoading = () =>
  createSelector(
    selectStateFoo,
    ({isLoading}) => isLoading,
  );

export default { 
  selectIsLoading
};