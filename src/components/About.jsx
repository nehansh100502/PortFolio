import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Neha Singh, a passionate   
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-600 relative inline-block ">
          <span className=" relative text-white"> Frontend Developer </span>
          </span>  with a keen eye for 
          <span className="underline decoration-sky-500 hover:underline-offset-4"> React Developer</span> and
         <span className="underline hover:underline-offset-4"> Frontend Developer</span>. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
          <br/>
          Enhanced the UI design by implementing Tailwind CSS utility classes, significantly reducing CSS development time and maintaining consistency
           across the application.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          BCA (Bachelor In Computer Applications), C.V.Raman University, 2022-2025
          <br/>
          <br/>
          Intermediate,
          Jawahar Navodaya Vidyalaya, 2019-20 CBSE Board
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in HTML5, CSS, JavaScript, React.js, Tailwind Experienced with (Visual Studio Code, Github, Git, MongoDB Compass, React DevTools, and npm) Strong grasp of responsive design, DOM manipulation, and fundamental programming concepts
          Excellent problem-solving skills Effective communicator and
          collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <p>Intern, As Full Stack Developer (4 Month Internship)<br/>
          From Uflex Technologies<br/>
          Making a  huge Project on ATA (Athlete Academy)<br/>
          Skill Uses  : React.js, Node.js, Express.js, MongoDB Campass, Postman etc.
        </p>
        <p className="pt-9">
          Full Stack Developer, Zoopiceye opticals private limited, May 2023 to present 
          Making a  huge Project on Zoopiceye (Zoopiceye opticals Private limited)<br/>
          Skill Uses  : React.js, Node.js, Express.js, MongoDB Campass, Postman etc.
        </p>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Web Developer solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
