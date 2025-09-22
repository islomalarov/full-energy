import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Toshkentdagi Katta Turar Joy Majmuasi',
      description:
        "Toshkent shahrida joylashgan yirik turar joy majmuasiga 500 kVt quvvatga ega quyosh panellari tizimi o'rnatildi. Bu loyiha majmuaning energiya ehtiyojlarining katta qismini qoplaydi.",
      image: '/images/project1.jpg', // Placeholder image
    },
    {
      title: 'Samarqanddagi Sanoat Korxonasi',
      description:
        'Samarqand viloyatidagi yirik sanoat korxonasi uchun 1 MVt quvvatga ega quyosh elektr stansiyasi qurildi. Loyiha korxonaning ishlab chiqarish xarajatlarini sezilarli darajada kamaytirdi.',
      image: '/images/project2.jpg', // Placeholder image
    },
    {
      title: 'Xususiy Uylar Uchun Yechimlar',
      description:
        "O'zbekiston bo'ylab yuzlab xususiy uylarga turli quvvatdagi quyosh panellari tizimlari o'rnatildi. Har bir loyiha mijozning individual ehtiyojlariga moslashtirilgan.",
      image: '/images/project3.jpg', // Placeholder image
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Bizning Loyihalarimiz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
