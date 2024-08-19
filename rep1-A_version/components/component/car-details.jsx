"use client";

import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
      />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function VolumeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </svg>
  );
}

export function CarDetails() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="md:flex gap-4 sm:gap-6 bg-gray-800 text-white p-4 border-black">
        <div className="flex flex-col items-start gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CarIcon className="w-6 h-6" />
            <span className="text-lg font-semibold hover:text-gray-300 transition-colors">
              Renta
            </span>
          </Link>

          {/* Menu button, shown on small screens, placed under the logo */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Navbar items, hidden on small screens */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-gray-300 transition-colors"
            prefetch={false}
          >
            Search
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-gray-300 transition-colors"
            prefetch={false}
          >
            Ratings & Reviews
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-gray-300 transition-colors"
            prefetch={false}
          >
            My Bookings
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-gray-300 px-3 py-2 rounded-md transition-colors"
            prefetch={false}
          >
            Accessibility
          </Link>
        </div>
      </nav>

      {/* Side Menu, slides in from the left */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out`}
  style={{ opacity: 1, backgroundColor: '#ffffff', zIndex: 50 }}
>
  <div className="flex justify-between items-center p-4">
    <div className="text-2xl font-bold">
      <Link href="/">Renta Car Services</Link>
    </div>
    <div
      className="cursor-pointer"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
  <nav className="mt-8">
    <ul>
      <li className="p-4 text-xl font-semibold text-orange-600">
        <Link href="/">Search</Link>
      </li>
      <li className="p-4 text-xl font-semibold">
        <Link href="/">Ratings & Reviews</Link>
      </li>
      <li className="p-4 text-xl font-semibold">
        <Link href="/">My Bookings</Link>
      </li>
      <li className="p-4 text-xl font-semibold">
        <Link href="/">Accessibility</Link>
      </li>
    </ul>
  </nav>
</div>
      <Separator />

      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <main className="container max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                2023 Acme Roadster
              </h1>
              <p className="text-muted-foreground text-lg">
                A thrilling sports car with exceptional performance.
              </p>
              <div className="grid gap-4 mt-8">
                <img
                  src="/placeholder.svg"
                  alt="Exterior view of the Acme Roadster showing the sleek, aerodynamic design and bold red paint color."
                  width={800}
                  height={450}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "800/450", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  alt="Interior view of the Acme Roadster showing the luxurious leather seats, digital instrument cluster, and premium audio system."
                  width={800}
                  height={450}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "800/450", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Specifications</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Engine:</span> 3.0L Turbo V6
                  </li>
                  <li>
                    <span className="font-medium">Transmission:</span> 7-speed
                    automatic
                  </li>
                  <li>
                  <span className="font-medium">Transmission:</span> 7-speed
                    automatic
                  </li>
                  <li>
                    <span className="font-medium">Horsepower:</span> 400 hp
                  </li>
                  <li>
                    <span className="font-medium">Torque:</span> 350 lb-ft
                  </li>
                  <li>
                    <span className="font-medium">0-60 mph:</span> 3.9 seconds
                  </li>
                  <li>
                    <span className="font-medium">Top Speed:</span> 180 mph
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Leather seats with heating and cooling</li>
                  <li>Premium audio system with 12 speakers</li>
                  <li>Adaptive cruise control</li>
                  <li>Lane-keeping assist</li>
                  <li>Panoramic sunroof</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Pricing</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Starting at <span className="text-foreground">$70,000</span>
                </p>
              </div>

              <div className="mt-8">
              <button className="px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors border">
                Book Now
              </button>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Virtual Tour</h2>
              <p className="mt-2 text-muted-foreground">
                Take a virtual tour of the Acme Roadster to explore the
                exterior, interior, and features in more detail.
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors border">
                  <PlayIcon className="mr-2" />Start Tour
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3D Model</h2>
              <p className="mt-2 text-muted-foreground">
                View the Acme Roadster in 3D to examine every angle and detail.
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors border">
                  <EyeIcon className="mr-2" />
                  View 3D Model
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Audio Description</h2>
              <p className="mt-2 text-muted-foreground">
                Listen to an audio description of the Acme Roadster, covering
                all key aspects of the car's design, features, and performance.
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors border">
                  <VolumeIcon className="mr-2" />
                  Play Audio
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Separator />

      <footer className="bg-gray-900 text-white py-6 md:py-12">
  <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm px-4 md:px-6">
    <div className="grid gap-1">
      <h3 className="font-semibold">Company</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        About Us
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Our Team
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Careers
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Products</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Cars
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Vans
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Accessibility Vehicles
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Resources</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        FAQ
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Ratings and Reviews
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Support
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Legal</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Privacy Policy
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Terms of Service
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Cookie Policy
      </Link>
    </div>
    <div className="grid gap-1">
      <h3 className="font-semibold">Contact</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Email Us
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Find a Location
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-400 rounded-md transition-colors">
        Call Us
      </Link>
    </div>
  </div>
  <div className="text-center text-muted-foreground mt-6">
    &copy; 2024 Renta Car Services. All rights reserved.
  </div>
</footer>
    </>
  );
}

export default CarDetails;
