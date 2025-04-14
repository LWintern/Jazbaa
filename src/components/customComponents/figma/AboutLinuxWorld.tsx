// components/AboutLinuxWorld.tsx
import { FC } from 'react';
import Image from 'next/image';

const AboutLinuxWorld: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-12">About Linux World</h1>

      {/* Image Section */}
      <div className="w-full h-64 bg-gray-200 mb-16">
        {/* Replace with your actual image */}
        <div className="w-full h-full relative">
          <Image
            src="/path-to-your-image.jpg"
            alt="Linux World"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Vision Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Our vision</h2>
          <p className="text-gray-700 mb-6">
            Transforming engineers into tech creators by fostering an entrepreneurial mindset 
            and technical skills for global innovation.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-red-600 mb-2 text-center">Why? Linux World Exists</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">IT Training & Consulting</h4>
                  <p className="text-gray-600">
                    - Provides courses in DevOps, Cloud Computing, Big Data, AI, and Linux for students and professionals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Internships & Innovation</h4>
                  <p className="text-gray-600">
                    - Offers hands-on experience through our startup showcases to foster innovation among engineering students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Our mission</h2>
          <p className="text-gray-700 mb-6">
            Transforming engineers into tech creators by fostering an entrepreneurial mindset 
            and technical skills for global innovation.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-red-600 mb-2 text-center">Why? Linux World Exists</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">IT Training & Consulting</h4>
                  <p className="text-gray-600">
                    - Provides courses in DevOps, Cloud Computing, Big Data, AI, and Linux for students and professionals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Internships & Innovation</h4>
                  <p className="text-gray-600">
                    - Offers hands-on experience through our startup showcases to foster innovation among engineering students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-end mt-12">
        <Image
          src="/linux-world-logo.png" // Replace with your actual logo path
          alt="Linux World Logo"
          width={150}
          height={60}
        />
      </div>
    </div>
  );
};

export default AboutLinuxWorld;