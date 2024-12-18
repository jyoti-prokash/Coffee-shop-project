import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import banner from '../assets/images/more/11.png'
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const [value,setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const newCoffee = {name,chef,supplier,taste,category,details,photo}
    if(e.target.value===''){
        return alert('empty')
    }
    fetch('http://localhost:5000/coffee', {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res =>res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
  title: 'Error!',
  text: 'successfully added coffee',
  icon: 'success',
  confirmButtonText: 'added'
})
      }
    })
  }
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <section className='bg-cover bg-center' style={{backgroundImage: `url(${banner})`}}>
                    <Link to="/"><h2 className='text-2xl font-semibold flex items-center gap-4'><span><FaArrowLeft /></span>Back to home</h2></Link>
                <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl bg-[#F4F3F0] shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Add New Coffee</h2>
        <p className="text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter coffee name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="chef" className="block font-medium mb-1">Chef</label>
              <input
                name="chef"
                type="text"
                placeholder="Enter coffee chef"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="supplier" className="block font-medium mb-1">Supplier</label>
              <input
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="taste" className="block font-medium mb-1">Taste</label>
              <input
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="category" className="block font-medium mb-1">Category</label>
              <input
                name="category"
                type="text"
                placeholder="Enter coffee category"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="details" className="block font-medium mb-1">Details</label>
              <input
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block font-medium mb-1">Photo</label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;