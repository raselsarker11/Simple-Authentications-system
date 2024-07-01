import backgroundImage from "../../../../assets/images/bg.png";
const Doctor = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-4xl font-bold">Wellcome to Doctors Dashboard</h1>
        </div>
    );
};

export default Doctor;