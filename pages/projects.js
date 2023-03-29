import InfoCard from '../components/InfoCard';

const projects = [
    {
        title: 'Fortuna Lookbook',
        description: 'Created a Web Application for Fortuna funding to connect entrepreneurs with female-focused funding opportunities',
        Url: 'https://fortunalookbook.vercel.app/',
        imageAlt: 'Github',
        techstack: 'Next.js, Tailwind, Formspree'

      },
      {
        title: 'Toys to Friends',
        description: "Developed a web application for a toy exchange program that aims to reduce plastic waste in the oceans while providing new toys for childre",
        Url: 'https://github.com/saanish3/Toys-To-Friends',
        imageAlt: 'Github',
        techstack: 'React, Tailwind, Firebase'
      },
      {
        title: 'Conducto',
        description: 'Created an IOS app to connect users to car maintenance providers in their areas',
        Url: '/images/crowdfunding.jpg',
        imageAlt: 'Github',
        techstack: 'SwiftUI & Firebase'
      },
      {
        title: 'Globalzen Studios',
        description: 'Roadmapped may mental health month event and created the website for the event.',
        Url: 'https://globalzenstudios.com/',
        imageAlt: 'Github',
        techstack: 'Next.js, Tailwind, Firebase, Formspree'
      }
      ,
      {
        title: 'InspoBoard',
        description: 'Developed web application that generates user-friendly, customizable display of message cards.',
        Url: 'https://github.com/saanish3/front-end-inspiration-board',
        imageAlt: 'Github',
        techstack: 'Javascript & Python'
      },
      {
        title: 'Solar System API',
        description: ' Created a Solar System API to display understanding of RESTful API and SQL.',
        Url: 'https://github.com/saanish3/Solar---Sytem-API',
        imageAlt: 'Github',
        techstack: 'Python & SQL'
      }
    ];

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-extrabold mt-6  text-gray-900">Projects</h1>
      <p className="mt-4 max-w-2xl text-center text-xl text-gray-500 lg:mx-auto">
Some cool things I have worked on!      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((type) => (
          <InfoCard key={type.title} title={type.title} techstack={type.techstack} description={type.description} Url={type.Url} imageAlt={type.imageAlt} />
        ))}
      </div>
    </div>
  );
};

export default Resources;