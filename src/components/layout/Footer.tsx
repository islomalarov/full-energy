'use client';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} FullEnergy. Barcha huquqlar himoyalangan.</p>
        {/* Social media links or quick navigation can go here */}
        {/* Example of a Link if needed: <Link href="/privacy-policy" className="text-primary hover:underline">Maxfiylik Siyosati</Link> */}
      </div>
    </footer>
  );
}
