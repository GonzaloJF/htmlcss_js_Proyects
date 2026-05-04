function Register() {
  document.getElementById("registerbtn").addEventListener("click", () => {
    const usermane = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      usermane,
      email,
      password,
    };

    console.log(data);
  });
}
