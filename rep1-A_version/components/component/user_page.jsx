/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/atKuJMufHWT
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function User_Page() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">Your Car Rental Account</h1>
          </div>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="text-primary-foreground">Full Name</Label>
                  <div>John Doe</div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-primary-foreground">Date of Birth</Label>
                  <div>1985-06-15</div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-primary-foreground">Driver&apos;s License:</Label>
                  <div>ABC123456</div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-primary-foreground">Nationality</Label>
                  <div>United States</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-muted text-secondary-foreground">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="text-secondary-foreground">Email</Label>
                  <div>john.doe@example.com</div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-secondary-foreground">Phone</Label>
                  <div>+1 (555) 123-4567</div>
                </div>
                <div className="grid gap-2">
                  <Label className="text-secondary-foreground">Username</Label>
                  <div>jdoe</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-4xl mx-auto mt-8 flex justify-center">
          <Button variant="outline" className="mr-4">
            View Previous Rentals
          </Button>
        </div>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Car Image"
                width={100}
                height={100}
                className="rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Toyota Camry</h3>
                <p className="text-muted-foreground">Rented from 2023-04-01 to 2023-04-15</p>
                <p className="text-lg font-semibold">$500</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Car Image"
                width={100}
                height={100}
                className="rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Honda Civic</h3>
                <p className="text-muted-foreground">Rented from 2023-06-01 to 2023-06-15</p>
                <p className="text-lg font-semibold">$450</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}
