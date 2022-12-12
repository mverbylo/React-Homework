import FormSignup from '../../components/FormSignup';
import styles from '../../components/Section/Section.module.scss';
const { section, heading, text } = styles;
const SignupPage = () => {
  return (
    <section className={section}>
      <h1 className={heading}>CREATE AN ACCOUNT</h1>
      <p className={text}>
        We always keep your name and email address private.
      </p>
      <FormSignup />
    </section>
  );
};

export default SignupPage;
