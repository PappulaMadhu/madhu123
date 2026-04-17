# Access Control Violation Checker 
A Python-based security tool that detects unauthorized access using Role-Based Access Control (RBAC) logic.

## Case Study / Motivation
In enterprise environments, data breaches often occur when users have "permission creep" or bypass internal controls. I built this tool to simulate realistic access logs and create a detection engine that flags whenever a user (like a 'Guest') attempts an action (like 'Delete') that isn't in their assigned role-permission matrix.

## Key Features
- **RBAC Logic:** Created 6 relational tables (Users, Roles, Permissions, etc.) to simulate a real security schema.
- **Violation Engine:** Automatically compares `AccessLogs` against `RolePermissions` to flag illegal actions.
- **Risk Analysis:** Generates a "Violation Rate" per user to identify high-risk accounts.
- **Reporting:** Exports audit-ready CSVs for security teams.

## Tech Stack
- **Language:** Python (Pandas, Matplotlib)
- **Database:** SQLite (In-memory for speed)
- **Environment:** Google Colab

## 📁 Repository Contents
- `Access_Control_Violation_Checker.ipynb`: The main logic and simulation.
- `Access_Control_Presentation.pptx`: Slide deck explaining the security risks and findings.
