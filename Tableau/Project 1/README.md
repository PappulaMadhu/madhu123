# Electric Production Trends and Seasonal Analysis (1985–2018)

**Course:** MIS 7397 - Data Visualization | University of Houston  
**Author:** Pappula Madhusudhan Reddy  
**Tool:** Tableau

## Problem Statement
Energy planners need to understand long-term production growth and recurring 
seasonal demand patterns to make informed infrastructure and capacity decisions.

## Dataset
- **Source:** Electric_Production.csv — provided by course instructor (MIS 7397)
- **Period:** 1985–2018 (monthly observations)
- **Key Fields:** Date, Electric Production Index

## Key Visualizations & Insights
- **Long-Term Growth:** Production nearly doubled from ~60 (1985) to ~110+ (2018); 
  growth slowed noticeably post-2008
- **12-Month Moving Average:** Smoothed trend confirms structural growth with a 
  flatter trajectory after 2008
- **Seasonal Patterns:** Consistent mid-year peaks (July–August) and early-year 
  troughs (January–February); seasonal variation of ~15–20 index points

## Recommendations
- Increase reserve generation capacity during peak summer months
- Apply ARIMA-based seasonal forecasting models for load planning
- Monitor post-2008 structural demand shifts before committing to long-term 
  infrastructure investment

## Limitations
- No regional breakdown — national-level index only
- No weather or fuel cost variables included
- Index-based measurement, not absolute production values
- Seasonal patterns assumed consistent nationally without regional validation

## Tools Used
Tableau Desktop · Electric_Production.csv (MIS 7397 Course Dataset)
