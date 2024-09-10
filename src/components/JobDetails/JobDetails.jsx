import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const idInt = parseInt(jobId)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const { job_title, company_name, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information;

    const handleJobDetails = () => {
        saveJobApplication(idInt);
        toast('Applied');
    }
    return (
        <div>
            <div className="text-4xl font-extrabold py-36 text-center">
                <h2>Job Details</h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <p className="mb-6"><span className="font-extrabold">Company Name : </span>{company_name} </p>
                    <p className="mb-6"><span className="font-extrabold">Job Description : </span>{job_description} </p>
                    <p className="mb-6"><span className="font-extrabold">Job Responsibility : </span>{job_responsibility}</p>
                    <p className="mb-6"><span className="font-extrabold">Educational Requirements : </span>{educational_requirements}</p>
                    <p className="mb-6"><span className="font-extrabold">Experiences : </span><br></br>{experiences}</p>
                </div>
                <div>
                    <div className="p-7 bg-indigo-50 rounded-lg mb-6">
                        <h3 className="font-bold text-xl">Job Details</h3> <hr className="my-6" />
                        <h4 className="text-xl text-gray-600"><span className="font-bold">Salary : </span>{salary}</h4>
                        <h4 className="text-xl text-gray-600"><span className="font-bold">Job Title : </span>{job_title}</h4>

                        <h3 className="font-bold text-xl mt-8">Contact Information</h3> <hr className="my-6" />
                        <h4 className="text-xl text-gray-600"><span className="font-bold">Phone : </span>{phone}</h4>
                        <h4 className="text-xl text-gray-600"><span className="font-bold">Email : </span>{email}</h4>
                        <h4 className="text-xl text-gray-600"><span className="font-bold">Address : </span>{address}</h4>
                    </div>
                    <button onClick={handleJobDetails} className="btn bg-indigo-500 text-white w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;