import { post } from "./api.js";

export async function login(email,password){

    const userData = await post("http://localhost:3030/users/login", {
        email,
        password,
      })

      localStorage.setItem("email", userData.email);
      localStorage.setItem("id", userData._id);
      localStorage.setItem("accessToken", userData.accessToken);

}