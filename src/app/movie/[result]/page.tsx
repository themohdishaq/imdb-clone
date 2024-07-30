
import Image from 'next/image';
import React from 'react';

interface PageParams {
  params: {
    result: string;
  };
}

export default async function Page({ params: { result } }: PageParams) {
  const API_KEY = '1472a3ece11f4c7cb43f9d094ce55e88';
  const url = `https://api.themoviedb.org/3/movie/${result}?api_key=${API_KEY}&language=en-US`;
  
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data) {
      return <div>No results found.</div>;
    }

    return (
      <div className='flex flex-col md:flex-row gap-6 p-4'>
        <div className='relative h-80 w-full md:w-1/3'>
          <Image 
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} 
            alt={data.title} 
            layout='fill' 
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-3xl font-semibold mb-2'>{data.title}</h1>
          <p className='text-gray-400 mb-4'>{data.overview}</p>
          <p className='text-gray-300'>{data.release_date}</p>
        </div>
      </div>
    );

  } catch (error) {
    console.error('Error fetching movie data:', error);
    return <div>Error fetching movie details. Please try again later.</div>;
  }
}
