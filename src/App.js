import { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  });

  const [theme, setTheme] = useState("light");

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <div className={`min-h-screen flex flex-col items-center mt-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <button 
        onClick={toggleTheme} 
        className="mb-4 p-2 rounded bg-blue-500 text-white font-bold"
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <form onSubmit={submitHandler} className="bg-white dark:bg-gray-700 p-8 rounded shadow-md w-full max-w-lg">
        <label htmlFor="firstName" className="block mb-2">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Atharv"
          value={formData.firstName}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="lastName" className="block mb-2">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder=""
          value={formData.lastName}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="email" className="block mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="atharv@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="country" className="block mb-2">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress" className="block mb-2">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="city" className="block mb-2">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="state" className="block mb-2">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="postalCode" className="block mb-2">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <fieldset className="mb-4">
          <legend className="mb-2">By Email</legend>

          <div className="flex items-center mb-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments" className="block">Comments</label>
              <p className="text-sm">Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidates" className="block">Candidates</label>
              <p className="text-sm">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers" className="block">Offers</label>
              <p className="text-sm">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="mb-2">Push Notifications</legend>
          <p className="text-sm mb-2">These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything">Everything</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail">Same as email</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing">No Push Notifications</label>
          </div>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
