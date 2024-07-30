// src/components/ClientComponent.tsx
"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Results from './Results';

const API_KEY = '1472a3ece11f4c7cb43f9d094ce55e88';

const ClientComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre') || 'fetchTrending';
  
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        
        if (!result || !result.results) {
          setError('No results found.');
        } else {
          setData(result.results);
        }
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [genre]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Results results={data} />;
};

export default ClientComponent;
