# Angular Workspace

Welcome to the **Angular Workspace** repository—a demonstration of building scalable and maintainable Angular applications within a monorepo architecture. This project showcases my proficiency in structuring Angular applications and libraries to promote code reuse, modularity, and efficient development workflows.

## 🚀 Project Overview

This workspace is designed to illustrate the benefits of a monorepo setup in Angular development. It includes multiple applications and shared libraries, all managed within a single repository. The structure promotes:

* **Code Reusability**: Shared libraries can be utilized across multiple applications.
* **Modular Architecture**: Independent development and testing of applications and libraries.
* **Simplified Dependency Management**: Centralized management of dependencies and configurations.

## 🛠️ Technologies & Tools

* **Framework**: Angular (v15.1.1)
* **Monorepo Management**: Angular CLI
* **Code Quality**: ESLint, Prettier
* **Version Control**: Git

## 📁 Project Structure

```
/projects
  /app1
  /app2
  /shared-lib
  /feature-lib
.eslintrc.json
.gitignore
angular.json
package.json
tsconfig.json
```

* `/projects`: Contains the applications and libraries.

  * `app1`, `app2`: Example Angular applications.
  * `shared-lib`: A shared library used across applications.
  * `feature-lib`: A feature-specific library for modular development.
* `.eslintrc.json`: ESLint configuration for code linting.
* `.gitignore`: Specifies files and directories to be ignored by Git.
* `angular.json`: Workspace configuration for Angular CLI.
* `package.json`: Project dependencies and scripts.
* `tsconfig.json`: TypeScript configuration.

## 🚧 Getting Started

To set up the development environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-mauricioAB/angular-workspace.git
   cd angular-workspace
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Serve an application:

   ```bash
   ng serve app1
   ```

   Navigate to `http://localhost:4200/` to view the application.

## 📚 Learnings & Insights

This project demonstrates:

* Structuring multiple Angular applications and libraries within a single workspace.
* Sharing code and resources across applications to promote reusability.
* Managing configurations and dependencies centrally for consistency.
* Utilizing Angular CLI for efficient development workflows.

## 💼 About Me

I'm a frontend specialist with a focus on building scalable and maintainable web applications using Angular. My expertise includes:

* Advanced knowledge of Angular and TypeScript.
* Experience in monorepo architecture for managing multiple projects.
* Proficiency in modular development and code reuse.
* Strong understanding of modern JavaScript practices and tooling.

This README effectively communicates the technical aspects of your project and highlights your skills to both developers and recruiters.
