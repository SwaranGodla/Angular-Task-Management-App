# Angular Task Management App

A modern Angular application for managing user-specific tasks with a clean, component-based architecture.

## Features

- **User Management**
  - Display list of users with avatars
  - Select users to view their tasks
  - Visual indication of selected user

- **Task Management**
  - View tasks assigned to selected user
  - Add new tasks with title, summary, and due date
  - Complete/remove tasks
  - User-specific task filtering

- **Data Persistence**
  - Tasks are saved to browser's localStorage
  - Data persists across page refreshes

- **Modern Angular Features**
  - Standalone components
  - Control flow syntax (`@if`, `@for`)
  - TypeScript strict mode
  - Reactive forms

## Technologies & Libraries

### Core Dependencies
- **Angular** `^18.0.0` - Modern web framework
- **RxJS** `~7.8.0` - Reactive programming library
- **TypeScript** `~5.4.2` - Type-safe JavaScript
- **Zone.js** `~0.14.3` - Angular change detection

### Angular Packages
- `@angular/core` - Core Angular functionality
- `@angular/common` - Common directives and pipes (DatePipe)
- `@angular/forms` - Form handling (FormsModule)
- `@angular/router` - Routing capabilities
- `@angular/platform-browser` - Browser platform
- `@angular/platform-browser-dynamic` - Dynamic platform
- `@angular/animations` - Animation support
- `@angular/compiler` - Template compiler

### Development Dependencies
- `@angular/cli` `^18.0.0` - Angular command-line interface
- `@angular-devkit/build-angular` `^18.0.0` - Build tools
- `karma` `~6.4.0` - Test runner
- `jasmine-core` `~5.1.0` - Testing framework

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── app.component.html        # Root template
│   ├── app.component.css         # Root styles
│   ├── dummy-users.ts            # User data source
│   │
│   ├── header/                   # Header component
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.css
│   │
│   ├── user/                     # User feature module
│   │   ├── user.component.ts     # User card component
│   │   ├── user.component.html
│   │   ├── user.component.css
│   │   └── user.model.ts         # User type definition
│   │
│   ├── tasks/                    # Tasks feature module
│   │   ├── tasks.component.ts    # Tasks container component
│   │   ├── tasks.component.html
│   │   ├── tasks.component.css
│   │   ├── tasks.service.ts      # Task data service
│   │   │
│   │   ├── task/                 # Individual task component
│   │   │   ├── task.component.ts
│   │   │   ├── task.component.html
│   │   │   ├── task.component.css
│   │   │   └── task.model.ts     # Task type definitions
│   │   │
│   │   └── new-task/             # New task form component
│   │       ├── new-task.component.ts
│   │       ├── new-task.component.html
│   │       ├── new-task.component.css
│   │       └── new-task.model.ts
│   │
│   └── shared/                   # Shared components
│       └── card/                 # Reusable card component
│           ├── card.component.ts
│           ├── card.component.html
│           └── card.component.css
│
├── assets/                       # Static assets
│   └── users/                    # User avatar images
│
├── index.html                    # Application entry point
├── main.ts                       # Bootstrap file
└── styles.css                    # Global styles
```

## Architecture

### Component Architecture
- **Standalone Components**: All components are standalone (no NgModules)
- **Component Communication**: 
  - Parent-to-child: `@Input()` properties
  - Child-to-parent: `@Output()` event emitters
- **Service Injection**: Dependency injection using `inject()` function and constructor injection

### Data Flow
1. **AppComponent** manages user selection and passes data to child components
2. **TasksService** handles all task-related operations (CRUD) and localStorage persistence
3. **TasksComponent** displays tasks for the selected user
4. **TaskComponent** renders individual task items
5. **NewTaskComponent** handles task creation form

### Key Services
- **TasksService**: 
  - Manages task data
  - Provides methods: `getUserTasks()`, `addTask()`, `removeTask()`
  - Handles localStorage persistence

## Version Information

- **Angular**: 18.0.0
- **TypeScript**: 5.4.2
- **Node.js**: Required (v18+ recommended)
- **npm**: Required (v9+ recommended)

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) - comes with Node.js
- **Angular CLI** (v18.0.0) - will be installed as a dev dependency

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd starting-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages listed in `package.json`.

## Running the Application

### Development Server

Start the development server with:

```bash
npm start
```

Or using Angular CLI directly:

```bash
ng serve
```

The application will be available at:
- **URL**: `http://localhost:4200/`
- The app will automatically reload if you change any source files

### Build for Production

To build the application for production:

```bash
npm run build
```

Or:

```bash
ng build
```

The build artifacts will be stored in the `dist/essentials` directory.

### Watch Mode

To build and watch for changes:

```bash
npm run watch
```

Or:

```bash
ng build --watch --configuration development
```

### Running Tests

To execute unit tests via Karma:

```bash
npm test
```

Or:

```bash
ng test
```

## Usage

1. **Select a User**: Click on any user from the list to view their tasks
2. **View Tasks**: Once a user is selected, their tasks will be displayed
3. **Add Task**: Click the "Add Task" button to create a new task
   - Fill in the title, summary, and due date
   - Click "Add Task" to save or "Cancel" to discard
4. **Complete Task**: Click the "Complete" button on any task to remove it
5. **Data Persistence**: All tasks are automatically saved to localStorage

## Development Notes

- The application uses **Angular's new control flow syntax** (`@if`, `@for`) instead of structural directives
- All components are **standalone** - no NgModules required
- **Strict TypeScript** mode is enabled for better type safety
- The app uses **localStorage** for data persistence (no backend required)

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.
