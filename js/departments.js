const teachersData = {
    "Computer Science": [
        { name: "SHAHANA T", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F17355-OQvzc.jpg", specialization: "C , data structures , DBMS , Sql " },
        { name: "SRUTHIMOL M P", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46441-5I0ml.jpg", specialization: "java , Oops , os , network , dbms" },
        { name: "SHAJILA MAJEED", photo: "https://geckkd.etlab.in/uploads/images/staff/KTU-F46978-jKLkU.jpg", specialization: "Thermodynamics" },
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },

    ],
    "Mechanical": [
        { name: "Dr. Sunil Menon", photo: "images/sunil.jpg", specialization: "Thermodynamics" },
        { name: "Prof. Anjali R.", photo: "images/anjali.jpg", specialization: "Fluid Mechanics" }
    ],
    // Add more departments and teachers here
};

function showTeachers(department) {
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = `<h2>Teachers in ${department}</h2>`;
    teachersData[department].forEach(teacher => {
        teacherList.innerHTML += `
            <div class="teacher-card">
                <img src="${teacher.photo}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                <p>Specialization: ${teacher.specialization}</p>
                <button onclick="viewTeacherDetails('${teacher.name}')">View Details</button>
            </div>
        `;
    });
}

function searchTeachers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = "<h2>Search Results</h2>";

    let found = false;
    for (const department in teachersData) {
        teachersData[department].forEach(teacher => {
            const nameMatch = teacher.name.toLowerCase().includes(query);
            const specializationMatch = teacher.specialization.toLowerCase().includes(query);
            if (nameMatch || specializationMatch) {
                found = true;
                teacherList.innerHTML += `
                    <div class="teacher-card">
                        <img src="${teacher.photo}" alt="${teacher.name}">
                        <h3>${teacher.name}</h3>
                        <p>Specialization: ${teacher.specialization}</p>
                        <button onclick="viewTeacherDetails('${teacher.name}')">View Details</button>
                    </div>
                `;
            }
        });
    }
    
    if (!found) {
        teacherList.innerHTML += "<p>No teachers found matching the search criteria.</p>";
    }
}

function viewTeacherDetails(teacherName) {
    localStorage.setItem('selectedTeacher', teacherName);
    window.location.href = 'teacher-details.html';
}
// Function to search for matching teachers based on project description
function findMatchingTeachers() {
    const description = document.getElementById("projectDescription").value.toLowerCase();
    const keywords = description.split(/\s+/); // Split the description into words
    const teacherList = [
        // Example teachers data
        { name: "Dr. John Smith", specialization: "Machine Learning", photo: "photo1.jpg" },
        { name: "Prof. Jane Doe", specialization: "Civil Engineering", photo: "photo2.jpg" },
        { name: "Dr. Alice Johnson", specialization: "Mechanical Design", photo: "photo3.jpg" }
    ];

    let results = teacherList.filter(teacher => {
        // Convert specialization to lowercase for case-insensitive comparison
        return keywords.some(keyword => 
            teacher.specialization.toLowerCase().includes(keyword)
        );
    });

    displayTeachers(results);
}

// Function to display the matched teachers
function displayTeachers(teachers) {
    const teacherListDiv = document.getElementById("teacherList");
    teacherListDiv.innerHTML = ""; // Clear any previous results

    if (teachers.length === 0) {
        teacherListDiv.innerHTML = "<p>No matching teachers found.</p>";
        return;
    }

    teachers.forEach(teacher => {
        const teacherCard = document.createElement("div");
        teacherCard.className = "teacher-card";

        teacherCard.innerHTML = `
            <img src="${teacher.photo}" alt="${teacher.name}">
            <div>
                <h3>${teacher.name}</h3>
                <p>Specialization: ${teacher.specialization}</p>
            </div>
        `;

        teacherListDiv.appendChild(teacherCard);
    });
}

