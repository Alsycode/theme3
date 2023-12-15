import { useEffect } from "react";
import PricingT3 from "../component/pricingTable-3";
import AboutUs3 from "../element/aboutUs-3";
import GetInTouch3 from "../element/get-in-touch";
import Newsletter3 from "../element/newsletter-3";
import Features3 from "../element/our-features-3";
import Projects3 from "../element/Projects-3";
import Service3 from "../element/service-3";
import Slider3 from "../element/slider-3";
import Team3 from "../element/team-3";
import Testimonial3 from "../element/testimonial-3";
import Blog3 from "./../element/blog-3";
import Clients3 from "./../element/clients-3";
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";
import servicesDataProvider from "../component/context.js"
import { FeaturesDataProvider } from "../component/context.js";
function Index3({serviceData,teamData}) {
 console.log("team",teamData)
  return (
    <>
      <Header3 />
      <div className="page-content bg-white" id="top">
        <Slider3 />
        <servicesDataProvider>
        <Service3 serviceData={serviceData}/>
        </servicesDataProvider>
       
        <AboutUs3 />
        <FeaturesDataProvider>
        <Features3  serviceData={serviceData}/>
        </FeaturesDataProvider>
        
        <Projects3 />
        <Newsletter3 />
        <Team3 />
        <PricingT3 />
        <Testimonial3 />
        <Blog3 />
        <Clients3 />
        <GetInTouch3 />
        <Footer3 />
      </div>
    </>
  );
}

export default Index3;
export async function getServerSideProps() {
  const apiUrlService = 'https://aecstrapi-askn4.ondigitalocean.app/api/service3s?populate[0]=feature.featureImage&populate[1]=feature.feature&populate[2]=serviceitems';
  const apiUrlTeam = 'https://aecstrapi-askn4.ondigitalocean.app/api/team3s?populate=*';
  const bearerToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  try {
    const [serviceResponse, teamResponse] = await Promise.all([
      fetch(apiUrlService, options),
      fetch(apiUrlTeam, options),
    ]);

    if (!serviceResponse.ok) {
      throw new Error(`HTTP error for service data! Status: ${serviceResponse.status}`);
    }
    if (!teamResponse.ok) {
      throw new Error(`HTTP error for team data! Status: ${teamResponse.status}`);
    }

    const serviceData = await serviceResponse.json();
    const teamData = await teamResponse.json();

    return {
      props: {
        serviceData,
        teamData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        serviceData: null,
        teamData: null,
      },
    };
  }
}
