# Superstore Sales & Profit Analysis 
A data-driven analysis identifying why high sales led to net losses using SQL and Python.

## Case Study / Motivation
Retailers often focus on "Sales Growth" while ignoring "Margin Erosion." In this project, I analyzed 9,994 transactions to find out why specific regions were unprofitable. Identified that discounts above 70%—especially in low-margin categories like Furniture—consistently drove losses, highlighting opportunities for margin improvement. This project provides a roadmap for "Smart Discounting." 

## Key Features
- **Margin Analysis:** Identified that the 'Technology' category is 3x more profitable than 'Furniture' despite lower transaction counts.
- **Predictive Modeling:** Built a Random Forest Classifier to predict whether a transaction will result in a loss before completion.
- **Explainable AI:** Used SHAP values to prove that 'Discount level' is the single most important predictor of business loss.
- **Stakeholder Dashboard:** Created Tableau visualizations to show "Profit Leaks" by Geography.

## Tech Stack
- **Language:** Python (Pandas, Scikit-learn, SHAP)
- **Database:** SQL (Aggregations and Joins)
- **Visualization:** Tableau & Matplotlib

## Repository Contents
- `Superstore_Analysis.ipynb`: Data cleaning, EDA, and Machine Learning logic.
- `Superstore_Dashboard.pptx`: Presentation of business findings and ROI recommendations.
