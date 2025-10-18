"use client";

// IMPORTS
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import CartButton from "$/cartButton";
import { useState } from "react";

// FONT
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
});


// PAGE
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [counts, setCounts] = useState(Array(9).fill(0));

    const handleIncrement = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
        setTotalCount(newCounts.reduce((a, b) => a + b, 0));
    };

    const handleDecrement = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) {
            newCounts[index] -= 1;
            setCounts(newCounts);
            setTotalCount(newCounts.reduce((a, b) => a + b, 0));
        }
    };

    return <>
        <nav className="bg-ieee-gray body-font absolute w-full top-0 left-0 z-10">
            <div className="flex flex-wrap p-5 items-center justify-between relative">
                <div className="flex-1">
                    <Image src="https://ieeeuottawa.ca/images/ieeelogo_gradient.svg" alt="IEEE Logo" width={114} height={48}/>
                </div>

                {/* desktop links */}
                <div className="hidden md:flex flex-5 flex-wrap justify-around items-center text-base">
                    <a href="#" className="font-ieee-mono text-white">Home</a>
                    <a href="#" className="font-ieee-mono text-white">About</a>
                    <a href="#" className="font-ieee-mono text-white">McN Centre</a>
                    <a href="#" className="font-ieee-mono text-white">Execs</a>
                    <a href="#" className="font-ieee-mono text-white">Events</a>
                    <a href="#" className="font-ieee-mono text-white">Documents</a>
                </div>

                {/* mobile hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(v => !v)}
                        className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>

                <div className="w-fit flex-1 flex justify-end">
                    <a href="https://www.instagram.com/ieeeuottawa/">
                        <svg className="fill-white h-8 w-8 ml-1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-3.26 0-3.667 0.015-4.947 0.072-1.278 0.060-2.148 0.261-2.913 0.558-0.789 0.306-1.459 0.717-2.126 1.384s-1.079 1.336-1.384 2.126c-0.297 0.765-0.499 1.635-0.558 2.913-0.060 1.28-0.072 1.687-0.072 4.947s0.015 3.667 0.072 4.947c0.060 1.277 0.261 2.148 0.558 2.913 0.306 0.788 0.717 1.459 1.384 2.126s1.336 1.079 2.126 1.384c0.766 0.296 1.636 0.499 2.913 0.558 1.28 0.060 1.687 0.072 4.947 0.072s3.667-0.015 4.947-0.072c1.277-0.060 2.148-0.262 2.913-0.558 0.788-0.306 1.459-0.718 2.126-1.384 0.666-0.667 1.079-1.335 1.384-2.126 0.296-0.765 0.499-1.636 0.558-2.913 0.060-1.28 0.072-1.687 0.072-4.947s-0.015-3.667-0.072-4.947c-0.060-1.277-0.262-2.149-0.558-2.913-0.306-0.789-0.718-1.459-1.384-2.126-0.667-0.667-1.335-1.079-2.126-1.384-0.765-0.297-1.636-0.499-2.913-0.558-1.28-0.060-1.687-0.072-4.947-0.072zM12 2.16c3.203 0 3.585 0.016 4.85 0.071 1.17 0.055 1.805 0.249 2.227 0.415 0.562 0.217 0.96 0.477 1.382 0.896 0.419 0.42 0.679 0.819 0.896 1.381 0.164 0.422 0.36 1.057 0.413 2.227 0.057 1.266 0.070 1.646 0.070 4.85s-0.015 3.585-0.074 4.85c-0.061 1.17-0.256 1.805-0.421 2.227-0.224 0.562-0.479 0.96-0.899 1.382-0.419 0.419-0.824 0.679-1.38 0.896-0.42 0.164-1.065 0.36-2.235 0.413-1.274 0.057-1.649 0.070-4.859 0.070-3.211 0-3.586-0.015-4.859-0.074-1.171-0.061-1.816-0.256-2.236-0.421-0.569-0.224-0.96-0.479-1.379-0.899-0.421-0.419-0.69-0.824-0.9-1.38-0.165-0.42-0.359-1.065-0.42-2.235-0.045-1.26-0.061-1.649-0.061-4.844 0-3.196 0.016-3.586 0.061-4.861 0.061-1.17 0.255-1.814 0.42-2.234 0.21-0.57 0.479-0.96 0.9-1.381 0.419-0.419 0.81-0.689 1.379-0.898 0.42-0.166 1.051-0.361 2.221-0.421 1.275-0.045 1.65-0.060 4.859-0.060l0.045 0.030zM12 5.838c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM19.846 5.595c0 0.795-0.646 1.44-1.44 1.44-0.795 0-1.44-0.646-1.44-1.44s0.646-1.439 1.44-1.439c0.793-0.001 1.44 0.645 1.44 1.439z"></path></svg>
                    </a>
                </div>

                {/* mobile dropdown */}
                {menuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-ieee-gray shadow-md z-20">
                        <div className="flex flex-col p-3 items-center space-y-2">
                            {["Home","About","McN Centre","Execs","Events","Documents"].map((label) => (
                                <a
                                    key={label}
                                    href="#"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-ieee-mono text-white block w-full text-center py-2 rounded hover:bg-white/10"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>

         
        <header className="h-screen flex relative flex-col justify-center items-center text-white text-center px-4 bg-no-repeat bg-cover" style={{backgroundImage: "url('bg.jpg')"}}>
            <div className="bg-ieee-blue opacity-50 absolute inset-0"></div>
            <h1 className={`text-7xl font-medium z-0 ${spaceGrotesk.className}`}>Official IEEE Store</h1>
            <p className={`text-3xl z-0 mt-2 ${spaceGrotesk.className}`}>Get your merch and snacks!</p>
        </header>

        <main className={`bg-ieee-gray p-4 w-full mx-auto ${spaceGrotesk.className}`}>
            <h3 className={`text-3xl text-white text-center font-medium ${spaceGrotesk.className}`}>Products</h3>
            <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90vw] max-w-5xl gap-6 flex-wrap mx-auto">
                {counts.map((_, index) => (
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={index}>
                        <Image src="/image.png" alt={`Product ${index + 1}`} width={400} height={400} className="w-full h-64 object-cover"/>
                        <div className="p-2">
                            <h2 className="text-lg font-semibold">Product {index + 1}</h2>
                            <p className="text-gray-700 mb-2">$19.99</p>
                            <CartButton 
                                count={counts[index]} 
                                onIncrement={() => handleIncrement(index)} 
                                onDecrement={() => handleDecrement(index)} 
                            />
                        </div>
                    </div>
                ))}
            </section>

            <a 
                className={`w-[90vw] max-w-3xl bg-ieee-blue text-white font-bold p-4 rounded mx-auto mt-6 mb-12 flex items-center justify-center gap-3 hover:opacity-90`}
                href="/checkout"
            >
                Checkout {totalCount > 0 && `(${totalCount} item${totalCount > 1 ? 's' : ''})`}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </a>

        </main>
         

        <footer className={`bg-ieee-blue flex flex-col items-center gap-6 p-12 ${spaceGrotesk.className}`}>
            <Image src="https://ieeeuottawa.ca/images/ieeelogo_white.svg" alt="IEEE Logo" width={114} height={48}/>

            <div className="flex flex-wrap ">
                <a href="#" className="font-ieee-mono text-white mx-3">Home</a>
                <a href="#" className="font-ieee-mono text-white mx-3">Who We Are</a>
                <a href="#" className="font-ieee-mono text-white mx-3">Events</a>
                <a href="#" className="font-ieee-mono text-white mx-3">Office Hours</a>
                <a href="#" className="font-ieee-mono text-white mx-3">IEEE.org</a>
            </div>

            <div className="flex flex-wrap justify-between w-fit text-white">
                <ul className="flex items-center justify-center mx-4 mb-4">
                    <li className="mx-4 mb-2">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7.921l8.427 5.899c0.34 0.235 0.795 0.246 1.147 0l8.426-5.899v10.079c0 0.272-0.11 0.521-0.295 0.705s-0.433 0.295-0.705 0.295h-16c-0.272 0-0.521-0.11-0.705-0.295s-0.295-0.433-0.295-0.705zM1 5.983c0 0.010 0 0.020 0 0.030v11.987c0 0.828 0.34 1.579 0.88 2.12s1.292 0.88 2.12 0.88h16c0.828 0 1.579-0.34 2.12-0.88s0.88-1.292 0.88-2.12v-11.988c0-0.010 0-0.020 0-0.030-0.005-0.821-0.343-1.565-0.88-2.102-0.541-0.54-1.292-0.88-2.12-0.88h-16c-0.828 0-1.579 0.34-2.12 0.88-0.537 0.537-0.875 1.281-0.88 2.103zM20.894 5.554l-8.894 6.225-8.894-6.225c0.048-0.096 0.112-0.183 0.188-0.259 0.185-0.185 0.434-0.295 0.706-0.295h16c0.272 0 0.521 0.11 0.705 0.295 0.076 0.076 0.14 0.164 0.188 0.259z"></path></svg>
                    </li>
                    <li className="mx-4 mb-2">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-3.26 0-3.667 0.015-4.947 0.072-1.278 0.060-2.148 0.261-2.913 0.558-0.789 0.306-1.459 0.717-2.126 1.384s-1.079 1.336-1.384 2.126c-0.297 0.765-0.499 1.635-0.558 2.913-0.060 1.28-0.072 1.687-0.072 4.947s0.015 3.667 0.072 4.947c0.060 1.277 0.261 2.148 0.558 2.913 0.306 0.788 0.717 1.459 1.384 2.126s1.336 1.079 2.126 1.384c0.766 0.296 1.636 0.499 2.913 0.558 1.28 0.060 1.687 0.072 4.947 0.072s3.667-0.015 4.947-0.072c1.277-0.060 2.148-0.262 2.913-0.558 0.788-0.306 1.459-0.718 2.126-1.384 0.666-0.667 1.079-1.335 1.384-2.126 0.296-0.765 0.499-1.636 0.558-2.913 0.060-1.28 0.072-1.687 0.072-4.947s-0.015-3.667-0.072-4.947c-0.060-1.277-0.262-2.149-0.558-2.913-0.306-0.789-0.718-1.459-1.384-2.126-0.667-0.667-1.335-1.079-2.126-1.384-0.765-0.297-1.636-0.499-2.913-0.558-1.28-0.060-1.687-0.072-4.947-0.072zM12 2.16c3.203 0 3.585 0.016 4.85 0.071 1.17 0.055 1.805 0.249 2.227 0.415 0.562 0.217 0.96 0.477 1.382 0.896 0.419 0.42 0.679 0.819 0.896 1.381 0.164 0.422 0.36 1.057 0.413 2.227 0.057 1.266 0.070 1.646 0.070 4.85s-0.015 3.585-0.074 4.85c-0.061 1.17-0.256 1.805-0.421 2.227-0.224 0.562-0.479 0.96-0.899 1.382-0.419 0.419-0.824 0.679-1.38 0.896-0.42 0.164-1.065 0.36-2.235 0.413-1.274 0.057-1.649 0.070-4.859 0.070-3.211 0-3.586-0.015-4.859-0.074-1.171-0.061-1.816-0.256-2.236-0.421-0.569-0.224-0.96-0.479-1.379-0.899-0.421-0.419-0.69-0.824-0.9-1.38-0.165-0.42-0.359-1.065-0.42-2.235-0.045-1.26-0.061-1.649-0.061-4.844 0-3.196 0.016-3.586 0.061-4.861 0.061-1.17 0.255-1.814 0.42-2.234 0.21-0.57 0.479-0.96 0.9-1.381 0.419-0.419 0.81-0.689 1.379-0.898 0.42-0.166 1.051-0.361 2.221-0.421 1.275-0.045 1.65-0.060 4.859-0.060l0.045 0.030zM12 5.838c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM19.846 5.595c0 0.795-0.646 1.44-1.44 1.44-0.795 0-1.44-0.646-1.44-1.44s0.646-1.439 1.44-1.439c0.793-0.001 1.44 0.645 1.44 1.439z"></path></svg>
                    </li>
                    <li className="mx-4 mb-2">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.514c-1.491 0-1.956 0.925-1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385c5.738-0.901 10.126-5.866 10.126-11.855z"></path></svg>
                    </li>
                    <li className="mx-4 mb-2">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186c-0.283-1.041-1.083-1.846-2.101-2.131l-0.021-0.005c-1.871-0.505-9.376-0.505-9.376-0.505s-7.505 0-9.377 0.505c-1.038 0.29-1.838 1.095-2.116 2.115l-0.005 0.021c-0.502 1.884-0.502 5.814-0.502 5.814s0 3.93 0.502 5.814c0.283 1.041 1.083 1.846 2.101 2.131l0.021 0.005c1.871 0.505 9.376 0.505 9.376 0.505s7.505 0 9.377-0.505c1.039-0.29 1.839-1.095 2.117-2.115l0.005-0.021c0.501-1.884 0.501-5.814 0.501-5.814s0-3.93-0.502-5.814zM9.545 15.568v-7.136l6.273 3.568-6.273 3.568z"></path></svg>
                    </li>
                    <li className="mx-4 mb-2">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57c-0.822 0.372-1.776 0.645-2.776 0.77l-0.049 0.005c1.016-0.618 1.78-1.564 2.153-2.688l0.010-0.035c-0.951 0.555-2.005 0.959-3.127 1.184-0.9-0.961-2.177-1.56-3.594-1.56-2.717 0-4.92 2.203-4.92 4.92 0 0.398 0.047 0.785 0.136 1.155l-0.007-0.034c-4.090-0.193-7.713-2.158-10.14-5.126-0.419 0.7-0.666 1.544-0.666 2.445 0 0.010 0 0.021 0 0.031v-0.002c0 1.71 0.87 3.213 2.188 4.096-0.822-0.027-1.586-0.252-2.252-0.629l0.024 0.013v0.060c0 0.001 0 0.001 0 0.002 0 2.373 1.679 4.354 3.914 4.82l0.032 0.006c-0.388 0.108-0.833 0.17-1.293 0.17-0.325 0-0.643-0.031-0.95-0.090l0.031 0.005c0.651 1.971 2.458 3.375 4.599 3.417l0.005 0c-1.66 1.312-3.783 2.105-6.092 2.105-0.004 0-0.007 0-0.011 0h0.001c-0.39 0-0.779-0.023-1.17-0.067 2.134 1.385 4.744 2.209 7.547 2.209 0.004 0 0.007 0 0.011 0h-0.001c9.053 0 13.998-7.496 13.998-13.985 0-0.21 0-0.42-0.015-0.63 0.97-0.703 1.786-1.548 2.438-2.513l0.022-0.035z"></path></svg>
                    </li>
                </ul>
                <div className="flex flex-wrap justify-center mx-4 mb-4">
                    <p className="mx-4 mb-2">
                        <a href="tel:613-562-5800&nbsp;ext. 6196" aria-label="Our phone">613-562-5800&nbsp;ext. 6196</a>
                    </p>
                    <p className="mx-4 mb-2">
                        <a href="https://www.google.com/maps/search/800 King Edward Avenue, STE 4026" aria-label="Our address" target="_blank" rel="noopener noreferrer">
                            800 King Edward Avenue, STE 4026
                        </a>
                    </p>
                </div>
            </div>

            <p className="border-t-2 border-white text-white w-[90vw] flex flex-col-reverse items-center pt-8 lg:flex-row lg:items-start lg:justify-center">
                © 2025 IEEE uOttawa Student Branch
            </p>
        </footer>
    </>
}
