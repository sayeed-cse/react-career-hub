import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card bg-base-100 border border-gray-100 shadow-sm">

            <div className="card-body">
                <figure className="self-start">
                    <img
                        src={logo}
                        alt="Shoes" className=" h-12 mb-8" />
                </figure>
                <h2 className="text-2xl font-extrabold text-gray-700 mb-2">{job_title}</h2>
                <p className="text-xl font-semibold text-gray-500">{company_name}</p>
                <div className="flex gap-4 my-4 font-bold">
                    <button className="px-5 py-2 border rounded border-[#7E90FE] text-[#7E90FE] hover:bg-sky-100">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border rounded border-[#7E90FE] text-[#7E90FE] hover:bg-sky-100">{job_type}</button>
                </div>
                <div className="flex gap-6 text-xl mb-6 font-semibold text-gray-500">
                    <h5 className="flex gap-2 items-center"><HiOutlineLocationMarker />{location}</h5>
                    <h5 className="flex gap-2 items-center"><AiOutlineDollar />{salary}</h5>
                </div>
                <div className="card-actions">
                    <Link to={`/jobDetails/${id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold">View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Job;