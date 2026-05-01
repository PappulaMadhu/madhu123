# Global Earthquake Analysis (1995–2023)

**Course:** MIS 7397 - Data Visualization | University of Houston  
**Author:** Pappula Madhusudhan Reddy  
**Date:** April 2026  
**Tool:** Tableau

## Problem Statement
Earthquake risk is poorly understood when frequency and severity are analyzed 
in isolation. This project integrates temporal, geographic, and magnitude analysis 
to identify where seismic risk is truly concentrated.

## Dataset
- **Source:** Kaggle — Recent Earthquakes Dataset
- **Link:** https://www.kaggle.com/datasets/shreyasur965/recent-earthquakes
- **Period:** 1995–2023
- **Key Fields:** Date, Magnitude, Depth, Country/Location

## Key Visualizations & Insights
- **Frequency Over Time:** Statistically significant upward trend (p < 0.01); 
  R² ≈ 0.27 indicates trend exists but variability is high; forecast stabilizes 
  ~39 events/year
- **Geographic Map:** Earthquakes highly clustered along tectonic boundaries 
  (Ring of Fire) — not randomly distributed globally
- **Frequency vs. Severity:** Strong nonlinear relationship (R² ≈ 0.82, 
  p < 0.0001) — high-frequency regions carry disproportionately elevated 
  seismic risk

## Recommendations
- Prioritize monitoring in regions with both high frequency and high severity
- Strengthen early warning systems and infrastructure resilience in high-risk zones
- Use nonlinear modeling approaches to better capture complex seismic relationships

## Limitations
- Country-level aggregation may mask localized seismic variation
- Dataset limited to 1995–2023 — restricts long-term geological interpretation
- Forecasting assumes continuation of historical trends
- No tectonic plate or subsurface geological variables included

## Tools Used
Tableau Desktop · Kaggle Earthquake Dataset
