import { Form } from "react-router-dom";

const Settings = () => {
  const styles = {
    mobileContainer:
      "block md:hidden lg:hidden xl:hidden flex flex-col justify-center",
    title: "text-green text-4xl text-center font-bold py-8 mx-8",
    button: "bg-green text-white px-6 py-4 mx-20 mt-60 rounded-lg",
  };

  return (
    <div id="settings">
      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <h1 className={styles.title}>SETTINGS</h1>
        <Form
          className="text-center"
          method="post"
          action="/#logout"
          onSubmit={(e) => {
            if (!confirm("Are you sure you want to log out?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className={styles.button}>
            LOGOUT
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
