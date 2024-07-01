const InfoCart = ({ cart }) => {
    if (!cart) {
        return null;
    }

    const { name, description, icon, bgClass } = cart;

    return (
        <div className={`card card-side shadow-xl p-6 ${bgClass}`}>
            <figure>
                <img src={icon} alt={name} className="" />
            </figure>
            <div className="gap-6">
                <h2 className="text-xl text-white">{name}</h2>
                <p className="py-6 text-white">{description}</p>
            </div>
        </div>
    );
};

export default InfoCart;
