import Image from "next/legacy/image";
import { FollowerPointerCard } from "../../ui/following-pointer";

export function Newscard() {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard title={<TitleComponent title={blogContent.source} logo={blogContent.logo} />}>
        <div className="relative overflow-hidden h-full rounded-xl transition duration-200 group bg-black text-white hover:shadow-lg border border-gray-800">
          {/* Image Section */}
          <div className="relative w-full h-40 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="p-4">
            <h2 className="text-lg font-bold">{blogContent.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{blogContent.description}</p>

            {/* Footer */}
            <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-xs text-gray-500">{blogContent.date}</span>
              <div className="flex items-center gap-1 text-sm text-red-500 cursor-pointer hover:text-red-400">
                Learn more <span className="ml-1">→</span>
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

// Updated Blog Content to match the image
const blogContent = {
  title: "Futurense's Strategic Partnerships Are Shaping the Future of Study Abroad",
  description: "Lokmat Times",
  date: "28th March, 2023",
  image: "/assets/HeroImages/hero1.png",
  source: "Lokmat Times",
  logo: "/assets/logos/lokmat.png",
};

// Title Component with Logo instead of Avatar
const TitleComponent = ({ title, logo }: { title: string; logo: string }) => (
  <div className="flex space-x-2 items-center">
    <Image src={logo} height={40} width={80} alt="news logo" />
    <p className="text-sm font-semibold">{title}</p>
  </div>
);
