import { useState } from "react";
import './index.css'



function MyComponent() {

    const [name, nameUpdate] = useState("");
    const [phone, phoneUpdate] = useState("");
    const [email, emailAddressUpdate] = useState("");
    const [age, ageUpdate] = useState("");
    const [quantity, quantityUpdate] = useState("");
    const [gender, genderUpdate] = useState("");
    const [payment, paymentUpdate] = useState("");
    const [address, addressUpdate] = useState("");
    const [instruction, instructionUpdate] = useState("");
    const [agree, agreeUpdate] = useState(false);





    function changeName(event) {
        nameUpdate(event.target.value);
    }


    function changeNumber(event) {
        phoneUpdate(event.target.value);
    }

    function changeEmail(event) {
        emailAddressUpdate(event.target.value);
    }

    function changeAge(event) {
        ageUpdate(event.target.value);
    }

    function changeQuantity(event) {
        quantityUpdate(event.target.value);

    }

    function changeGender(event) {
        genderUpdate(event.target.value);

    }

    function changePayment(event) {
        paymentUpdate(event.target.value);

    }

    function changeAddress(event) {
        addressUpdate(event.target.value);

    }

    function changeIntructions(event) {
        instructionUpdate(event.target.value);
    }

    function changeAgree(event) {
        agreeUpdate(event.target.checked);
    }


    function form_submit(event) {
        event.preventDefault();
        console.log("Name : ", name);
        console.log("Phone: ", phone);
        console.log("Email: ", email);

        console.log("Age: ", age);

        console.log("Quantity: ", quantity);

        console.log("Gender: ", gender);

        console.log("Payment: ", payment);

        console.log("Address: ", address);

        console.log("Instructions: ", instruction);
         console.log("Agree: ", agree);



    }






    return (
        <form onSubmit={form_submit}>
            <h1 className="order_form">Order Form</h1>
            <label>Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={changeName}
                required

            />

            <label>Phone</label>
            <input type="number"
                placeholder="Enter phone number"
                onChange={changeNumber}
                required

            />

            <label>Email</label>
            <input type="email"
                placeholder="Enter email address"
                onChange={changeEmail}
                required
            />

            <label>Age</label>
            <input type="number"
                placeholder="Enter Age. minimum 1, maximum 120"
                min="1"
                max="120"
                onChange={changeAge}
                required
            />

            <label>Quantity</label>
            <input type="number"
                placeholder="Enter Product Quantity"
                min="1"
                onChange={changeQuantity}
                required

            />


            <label >Gender</label>
            <div className="genderrr">

                <input
                    type="radio"
                    name="gender"
                    onChange={changeGender}
                    value="Male"
                    required

                />Male

                <input className="female"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={changeGender}

                />Female

            </div>


            <label>Payment method</label>
            <select
                onChange={changePayment}
                required
            >
                <option value="">Select Payment mathod</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="bKash">bKash</option>
                <option value="Rocket">Rocket</option>
                <option value="Cash">Cash</option>
            </select>



            <label>Address</label>
            <textarea
             onChange={changeAddress} 
             placeholder="Enter address here..."
             required
             >

            </textarea>

            <label>Additional Instructions</label>
            <textarea 
            onChange={changeIntructions}
             placeholder="Enter additional instructions ... "
             required
             >

            </textarea>

            <div className="checkbox_agree">
                <input type="checkbox"
                    onChange={changeAgree}
                    required
                />
                <label >I agree with above information</label>

            </div>

            <button className="submitButton">
                Submit</button>





        </form>
    );

}


export default MyComponent;
