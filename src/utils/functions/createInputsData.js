export const inputDataLogin = (type) => [
  { type: 'email', name: 'email', placeholder: 'Email address' },
  { type: type, name: 'password', placeholder: 'Password' },
];

export const inputDataSignUp = () => [
  { type: 'text', name: 'firstName', placeholder: 'First name' },
  { type: 'text', name: 'lastName', placeholder: 'Last name' },
  { type: 'text', name: 'displayName', placeholder: 'Display name' },
  { type: 'email', name: 'email', placeholder: 'Email address' },
  { type: 'password', name: 'password', placeholder: 'Password' },
  {
    type: 'password',
    name: 'passwordConfirmation',
    placeholder: 'Password Confirmation',
  },
];

export const radioBtnData = () => [
  {
    value: 'buyer',
    content: 'Join As a Buyer',
    description:
      'I am looking for a Name, Logo or Tagline for my business, brand or product.',
  },
  {
    value: 'seller',
    content: 'Join As a Creative or Marketplace Seller',
    description:
      'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
  },
];
