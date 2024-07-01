import { AiOutlineDollar } from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";
// 
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
// 

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);


    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully')
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-4 rounded-lg">
                    <h2 className="pb-6"><span className="text-2xl font-semibold">Job Description: </span>{job.job_description}</h2>
                    <h2 className="pb-6"><span className="text-2xl font-semibold">Job Responsibility: </span>{job.job_responsibility}</h2>
                    <h2 className="pb-6"><span className="text-2xl font-semibold">Educational Requirements: </span><br />{job.educational_requirements}</h2>
                    <h2 className="pb-6"><span className="text-2xl font-semibold">Experiences: </span><br />{job.experiences}</h2>
                </div>
                <div className="border p-4 rounded-lg ">
                    <h2 className="text-2xl font-bold"><u>Job Details</u></h2>
                    <h2 className="flex mr-8 pt-5 pb-2"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar><span className="font-bold">Salary: </span>{job.salary}</h2>
                    <h2 className="flex pb-5"><BsCalendar4Week className="text-xl mr-2"></BsCalendar4Week><span className="font-bold">Job Title: </span>{job.job_type}</h2>
                     
                    <h2 className="text-2xl font-bold pb-5">Contact Information</h2>
                    <h2 className="flex"><IoCallOutline className="text-2xl mr-2"></IoCallOutline><span className="font-bold">Phone: </span>{job.contact_information.phone}</h2>
                    <h2 className="flex py-2"><MdOutlineMail className="text-2xl mr-2"></MdOutlineMail><span className="font-bold">Email: </span>{job.contact_information.email}</h2>
                    <h2 className="flex pb-5"><CiLocationOn className="text-5xl mr-2"></CiLocationOn><span className="font-bold">Address: </span>{job.contact_information.address}</h2>

                    <button onClick={handleApplyJob} className="btn btn-primary text-white w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;