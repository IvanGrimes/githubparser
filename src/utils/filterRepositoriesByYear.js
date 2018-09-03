export default function filterRepositoriesByYear(repositories, year) {
  let filteredRepositories = repositories;

  filteredRepositories = filteredRepositories.filter((repository) => {
    return new Date(repository.created_at).getFullYear() === year;
  });

  return filteredRepositories;
}
