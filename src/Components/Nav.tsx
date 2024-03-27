// REACT ROUTER DOM
import { NavLink, Outlet } from "react-router-dom";

// ICONS
import { HiHome } from "react-icons/hi";
import { HiCog6Tooth } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { SiCountingworkspro } from "react-icons/si";

const Nav = () => {
  const styles = {
    mobileContainer: "lg:hidden",
    background:
      "flex justify-center justify-evenly items-center fixed bottom-0 left-0 w-full bg-green z-40",
    icon: "text-neutral-200 active:text-light-green active:scale-110 my-6 mx-6",
  };

  const desktopStyles = {
    desktopContainer: "hidden md:hidden sm:hidden lg:block ",
    background:
      "fixed w-full flex justify-between items-center bg-green px-28 z-40 ",
    container: "flex xl:my-12 lg:my-8",
    text: "xl:text-xl lg:text-md tracking-widest text-white hover:text-light-green hover:scale-110 cursor-pointer",
    button: "bg-accent px-6 py-2 rounded-md",
  };

  return (
    <>
      {/* MOBILE & TABLET NAV */}
      <header id="mobile-nav" className={styles.mobileContainer}>
        <div className={styles.background}>
          <NavLink to="/">
            <HiHome size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="profile">
            <FaUser size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="settings">
            <HiCog6Tooth size={28} className={styles.icon} />
          </NavLink>
        </div>
      </header>

      {/* DESKTOP NAV*/}
      <header className={desktopStyles.desktopContainer}>
        <div id="desktop-nav" className={desktopStyles.background}>
          <SiCountingworkspro size={40} color="white" />

          <div className={desktopStyles.container}>
            <NavLink to="/">
              <h2 className={desktopStyles.text}>HOME</h2>
            </NavLink>
          </div>

          <div className={desktopStyles.container}>
            <NavLink to="profile">
              <button className={desktopStyles.text}>PROFILE</button>
            </NavLink>
          </div>

          <div className={desktopStyles.container}>
            <NavLink to="settings">
              <h2 className={desktopStyles.text}>SETTINGS</h2>
            </NavLink>
          </div>
        </div>
      </header>

      {/* DO NOT FORGET OUTLET!! */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
