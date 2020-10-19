function CreateProjectData(
  name,
  roles,
  technologies,
  description,
  coverPhoto,
  git,
  website
) {
  return { name, roles, technologies, description, coverPhoto, git, website };
}

async function GetProjects() {
  let projectData = [];

  const url = "http://localhost:1337/projects";
  const response = await fetch(url);
  const data = await response.json();
  for (const {
    projectName: name,
    Roles: roles,
    Technologies: technologies,
    description: desc,
    github: git,
    website: web,
    coverPhoto: {
      formats: {
        medium: { url: coverPhoto }
      }
    }
  } of data) {
    projectData.push(
      CreateProjectData(name, roles, technologies, desc, coverPhoto, git, web)
    );
  }

  return projectData;
}

export default GetProjects;