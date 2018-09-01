export default function filterRepositories(repositories, year) {
  return repositories.filter(repository => (
    new Date(repository.created_at).getFullYear() === year && repository
  ));
}
