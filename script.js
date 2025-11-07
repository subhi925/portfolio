let projects = [];

async function fetchProjects() {
  const url = "https://subhiportfolio.ct.ws/loadproject.php";
  try {
    const result = await fetch(url);
    if (result.ok) {
      projects = await result.json();
      console.log("Projects fetched:", projects);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

fetchProjects().then((projects) => {
  console.log(projects);
});
