// types.ts
export interface Testimonial {
    rating: number;
    text: string;
    name: string;
    position: string;
    avatar: string;
  }
  
  export interface Logo {
    src: string;
    alt: string;
  }
  
  // data.ts
  // import { Logo, Testimonial } from './types';
  
  export const testimonialData: Testimonial[] = [
    {
      rating: 4,
      text: "I really like the hire, train, deploy model presented by Futurense as it always ensures you get access to the best talent, because many times, companies are in a rush to hire employees to save time and resources but end up recruiting underqualified talent and that's where I feel Futurense saves the day.",
      name: "Supria Dhanda",
      position: "Managing Partner, WYSER",
      avatar: "/assets/news1.png"
    },
    {
      rating: 5,
      text: "The Futurense team is associated with us in our platform related initiatives assisting in driving the process and timelines through precision and expertise. The organizational value of Futurense is aligned with our ambition in the next three years towards sustainable success.",
      name: "Pankaj Rai",
      position: "Group Chief Data and Analytics Officer, Aditya Birla Group",
      avatar: "/learnersSayImages/abhijitmandal.png"
    },
    {
      rating: 5,
      text: "Your expertise in identifying and attracting top candidates results in the exceptional individuals who have joined our team. Each hire has showcased a remarkable combination of skills, experience, and cultural fit that aligns well with our organizational values. Their contributions have already proven invaluable, and we anticipate even greater impact as they settle into their roles.",
      name: "Akshay Kumar",
      position: "Research & Analytics, Gallagher Services",
      avatar: "/learnersSayImages/abhijitmandal.png"
    },
    {
      rating: 4,
      text: "The impact of your efforts is already visible across the team and organization. The new hires have quickly integrated into their respective roles, contributing fresh perspectives, innovative ideas, and specialized expertise that has sparked life into and invigorated our collective drive for success. Thank you for your unwavering commitment to professionalism, and notable accomplishments. Your team has made a tangible difference, and it's our privilege to have you as a partner.",
      name: "Nandan Nandi",
      position: "Vice President, AI Products & Business Analytics, Rakuten India",
      avatar: "/learnersSayImages/abhijitmandal.png"
    }
  ];
  
  export const logoData: Logo[] = [
    {
      src: "/assets/companyLogo/accenture.png",
      alt: "Bain & Company"
    },
    {
      src: "/assets/companyLogo/citibank.png",
      alt: "Levi's"
    },
    {
      src: "/assets/companyLogo/accenture.png",
      alt: "Cisco"
    },
    {
      src: "/assets/companyLogo/citibank.png",
      alt: "Bread Financial"
    },
    {
      src: "/assets/companyLogo/accenture.png",
      alt: "Oracle"
    },
    {
      src: "/assets/companyLogo/citibank.png",
      alt: "Ernst & Young"
    }
  ];