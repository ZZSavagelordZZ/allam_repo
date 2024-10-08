"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator"; // Assuming this is imported correctly from your components

export function PromotionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="md:flex gap-4 sm:gap-6 bg-gray-800 text-white p-4 border-black">
        <div className="flex flex-col items-start gap-2">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-primary rounded-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Get 20% Off Your Next Rental
              </h2>
              <p className="text-primary-foreground mb-6">
                New members can save big on their next car rental. Offer ends
                soon, so don't miss out!
              </p>
              <Button size="lg" variant="secondary">
                Redeem Offer
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg"
                width={500}
                height={300}
                alt="Featured Promotion"
                className="object-cover"
                style={{ aspectRatio: "500/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Current Promotions</h2>
            <div className="flex items-center gap-4">
              <Label htmlFor="filter">Filter by:</Label>
              <Select id="filter" defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Promotions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Promotions</SelectItem>
                  <SelectItem value="discount">Discount Offers</SelectItem>
                  <SelectItem value="upgrade">Upgrade Offers</SelectItem>
                  <SelectItem value="free-rental">Free Rental Offers</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="sort">Sort by:</Label>
              <Select id="sort" defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="expiring-soon">Expiring Soon</SelectItem>
                  <SelectItem value="discount-amount">
                    Discount Amount
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Repeat for each card */}
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={200}
                alt="Promotion Image"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/200", objectFit: "cover" }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  20% Off Compact Car Rentals
                </h3>
                <p className="text-muted-foreground mb-4">
                  Rent a compact car and save 20% on your next booking.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    <span className="text-sm text-muted-foreground">
                      Expires: 2024-09-30
                    </span>
                  </div>
                  <Badge variant="secondary">Discount</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Offer valid for new members only. Minimum rental period of 3
                    days. See terms and conditions for details.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={200}
              alt="Promotion Image"
              className="rounded-t-lg object-cover"
              style={{ aspectRatio: "400/200", objectFit: "cover" }} />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Complimentary Upgrade to Midsize</h3>
              <p className="text-muted-foreground mb-4">Rent a midsize car at the price of a compact.</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">Expires: 2024-11-15</span>
                </div>
                <Badge variant="secondary">Upgrade</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Offer valid for members with 6 or more rentals in the past year. Blackout dates may apply.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={200}
              alt="Promotion Image"
              className="rounded-t-lg object-cover"
              style={{ aspectRatio: "400/200", objectFit: "cover" }} />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Free Weekend Rental for New Members</h3>
              <p className="text-muted-foreground mb-4">
                Enjoy a free weekend rental when you sign up for our rewards program.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">Expires: 2024-12-31</span>
                </div>
                <Badge variant="secondary">Free Rental</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  Offer valid for new members only. Minimum rental period of 2 days. See terms and conditions for
                  details.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={200}
              alt="Promotion Image"
              className="rounded-t-lg object-cover"
              style={{ aspectRatio: "400/200", objectFit: "cover" }} />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">10% Off SUV Rentals for Members</h3>
              <p className="text-muted-foreground mb-4">Rent an SUV and save 10% on your next booking.</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">Expires: 2025-03-31</span>
                </div>
                <Badge variant="secondary">Discount</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Offer valid for members with 3 or more rentals in the past year. Blackout dates may apply.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={200}
              alt="Promotion Image"
              className="rounded-t-lg object-cover"
              style={{ aspectRatio: "400/200", objectFit: "cover" }} />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Free Rental Day for Loyalty Members</h3>
              <p className="text-muted-foreground mb-4">Earn a free rental day for every 5 rentals.</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">Expires: 2025-06-30</span>
                </div>
                <Badge variant="secondary">Free Rental</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  Offer valid for members with 10 or more rentals in the past year. See terms and conditions for
                  details.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              width={400}
              height={200}
              alt="Promotion Image"
              className="rounded-t-lg object-cover"
              style={{ aspectRatio: "400/200", objectFit: "cover" }} />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">15% Off Luxury Car Rentals</h3>
              <p className="text-muted-foreground mb-4">Treat yourself to a luxury car rental and save 15%.</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <CalendarDaysIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">Expires: 2025-09-30</span>
                </div>
                <Badge variant="secondary">Discount</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Offer valid for members with 15 or more rentals in the past year. Blackout dates may apply.</p>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
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

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="8" width="18" height="14" rx="2" ry="2" />
      <path d="M16 14h-4v4" />
      <path d="M10 10h4v4" />
    </svg>
  );
}

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
