import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Biz Bilan Bog'lanish
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
          <h2 className="text-3xl font-semibold mb-4">Aloqa Ma'lumotlari</h2>
          <p className="text-lg mb-2">
            <strong>Telefon:</strong> +998 90 123 45 67
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> info@fullenergy.uz
          </p>
          <p className="text-lg mb-2">
            <strong>Manzil:</strong> Toshkent sh., Amir Temur ko'chasi, 1-uy
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Ish Vaqti:</h3>
            <p>Dushanba-Juma: 9:00 - 18:00</p>
            <p>Shanba: 10:00 - 16:00</p>
            <p>Yakshanba: Dam olish kuni</p>
          </div>
        </div>

        {/* Contact Form (Placeholder) */}
        <div className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
          <h2 className="text-3xl font-semibold mb-4">Bizga Xabar Yuboring</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-lg font-medium text-foreground">
                Ismingiz
              </Label>
              <Input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                placeholder="Ismingizni kiriting"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-lg font-medium text-foreground">
                Emailingiz
              </Label>
              <Input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                placeholder="Emailingizni kiriting"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-lg font-medium text-foreground">
                Xabar
              </Label>
              <Textarea
                id="message"
                rows={5}
                className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                placeholder="Xabaringizni yozing"></Textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md text-xl font-semibold hover:opacity-90 transition-opacity duration-300">
              Yuborish
            </Button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-16 p-6 rounded-lg shadow-lg bg-card text-card-foreground">
        <h2 className="text-3xl font-semibold text-center mb-4">Bizning Manzilimiz</h2>
        <div className="w-full h-96 bg-muted flex items-center justify-center rounded-md text-muted-foreground">
          <p>Xarita joylashuvi (Google Maps yoki boshqa xarita integratsiyasi)</p>
        </div>
      </div>
    </div>
  );
}
