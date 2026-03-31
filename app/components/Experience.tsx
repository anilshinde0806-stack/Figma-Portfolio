import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Parth TATA ,Godhara - Body Shop Manager (May-24 to Jan-26)",
    description: "An Automobile Body Shop Manager oversees daily repair operations, supervises technicians, manages inventory, and handles customer/insurance relations to ensure high-quality repairs, efficiency, and profitability. They focus on achieving production targets, maintaining safety standards, and fostering a productive team environment.   .",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Stellar  TATA ,Vapi - Service  Manager (Mar-23 to Apr-24)",
    description: "An Automobile Service Manager oversees daily workshop operations, managing technicians and service advisors to ensure high-quality repairs, profitability, and customer satisfaction. Key duties include scheduling work, managing inventory/parts, implementing service procedures, handling customer inquiries, and ensuring compliance with safety regulations.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Volkswagen ,Vapi Service Manger (Apr-17 to Mar-23)",
    description: "An Automobile Service Manager oversees daily workshop operations, managing technicians and service advisors to ensure high-quality repairs, profitability, and customer satisfaction. Key duties include scheduling work, managing inventory/parts, implementing service procedures, handling customer inquiries, and ensuring compliance with safety regulations.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Aakash Wheela Pvt Ltd , Dhule - Service Manager",
    description: "An Automobile Service Manager oversees daily workshop operations, managing technicians and service advisors to ensure high-quality repairs, profitability, and customer satisfaction. Key duties include scheduling work, managing inventory/parts, implementing service procedures, handling customer inquiries, and ensuring compliance with safety regulations.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="Experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

