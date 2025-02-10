import locationIcon from "../../assets/location-dot-solid.svg";
import gmailIcon from "../../assets/gmail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin-brands-solid.svg";

const ContactInfo = () => {
  return (
    <>
      <section className="text-md">
        <div className="text-nowrap">
          <div className="flex items-center gap-x-1">
            <img src={locationIcon} alt="Location" className="size-5" />
            <p>Seville, Spain</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={githubIcon} alt="GitHub" className="size-5" />
            <p>jthamayo</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={linkedinIcon} alt="LinkedIn" className="size-5" />
            <p>LinkedIn</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={gmailIcon} alt="Gmail" className="size-5" />
            <p>jtamayobalogh@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
