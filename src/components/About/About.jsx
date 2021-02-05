import React from 'react';
import timeEventsManager from 'time-events-manager'

const About = () => {
    timeEventsManager.timeoutCollection.removeAll();
    return (
        <div>
             <div className="sort-title">
            <h1>Sorting Algorithms</h1>
        </div>


      {/*   <footer className="footer">
        <p>Designed & Built by <a target="_blank" href="https://www.linkedin.com/in/amr-hisham-668a211a5">Amr Hisham</a>, 2020.</p>
        </footer> */}
        </div>
    )
}

export default About;