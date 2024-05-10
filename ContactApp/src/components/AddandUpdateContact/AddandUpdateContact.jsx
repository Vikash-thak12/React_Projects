import { Field, Form, Formik } from "formik";
import Modal from "../Modal/Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const AddandUpdateContact = ({isopen, onclose}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal isopen={isopen} onclose={onclose} >
            <Formik
            initialValues={{
                name: "",
                Email: ""
            }}
            onSubmit={(values) => {
                addContact(values)
                console.log(values);
            }}
            >
                <Form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-white">Name</label>
                        <Field name="name" className="rounded-lg p-2 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-white">Email</label>
                        <Field type="email" name="Email" className="rounded-lg p-2 outline-none" />
                    </div>
                    <button className="bg-blue-500 mx-auto py-2 px-4 rounded-lg mb-2">Add Contacts</button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default AddandUpdateContact;