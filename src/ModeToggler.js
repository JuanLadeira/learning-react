function ModeToggler(){
    let darkModeOn = false;
    const darkMode = <h1> Dark Mode is On</h1>
    const lightMode = <h1> light mode is On</h1>

    function handleClick(){
        darkModeOn = !darkModeOn;
        if (darkModeOn === true){
            console.log('Dark Mode is On')
        } else {
            console.log('light mode is On')
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode: lightMode}
            <button onClick={handleClick}>
                Clicke me to change the color Mode
            </button>
        </div>
    )
}

export default ModeToggler