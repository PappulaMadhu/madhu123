# 🎓 Student Information Management System (SIMS)

A Python-based backend prototype demonstrating data integrity enforcement, relational modeling, and Object-Oriented Programming (OOP) principles.


## Overview

SIMS is designed to simulate a simplified student management backend with a strong emphasis on **data correctness at the application layer**.

The system enforces business rules such as:
- Unique student email addresses  
- Valid grade constraints (A–F)  
- Logical data validation (e.g., non-negative age)

This project highlights how “bad data” can be prevented early, ensuring a clean and reliable **source of truth** for downstream reporting and operations.


## Features

- **Data Integrity Enforcement**  
  Built-in validation prevents duplicate records and invalid inputs.

- **Relational Data Modeling**  
  Simulates relationships between:
  - Students  
  - Courses  
  - Enrollments  

- **Role-Based Access Simulation**  
  - Admin: Create, update, delete records  
  - Student: View-only access  

- **Audit & Export Utility**  
  Converts in-memory data structures into CSV files for reporting and inspection.

## Tech Stack

- **Language:** Python 3  
- **Core Concepts:**  
  - Object-Oriented Programming (OOP)  
  - Data validation logic  
- **Data Handling:**  
  - Dictionaries & Lists (in-memory storage)  
  - CSV / File I/O  

## Repository Structure

- `SIMS_Logic.ipynb`  
  Core application logic and functional tests.

- `students.csv`  
  Sample exported dataset demonstrating persistence and audit capability.
  

## Limitations

This project is a **prototype**, not a production system.

- Uses in-memory storage instead of a database  
- No authentication or real user management  
- No concurrency handling or transaction safety  
- Limited scalability due to architecture simplicity  


## Future Improvements

- Integrate a database (e.g., SQLite) for persistent storage  
- Add unit tests for validation and business rules  
- Introduce layered architecture (models, services, controllers)  
- Implement logging and structured audit trails  
- Expose functionality via a REST API  


## Key Takeaway

SIMS demonstrates how enforcing validation and business rules at the code level can significantly reduce data quality issues, a critical concern in real-world administrative systems.
