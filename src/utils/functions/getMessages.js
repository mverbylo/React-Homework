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
  isBuyer,
  isAllow,
}) {
  alert(
    `${firstName} ${lastName} registered.\nDisplayName:${displayName}\nEmail: ${email}\nPassword: ${password}\nYou are ${isBuyer}\nSquadhelp  will ${
      isAllow ? '' : 'not'
    } send you marketing/promotional offers`
  );
}
