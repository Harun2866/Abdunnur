// Tab switching functionality
function openTab(tabName, btn) {
    document.querySelectorAll('.tab-content').forEach(function (content) {
        content.classList.remove('active-content');
    });

    document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active-content');
    btn.classList.add('active');
}
