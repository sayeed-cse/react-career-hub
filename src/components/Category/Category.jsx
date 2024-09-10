
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="card bg-[#FAF8FF] p-10 items-start">
            <div className="p-2 bg-[#EFECFF] rounded-lg mb-8">
                <img src={logo} alt="" className="w-10" />
            </div>
            <h2 className="card-title">{category_name}</h2>
            <p className="text-gray-400">{availability}</p>
        </div>
    );
};

export default Category;