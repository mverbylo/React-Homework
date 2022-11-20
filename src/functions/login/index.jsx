function login({ email, password, isRememberMe }) {
  alert(
    `You are logged in.\nEmail: ${email}\nPassword: ${password}\nYou are ${
      isRememberMe ? '' : 'not'
    } remembered`
  );
}
export default login;
