import { createContext, useState, useContext } from 'react';

const ServicesDataContext = createContext();

export function ServicesDataProvider({ children }) {
  const [servicesData, setServicesData] = useState([]);

  return (
    <ServicesDataContext.Provider value={{ servicesData, setServicesData }}>
      {children}
    </ServicesDataContext.Provider>
  );
}

export function useServicesData() {
  return useContext(ServicesDataContext);
}


// -----------------------------------------------

const FeaturesDataContext = createContext();

export function FeaturesDataProvider({ children }) {
  const [featuresData, setFeaturesData] = useState([]);

  return (
    <FeaturesDataContext.Provider value={{ featuresData, setFeaturesData }}>
      {children}
    </FeaturesDataContext.Provider>
  );
}

export function useFeaturesData() {
  return useContext(FeaturesDataContext);
}

// --------------------------------------------------