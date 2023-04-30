import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div>
        <div className="py-10">
  <div className="text-center">
    <p className="text-base font-semibold text-indigo-600">404</p>
    <h1
      className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
      Page not found
    </h1>
    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
      Sorry, we couldn&amp;apos:t find the page you're looking for.
    </p>
    <div className="flex items-center justify-center mt-6 gap-x-3">
      <Link href={'/index'}><button
        className="inline-flex items-center rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4 mr-2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        Take me Back
      </button>
      </Link>
      <Link href={'/index'}><button
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
        Go Home
      </button>
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Error