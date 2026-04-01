import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
             <span className="text-purple-400"> 👤 Profile Summary <br></br> </span><span className="text-sm"> I am Experienced Automobile Service Manager with strong expertise in workshop operations, customer satisfaction, and team management. Skilled in diagnosing vehicle issues, optimizing service processes, and ensuring high-quality service delivery</span>
             <br></br><span className="text-purple-400"> 🎯 Career Objective <br></br> </span><span className="text-sm">To leverage my technical knowledge and leadership skills to improve service efficiency, enhance customer experience, and contribute to the growth of a reputed automobile organization.</span>
          </p>
        </div>
        <Image 
          src="/assets/illustration3.png"
          alt="Obtain Skills"
          width={900}
          height={500}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}

