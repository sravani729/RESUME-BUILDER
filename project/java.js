// script.js

// Function to hide the input fields and show the generated resume
function hide() {
    const inputFields = document.querySelectorAll('.inputField');
    const outputContainer = document.querySelector('.output_container');
  
    inputFields.forEach((field) => {
      field.style.display = 'none';
    });
  
    const resumeData = {};
    inputFields.forEach((field) => {
      resumeData[field.name] = field.value;
    });
  
    const resumeHTML = generateResumeHTML(resumeData);
    outputContainer.innerHTML = resumeHTML;
  }
  
  // Function to generate the resume HTML
  function generateResumeHTML(resumeData) {
    const html = `
      <h1>${resumeData.name}</h1>
      <h2>${resumeData.title}</h2>
      <p>${resumeData.objective}</p>
      <h3>Work Experience</h3>
      <p>${resumeData.work_experience}</p>
      <h3>Academic Details</h3>
      <p>${resumeData.academic_details}</p>
      <h3>Skills</h3>
      <p>${resumeData.skills}</p>
      <h3>Projects</h3>
      <p>${resumeData.projects}</p>
      <h3>Achievements</h3>
      <p>${resumeData.achievements}</p>
      <h3>Contact Information</h3>
      <p>${resumeData.contact}</p>
    `;
    return html;
  }