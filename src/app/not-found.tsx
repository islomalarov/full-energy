import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-background text-foreground text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold text-primary">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mt-4">Sahifa Topilmadi</h2>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-md">
        Kechirasiz, siz qidirayotgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.
      </p>
      <Link href="/" passHref>
        <Button className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-xl font-semibold hover:opacity-90 transition-opacity duration-300">
          Bosh Sahifaga Qaytish
        </Button>
      </Link>
    </div>
  );
}
