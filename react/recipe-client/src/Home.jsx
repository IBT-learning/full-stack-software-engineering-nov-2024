return (
  <div className="container">
    <h1>All Recipes</h1>
    <nav>
      <a href="/create">➕ Add New Recipe</a>
    </nav>
    <ul>
      {recipes.map(r => (
        <li key={r._id}>
          <Link to={`/recipe/${r._id}`}>{r.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
