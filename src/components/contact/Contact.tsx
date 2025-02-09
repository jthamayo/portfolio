import locationIcon from "../../assets/location-dot-solid.svg";
import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin-brands-solid.svg";

const Contact = () => {
  return (
    <>
      <section>
        <h5>Contact</h5>
        <div className="grid text-lg grid-cols-2 w-2xs gap-2">
          <div className="flex items-center">
            <img src={locationIcon} alt="Location" className="size-7" />
            <p>Seville, Spain</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={gmailIcon} alt="Gmail" className="size-7" />
            <p>jtamayobalogh@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={githubIcon} alt="GitHub" className="size-7" />
            <p>jthamayo</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={linkedinIcon} alt="LinkedIn" className="size-7" />
            <p>LinkedIn</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
