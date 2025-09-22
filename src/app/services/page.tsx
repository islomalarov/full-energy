export default function ServicesPage() {
  const services = [
    {
      title: "Quyosh Panellarini O'rnatish",
      description:
        "Uy va biznes uchun yuqori samarali quyosh panellarini professional o'rnatish xizmatini taklif etamiz. Bizning mutaxassislarimiz sizning ehtiyojlaringizga mos keladigan eng yaxshi yechimlarni topishadi va tizimni tez va sifatli o'rnatishadi.",
      icon: '☀️',
    },
    {
      title: "Texnik Xizmat Ko'rsatish",
      description:
        "Quyosh panellari tizimlarining uzoq muddatli va uzluksiz ishlashini ta'minlash uchun muntazam texnik xizmat ko'rsatamiz. Bu xizmat panellarni tozalash, tizimni tekshirish va har qanday nosozliklarni bartaraf etishni o'z ichiga oladi.",
      icon: '🛠️',
    },
    {
      title: 'Energiya Audit va Konsultatsiya',
      description:
        'Energiya ehtiyojlaringizni baholash va quyosh energiyasidan maksimal foyda olish uchun eng yaxshi yechimlarni taklif qilish. Bizning ekspertlarimiz sizga moslashtirilgan konsultatsiya berishadi.',
      icon: '💡',
    },
    {
      title: 'Moliyalashtirish Yechimlari',
      description:
        "Quyosh panellarini o'rnatish xarajatlarini qoplash uchun qulay moliyalashtirish imkoniyatlarini taqdim etamiz. Bizning hamkor banklarimiz orqali sizga mos kredit yoki lizing shartlarini topishga yordam beramiz.",
      icon: '💰',
    },
    {
      title: "Kafolat va Qo'llab-Quvvatlash",
      description:
        "Barcha o'rnatilgan tizimlarimizga uzoq muddatli kafolat beramiz va mijozlarimizga doimiy texnik qo'llab-quvvatlash xizmatini ko'rsatamiz. Sizning tinchligingiz biz uchun muhim.",
      icon: '🛡️',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Bizning Xizmatlarimiz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <div className="text-primary text-6xl mb-4 text-center">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-center mb-2">{service.title}</h2>
            <p className="text-muted-foreground text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
