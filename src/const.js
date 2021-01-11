
const consT = () => {
const[darkMode, setDarkMode] = React.useState(false);
        React.useEffect(() => {
            const json = localStorage.getItem("site-dark-mode");
            const currentMode = JSON.parse(json);
            if (currentMode) {
              setDarkMode(true);
            } else {
              setDarkMode(false);
            }
          }, []);
        
          React.useEffect(() => {
            if (darkMode) {
              document.body.classList.add("dark");
            } else {
              document.body.classList.remove("dark");
            }
            const json = JSON.stringify(darkMode);
            localStorage.setItem("site-dark-mode", json);
          }, [darkMode]);
        }

          export default consT;