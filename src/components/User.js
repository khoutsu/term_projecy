import React from "react";
import axios from "axios";

const User = ({ name, location, email, picture, login, dob, gender }) => {
  const handleLogData = () => {
    console.log({
      country: location.country,
      email: email,
      username: login.username,
      password: login.password,
      title: name.title,
      dob: dob.age,
      firstName: name.first,
      lastName: name.last,
      gender: gender,
      picture_large: picture.large,
      picture_medium: picture.medium,
    });
  };
  const handleInsertData = async () => {
    try {
      // Send a request to your server endpoint
      console.log({
        name_title: name.title,
        name_first: name.first,
        name_last: name.last,
        country: location.country,
        email: email,
        gender: gender,
        dob: dob.age,
        username: login.username,
        password: login.password,
        picture_large: picture.large,
        picture_medium: picture.medium,
        picture_thumbnail: picture.thumbnail,
      });
      const response = await axios.post(
        "http://api-user66026.se-rmutl.net/insertData",
        {
          name_title: name.title,
          name_first: name.first,
          name_last: name.last,
          country: location.country,
          email: email,
          gender: gender,
          dob: dob.age,
          username: login.username,
          password: login.password,
          picture_large: picture.large,
          picture_medium: picture.medium,
          picture_thumbnail: picture.thumbnail,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="random-user">
      <div className="user-image">
        <img src={picture.medium} alt={name.first} />
      </div>
      <div>
        <strong>Country:</strong> {location.country}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Login:</strong> {login.username}
      </div>
      <div>
        <strong>Password:</strong> {login.password}
      </div>
      <div>
        <strong>Name:</strong> {name.first} {name.last}
      </div>
      <div>
        <button onClick={handleInsertData}>insert Data</button>
      </div>
      <div>
        <button onClick={handleLogData}>Log Data</button>
      </div>
    </div>
  );
};

export default User;
