import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const [jobsApplied, setJobApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilterJobs = filter =>{
        if(filter ==='all'){
            setDisplayJobs(jobsApplied);
        }
        else if(filter ==='remote'){
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (allJobs.length > 0) {
            /* 
            const jobsApplied = allJobs.filter(job => storedJobIds.includes(job.id));
            console.log(jobsApplied);
            */
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = allJobs.find(job => job.id === id);
                jobsApplied.push(job);
            }
            setJobApplied(jobsApplied);
            setDisplayJobs(jobsApplied);
        }

    }, [allJobs]);
    return (
        <div>
            <h2>Jobs I Applied {jobsApplied.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">Filter By</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={()=> handleFilterJobs('all')}>All</a></li>
                    <li><a onClick={()=> handleFilterJobs('remote')}>Remote</a></li>
                    <li><a onClick={()=> handleFilterJobs('onsite')}>Onsite</a></li>
                </ul>
            </details>
            <div className="grid grid-cols-3 gap-6">
                {
                    displayJobs.map(job => <Job id={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;