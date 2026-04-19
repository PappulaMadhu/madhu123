# Superstore Sales & Profit Analysis

A data-driven analysis to identify why high sales were leading to profit losses, using SQL, Python, and Machine Learning.

---

## Case Study / Motivation

Retail businesses often focus heavily on increasing sales while overlooking margin erosion. In this project, I analyzed ~10,000 retail transactions from the Superstore dataset to identify the root causes of profit loss.

The analysis revealed that excessive discounting—especially in specific product categories—was consistently driving negative profit margins. This project provides a framework for smarter pricing and discount strategies.

---

## Key Features

- **Margin Analysis:** Identified that Technology is the most profitable category, while Furniture (especially Tables and Bookcases) drives losses despite high sales.
- **EDA Insights:** Found a strong negative relationship between Discount and Profit, particularly in the Central region.
- **Predictive Modeling:** Built a Random Forest classifier to predict whether a transaction will result in a low or negative profit margin.
- **Model Performance:** Achieved an **AUC-ROC score of ~0.97** after hyperparameter tuning.
- **Explainable AI (SHAP):** Identified **Discount, Category, Sub-Category, and Region** as the most influential features driving low-margin outcomes.
- **Business Impact:** Demonstrated that profit loss is primarily a pricing strategy issue, not a customer segment problem.

---

## Tech Stack

- **Language:** Python (Pandas, NumPy, Scikit-learn, SHAP)
- **Database:** SQL (Aggregations, Joins)
- **Visualization:** Matplotlib, Seaborn, Tableau

---

## Repository Contents

- `Superstore_Analysis.ipynb` — Data cleaning, EDA, feature engineering, and machine learning pipeline  
- `Superstore_Dashboard.pptx` — Business presentation with insights and recommendations  

---

## Key Takeaway

The core insight from this project is that profit losses are not driven by low sales, but by aggressive discounting strategies. By using machine learning and explainable AI, businesses can proactively identify high-risk transactions and optimize pricing decisions to protect margins.
