const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Bhuman.ai",
    duration: "May 2022 - August 2023",
    location: "New York, US",
    // description: "At Bhuman.ai, I played a pivotal role in the development and launch of a groundbreaking web application that garnered significant user engagement. My contributions spanned across various facets of the project, from UI design to backend optimization. My innovative solutions in browser automation and NFT showcasing, combined with my expertise in Rust and React, enabled the company to achieve remarkable milestones.",
    achievements: [
      "Spearheaded the development and launch of a web application, amassing ~100,000 monthly users, and implemented advanced UI components using Next.js & Solid.js.",
      "Rapidly built and deployed embeddable Solid.js widgets, enabling customers to showcase video content on their platforms within two days.",
      "Championed a 40% productivity boost by collaborating on the architectural design of both frontend and backend systems.",
      "Streamlined developer workflows by refactoring codebases, introducing shuttle for Rust microservices deployment, and deploying microservices to AWS/GCP using Docker and Kubernetes.",
      "Innovated by creating a Rust library for the Axum Framework, drastically reducing API documentation update times, and enhancing CI/CD pipelines with Terraform for real-time Discord notifications.",
      "Led in the design and implementation of diverse tools, from an SMS/Email microservice using SendGrid and Twilio to a versatile page builder and advanced machine learning projects in Rust.",
    ],
  },
  // ... Add other experiences in a similar format ...
];

const experienceList = document.getElementById("experienceList");

for (let experience of experiences) {
  const listItem = document.createElement("div");
  let achievementsHTML = "";
  for (let achievement of experience.achievements) {
    achievementsHTML += `<li>${achievement}</li>`;
  }
  listItem.innerHTML = `
        <div class="expr_title">
        <span>
        <strong>${experience.role}</strong> at ${experience.company}<br>
        </span>
        <span>
        ${experience.duration}, ${experience.location}<br>
        </span>
        </div>
        <ul>${achievementsHTML}</ul>
    `;
  experienceList.appendChild(listItem);
}

const projects = [
  {
    title: "rust-spotify-bpf",
    type: "Experimental Project",
    date: "June 2021 - June 2021",
    linkedinLink: null,
  },
  {
    title: "rust_llama_cpp",
    type: "Open Source",
    stars: 11,
    date: "July 2023 - August 2023",
    githubLink: "https://github.com/mdrokz/rust-llama.cpp",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/overlay/1635538802653/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3NG01zG9TxmGX%2BAYqUEd5Q%3D%3D",
  },
  {
    title: "llama_internet_chatbot",
    type: "Open Source",
    date: "July 2023 - August 2023",
    githubLink: "https://github.com/mdrokz/llama_internet_chatbot",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/details/featured/1635538859049/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BwsZ6MEtORseNaBxLgJjB7Q%3D%3D",
  },
  {
    title: "auto_generate_cdp",
    type: "Open Source",
    stars: 11,
    date: "November 2021 - August 2023",
    githubLink: "https://github.com/mdrokz/auto_generate_cdp",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/overlay/1635538801847/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3NG01zG9TxmGX%2BAYqUEd5Q%3D%3D",
  },
  {
    title: "rust-headless-chrome",
    type: "Open Source",
    stars: 1700,
    date: "April 2021 - August 2023",
    githubLink: "https://github.com/rust-headless-chrome/rust-headless-chrome",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/overlay/1635538853411/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3NG01zG9TxmGX%2BAYqUEd5Q%3D%3D",
  },
  {
    title: "GMS mobile",
    type: "Freelancing Project",
    date: "July 2022 - November 2022",
  },
  {
    title: "ani_mobile",
    type: "Open Source",
    date: "April 2022 - April 2022",
    stars: 13,
    githubLink: "https://github.com/mdrokz/ani_mobile",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/overlay/1635538799867/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3NG01zG9TxmGX%2BAYqUEd5Q%3D%3D",
  },
  {
    title: "NFT showcase widget",
    type: "Freelancing Project",
    date: "February 2022 - February 2022",
  },
  {
    title: "react-native-stream",
    type: "Open Source",
    date: "November 2021 - November 2021",
    githubLink: "https://github.com/mdrokz/react-native-stream",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/details/featured/1635538852831/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BNvdOIAOTSUuU0GNYtBenZQ%3D%3D",
  },
  {
    title: "French word correction",
    type: "Freelancing Project",
    date: "November 2021 - November 2021",
  },
  {
    title: "async_executor",
    type: "Open Source",
    date: "December 2020 - December 2020",
    githubLink: "https://github.com/mdrokz/async_executor",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/details/featured/1635538852839/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BNvdOIAOTSUuU0GNYtBenZQ%3D%3D",
  },
  {
    title: "chessEngine",
    type: "Open Source",
    stars: 4,
    date: "October 2020 - October 2020",
    githubLink: "https://github.com/mdrokz/chessEngine",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/details/featured/1635538806323/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BNvdOIAOTSUuU0GNYtBenZQ%3D%3D",
  },
  {
    title: "Auction Insight Pro",
    type: "Freelancing Project",
    date: "October 2020 - October 2020",
  },
  {
    title: "LibraSteel",
    type: "Freelancing Project",
    date: "August 2020 - September 2020",
  },
  {
    title: "recursive_file_watcher",
    type: "Open Source",
    date: "February 2020 - February 2020",
    githubLink: "https://github.com/mdrokz/recursive_file_watcher",
    linkedinLink:
      "https://www.linkedin.com/in/mohammad-munshi-133575213/details/featured/1635538856192/single-media-viewer?type=LINK&profileId=ACoAADYCxXcBitC_dHpJvJZUsCqfGV8JA6ck6iA&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BNvdOIAOTSUuU0GNYtBenZQ%3D%3D",
  },
];

const projectsList = document.getElementById("projectsList");

for (let project of projects) {
  const listItem = document.createElement("li");
  const title = `<span class="title">${project.title}</span> - <span>${project.type}</span>`;
  const projectStars = `${
    project?.stars ? `<span>⭐ ${project.stars}</span>` : ""
  }`;

  const githubLink = `${
    project?.githubLink
      ? `<a href="${project.githubLink}"><img class="icon" src="public/icons/github.svg" alt="github" /></a>`
      : ""
  }`;
  const linkedinLink = `${
    project?.linkedinLink
      ? `<a href="${project.linkedinLink}"><img class="icon" src="public/icons/linkedin.svg" alt="linkedin" /></a>`
      : ""
  }`;

  listItem.innerHTML = `${title} ${projectStars}
         <br> 
        ${project.date} ${githubLink} ${linkedinLink}
    `;
  projectsList.appendChild(listItem);
}
