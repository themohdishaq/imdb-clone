"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import { FaThumbsUp } from 'react-icons/fa'; // Import FaThumbsUp from react-icons

interface Result {
  id: number;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  title?: string;
  original_name?: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface ResultsProps {
  results: Result[];
}

function Results({ results }: ResultsProps) {
  const router = useRouter(); // Use the useRouter hook

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {results.map((result) => (
        <div
          key={result.id}
          onClick={() => router.push(`/movie/${result.id}`)} // Use router.push for navigation
          className='bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'
        >
          <img
           onClick={() => router.push(`/movie/${result.id}`)}
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            alt={result.title || result.original_name}
            className='w-full h-48 object-cover'
          />
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-2'>
              {result.title || result.original_name}
            </h2>
            <p className='text-gray-400 text-sm mb-3 truncate'>
              {result.overview}
            </p>
            <p className='flex items-center text-gray-300 text-sm'>
              {result.media_type && `${result.media_type} • `} 
              {result.release_date || result.first_air_date} • 
              <FaThumbsUp className='h-5 w-5 mx-2 text-yellow-400' /> 
              {result.vote_count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
