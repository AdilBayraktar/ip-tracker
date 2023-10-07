import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import AnimatedLayout from "../Layouts/AnimatedLayout";
import Loader from "../components/Loader";

const DetailsScreen = () => {
  const { ip } = useParams();
  const [details, setDetails] = useState();
  const getDetails = async () => {
    const res = await axios.get(`https://ipapi.co/${ip}/json/`);
    console.log(res.data);
    setDetails(res.data);
  };
  useEffect(() => {
    getDetails();
  }, [ip]);
  console.log(details);
  return (
    <div>
      {details ? (
        <AnimatedLayout>
          <p className="text-center text-gray-500">IP Address:</p>
          <p className="text-green-600 text-center md:text-6xl sm:text-4xl font-semibold mt-1 mb-8">
            {details?.ip}
          </p>
          <div className="lg:flex flex-wrap md:flex sm:block justify-around text-center items-center">
            <DetailsCard details={details?.country_name} label={"Country"} />
            <DetailsCard
              details={details?.country_code}
              label={"Country Code"}
            />
            <DetailsCard details={details?.region} label={"Region"} />
            <DetailsCard details={details?.region_code} label={"Region Code"} />
            <DetailsCard
              details={details?.org}
              label={"Internet service provider"}
            />
            <DetailsCard details={details?.timezone} label={"Time Zone"} />
          </div>
          <p className="text-center text-gray-900 text-2xl mt-8 font-semibold">
            Additional Info
          </p>
          <div className="lg:flex flex-wrap md:flex sm:block justify-around text-center items-center">
            <DetailsCard
              details={details?.country_capital}
              label={"Country Capital"}
            />
            <DetailsCard
              details={details?.country_calling_code}
              label={"Country Calling Code"}
            />
            <DetailsCard details={details?.currency} label={"Currency"} />
            <DetailsCard details={details?.languages} label={"Languages"} />
            <DetailsCard
              details={details?.country_population}
              label={"Country Population"}
            />
            <DetailsCard details={details?.timezone} label={"Time Zone"} />
          </div>
        </AnimatedLayout>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DetailsScreen;
