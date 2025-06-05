import React from 'react';

const RegressionInfo = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Regression Information and Diagnostics</h1>
      <div className="chapter-text">
        <p>Understanding regression diagnostics and model information is crucial for assessing the quality and reliability of your regression analysis.</p>

        <h3>Key Metrics:</h3>
        <ul>
          <li>R-squared (R²)</li>
          <li>Adjusted R-squared</li>
          <li>F-statistic</li>
          <li>Residual Analysis</li>
        </ul>

        <div className="example-section">
          <h3>Regression Diagnostics in Python:</h3>
          <div className="code-block">
            <pre>{`import numpy as np
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns

# Generate sample data
np.random.seed(42)
X = pd.DataFrame({
    'Feature1': np.random.normal(0, 1, 100),
    'Feature2': np.random.normal(0, 1, 100)
})
y = 2 * X['Feature1'] + 3 * X['Feature2'] + np.random.normal(0, 1, 100)

# Fit model
X = sm.add_constant(X)
model = sm.OLS(y, X).fit()

# Model information
print("Model Summary:")
print(model.summary())

# Residual analysis
residuals = model.resid
fitted_values = model.fittedvalues

# Plot diagnostics
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

# Residuals vs Fitted
axes[0, 0].scatter(fitted_values, residuals)
axes[0, 0].axhline(y=0, color='r', linestyle='--')
axes[0, 0].set_title('Residuals vs Fitted')

# Q-Q plot
sm.graphics.qqplot(residuals, line='45', fit=True, ax=axes[0, 1])
axes[0, 1].set_title('Q-Q Plot')

# Scale-Location
axes[1, 0].scatter(fitted_values, np.sqrt(np.abs(residuals)))
axes[1, 0].set_title('Scale-Location')

# Residuals histogram
axes[1, 1].hist(residuals, bins=20)
axes[1, 1].set_title('Residuals Distribution')

plt.tight_layout()
plt.show()

# Additional metrics
print("\\nAdditional Metrics:")
print(f"R-squared: {model.rsquared:.3f}")
print(f"Adjusted R-squared: {model.rsquared_adj:.3f}")
print(f"F-statistic: {model.fvalue:.3f}")
print(f"Prob (F-statistic): {model.f_pvalue:.3f}")`}</pre>
          </div>
        </div>

        <div className="note-section">
          <h3>What to Look For:</h3>
          <ul>
            <li>High R-squared values indicate good fit</li>
            <li>Significant F-statistic (p &lt; 0.05)</li>
            <li>Random pattern in residuals</li>
            <li>Normal distribution of residuals</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Common Issues:</h3>
          <ul>
            <li>Heteroscedasticity</li>
            <li>Non-linearity</li>
            <li>Autocorrelation</li>
            <li>Influential outliers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegressionInfo; 