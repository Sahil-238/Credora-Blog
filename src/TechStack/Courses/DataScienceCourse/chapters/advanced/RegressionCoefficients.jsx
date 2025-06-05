import React from 'react';

const RegressionCoefficients = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Regression Coefficients</h1>
      <div className="chapter-text">
        <p>Regression coefficients represent the change in the dependent variable for a one-unit change in the independent variable, while holding other variables constant.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Intercept (β₀)</li>
          <li>Slope coefficients (β₁, β₂, ...)</li>
          <li>Standardized coefficients</li>
          <li>Coefficient interpretation</li>
        </ul>

        <div className="example-section">
          <h3>Analyzing Coefficients in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
import statsmodels.api as sm

# Generate sample data
np.random.seed(42)
X = pd.DataFrame({
    'Income': np.random.normal(50000, 10000, 100),
    'Education': np.random.normal(16, 2, 100),
    'Experience': np.random.normal(10, 5, 100)
})

y = 20000 + 0.5 * X['Income'] + 5000 * X['Education'] + \
    2000 * X['Experience'] + np.random.normal(0, 10000, 100)

# Standardize features
scaler = StandardScaler()
X_scaled = pd.DataFrame(
    scaler.fit_transform(X),
    columns=X.columns
)

# Fit models
# Original scale
X_with_const = sm.add_constant(X)
model = sm.OLS(y, X_with_const).fit()

# Standardized scale
X_scaled_with_const = sm.add_constant(X_scaled)
model_scaled = sm.OLS(y, X_scaled_with_const).fit()

print("Original Coefficients:")
print(model.params)

print("\\nStandardized Coefficients:")
print(model_scaled.params)

# Calculate confidence intervals
conf_int = model.conf_int()
print("\\nConfidence Intervals:")
print(conf_int)

# Feature importance based on absolute standardized coefficients
importance = pd.DataFrame({
    'Feature': X.columns,
    'Standardized_Coefficient': abs(model_scaled.params[1:])
})
importance = importance.sort_values('Standardized_Coefficient', ascending=False)
print("\\nFeature Importance:")
print(importance)`}
          </div>
        </div>

        <div className="note-section">
          <h3>Interpretation:</h3>
          <ul>
            <li>Positive coefficients indicate positive relationships</li>
            <li>Negative coefficients indicate negative relationships</li>
            <li>Larger absolute values indicate stronger effects</li>
            <li>Standardized coefficients allow direct comparison</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Consider scaling variables</li>
            <li>Check confidence intervals</li>
            <li>Look for multicollinearity</li>
            <li>Compare standardized coefficients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegressionCoefficients; 