import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Modal.css'
import { createPortal } from 'react-dom';

const Modal = ({ isopen, onclose, children }) => {
    return createPortal (
        <>
            {
                isopen && (
                    <>
                        <div className="modal relative z-50 top-10 mx-auto max-w-[370px]">
                            <IoIosCloseCircleOutline
                                onClick={onclose}
                                className="text-white text-4xl cursor-pointer absolute right-2 " />
                            {/* <h1 className='text-white px-3'>Hi there is the details of the modal</h1> */}
                            <div className='mt-5 pl-2 pr-12'>{children}</div>
                        </div>
                        {/* {children} */}
                        <div onClick={onclose} className='absolute z-40 top-0 h-screen w-screen backdrop-blur' />
                    </>
                )
            }
        </>,
        document.getElementById("model-root")
    );
};

export default Modal;
