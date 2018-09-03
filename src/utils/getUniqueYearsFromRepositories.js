export default function getUniqueYearsFromRepositories(repositories) {
  let years = [];

  repositories.forEach(repository => years.push(new Date(repository.created_at).getFullYear()));

  years = years.filter((year, index, arr) => arr.indexOf(year) === index);

  years.sort((a, b) => a > b);

  return years;
}
