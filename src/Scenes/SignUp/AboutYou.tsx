// ASSETS
import logoV from "../Assets/logo-solo.png";

const AboutYou = () => {
  const styles = {
    mobileContainer: "block md:hidden lg:hidden xl:hidden",
    logo: "flex justify-center pt-4",
    subtitle: "text-white text-3xl text-center font-bold py-8 mx-8",
    signUpContainer: "bg-green rounded-t-3xl",
    title: "text-white text-4xl text-center font-bold py-8 mx-8",
    form: "flex flex-col justify-center mx-8",
    input: "p-4 my-4 rounded-lg",
    button: "text-gray-700 bg-light-green p-4 my-4 rounded-lg",
    socialsContainer: "flex justify-between mx-20",
    socialIcons: "bg-white p-4 mt-8 mb-4",
    loginContainer:
      " flex flex-col justify-center items-center text-white text-xl py-6",
  };

  return (
    <div id="about-you">
      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.logo}>
          <img src={logoV} />
        </div>

        {/* SIGN UP FORM */}
        <div className={styles.signUpContainer}>
          <h1 className={styles.title}>About you</h1>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Full name"
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <button type="submit" className={styles.button}>
              Next
            </button>
          </form>
        </div>
      </div>

      {/* TABLET & DESKTOP */}
    </div>
  );
};

export default AboutYou;
