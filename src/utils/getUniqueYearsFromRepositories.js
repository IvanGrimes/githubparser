export default function getUniqueYearsFromRepositories(repositories) {
  let years = new Set();

  repositories.forEach((repository) => {
    years.add(new Date(repository.created_at).getFullYear());
  });

  years = Array.from(years).sort((a, b) => a > b);

  return years;
}
