// Sample teacher data
const teacherData = {
    name: "Dr. John Smith",
    specialization: "Machine Learning",
    email: "john.smith@example.com",
    contact: "+1234567890",
    room: "Room 101",
    projects: [
        "Project A: AI in Healthcare",
        "Project B: Predictive Analytics",
        "Paper: Recent Advances in Machine Learning"
    ],
    photo: "photo1.jpg"
};

// Function to display teacher details
function displayTeacherDetails() {
    document.getElementById("teacherName").innerText = teacherData.name;
    document.getElementById("teacherSpecialization").innerText = teacherData.specialization;
    document.getElementById("teacherEmail").innerText = teacherData.email;
    document.getElementById("teacherContact").innerText = teacherData.contact;
    document.getElementById("teacherRoom").innerText = teacherData.room;
    document.getElementById("teacherPhoto").src = teacherData.photo;

    const projectsList = document.getElementById("teacherProjects");
    teacherData.projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.innerText = project;
        projectsList.appendChild(listItem);
    });
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Call the function to display details when the page loads
window.onload = displayTeacherDetails;
