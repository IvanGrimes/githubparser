export default function filterRepositories(repositories, year) {
  const filtered = repositories.filter((repository) => {
    const repositoryYear = new Date(repository.created_at).getFullYear();

    if (repositoryYear === year) {
      return repository;
    }
  });

  return filtered;
}
