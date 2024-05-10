import { FiSearch } from 'react-icons/fi';
import './Navbar.css'
// import { AiFillPlayCircle } from 'react-icons/ai';
import { FaPlusCircle, FaRegUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { RiEditCircleLine } from 'react-icons/ri';
import { IoMdTrash } from 'react-icons/io';

const Navbar = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getcontacts = async () => {
            try {
                const contactsRef = collection(db, "contacts");
                const contactsnapShot = await getDocs(contactsRef);
                const contactlists = contactsnapShot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                });
                setContacts(contactlists);
            } catch (error) {
                console.log(error)
            }
        }
        getcontacts();
    }, [])
    return (
        <>
            <div className="my-4 p-5 rounded-lg bg-white">
                <div className='flex justify-center items-center gap-5'>
                    <img src="logos_firebase.svg" alt="" />
                    <h1 className='font-bold text-2xl'>Firebase Contact App</h1>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex items-center justify-center w-full relative'>
                    <FiSearch className=' text-white text-2xl absolute left-2' />
                    <input type="text" placeholder='Search'
                        className='flex-grow border border-white bg-transparent rounded-md px-12 py-3' />
                </div>
                <FaPlusCircle className='text-white text-5xl' />
                <div>
                </div>
            </div>
            <div className="datas mt-5 py-2 rounded-md gap-3 flex flex-col">
                {
                    contacts.map((contact) => (
                        <div key={contact.id} className='data'>
                            <div className='flex items-center gap-2'>
                                <FaRegUserCircle className='text-4xl text-orange cursor-pointer' />
                                <div className=''>
                                    <h2 className='font-bold'>{contact.name}</h2>
                                    <p>{contact.Email}</p>
                                </div>
                            </div>
                            <div className="icons flex text-4xl text-blue-700 cursor-pointer">
                                <RiEditCircleLine />
                                <IoMdTrash />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Navbar;