import Section from './Section';

export default function Preview({
  className,
  name,
  email,
  phoneNumber,
  summary,
  schoolName,
  titleOfStudy,
  dateOfStudy,
  companyName,
  positionTitle,
  mainResponsibilities,
  from,
  until
}) {
   return (
     <div className={className}>
       <Section
         title={name}
       >
           <p>
             Phone: {phoneNumber} Email: {email}
           </p>
       </Section>
       <br/>
       <Section
         title="Summary:"
       >
         <p>
           {summary}
         </p>
       </Section>
       <br/>
       <Section
         title="Educational Experience"
       >
         <div className="date">
           <div>
             <p><b>{schoolName}</b></p>
             <p>{titleOfStudy}</p>
           </div>
           <p>{dateOfStudy}</p>
         </div>
       </Section>
       <br/>
       <Section
         title="Practical Experience"
       >
         <div className="date">
           <div>
             <p><b>{companyName}</b></p>
             <p>{positionTitle}</p>
             <p>{mainResponsibilities}</p>
           </div>
           <div>
             <p>From: {from}</p>
             <p>Until: {until}</p>
           </div>
         </div>
       </Section>
     </div>
   );
}