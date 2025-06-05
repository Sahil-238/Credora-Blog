import React from 'react';

const RegressionTable = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Regression Table</h1>
      <div className="chapter-text">
        <p>A regression table summarizes the results of a regression analysis, providing key statistics about the model's performance and the significance of each predictor variable.</p>

        <h3>Key Components:</h3>
        <ul>
          <li>Coefficients</li>
          <li>Standard Errors</li>
          <li>T-statistics</li>
          <li>P-values</li>
          <li>Confidence Intervals</li>
        </ul>

        <div className="example-section">
          <h3>Creating a Regression Table in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
import statsmodels.api as sm
from scipy import stats

# Generate sample data
np.random.seed(42)
X = pd.DataFrame({
    'Age': np.random.normal(30, 5, 100),
    'Experience': np.random.normal(5, 2, 100),
    'Education': np.random.normal(16, 2, 100)
})
y = 20000 + 1000 * X['Age'] + 2000 * X['Experience'] + \
    3000 * X['Education'] + np.random.normal(0, 5000, 100)

# Add constant for intercept
X = sm.add_constant(X)

# Fit model
model = sm.OLS(y, X).fit()

# Print summary
print(model.summary().tables[1])

# Create custom regression table
def create_regression_table(model):
    results = pd.DataFrame({
        'Coefficient': model.params,
        'Std Error': model.bse,
        't-value': model.tvalues,
        'P-value': model.pvalues,
        'Lower CI': model.conf_int()[0],
        'Upper CI': model.conf_int()[1]
    })
    return results.round(3)

regression_table = create_regression_table(model)
print("\\nCustom Regression Table:")
print(regression_table)`}
          </div>
        </div>

        <div className="note-section">
          <h3>Interpreting Results:</h3>
          <ul>
            <li>Coefficient signs indicate relationship direction</li>
            <li>P-values show statistical significance</li>
            <li>Confidence intervals provide uncertainty ranges</li>
            <li>R-squared indicates model fit</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Check for statistical significance</li>
            <li>Consider practical significance</li>
            <li>Look for multicollinearity</li>
            <li>Report standard errors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegressionTable; 