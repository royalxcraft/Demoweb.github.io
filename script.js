function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Demo projects
const projects = [
  {
    title: "Personal Blog",
    desc: "A modern blog platform using HTML, CSS, and JavaScript. Features include responsive design and light/dark mode.",
    link: "#"
  },
  {
    title: "Weather App",
    desc: "A simple weather app fetching live data. Shows current weather and forecast for searched cities.",
    link: "#"
  },
  {
    title: "To-Do List",
    desc: "A task tracker web app with dynamic UI, storing tasks in browser localStorage.",
    link: "#"
  }
];

// Dynamically render projects
window.onload = function() {
  const container = document.getElementById('project-list');
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <a href="${proj.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });

  // Prevent form submission and reset
  const contactForm = document.querySelector("form");
  contactForm.onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you! Demo only—no message sent.");
    contactForm.reset();
  }
};
