export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Biz Haqimizda
      </h1>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-6">
        <p>
          FullEnergy O'zbekistonda quyosh energiyasi yechimlarini taqdim etuvchi yetakchi kompaniya
          hisoblanadi. Bizning maqsadimiz – har bir uy va biznesni toza, qayta tiklanadigan energiya
          bilan ta'minlash orqali kelajakni yoritish.
        </p>
        <p>
          Biz yuqori sifatli quyosh panellari tizimlarini loyihalash, o'rnatish va texnik xizmat
          ko'rsatish bo'yicha keng qamrovli xizmatlarni taklif etamiz. Tajribali mutaxassislarimiz
          jamoasi har bir mijozning ehtiyojlarini inobatga olgan holda moslashtirilgan yechimlarni
          taqdim etadi.
        </p>
        <p>
          FullEnergy bilan siz nafaqat energiya xarajatlaringizni kamaytirasiz, balki atrof-muhitni
          himoya qilishga ham o'z hissangizni qo'shasiz. Biz barqaror kelajakni yaratishga ishonamiz
          va bu yo'lda sizning ishonchli hamkoringiz bo'lishdan faxrlanamiz.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Bizning Qadriyatlarimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <div className="text-primary text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-semibold">Sifat</h3>
            <p className="mt-2 text-muted-foreground">
              Har bir loyihada eng yuqori sifat standartlariga rioya qilamiz.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <div className="text-primary text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-semibold">Mijozga Yo'naltirilganlik</h3>
            <p className="mt-2 text-muted-foreground">
              Mijozlarimizning ehtiyojlari va mamnuniyati biz uchun ustuvor.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <div className="text-primary text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold">Innovatsiya</h3>
            <p className="mt-2 text-muted-foreground">
              Doimiy ravishda yangi texnologiyalar va yechimlarni izlaymiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
