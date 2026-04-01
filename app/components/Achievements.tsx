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
    title: "Gold Winner in VW ASPIRe  ( AfterSales Program to improvements & Re cognation ) in 2018",
    description: "The search results discuss Volkswagen's goals and strategies (such as excited customers and competitive profitability in their 2017/2019/2023 reports) ",
    icon: "/cards/card-1.png",
  },
{
    id: 2,
    title: "Star Performer of The Month Mar -2026 ( TATA Shreeji , Surat)",
    description: "This is fabulous achievement for me that the new joining organation (Shreeji Automart Pvt Ltd). Highest Labour contributions ",
    icon: "/cards/card-2.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="Achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Special Achievements in Automobile Industries
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
                href="https://annualreport2023.volkswagen-group.com/group-management-report/goals-and-strategies.html"
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

