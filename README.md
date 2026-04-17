# Ask-the-Expert

Ask-the-Expert is a frontend web application that helps students find suitable faculty mentors based on department, specialization, and project ideas. It provides a simple flow: student login, expert discovery, and teacher profile viewing.

## Features

- Student login form with basic validation (name, class, department, and 4-digit admission number)
- Department-wise expert browsing
- Search experts by name or specialization
- Project description matching to suggest relevant teachers
- Teacher details view with specialization, contact information, and projects
- Clean, responsive UI built with HTML/CSS/JavaScript

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Storage:** Browser `localStorage` (for selected teacher state)
- **Assets/Data:** Static in-code teacher metadata and external image URLs

## Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari)
- Optional local static server (recommended), such as:
  - VS Code Live Server extension, or
  - Python 3 (`python -m http.server`)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Ziyad765/Ask-the-Expert.git
   ```
2. Move into the project directory:
   ```bash
   cd Ask-the-Expert
   ```
3. Start a local static server (recommended):
   ```bash
   python -m http.server 8000
   ```
4. Open the app in your browser:
   - If using Python server: `http://localhost:8000`
   - Or open `index.html` directly

## Usage & Getting Started

1. Open `index.html`.
2. Enter your name, class, department, and 4-digit admission number.
3. Submit the form to go to the departments page.
4. Browse experts by department or use the search bar.
5. Optionally describe your project and click **Find Teachers** for matching suggestions.
6. Click **View Details** to open an expert profile page.

## API Documentation

This project is currently a static frontend app and does **not** expose backend REST/GraphQL endpoints.

Main client-side interfaces:

| File | Function | Purpose |
| --- | --- | --- |
| `js/script.js` | Login form submit handler | Validates form input and redirects to `departments.html` |
| `js/departments.js` | `showTeachers(department)` | Renders teacher cards for a department |
| `js/departments.js` | `searchTeachers()` | Searches teachers by name/specialization |
| `js/departments.js` | `findMatchingTeachers()` | Matches project-description keywords to teacher specializations |
| `js/departments.js` | `viewTeacherDetails(teacherName)` | Stores selected teacher in `localStorage` and navigates to details page |
| `js/teacher-details.js` | `displayTeacherDetails()` | Reads selected teacher and populates profile data |

## Project Structure

```text
Ask-the-Expert/
├── index.html
├── departments.html
├── teacher-details.html
├── css/
│   ├── styles.css
│   ├── department.css
│   ├── teacher.css
│   └── style.css
└── js/
    ├── script.js
    ├── departments.js
    └── teacher-details.js
```

## Configuration

No environment variables are required for local usage.

Current configurable points in source files:

- Teacher datasets in `js/departments.js` and `js/teacher-details.js`
- UI styling in `css/*.css`
- Navigation flow (`window.location.href`) in `js/script.js` and `js/departments.js`

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add your feature"`)
4. Push the branch and open a Pull Request

Please keep changes focused, tested (where applicable), and clearly documented.  
Since no open-source license is currently defined, please coordinate with the repository owner before redistributing or using contributions outside this repository.

## License

No license file is currently present in this repository. Until a license is added, all rights are reserved by the repository owner.
