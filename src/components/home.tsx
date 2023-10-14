import React from 'react';
import './components.styles.css';

export const Home: React.FC = () => {
  const [datalistValueLanguage, setDatalistValueLanguage] =
    React.useState<string>("");
  const [datalistValueTime, setDatalistValueTime] = React.useState<string>("");

  const handleDatalistLanguageChange = (event: any) => {
    setDatalistValueLanguage(event?.target?.value);
  };

  const handleDatalistTimeChange = (event: any) => {
    setDatalistValueTime(event?.target?.value);
  };

  React.useEffect(() => {
    if (datalistValueLanguage) {
      console.log("Language: ", datalistValueLanguage);
    }

    if (datalistValueTime) {
      console.log("Time: ", datalistValueTime);
    }
  }, [datalistValueLanguage, datalistValueTime]);

  // Dialog Logic
  
  const dialog = document.getElementById("dialog") as HTMLDialogElement;
  const showButton = document.getElementsByName("openButton");
  const closeButton = document.getElementsByName("closeButton");

  showButton[0]?.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton[0]?.addEventListener("click", () => {
    dialog.close();
  });

  return (
    <>
      <h1>HTML News</h1>
      <div className="container">
        <section className="section1">
          <div>
            <label>Datalist input (writes)</label> <br />
            <input
              type="text"
              list="languages"
              id="languages-choice"
              name="languages-choice"
              value={datalistValueLanguage}
              onChange={handleDatalistLanguageChange}
            />
            <datalist id="languages">
              <option value="Javascript"></option>
              <option value="React"></option>
              <option value="Go"></option>
              <option value="Java"></option>
              <option value="Nodejs"></option>
            </datalist>
          </div>

          <div>
            <label>Select input</label> <br />
            <select id="languages">
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Go">Go</option>
              <option value="Java">Java</option>
              <option value="Nodejs">Nodejs</option>
            </select>
          </div>
        </section>
        <section className="section1">
          <div>
            <label>Datalist input hours (writes)</label> <br />
            <input
              type="time"
              list="popularHours"
              id="hours"
              name="hours"
              value={datalistValueTime}
              onChange={handleDatalistTimeChange}
            />
            <datalist id="popularHours">
              <option value="12:00"></option>
              <option value="13:00"></option>
              <option value="14:00"></option>
            </datalist>
          </div>
        </section>
        <section className="section1">
          <div>
            <form
              id="formUser"
              action="server.cgi"
              method="post"
              encType="multipart/form-data"
            >
              <label htmlFor="fileInput"> Inputs from (from mobile)</label>
              <input
                type="file"
                id="fileInput"
                capture="user"
                accept="image/*"
                name="image"
              />
              <input
                type="file"
                capture="environment"
                accept="video/*"
                name="video"
              />
              <input type="submit" value="Upload" />
            </form>
          </div>
        </section>
        <section className="section1">
          <div>
            <label htmlFor="dialog">Pop up</label> <br />
            <dialog id="dialog">
              {/* @ts-ignore */}
              <button name="closeButton" autofocus>
                Close
              </button>
              <p>Hola a todos!</p>
            </dialog>
            <button name="openButton">Show dialog tag</button>
          </div>
        </section>

        <section className="section1">
          <div>
            <label htmlFor="details">Show Description</label> <br />
            <details id="details">
              <summary>Details</summary>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                velit sit itaque exercitationem veniam modi quo nam aliquid
                nesciunt ut, sapiente delectus dolore cum totam id? Ratione
                perspiciatis neque illum.
              </p>
            </details>
          </div>
        </section>

        <section className="section1">
          <div>
            <label htmlFor="details">(doesn't work, new funcionality)</label>{" "}
            <br />
            <button popovertarget="my-popover">Open Popover</button>
            <div popover id="my-popover">
              Hello world!
            </div>
          </div>
        </section>

        <section className="section1">
          <div>
            <search>
              <label htmlFor="details">Search tag it's a semantic tool</label> <br />
              <form action="movies">
                <input type="text" id="movies" /> &nbsp;
                <button type="submit">Seach</button>
              </form>
            </search>
          </div>
        </section>
      </div>
    </>
  );
};
