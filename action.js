// const projectLink = document.getElementById("projectA");
// const allocationLink = document.getElementById("allocationA");
// const teamLink = document.getElementById("teamA");
// const reportLink = document.getElementById("reportA");
// const contactLink = document.getElementById("contactA");
// const dashboardLink =document.getElementById("dashboardA")


// const dashboardsection = document.getElementById("dash1");
// const projectSection = document.getElementById("project1");
// const contactSection = document.getElementById("contact1");
// const reportSection = document.getElementById("report1");
// const teamSection = document.getElementById("team1");
// const allocationSection = document.getElementById("allocation1");


// projectLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-none");
//   projectSection.classList.add("d-block");

//   dashboardsection.classList.remove("d-block");
//   contactSection.classList.remove("d-block");
//   reportSection.classList.remove("d-block");
//   teamSection.classList.remove("d-block");
//   allocationSection.classList.remove("d-block");
  
//   dashboardsection.classList.add("d-none");
//   contactSection.classList.add("d-none");
//   reportSection.classList.add("d-none");
//   teamSection.classList.add("d-none");
//   allocationSection.classList.add("d-none");

// });



// allocationLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-block");
//   projectSection.classList.add("d-none");

//   dashboardsection.classList.remove("d-block");
//   contactSection.classList.remove("d-block");
//   reportSection.classList.remove("d-block");
//   teamSection.classList.remove("d-block");
//   allocationSection.classList.remove("d-none");
  
//   dashboardsection.classList.add("d-none");
//   contactSection.classList.add("d-none");
//   reportSection.classList.add("d-none");
//   teamSection.classList.add("d-none");
//   allocationSection.classList.add("d-block");

// });

// teamLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-block");
//   projectSection.classList.add("d-none");

//   dashboardsection.classList.remove("d-block");
//   contactSection.classList.remove("d-block");
//   reportSection.classList.remove("d-block");
//   teamSection.classList.remove("d-none");
//   allocationSection.classList.remove("d-block");
  
//   dashboardsection.classList.add("d-none");
//   contactSection.classList.add("d-none");
//   reportSection.classList.add("d-none");
//   teamSection.classList.add("d-block");
//   allocationSection.classList.add("d-none");

// });


// contactLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-block");
//   projectSection.classList.add("d-none");

//   dashboardsection.classList.remove("d-block");
//   contactSection.classList.remove("d-none");
//   reportSection.classList.remove("d-block");
//   teamSection.classList.remove("d-block");
//   allocationSection.classList.remove("d-block");
  
//   dashboardsection.classList.add("d-none");
//   contactSection.classList.add("d-block");
//   reportSection.classList.add("d-none");
//   teamSection.classList.add("d-none");
//   allocationSection.classList.add("d-none");

// });


// reportLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-block");
//   projectSection.classList.add("d-none");

//   dashboardsection.classList.remove("d-block");
//   contactSection.classList.remove("d-block");
//   reportSection.classList.remove("d-none");
//   teamSection.classList.remove("d-block");
//   allocationSection.classList.remove("d-block");
  
//   dashboardsection.classList.add("d-none");
//   contactSection.classList.add("d-none");
//   reportSection.classList.add("d-block");
//   teamSection.classList.add("d-none");
//   allocationSection.classList.add("d-none");

// });


// dashboardLink.addEventListener("click", function (e) {
//   e.preventDefault();
  
//   projectSection.classList.remove("d-block");
//   projectSection.classList.add("d-none");

//   dashboardsection.classList.remove("d-none");
//   contactSection.classList.remove("d-block");
//   reportSection.classList.remove("d-block");
//   teamSection.classList.remove("d-block");
//   allocationSection.classList.remove("d-block");
  
//   dashboardsection.classList.add("d-block");
//   contactSection.classList.add("d-none");
//   reportSection.classList.add("d-none");
//   teamSection.classList.add("d-none");
//   allocationSection.classList.add("d-none");

// });




const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetSelector = link.dataset.target;

    // hide all sections
    sections.forEach(sec => {
      sec.classList.remove("d-block");
      sec.classList.add("d-none");
    });

    // show selected section
    const targetSection = document.querySelector(targetSelector);
    targetSection.classList.remove("d-none");
    targetSection.classList.add("d-block");

    // active sidebar state
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});



const saveBtn = document.getElementById("saveProjectBtn");
const projectContainer = document.getElementById("projectContainer");

saveBtn.addEventListener("click", () => {
  // 1️⃣ Read values
  const name = document.getElementById("projectName").value.trim();
  const team = document.getElementById("projectTeam").value.trim();
  const progress = document.getElementById("projectProgress").value;
  const due = document.getElementById("projectDue").value;
  const desc = document.getElementById("projectDescription").value.trim();

  // 2️⃣ Basic validation
  if (!name || !team || !progress || !due) {
    alert("Please fill all required fields");
    return;
  }

  // 3️⃣ Decide progress bar color
  let progressColor = "bg-success";
  if (progress < 40) progressColor = "bg-danger";
  else if (progress < 70) progressColor = "bg-warning";

  // 4️⃣ Create project card
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body">
        <h6 class="fw-bold">${name}</h6>
        <p class="text-muted mb-2">
          Team: <strong>${team}</strong>
        </p>

        <div class="progress mb-2" style="height: 10px">
          <div
            class="progress-bar ${progressColor}"
            style="width: ${progress}%"
          ></div>
        </div>

        <small class="text-muted">${progress}% complete</small>
      </div>

      <div
        class="card-footer bg-white border-0 d-flex justify-content-between"
      >
        <span>
          <i class="fa-regular fa-calendar"></i> Due: ${due}
        </span>
        <button
                          class="btn btn-sm btn-outline-primary view-project-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#projectDetailModal"
                        >
                          View
                        </button>
      </div>
    </div>
  `;

  // 5️⃣ Add to UI
  projectContainer.appendChild(col);

  // 6️⃣ Reset form
  document.getElementById("addProjectForm").reset();

  // 7️⃣ Close modal (Bootstrap way)
const modalEl = document.getElementById("addProjectModal");
const modalInstance = bootstrap.Modal.getInstance(modalEl);

// hide modal
modalInstance.hide();

// ✅ FIX: return focus to trigger button
document.getElementById("addnew").focus();

});


let selectedProjectCard = null;

document.addEventListener("click", e => {
  if (e.target.classList.contains("view-project-btn")) {
    selectedProjectCard = e.target.closest(".col-md-6");

    document.getElementById("editName").value =
      selectedProjectCard.querySelector("h6").innerText;

    document.getElementById("editTeam").value =
      selectedProjectCard.querySelector("strong").innerText;

    const progress =
      selectedProjectCard.querySelector("small").innerText.match(/\d+/)?.[0] || 0;

    document.getElementById("editProgress").value = progress;

    document.getElementById("editDue").value =
      selectedProjectCard.querySelector(".fa-calendar")
        .parentElement.innerText.replace("Due: ", "");
  }
});

const editBtn = document.getElementById("editProjectBtn");
const saveEditBtn = document.getElementById("saveEditBtn");

editBtn.addEventListener("click", () => {
  ["editName", "editTeam", "editProgress", "editDue"].forEach(id => {
    document.getElementById(id).disabled = false;
  });

  editBtn.classList.add("d-none");
  saveEditBtn.classList.remove("d-none");
});

saveEditBtn.addEventListener("click", () => {
  if (!selectedProjectCard) return;

  const name = document.getElementById("editName").value;
  const team = document.getElementById("editTeam").value;
  const progress = document.getElementById("editProgress").value;
  const due = document.getElementById("editDue").value;

  // update card UI
  selectedProjectCard.querySelector("h6").innerText = name;
  selectedProjectCard.querySelector("strong").innerText = team;

  const bar = selectedProjectCard.querySelector(".progress-bar");
  bar.style.width = `${progress}%`;
  bar.className =
    "progress-bar " +
    (progress < 40 ? "bg-danger" : progress < 70 ? "bg-warning" : "bg-success");

  selectedProjectCard.querySelector("small").innerText =
    `${progress}% complete`;

  selectedProjectCard.querySelector(".fa-calendar")
    .parentElement.innerHTML =
    `<i class="fa-regular fa-calendar"></i> Due: ${due}`;

  // reset modal state
  ["editName", "editTeam", "editProgress", "editDue"].forEach(id => {
    document.getElementById(id).disabled = true;
  });

  saveEditBtn.classList.add("d-none");
  editBtn.classList.remove("d-none");

  bootstrap.Modal
    .getInstance(document.getElementById("projectDetailModal"))
    .hide();
});


document.getElementById("deleteProjectBtn").addEventListener("click", () => {
  if (!selectedProjectCard) return;

  const confirmDelete = confirm(
    "Are you sure you want to delete this project?"
  );

  if (confirmDelete) {
    selectedProjectCard.remove();

    const modalEl = document.getElementById("projectDetailModal");
    bootstrap.Modal.getInstance(modalEl).hide();

    selectedProjectCard = null;
  }
});



document.getElementById("markDoneBtn").addEventListener("click", () => {
  if (!selectedProjectCard) return;

  const progressBar =
    selectedProjectCard.querySelector(".progress-bar");

  progressBar.style.width = "100%";
  progressBar.className = "progress-bar bg-success";

  selectedProjectCard.querySelector("small").innerText =
    "Completed";

  bootstrap.Modal
    .getInstance(document.getElementById("projectDetailModal"))
    .hide();
});
