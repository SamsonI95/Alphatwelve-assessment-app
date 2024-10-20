// sidebar toggle
let btnToggle = document.querySelector("#collapse");
let sidenav = document.querySelector(".sidenav");

btnToggle.addEventListener("click", function () {
  sidenav.classList.toggle("active");
  console.log("collapse toggle clicked");
});

// dark mode toggle switch
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if the user has a saved preference in localStorage
const currentMode = localStorage.getItem("mode");

if (currentMode === "dark") {
  document.documentElement.classList.add("dark-mode");
  darkModeToggle.checked = true; // Update toggle state
}

darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("mode", "dark"); // Save dark mode in localStorage
  } else {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("mode", "light"); // Save light mode in localStorage
  }
});

//carousel
document.addEventListener("DOMContentLoaded", () => {
  const carouselSlider = document.querySelector(".carosuel-slider");
  const carouselCards = document.querySelectorAll(".carosuel-slider section");
  const leftArrow = document.querySelector(".carrow-left");
  const rightArrow = document.querySelector(".carrow-right");
  const dashes = document.querySelectorAll(".carousel-dashes li");

  let currentIndex = 0;
  //auto slide for the carousel
  let autoSlideInterval;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselSlider.style.transform = `translateX(${offset}%)`;
    dashes.forEach((dash, index) => {
      dash.classList.toggle("selected", index === currentIndex);
    });
  }

  leftArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? carouselCards.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex === carouselCards.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
    startAutoSlide();
  });

  dashes.forEach((dash, index) => {
    dash.addEventListener("click", () => {
      currentIndex = index; // Set the current slide based on the clicked dash
      updateCarousel();
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      if (currentIndex < carouselCards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 3000); // Change slide every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
});

//Table Data and Logic
const tableData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    avatar: "./assets/avatar 1.png",
    speaker: "Jane Doe",
    status: "Completed",
    description:
      "A gathering of industry leaders to discuss the latest advancements and strategies in cloud computing and innovation.",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    avatar: "./assets/avatar 2.png",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    description:
      "A conference focused on exploring the impact of blockchain technology across various industries, featuring expert speakers and panel discussions.",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    avatar: "./assets/avatar 2.png",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    description:
      "An event dedicated to showcasing innovative applications of artificial intelligence in healthcare, including patient care and medical research.",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    avatar: "./assets/avatar 1.png",
    speaker: "John Lee",
    status: "Completed",
    description:
      "A forum that brings together fintech professionals to explore emerging technologies and trends shaping the future of financial services.",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    avatar: "./assets/avatar 2.png",
    speaker: "Rachel Moore",
    status: "Completed",
    description:
      "A workshop that highlights the importance of data analytics in driving business decisions and improving operational efficiency.",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    avatar: "./assets/avatar 2.png",
    speaker: "Prof. Alan Green",
    status: "Completed",
    description:
      "An exhibition showcasing sustainable energy solutions, technologies, and practices for a greener future.",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    avatar: "./assets/avatar 1.png",
    speaker: "Kevin Adams",
    status: "In Progress",
    description:
      "A hands-on workshop for developers and designers to learn about building user interfaces for decentralized applications.",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    avatar: "./assets/avatar 2.png",
    speaker: "Emily Zhang",
    status: "Completed",
    description:
      "A seminar focusing on best practices for startups to protect their digital assets and implement effective cybersecurity measures.",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    avatar: "./assets/avatar 2.png",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    description:
      "A discussion forum dedicated to the integration of technology and urban planning to create smarter, more efficient cities.",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    avatar: "./assets/avatar 1.png",
    speaker: "Guest Panel",
    status: "In Progress",
    description:
      "An informal networking event for tech enthusiasts and professionals to connect, share ideas, and explore new opportunities.",
  },
  {
    name: "Digital Transformation Conference",
    date: "2024-10-20",
    avatar: "./assets/avatar 2.png",
    speaker: "Sarah Connor",
    status: "Completed",
    description:
      "A conference that examines how organizations can leverage digital technologies to transform their operations and enhance customer experiences.",
  },
  {
    name: "Quantum Computing Summit",
    date: "2024-11-02",
    avatar: "./assets/avatar 2.png",
    speaker: "Dr. David Brown",
    status: "In Progress",
    description:
      "An event focused on the potential applications of quantum computing and its implications for various industries.",
  },
  {
    name: "5G and Beyond Conference",
    date: "2024-10-27",
    avatar: "./assets/avatar 1.png",
    speaker: "Angela Martin",
    status: "Completed",
    description:
      "A conference exploring the capabilities and future developments of 5G technology and its impact on connectivity.",
  },
  {
    name: "Tech Innovation Forum",
    date: "2024-10-29",
    avatar: "./assets/avatar 2.png",
    speaker: "Michael Roberts",
    status: "Completed",
    description:
      "A gathering of innovators and thought leaders to discuss the latest trends and breakthroughs in technology.",
  },
  {
    name: "Artificial Intelligence Expo",
    date: "2024-12-05",
    avatar: "./assets/avatar 2.png",
    speaker: "Samantha Adams",
    status: "In Progress",
    description:
      "An expo featuring the latest advancements in AI technology, showcasing innovative solutions and applications across sectors.",
  },
  {
    name: "Cloud Security Conference",
    date: "2024-10-05",
    avatar: "./assets/avatar 1.png",
    speaker: "Edward Thompson",
    status: "Completed",
    description:
      "A conference dedicated to addressing security challenges in cloud computing and discussing best practices for data protection.",
  },
  {
    name: "AR/VR Interfaces Symposium",
    date: "2024-11-07",
    avatar: "./assets/avatar 2.png",
    speaker: "Dr. Laura White",
    status: "In Progress",
    description:
      "A symposium focused on the design and development of augmented and virtual reality interfaces for various applications.",
  },
  {
    name: "Next-Gen Robotics Workshop",
    date: "2024-12-10",
    avatar: "./assets/avatar 2.png",
    speaker: "Peter Griffin",
    status: "Completed",
    description:
      "A workshop that explores the latest advancements in robotics and their applications in different fields.",
  },
  {
    name: "Fintech Innovation Summit",
    date: "2024-11-17",
    avatar: "./assets/avatar 1.png",
    speaker: "David Clark",
    status: "In Progress",
    description:
      "A summit that brings together fintech leaders to discuss innovations and trends driving change in the financial industry.",
  },
  {
    name: "Techpreneur Meetup",
    date: "2024-11-30",
    avatar: "./assets/avatar 2.png",
    speaker: "Entrepreneur Panel",
    status: "Completed",
    description:
      "A networking event for tech entrepreneurs to share their experiences, challenges, and insights in the startup ecosystem.",
  },
  {
    name: "Smart Devices Forum",
    date: "2024-09-27",
    avatar: "./assets/avatar 2.png",
    speaker: "John O’Reilly",
    status: "In Progress",
    description:
      "A forum discussing the latest innovations in smart devices and their role in enhancing everyday life.",
  },
  {
    name: "Digital Marketing Mastery",
    date: "2024-10-03",
    avatar: "./assets/avatar 1.png",
    speaker: "Maria Gonzales",
    status: "Completed",
    description:
      "A workshop that covers advanced strategies and techniques for effective digital marketing campaigns.",
  },
  {
    name: "Startup Acceleration Summit",
    date: "2024-12-12",
    avatar: "./assets/avatar 2.png",
    speaker: "David Stevens",
    status: "Completed",
    description:
      "An event focused on strategies for accelerating the growth of startups, featuring successful entrepreneurs and investors.",
  },
  {
    name: "Machine Learning in Business",
    date: "2024-11-09",
    avatar: "./assets/avatar 2.png",
    speaker: "Rebecca Howard",
    status: "In Progress",
    description:
      "A seminar discussing the practical applications of machine learning in various business processes.",
  },
  {
    name: "E-commerce Innovation Forum",
    date: "2024-10-13",
    avatar: "./assets/avatar 1.png",
    speaker: "Kevin Lee",
    status: "Completed",
    description:
      "A forum dedicated to exploring the latest trends and technologies in e-commerce, from customer experience to logistics.",
  },
  {
    name: "SaaS Growth Summit",
    date: "2024-11-15",
    avatar: "./assets/avatar 2.png",
    speaker: "Anna Watson",
    status: "Completed",
    description:
      "A summit that focuses on strategies for scaling Software as a Service (SaaS) businesses and driving customer acquisition.",
  },
  {
    name: "Blockchain Applications Conference",
    date: "2024-12-08",
    avatar: "./assets/avatar 2.png",
    speaker: "Victor Park",
    status: "In Progress",
    description:
      "A conference that explores real-world applications of blockchain technology across different sectors.",
  },
  {
    name: "Mobile App Development Expo",
    date: "2024-09-29",
    avatar: "./assets/avatar 1.png",
    speaker: "Paul Harris",
    status: "Completed",
    description:
      "An expo showcasing the latest tools and technologies for mobile app development, featuring industry experts.",
  },
  {
    name: "Cloud Storage Solutions Summit",
    date: "2024-10-01",
    avatar: "./assets/avatar 2.png",
    speaker: "Sophia Green",
    status: "Completed",
    description:
      "A summit discussing cloud storage solutions and their role in modern data management strategies.",
  },
  {
    name: "Big Data Analytics Workshop",
    date: "2024-11-22",
    avatar: "./assets/avatar 2.png",
    speaker: "Chris Nelson",
    status: "Completed",
    description:
      "A hands-on workshop focusing on techniques for analyzing large data sets and deriving actionable insights.",
  },
];

let currentPage = 1;
let rowsPerPage = 10;
const tableBody = document.querySelector("#dataTable tbody");
const pageNumbersContainer = document.getElementById("pageNumbers");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const rowsPerPageSelect = document.getElementById("rowsPerPage");

function displayTable(rows, rowsPerPage, page) {
  tableBody.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = rows.slice(start, end);

  paginatedItems.forEach((row) => {
    const rowElement = document.createElement("tr");
    rowElement.classList.add("event-row");
    const statusClass =
      row.status === "Completed" ? "status-completed" : "status-inprogress";
    rowElement.innerHTML = `<td>${row.name}</td><td>${row.date}</td><td>${row.speaker}</td><td>
                <div class="status ${statusClass}">
                    ${row.status}
                </div>
            </td>
`;
    tableBody.appendChild(rowElement);
  });

  renderPageNumbers(rows.length, rowsPerPage, page);
  prevPageBtn.disabled = page === 1;
  nextPageBtn.disabled = page === Math.ceil(rows.length / rowsPerPage);
}

function renderPageNumbers(totalItems, rowsPerPage, currentPage) {
  pageNumbersContainer.innerHTML = "";
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumberElement = document.createElement("span");
    pageNumberElement.classList.add("page-number");
    if (i === currentPage) {
      pageNumberElement.classList.add("active");
    }
    pageNumberElement.innerText = i;
    pageNumberElement.addEventListener("click", () => {
      currentPage = i;
      displayTable(tableData, rowsPerPage, currentPage);
    });
    pageNumbersContainer.appendChild(pageNumberElement);
  }
}

function updateTable() {
  displayTable(tableData, rowsPerPage, currentPage);
}

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
    updateMobileTable();
  }
});

nextPageBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateTable();
    updateMobileTable();
  }
});

rowsPerPageSelect.addEventListener("change", (e) => {
  rowsPerPage = parseInt(e.target.value);
  currentPage = 1;
  updateTable();
});

// Initialize the table on page load
updateTable();

//Mobile table display logic
const mobileTableBody = document.querySelector("#mobileTable tbody");

function displayMobileTable(rows, rowsPerPage, page) {
  mobileTableBody.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = rows.slice(start, end);

  paginatedItems.forEach((row) => {
    const statusClass =
      row.status === "Completed" ? "status-completed" : "status-inprogress";

    // Create the header row (event name and status)
    const rowElement = document.createElement("tr");
    rowElement.classList.add("accordion-header");

    rowElement.innerHTML = `
    <div>
      <td class="mobile-table-style">
        <div class="mobile-event-header">
          <i class="chevron-icon right-chevron"><ion-icon name="chevron-forward-outline"></ion-icon></i>
          <span>${row.name}</span>
        </div>
      </td>
      <td>
        <div class="status ${statusClass}">
          ${row.status}
        </div>
      </td>
    </div>
    `;

    // Create the hidden content row (speaker and date)
    const contentRow = document.createElement("tr");
    contentRow.classList.add("accordion-content");
    contentRow.style.display = "none";

    contentRow.innerHTML = `
      <td colspan="3">
        <div class="content-row">
          <p class="left-content">${row.speaker}</p>
          <p class="right-content">${row.date}</p>
        </div>
      </td>
    `;

    // Event listeners for dropdown functionality
    rowElement.addEventListener("click", () => {
      const isVisible = contentRow.style.display === "table-row";
      contentRow.style.display = isVisible ? "none" : "table-row";

      // Toggle chevron direction
      const chevron = rowElement.querySelector(".chevron-icon");
      if (isVisible) {
        chevron.classList.remove("down-chevron");
        chevron.classList.add("right-chevron");
      } else {
        chevron.classList.remove("right-chevron");
        chevron.classList.add("down-chevron");
      }

      // Toggle active background color on accordion header
      if (!isVisible) {
        rowElement.classList.add("accordion-active");
      } else {
        rowElement.classList.remove("accordion-active");
      }
    });

    // Event listener to open modal when accordion content is clicked
    contentRow.addEventListener("click", () => {
      openModal(row); // Pass the row data to the modal
    });

    // Append both the header and content rows to the mobile table body
    mobileTableBody.appendChild(rowElement);
    mobileTableBody.appendChild(contentRow);
  });

  renderMobilePageNumbers(rows.length, rowsPerPage, page);
}

function renderMobilePageNumbers(totalItems, rowsPerPage, currentPage) {
  pageNumbersContainer.innerHTML = "";
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumberElement = document.createElement("span");
    pageNumberElement.classList.add("page-number");
    if (i === currentPage) {
      pageNumberElement.classList.add("active");
    }
    pageNumberElement.innerText = i;
    pageNumberElement.addEventListener("click", () => {
      currentPage = i;
      displayMobileTable(tableData, rowsPerPage, currentPage);
    });
    pageNumbersContainer.appendChild(pageNumberElement);
  }
}

function updateMobileTable() {
  displayMobileTable(tableData, rowsPerPage, currentPage);
}

// Initialize mobile table on page load
updateMobileTable();

// Modal Logic
const eventModal = document.getElementById("eventModal");
const closeModalButton = document.querySelector(".close-button");
const modalEventDetails = document.getElementById("modalEventDetails");

// Function to open the modal
function openModal(eventDetails) {
  modalEventDetails.innerHTML = `
        <p class="event-name"><strong>${eventDetails.name}</strong></p>
        <p class="event-date">${eventDetails.date}</p>
        <p class="event-description">${eventDetails.description}</p>
        <img class="speaker-avatar" src="${eventDetails.avatar}" alt="${eventDetails.speaker}" />
        <p class="event-speaker">Speaker: ${eventDetails.speaker}</p>
        <p class="event-attendees">300 Attendees</p>
    `;
  eventModal.style.display = "block";
}

// Function to close the modal
closeModalButton.addEventListener("click", () => {
  eventModal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === eventModal) {
    eventModal.style.display = "none";
  }
});

// Add click event to table rows to open modal with corresponding event details
tableBody.addEventListener("click", (event) => {
  const row = event.target.closest(".event-row");
  if (row) {
    const rowIndex = Array.from(tableBody.children).indexOf(row);
    openModal(tableData[rowIndex]);
  }
});

// Mobile Menu
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var sidenav = document.querySelector(".sidenav");
    var menuIcon = document.querySelector(".menu-icon");
    var closeIcon = document.querySelector(".close-icon");

    sidenav.classList.toggle("mobile-active"); // Toggle sidenav visibility

    // Toggle between hamburger and close icon
    if (sidenav.classList.contains("mobile-active")) {
      menuIcon.style.display = "none"; // Hide hamburger icon
      closeIcon.style.display = "block"; // Show close icon
    } else {
      menuIcon.style.display = "block"; // Show hamburger icon
      closeIcon.style.display = "none"; // Hide close icon
    }
  });

//Mobile bottom nav active classes
const icons = document.querySelectorAll(".mobile-icon-wrapper div");

// Add click event listeners to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Remove the 'active' class from all icons
    icons.forEach((icon) => icon.classList.remove("active"));

    // Add 'active' class to the clicked icon
    this.classList.add("active");
  });
});
