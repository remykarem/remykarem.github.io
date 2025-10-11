import {useEffect, useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import EstablishmentCard from './components/EstablishmentCard';
import Pagination from './components/Pagination';
import type {Establishment} from './types';
import {useSearch} from './hooks/useSearch';

function App() {
  const [items, setItems] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    // Try build-time import first; fallback to fetch from root for large files.
    import('./data/establishments.json')
      .then((mod) => (mod.default as Establishment[]))
      .catch(async () => {
        const res = await fetch('/establishments.json');
        if (!res.ok) throw new Error('Failed to load establishments.json');
        return (await res.json()) as Establishment[];
      })
      .then((data) => {
        if (!mounted) return;
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setLoadError(String(err));
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const {
    query,
    setQuery,
    filters,
    toggleFilter,
    page,
    total,
    totalPages,
    pageItems,
    submitSearch,
    goToPage,
    isSearching,
    label,
  } = useSearch(items);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <header className="sticky top-0 z-10 mb-6 rounded-2xl border border-gray-200 bg-white/80 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <h1 className="text-3xl font-bold tracking-tight">Halal Establishments (SG)</h1>
        <p className="mt-1 text-sm text-gray-600">Search by name/address or sort by a 6-digit postal code.</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <SearchBar value={query} onChange={setQuery} onSubmit={submitSearch} />
          <Filters
            category1={filters.category1}
            category2={filters.category2}
            onToggle={toggleFilter}
          />
        </div>
      </header>


      {loading && <div className="text-gray-600">Loading establishments…</div>}
      {loadError && (
        <div className="text-red-600">Error: {loadError}</div>
      )}

      {!loading && !loadError && (
        <>
          <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
            <span>{total} results</span>
            <span className="italic text-gray-500">{isSearching ? 'Working…' : label}</span>
          </div>
          {total === 0 ? (
            <div className="text-gray-600">No results found.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pageItems.map((e) => (
                <EstablishmentCard key={e.id} item={e} />
              ))}
            </div>
          )}
          <div className="mt-6">
            <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
