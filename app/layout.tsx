import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SalaryCheck — Validate Job Posting Salaries Against Market Data',
  description: 'Scan job postings to flag unrealistic salary ranges and get competitive alternatives based on location and skills. Built for HR teams and recruiters.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0cb076df-9bb6-436a-a7d0-44900253d4df"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
