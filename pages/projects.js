import InfoCard from '../components/InfoCard';

const fundingTypes = [
    {
        title: 'Fortua Lookbook',
        description: 'Created a Web Application for Fortuna funding to connect entrepreneurs with female-focused funding opportunities',
        Url: '/images/venture-capital.jpg',
        imageAlt: 'Fortua Lookbook Website',
      },
      {
        title: 'Toys to Friends',
        description: "Developed a web application for a toy exchange program that aims to reduce plastic waste in the oceans while providing new toys for childre",
        Url: '/images/angel-investing.jpg',
        imageAlt: 'Gitbub',
      },
      {
        title: 'Conducto',
        description: 'Created an IOS app to connect users to car maintenance providers in their areas',
        Url: '/images/crowdfunding.jpg',
        imageAlt: 'Github',
      },
      {
        title: 'Globalzens Studios',
        description: 'Roadmapped may mental health month event and created the website for the event.',
        Url: '/images/debt-financing.jpg',
        imageAlt: 'Globalzens Studios Website',
      }
    ];

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-extrabold mt-6  text-gray-900">Software and Project Management Projects</h1>
      <p className="mt-4 max-w-2xl text-center text-xl text-gray-500 lg:mx-auto">
Click the image to see some of the projects I have worked on!      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {fundingTypes.map((type) => (
          <InfoCard key={type.title} title={type.title} description={type.description} Url={type.Url} imageAlt={type.imageAlt} />
        ))}
      </div>
    </div>
  );
};

export default Resources;