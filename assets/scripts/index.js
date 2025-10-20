const sidebar = document.querySelector('#sidebar')
const sidebarToggle = document.querySelector('#sidebar-toggle')

sidebarToggle.onclick = () => {
    if (sidebar.classList.contains('sidebar-show')) {
        sidebar.classList.remove('sidebar-show')
    } else {
        sidebar.classList.add('sidebar-show')
    }
}