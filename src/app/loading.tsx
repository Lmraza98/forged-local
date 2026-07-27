export default function Loading() {
  return (
    <main className="page-loading" aria-label="Loading page" aria-busy="true">
      <div className="container loading-shell">
        <span className="skeleton skeleton-kicker" />
        <span className="skeleton skeleton-title" />
        <span className="skeleton skeleton-title short" />
        <div className="loading-grid">
          <span className="skeleton skeleton-card" />
          <span className="skeleton skeleton-card" />
          <span className="skeleton skeleton-card" />
        </div>
      </div>
    </main>
  );
}
