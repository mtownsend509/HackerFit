import React, {
  useState,
} from "react";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const [image, setImage] =
    useState(null);

  const handleImageChange = (
    e
  ) => {
    if (e.target.files[0]) {
      setImage(
        e.target.files[0]
      );
    }
  };
  console.log(image);

  const handleSubmit = () => {
    /* const imageRef = ref(storage, "image"); ? */
  };

  return (
    <main
      name="Profile"
      className="w-full mt-[150px]"
    >
      <div className="flex flex-col items-center mx-auto max-w-screen-lg">
        <div className="w-full p-4">
          <Avatar
           
            alt="Profile Picture"
            src="/static/images/avatar/1.jpg" /* {url} */
            sx={{
              width: 150,
              height: 150,
            }}
          />
          {/* <h4 className="text-black text-md p-4">
            Upload an image
          </h4> */}
          <input
            className="p-4"
            type="file"
            onChange={
              handleImageChange
            }
          />
          <button
            onClick={
              handleSubmit
            }
          >
            Submit
          </button>
        </div>

        <div>

        </div>

      </div>
    </main>
  );
};

export default Profile;
