import { createSelector } from 'reselect';
// TODO: Можно использовать для выбора самого ближайшего большого года при отправке пропсов из YearsListcontainer, вместо использования в YearsList

const getRepositories = store => store.account.repositories;

export const getYears = createSelector([getRepositories], (repositories) => {
  let years = new Set();

  repositories.forEach((repository) => {
    years.add(new Date(repository.created_at).getFullYear());
  });

  years = Array.from(years).sort((a, b) => a > b);

  return years;
});
