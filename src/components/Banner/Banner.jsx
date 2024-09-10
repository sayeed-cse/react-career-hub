
const Banner = () => {
    return (
        <div className="hero bg-gray-100 min-h-96 mb-32">
            <div className="hero-content flex-col lg:flex-row-reverse pb-0">
                <img
                    src="./../../../public/assets/images/user.png"
                    className="lg:w-1/2" />
                <div>
                    <h1 className="text-[80px] font-bold">One Step Closer To Your <span>Dream Job</span></h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold py-5 px-7 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;