import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DetailsCard from '../components/DetailsCard'
import AnimatedLayout from '../Layouts/AnimatedLayout'
import Loader from '../components/Loader'

const DetailsScreen = () => {
    const { ip } = useParams()
    const [details, setDetails] = useState()
    const getDetails = async () => {
        const res = await axios.get(`http://ip-api.com/json/${ip}`);
        console.log(res.data);
        setDetails(res.data);
    };
    useEffect(() => {
        getDetails()
    }, [])
    console.log(details)
    return (
        <div>
            {
                details ? <AnimatedLayout>
                    <p className='text-center text-gray-500'>IP Address:</p>
                    <p className='text-green-600 text-center text-6xl mt-1 mb-8'>{details?.query}</p>
                    <div className='lg:flex flex-wrap md:flex sm:block justify-around text-center items-center'>
                        <DetailsCard details={details?.country} label={'Country'} />
                        <DetailsCard details={details?.countryCode} label={'Country Code'} />
                        <DetailsCard details={details?.regionName} label={'Region'} />
                        <DetailsCard details={details?.region} label={'Region Code'} />
                        <DetailsCard details={details?.isp} label={'Internet service provider'} />
                        <DetailsCard details={details?.timezone} label={'Time Zone'} />
                        <DetailsCard details={details?.zip} label={'Zip Code'} />
                    </div>
                </AnimatedLayout>
                    : <Loader />
            }
        </div>
    )
}

export default DetailsScreen