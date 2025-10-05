"use client";

import Link from "next/link";

export default function Map() {

    return (
        <>
            <style jsx global>{`
            body {
                background: #ffeed8;
            }
            `}</style>
            <div className="rounded-md bg-green-700 text-white py-2 px-8 mb-10 mt-20 text-center max-w-xl mx-auto">
                <h1 className="font-bold">
                    Strategies to reduce heat in neighborhoods
                </h1>
            </div>
            <ul className="list-disc pl-15 mb-8">
                <li>Creation of urban parks and green corridors, connecting squares and gardens</li>
                <li>Planting large-canopy trees on the streets</li>
                <li>Green roofs and facades</li>
                <li>Rain gardens and permeable sidewalks</li>
            </ul>
            <div className='pl-4 mb-8 text-sm/6'>
                Find out more at: 
                <a
                    href="https://share.google/QKN54X7YtYcRoRWZw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    https://share.google/QKN54X7YtYcRoRWZw
                </a>
            </div>
            <div className="rounded-md bg-green-700 text-white py-2 px-8 mb-10 mt-20 text-center max-w-xl mx-auto">
                <h1 className="font-bold">
                    Strategies to prevent fires
                </h1>
            </div>
            <ul className="list-disc pl-15 mb-8">
                <li>Regular maintenance of dry vegetation</li>
                <li>Creation of humid ecological corridors</li>
                <li>Reforestation with less flammable native species that retain more moisture</li>
                <li>Climate monitoring and early warning systems</li>
            </ul>
            <div className='pl-4 mb-8 text-sm/6'>
                Find out more at: 
                <a
                    href="https://share.google/QKN54X7YtYcRoRWZw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    https://share.google/QKN54X7YtYcRoRWZw
                </a>
            </div>
            <Link
                href="/"
                style={{
                    position: 'fixed',
                    left: '24px',
                    bottom: '24px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: '#156b19',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1000,
                    textDecoration: 'none',
                }}
                aria-label="Home"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 24 24">
                    <path d="M3 11.5V21a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-.293-.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 11.5z"/>
                </svg>
            </Link>
        </>
    );
}