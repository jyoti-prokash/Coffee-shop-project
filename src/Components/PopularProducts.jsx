import React, { useState } from 'react';
import banner from '../assets/images/more/1.png'
import { BsCup } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';

const PopularProducts = ({coffee:data}) => {
    
    // const [coffees,setCoffees] = useState(data);
    const handleDelete = (_id) =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    // const remaining = coffees.filter(coffee=>coffee._id !== id)
    // setCoffees(remaining)
        }
    })
  }
});
    }
    return (
        <div className='text-center bg-cover space-y-3  py-5' style={{backgroundImage: `url(${banner})`}}>
            <p className='text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h1 className='text-2xl font-bold'>Our Popular Products</h1>
            <Link to="/addcoffee" className='bg-[#E3B577] btn text-white'>Add Coffee <span><BsCup /></span></Link>
            <div className='grid grid-cols-2 gap-5'>
                {
                    data.map(coffee => <div key={coffee._id}>
                    <div className='flex gap-10 items-center justify-center bg-[#F5F4F1]'>
                        <figure>
                                <img src={coffee.photo} alt="" />
                        </figure>
                        <div className='flex justify-evenly w-full gap-5 px-10'>
                                <div className='text-start'>
                                    <p><span className='font-semibold'>Name:</span> {coffee.name}</p>
                                    <p> <span className='font-semibold'>Chef:</span> {coffee.chef}</p>
                                    <p><span className='font-semibold'>category:</span> {coffee.category}</p>
                                </div>
                                <div>
                                    <p>
                                        <button className='btn btn-xs bg-[#D2B48C]'><FaEye /></button> 
                                    </p>
                                    <Link to={`/updatecoffee/${coffee._id}`}>
                                        <button className='btn text-white btn-xs bg-[#3C393B]'><MdEditSquare /></button> 
                                    </Link>
                                    <p>
                                        <button onClick={()=>handleDelete(coffee._id)} className='btn btn-xs bg-[#EA4744]'><MdDelete /></button> 
                                    </p>
                                </div>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;