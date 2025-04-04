function showFaculty(department) {
    // Hide all faculty sections
    document.querySelectorAll('.faculty-tab').forEach(tab => {
        tab.style.display = 'none';
    });

    // Show selected department faculty
    document.getElementById(department + '-faculty').style.display = 'block';
}