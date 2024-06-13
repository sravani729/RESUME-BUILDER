// Get references to the elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const addExperienceButton = document.getElementById("add-experience");
const experienceList = document.getElementById("experience-list");
const addEducationButton = document.getElementById("add-education");
const educationList = document.getElementById("education-list");
const addSkillButton = document.getElementById("add-skill");
const skillList = document.getElementById("skill-list");
const generateResumeButton = document.getElementById("generate-resume");
const resumePreview = document.getElementById("resume-preview");
const rep = document.getElementById("rep");
const rep1 = document.getElementById("rep1");
const rep2 = document.getElementById("rep2");

// Add event listeners
addExperienceButton.addEventListener("click", addExperience);
addEducationButton.addEventListener("click", addEducation);
addSkillButton.addEventListener("click", addSkill);
generateResumeButton.addEventListener("click", generateResume);

// Functions
function addExperience() {
  const experience = prompt("Enter your work experience:");
  const listItem = document.createElement("li");
  listItem.textContent = experience;
  experienceList.appendChild(listItem);
}

function addEducation() {
  const education = prompt("Enter your education:");
  const listItem = document.createElement("li");
  listItem.textContent = education;
  educationList.appendChild(listItem);
}

function addSkill() {
  const skill = prompt("Enter your skill:");
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillList.appendChild(listItem);
}

function generateResume() {
  const personalInfo = `
    <h2>Personal Information</h2>
    <p>Name: ${nameInput.value}</p>
    <p>Email: ${emailInput.value}</p>
    <p>Phone: ${phoneInput.value}</p>
    <p>Address: ${addressInput.value}</p>
  `;
  
  const experienceHtml = "";
  for (let i = 0; i < experienceList.children.length; i++) {
    experienceHtml += `<p>${experienceList.children[i].textContent}</p>`;
  }
  
  const educationHtml = "";
  for (let i = 0; i < educationList.children.length; i++) {
    educationHtml += `<p>${educationList.children[i].textContent}</p>`;
  }
  
  const skillHtml = "";
  for (let i = 0; i < skillList.children.length; i++) {
    skillHtml += `<p>${skillList.children[i].textContent}</p>`;
  }
  
  const resumeHtml = `
    ${personalInfo}
    <h2>Work Experience</h2>
    ${experienceHtml}
    <h2>Education</h2>
    ${educationHtml}
    <h2>Skills</h2>
    ${skillHtml}
  `;
  
  resumePreview.innerHTML = resumeHtml;
  
  // Add some styles to the resume preview
  resumePreview.style.border = "1px solid black";
  resumePreview.style.padding = "20px";
  resumePreview.style.width = "80%";
  resumePreview.style.margin = "20px auto";
}

