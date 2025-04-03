function showFaculty(department) {
    const facultyDetails = {
        "english": "Head of Department: Dr. Smith | Contact: smith@university.edu",
        "math": "Head of Department: Dr. Johnson | Contact: johnson@university.edu",
        "science": "Head of Department: Dr. Lee | Contact: lee@university.edu"
    };
    
    document.getElementById("faculty-info").innerText = facultyDetails[department] || "No details available";
}