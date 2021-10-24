export async function get() {
  const res = await fetch('https://api.github.com/users/co1ecas3/repos');
  const data = await res.json();

  const truncated = data.map(repo => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description
  }));

  return { body: truncated }
}