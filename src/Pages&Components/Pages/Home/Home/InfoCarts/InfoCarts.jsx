import clock from "../../../../../assets/icons/clock.svg";
import marker from "../../../../../assets/icons/marker.svg";
import phone from "../../../../../assets/icons/phone.svg";
import InfoCart from "./InfoCart";

const InfoCarts = () => {
    const cartData = [
        {
            id: 1,
            name: 'Opening hours',
            description: 'Open 9:00 AM to 5:00 PM everyday',
            icon: clock,
            bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Open 9:00 AM to 5:00 PM everyday',
            icon: marker,
            bgClass: "bg-black"
        },
        {
            id: 3,
            name: 'Contact us Now',
            description: 'Open 9:00 AM to 5:00 PM everyday',
            icon: phone,
            bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500"
        },
    ];

    return (
        <div className="grid gap-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cartData.map(cart => (
                    <InfoCart 
                        key={cart.id}
                        cart={cart}
                    />
                ))
            }
        </div>
    );
};

export default InfoCarts;
