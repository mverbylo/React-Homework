export function login({ email, password, isRememberMe }) {
  alert(
    `You are logged in.\nEmail: ${email}\nPassword: ${password}\nYou are ${
      isRememberMe ? '' : 'not'
    } remembered`
  );
}

export function signup({
  firstName,
  lastName,
  displayName,
  email,
  password,
  passwordConfirmation,
  isBuyer,
  isAllow,
}) {
  passwordConfirmation === password
    ? alert(
        `${firstName} ${lastName} registered.\nDisplayName:${displayName}\nEmail: ${email}\nPassword: ${password}\nYou are ${isBuyer}\nSquadhelp  will ${
          isAllow ? '' : 'not'
        } send you marketing/promotional offers`
      )
    : alert('Failed to confirm password');
}
