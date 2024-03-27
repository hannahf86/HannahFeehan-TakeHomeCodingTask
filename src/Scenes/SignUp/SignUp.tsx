// ASSETS
import logoV from "../../Assets/logo-solo.png";
import logoMD from "../../Assets/logo-md.png";
import logoLG from "../../Assets/logo-lg.png";
import logoXL from "../../Assets/logo-xl.png";
import globe from "../../Assets/globe.png";

// ICONS
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// REACT ROUTER DOM
import { Form } from "react-router-dom";

const SignUp = () => {
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

  const desktopStyles = {
    desktopContainer: "hidden md:block lg:block xl:block",
    logo: "flex ml-12 pt-12",
    subtitle: "text-white text-2xl text-left font-bold mt-20 mb-8 mx-12",
    globeContainer: " ml-44 pt-12 w-3/6",
    signUpContainer: "bg-green ",
    title: "text-white text-3xl text-center font-bold py-12 mx-8",
    form: "flex flex-col justify-center mx-12",
    input: "py-2 px-4 my-3 rounded-lg",
    button: "text-gray-700 bg-light-green p-2 my-4 rounded-lg mx-12",
    socialsContainer: "flex justify-between mx-20 mt-6",
    socialIcons: "bg-white p-4 mt-8 mb-2 mx-2",
    loginContainer:
      " flex flex-col justify-center items-center text-white text-xl py-6",
  };

  return (
    <div id="/">
      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.logo}>
          <img src={logoV} />
        </div>
        <h2 className={styles.subtitle}>
          Connect with millions of professionals across the globe
        </h2>

        {/* SIGN UP FORM */}
        <div className={styles.signUpContainer}>
          <h1 className={styles.title}>Sign up</h1>
          <Form method="post" className={styles.form}>
            <input
              type="text"
              name="username"
              placeholder="Full name"
              aria-label="Your Name"
              autoComplete="given-name"
              required
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
            <button type="submit" className={styles.button}>
              <span>Register</span>
            </button>
          </Form>

          {/* SOCIAL ICONS */}
          <div className={styles.socialsContainer}>
            <div className={styles.socialIcons}>
              <FaGoogle size={30} color="#133A30" />
            </div>
            <div className={styles.socialIcons}>
              <FaFacebookF size={30} color="#133A30" />
            </div>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#133A30" />
            </div>
          </div>

          <div className={styles.loginContainer}>
            <p>Already a member?</p>
            <a href="/" className="font-bold">
              LOGIN
            </a>
          </div>
        </div>
      </div>

      {/* TABLET & DESKTOP */}
      <div className={desktopStyles.desktopContainer}>
        <div className="flex h-screen">
          <div className="bg-light-green">
            <div className={desktopStyles.logo}>
              <img src={logoMD} className="md:block lg:hidden xl:hidden" />
              <img src={logoLG} className="md:hidden lg:block xl:hidden" />
              <img src={logoXL} className="md:hidden lg:hidden xl:block" />
            </div>
            <h2 className={desktopStyles.subtitle}>
              Connect with millions of professionals across the globe
            </h2>
            <div className={desktopStyles.globeContainer}>
              <img src={globe} />
            </div>
          </div>

          <div className="bg-green">
            <div className={desktopStyles.signUpContainer}>
              <h1 className={desktopStyles.title}>Sign up</h1>
              <Form className={desktopStyles.form}>
                <input
                  type="text"
                  name="username"
                  placeholder="Full name"
                  aria-label="Your Name"
                  autoComplete="given-name"
                  required
                  className={desktopStyles.input}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={desktopStyles.input}
                />
                <button type="submit" className={desktopStyles.button}>
                  <span>Register</span>
                </button>
              </Form>

              {/* SOCIAL ICONS */}
              <div className={desktopStyles.socialsContainer}>
                <div className={desktopStyles.socialIcons}>
                  <FaGoogle size={25} color="#133A30" />
                </div>
                <div className={desktopStyles.socialIcons}>
                  <FaFacebookF size={25} color="#133A30" />
                </div>
                <div className={desktopStyles.socialIcons}>
                  <FaLinkedinIn size={25} color="#133A30" />
                </div>
              </div>

              <div className={desktopStyles.loginContainer}>
                <p>Already a member?</p>
                <a href="/" className="font-bold">
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
