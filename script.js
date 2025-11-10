let projects = [];

async function fetchProjects() {
  const url = "https://subhimyportfolio.ct.ws/loadproject.php";
  try {
    const result = await fetch(url);
    if (result.ok) {
      projects = await result.json();
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

const projectContainer = document.querySelector(".project");
projectContainer.innerHTML = "";

function displayProjects() {
  fetchProjects().then(() => {
    if (projects.length === 0) {
      projectContainer.innerHTML = "<p>No projects found.</p>";
      return;
    }
    projects.forEach((project) => {
      projectContainer.innerHTML += `
    <div class="profile">
            <h2>${project.projectName}</h2>
            <p>${project.description}</p>
            <a id="project-link" href="${project.link}" target="_blank">${project.projectName}</a>
          </div>
    `;
    });
  });
}
displayProjects();
