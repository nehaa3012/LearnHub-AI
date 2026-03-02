import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnHub - AI Powered Learning Platform",
  description: "Experience the future of learning with our AI-powered LMS featuring intelligent course creation, personalized paths, and gamified progress tracking.",
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
        <h1>LearnHub</h1>
        <SignedIn>
        <UserButton />
        </SignedIn>
        <SignedOut>
        <SignInButton />
        </SignedOut>
        </header>    
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
