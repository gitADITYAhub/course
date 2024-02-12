
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');
    const sections = document.querySelectorAll('#course-sections .list-group-item');
    const contentArea = document.querySelector('.content-area');
    const sectionTitleElement = document.getElementById('section-title');
    const videoPlayer = document.getElementById('video-player');
    const subsectionInfo = document.getElementById('subsection-info');
    
    const sectionsContainer = document.getElementById('course-sections');

    // Simplified for demonstration
    const courseContent = {
        "en": {
            "sections": [
                {
                    "title": "Section 1: Introduction",
                    "subsections": [
                        {
                            "title": "Subsection 1.1: Overview",
                            "content": "An overview of the course objectives and structure.",
                            "video": "path_to_video_1_1.mp4"
                        },
                        {
                            "title": "Subsection 1.2: Getting Started",
                            "content": "Initial setup and requirements for the course.",
                            "video": "path_to_video_1_2.mp4"
                        },
                    ]
                },
                {
                    "title": "Section 2: Basics",
                    "subsections": [
                        {
                            "title": "Subsection 2.1: Fundamental Concepts",
                            "content": "Introduction to the fundamental concepts.",
                            "video": "path_to_video_2_1.mp4"
                        },
                        {
                            "title": "Subsection 2.2: Practical Examples",
                            "content": "Applying basic concepts through practical examples.",
                            "video": "path_to_video_2_2.mp4"
                        },
                    ]
                },
                {
                    "title": "Section 3: Intermediate",
                    "subsections": [
                        {
                            "title": "Subsection 3.1: Overview",
                            "content": "An overview of the course objectives and structure.",
                            "video": "path_to_video_1_1.mp4"
                        },
                        {
                            "title": "Subsection 3.2: Getting Started",
                            "content": "Initial setup and requirements for the course.",
                            "video": "path_to_video_1_2.mp4"
                        },
                    ]
                },
                {
                    "title": "Section 1: Advanced",
                    "subsections": [
                        {
                            "title": "Subsection 4.1: Overview",
                            "content": "An overview of the course objectives and structure.",
                            "video": "path_to_video_1_1.mp4"
                        },
                        {
                            "title": "Subsection 4.2: Getting Started",
                            "content": "Initial setup and requirements for the course.",
                            "video": "path_to_video_1_2.mp4"
                        },
                    ]
                }
                // Add more sections as needed
            ]
        },
        "es": {
            "sections": [
                {
                    "title": "Sección 1: Introducción",
                    "subsections": [
                        {
                            "title": "Subsección 1.1: Visión General",
                            "content": "Una visión general de los objetivos y estructura del curso.",
                            "video": "path_to_video_1_1.mp4"
                        },
                        {
                            "title": "Subsección 1.2: Comenzando",
                            "content": "Configuración inicial y requisitos para el curso.",
                            "video": "path_to_video_1_2.mp4"
                        },
                    ]
                },
                {
                    "title": "Sección 2: Fundamentos",
                    "subsections": [
                        {
                            "title": "Subsección 2.1: Conceptos Fundamentales",
                            "content": "Introducción a los conceptos fundamentales.",
                            "video": "path_to_video_2_1.mp4"
                        },
                        {
                            "title": "Subsección 2.2: Ejemplos Prácticos",
                            "content": "Aplicación de conceptos básicos a través de ejemplos prácticos.",
                            "video": "path_to_video_2_2.mp4"
                        },
                    ]
                },
                // Add more sections as needed
            ]
        }
    };
    

    function displaySubsectionsForSection(sectionIndex) {
        // Clear existing subsections if any
        const existingSubsections = document.querySelector('#subsections');
        existingSubsections.innerHTML = ''; // Reset subsections display area
        
        const subsections = courseContent["en"].sections[sectionIndex - 1].subsections;
        subsections.forEach((sub, index) => {
            const subElement = document.createElement('div');
            subElement.className = 'list-group-item';
            subElement.textContent = sub.title;
            subElement.onclick = () => displaySubsectionDetails(sectionIndex, index + 1);
            existingSubsections.appendChild(subElement);
        });
    }

    function displaySubsectionDetails(sectionIndex, subsectionIndex) {
        const subsection = courseContent["en"].sections[sectionIndex - 1].subsections[subsectionIndex - 1];
        sectionTitleElement.textContent = subsection.title;
        videoPlayer.src = subsection.video;
        subsectionInfo.textContent = subsection.content;
    }

    sections.forEach((section, index) => {
        section.addEventListener('click', function () {
            // Highlight the clicked section
            sections.forEach(sec => sec.classList.remove('active'));
            section.classList.add('active');

            // Display subsections for the clicked section
            displaySubsectionsForSection(index + 1);
        });
    });

    // Initial display for the first section
    displaySubsectionsForSection(1);
});
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');
    const sectionsContainer = document.getElementById('course-sections');
    const contentArea = document.querySelector('.content-area');
    const sectionTitleElement = document.getElementById('section-title');
    const videoPlayer = document.getElementById('video-player');
    const subsectionInfo = document.getElementById('subsection-info');

    function displaySections(language) {
        const sections = courseContent[language].sections;
        sectionsContainer.innerHTML = ''; // Clear existing sections
        sections.forEach((section, index) => {
            const sectionElement = document.createElement('a');
            sectionElement.href = '#';
            sectionElement.className = 'list-group-item list-group-item-action';
            sectionElement.textContent = section.title;
            sectionElement.setAttribute('data-section', index + 1);
            sectionElement.addEventListener('click', function () {
                this.classList.add('active');
                displaySubsectionsForSection(index + 1, language);
            });
            sectionsContainer.appendChild(sectionElement);
        });
    }

    function displaySubsectionsForSection(sectionIndex, language) {
        const subsections = courseContent[language].sections[sectionIndex - 1].subsections;
        contentArea.innerHTML = ''; // Clear existing content
        subsections.forEach((sub, index) => {
            const subElement = document.createElement('div');
            subElement.className = 'list-group-item';
            subElement.textContent = sub.title;
            subElement.addEventListener('click', () => displaySubsectionDetails(sectionIndex, index + 1, language));
            contentArea.appendChild(subElement);
        });
    }

    function displaySubsectionDetails(sectionIndex, subsectionIndex, language) {
        const subsection = courseContent[language].sections[sectionIndex - 1].subsections[subsectionIndex - 1];
        sectionTitleElement.textContent = subsection.title;
        videoPlayer.src = subsection.video; // Ensure the video path is valid and accessible
        subsectionInfo.textContent = subsection.content;
    }

    languageSelect.addEventListener('change', function () {
        displaySections(this.value);
    });

    // Initialize with the default language and display the first section's subsections
    displaySections(languageSelect.value);
});
