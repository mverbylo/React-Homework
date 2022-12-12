import FormLogin from '../../components/FormLogin';
import styles from '../../components/Section/Section.module.scss';
const { section, heading } = styles;
const LoginPage = () => {
  return (
    <section className={section}>
      <h1 className={heading}>LOGIN TO YOUR ACCOUNT</h1>
      <FormLogin />
    </section>
  );
};

export default LoginPage;
