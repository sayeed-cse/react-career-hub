
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const isExist = storedJobApplications.find(jobId => jobId === id);
    if (!isExist) {
        storedJobApplications.push(id);
        const stringified = JSON.stringify(storedJobApplications);
        localStorage.setItem('job-applications', stringified);

    }
}
export { getStoredJobApplication, saveJobApplication }