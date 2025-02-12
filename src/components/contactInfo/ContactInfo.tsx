const ContactInfo = () => {
  return (
    <>
      <section className="text-md h-full">
        <div className="text-nowrap h-full flex flex-col justify-around">
          <div className="flex items-center gap-x-1">
            <img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394405/location-dot-solid_vh88so.svg" alt="Location" className="size-5" />
            <p>Seville, Spain</p>
          </div>
          <div>
            <a className="flex items-center gap-x-1" href="https://github.com/jthamayo" target="_blank">
            <img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394381/github_ktksrs.svg" alt="GitHub" className="size-5" />
            <p>jthamayo</p>
            </a>
          </div>
          <div>
            <a className="flex items-center gap-x-1" href="https://www.linkedin.com/in/jthamayo" target="_blank">
            <img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394391/linkedin-brands-solid_scddf1.svg" alt="LinkedIn" className="size-5" />
            <p>LinkedIn</p>
            </a>
          </div>
          <div >
            <a className="flex items-center gap-x-1" href="mailto:jtamayobalogh@gmail.com">
            <img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739394388/gmail_jpolcm.svg" alt="Gmail" className="size-5" />
            <p>jtamayobalogh@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
