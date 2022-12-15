import styles from './IsLoadingError.module.scss';

const IsLoadingError = ({ error, isLoading }) => {
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </>
  );
};

export default IsLoadingError;
