import React, { useState } from "react";

const DeliveryAddress = () => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={address.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          name="street"
          id="street"
          value={address.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={address.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          value={address.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          name="zip"
          id="zip"
          value={address.zip}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default DeliveryAddress;
