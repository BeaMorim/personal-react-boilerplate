import { createSelector } from 'reselect';

const selectStateFoo = ({foo}) => foo;

export const selectIsLoading = () =>
  createSelector(
    selectStateFoo,
    ({isLoading}) => isLoading,
  );