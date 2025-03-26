document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const projects = [
        {
            id: 1,
            title: "Hostel Management System",
            thumbnail: "../assets/images/hstl.png", // Changed path
            technologies: ["html"],
            description: "A comprehensive hostel management system built with HTML, CSS, JavaScript and SQL",
            duration: "3 months"
        },
        {
            id: 2,
            title: "Doctor Patient Interaction System",
            thumbnail: "../assets/images/doctor-patient.avif", // Changed path
            technologies: ["mit"],
            description: "Mobile app built using MIT App Inventor for doctor-patient interactions",
            duration: "2 months"
        },
        {
            id: 3,
            title: "Printing Press Management System",
            thumbnail: "../assets/images/printing.jpeg", // Changed path and fixed typo in 'assets'
            technologies: ["react", "firebase", "ml"],
            description: "Order management and job scheduling system with ML integration",
            duration: "6 months"
        },
        {
            id: 4,
            title: "DevOps Implementation",
            thumbnail: "../assets/images/devops.jpg", // Changed path and fixed typo in 'assets'
            technologies: ["devops"],
            description: "Tasks on Docker, Kubernetes, Jenkins, Prometheus and Grafana",
            duration: "4 months"
        },
        {
            id: 5,
            title: "Diabetes Dataset Preprocessing",
            thumbnail: "../assets/images/ml.jpg", // Changed path and fixed typo in 'assets'
            technologies: ["ml"],
            description: "Data preprocessing and analysis of diabetes dataset",
            duration: "2 months"
        }
    ];

    function createProjectCard(project) {
        return `
            <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full aspect-video object-cover">
                <div class="p-4">
                    <h3 class="font-medium text-lg mb-2">${project.title}</h3>
                    <p class="text-gray-600 text-sm mb-3">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => 
                            `<span class="px-2 py-1 bg-gray-100 rounded-full text-xs">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="mt-3 text-xs text-gray-500">Duration: ${project.duration}</div>
                </div>
            </div>
        `;
    }

    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.technologies.includes(filter));
        
        filteredProjects.forEach(project => {
            projectsGrid.insertAdjacentHTML('beforeend', createProjectCard(project));
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // Initial render
    renderProjects();
});