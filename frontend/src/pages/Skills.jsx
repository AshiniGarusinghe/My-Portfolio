import React from "react";

function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4 text-lg">
        <div>
          <h3 className="font-medium">Frontend</h3>
          <ul className="list-disc pl-4">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">QA</h3>
          <ul className="list-disc pl-4">
            <li>Selenium, Postman</li>
            <li>Manual & Automated Testing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;