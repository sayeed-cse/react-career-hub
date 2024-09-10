import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div>
            <div className='text-center mb-8 mt-32'>
                <h2 className='text-5xl'>Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'my-8 text-center'}>
                <button
                 onClick={()=> setDataLength(jobs.length)}
                 className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold hover:bg-gradient-to-r hover:from-[#7688ff] hover:to-[#8155f8] px-7 py-5 rounded-lg'>See All Jobs</button>
            </div>
        </div>

    );
};

export default FeaturedJobs;