import { Link } from 'react-router-dom';
import chir from '../../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse pt-24">
                <img
                src={chir}
                className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Link to="/register">
                    <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 ...">
                        Get Started
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;