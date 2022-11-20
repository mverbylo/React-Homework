function signup({
  firstName,
  lastName,
  displayName,
  email,
  password,
  passwordConfirmation,
  isBuyer,
}) {
  passwordConfirmation === password
    ? alert(
        `${firstName} ${lastName} registered.\nDisplayName:${displayName}\nEmail: ${email}\nPassword: ${password}\nYou are ${isBuyer}`
      )
    : alert('Failed to confirm password');
}
export default signup;
