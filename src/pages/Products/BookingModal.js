import React,{useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';


const BookingModal = ({productData, setProductData}) => {
    const {user}=useContext(AuthContext)

    const {
        productName,
        resalePrice, 
        juiceLeft,
        productImage
    }=productData

    const handleBooking=(e)=>{
        e.preventDefault()
        const form=e.target
        const location=form.location.value
        const phone=form.phone.value

        const bookingInfo={
            productName,
            price:resalePrice,
            buyerName:user?.displayName,
            buyerEmail:user?.email,
            pickup:location,
            productImage,
            phone,  
        }

        fetch('https://new-folder-najmul11.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookingInfo)
        })
        .then(res=>res.json())
        .then(data=>{  
            if (data.acknowledged) {
            setProductData(null)
            toast.success('Your booking confirmed')     
            }
            else{
                toast.error(data.message)
            }
        })
    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-meduim text-black">{productName}</h3>
                    <p className='text-xl'>Juice level {juiceLeft}</p>
                    <p className='text-6xl my-2 font-thin'>${resalePrice}</p>
                    <form onSubmit={handleBooking} className=' mt-10 grid grid-cols-1 gap-6'>
                        <input name='name' type="text" placeholder='name' defaultValue={user?.displayName} disabled className="input input-bordered w-full text-black" />
                        <input type="text" defaultValue={user?.email} name='email' disabled className='input input-bordered w-full text-black'/>
                        <input type="text"  name='location' className='input input-bordered w-full text-black'placeholder='Pickup location'/>
                        <input type="text"  name='phone' className='input input-bordered w-full text-black'placeholder='Phone number'/>
                        <input type="submit" value={'submit'}  className='py-2 font-medium bg-orange-400 rounded-xl duration-300 hover:text-white cursor-pointer'/>
                    </form>
                </div>         
            </div>
        </>
    );
};

export default BookingModal;