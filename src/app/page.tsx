import React from 'react';
import Results from './components/Results';

const API_KEY = '1472a3ece11f4c7cb43f9d094ce55e88';

export default async function Home({ searchParams }: { searchParams: { genre?: string } }) {
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;
  
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    
    if (!data || !data.results) {
      console.log('No data found');
      return <div>No results found.</div>;
    }

    return (
      <div>
        <Results results={data.results} />
      </div>
    );
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }
}
