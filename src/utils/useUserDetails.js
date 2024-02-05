import { useEffect, useState } from "react";

const useUserDetails = () => {
  const [userDets, setUserDets] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetailsSwiggy");
    if (userDetails) {
      setUserDets(JSON.parse(userDetails));
    }
  }, []);

  return { userDets, setUserDets };
};

export default useUserDetails;
