import React from 'react'

function page() {
  return (
    <div className="p-6">
      <h1 className='text-2xl font-medium text-amber-600'>About</h1>
      <p className='mt-4'>
        Welcome to our IMDb clone, a project built by Muhammad Ishaq using Next.js and Tailwind CSS. This platform aims to replicate the core functionalities of IMDb, providing users with an extensive database of movies, TV shows, and celebrity information. By leveraging the power of modern web technologies, we offer a fast, responsive, and intuitive user experience.
      </p>
      <p className='mt-4'>
        Our clone includes a comprehensive search feature, allowing you to easily find information about your favorite movies and shows. Each entry provides detailed information, including cast and crew lists, plot summaries, user ratings, and reviews. We strive to keep our database updated and accurate to ensure that you have access to the latest information in the entertainment industry.
      </p>
      <p className='mt-4'>
        In addition to movie and TV show information, our IMDb clone features a section dedicated to celebrity profiles. Here, you can explore biographies, filmographies, and photos of actors, directors, and other industry professionals. Our goal is to create a one-stop destination for all your entertainment information needs, making it easy and enjoyable to discover and learn about the world of movies and television.
      </p>
    </div>
  )
}

export default page
