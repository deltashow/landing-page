document.getElementById("expressForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("expressForm").style.display = "none";
    document.getElementById("successMsg").classList.remove("hidden");
});