import { useState } from 'react';
import Section from './Section';
import Input from './Input';
import Preview from './Preview';

const currentDate = new Date().toISOString().slice(0, 10);

export default function MainPage() {
  const [info, setInfo] = useState({
    "name": "",
    "email": "",
    "phone-number": "",
    "summary": "",
    "school-name": "",
    "title-of-study": "",
    "date-of-study": currentDate,
    "company-name": "",
    "position-title": "",
    "main-responsibilities": "",
    "from": currentDate,
    "until": currentDate
  })
  const [preview, setPreview] = useState(false)

  function handleChange(e) {
     setInfo({...info, [e.target.id]: e.target.value});
  }

  function handleClick(e) {
    const isValid = Object.values(info).every(value => value !== '');
    if (isValid) {
      e.preventDefault();
      setPreview(!preview);
    } else {
      e.preventDefault();
      alert(`Please make sure to fill in all the input fields.`);
    }
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <form>
      <Section
        title="General Information"
        className={preview ? "inactive" : "active"}
      >
        <Input
          label="Name:"
          type="text"
          value={info["name"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your name"
          id="name"
        />
        <Input
          label="Email:"
          type="email"
          value={info["email"]}
          onChange={handleChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          placeholder="Enter your email"
          id="email"
        />
        <Input
          label="Phone number:"
          type="tel"
          value={info["phone-number"]}
          onChange={handleChange}
          pattern="^(?:\+|00)(?:[0-9]●?){6,14}[0-9]$"

          placeholder="Enter your phone number"
          id="phone-number"
        />
        <Input
          label="Summary:"
          type="text"
          value={info["summary"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{15,}"
          placeholder="Enter your summary"
          id="summary"
        />
      </Section>
      <Section
        title="Educational Experience"
        className={preview ? "inactive" : "active"}
      >
        <Input
          label="School name:"
          type="text"
          value={info["school-name"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your school name"
          id="school-name"
        />
        <Input
          label="title of study:"
          type="text"
          value={info["title-of-study"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your title of study"
          id="title-of-study"
        />
        <Input
          label="date of study:"
          type="date"
          value={info["date-of-study"]}
          onChange={handleChange}
          id="date-of-study"
        />
      </Section>
      <Section
        title="Practical Experience"
        className={preview ? "inactive" : "active"}
      >
        <Input
          label="Company name:"
          type="text"
          value={info["company-name"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your company name"
          id="company-name"
        />
        <Input
          label="Position title:"
          type="text"
          value={info["position-title"]}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your position title"
          id="position-title"
        />
        <Input
          label="Main responsibilities:"
          type="text"
          value={info["main-responsibilities"] || ""}
          onChange={handleChange}
          pattern="[A-Za-z ]{2,}"
          placeholder="Enter your main responsibilities of your jobs"
          id="main-responsibilities"
        />
        <Input
          label="From:"
          type="date"
          value={info["from"]}
          onChange={handleChange}
          id="from"
        />
        <Input
          label="Until:"
          type="date"
          value={info["until"]}
          onChange={handleChange}
          id="until"
        />
      </Section>
      <Preview
        className={preview ? "preview active" : "preview inactive"}
        name={info["name"]}
        email={info["email"]}
        phoneNumber={info["phone-number"]}
        summary={info["summary"]}
        schoolName={info["school-name"]}
        titleOfStudy={info["title-of-study"]}
        dateOfStudy={info["date-of-study"]}
        companyName={info["company-name"]}
        positionTitle={info["position-title"]}
        mainResponsibilities={info["main-responsibilities"]}
        from={info["from"]}
        until={info["until"]}
      />
      <button
        type="submit"
        onClick={handleClick}
      >
        {preview ? <span className="material-symbols-outlined">edit</span> : <span className="material-symbols-outlined">visibility</span>}
      </button>
      </form>
    </>
  );
}