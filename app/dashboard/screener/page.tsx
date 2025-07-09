'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Screener() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
      <Link href='/'>
        <Button className={`px-9 py-4 text-large transition-all duration-300 hover:scale-110 `}>
          Coming soon
        </Button>
      </Link>
    </div>
  )
}
