import React from 'react';

const RegressionPValue = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">P-Values in Regression</h1>
      <div className="chapter-text">
        <p>P-values in regression analysis help determine the statistical significance of coefficients and the overall model. They indicate the probability that the observed relationship occurred by chance.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Statistical significance</li>
          <li>Null hypothesis</li>
          <li>Significance level (α)</li>
          <li>Type I and Type II errors</li>
        </ul>

        <div className="example-section">
          <h3>Analyzing P-Values in Python:</h3>
          <div className="code-block">
            <pre>{`import numpy as np
import pandas as pd
import statsmodels.api as sm
from scipy import stats

# Generate sample data
np.random.seed(42)
n_samples = 100

# Create features with different levels of significance
X = pd.DataFrame({
    'Strong_Effect': np.random.normal(0, 1, n_samples),
    'Weak_Effect': np.random.normal(0, 1, n_samples),
    'No_Effect': np.random.normal(0, 1, n_samples)
})

# Create target variable
y = (3 * X['Strong_Effect'] +    # Strong effect
     0.1 * X['Weak_Effect'] +    # Weak effect
     0 * X['No_Effect'] +        # No effect
     np.random.normal(0, 0.5, n_samples))

# Fit regression model
X = sm.add_constant(X)
model = sm.OLS(y, X).fit()

# Extract p-values
p_values = pd.DataFrame({
    'Feature': X.columns,
    'Coefficient': model.params,
    'P_Value': model.pvalues,
    'Significant': model.pvalues < 0.05
})

print("Regression Results:")
print(p_values)

# Visualize p-values
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.bar(range(len(p_values)), -np.log10(p_values['P_Value']))
plt.axhline(y=-np.log10(0.05), color='r', linestyle='--', label='p=0.05 threshold')
plt.xticks(range(len(p_values)), p_values['Feature'], rotation=45)
plt.ylabel('-log10(p-value)')
plt.title('P-Values by Feature')
plt.legend()
plt.tight_layout()
plt.show()

# Additional model statistics
print("\\nModel Statistics:")
print(f"F-statistic p-value: {model.f_pvalue:.6f}")
print(f"R-squared: {model.rsquared:.3f}")
print(f"Adjusted R-squared: {model.rsquared_adj:.3f}")`}</pre>
          </div>
        </div>

        <div className="note-section">
          <h3>Interpretation:</h3>
          <ul>
            <li>p &lt; 0.05: Strong evidence against null hypothesis</li>
            <li>0.05 &le; p &lt; 0.10: Weak evidence against null hypothesis</li>
            <li>p &ge; 0.10: No evidence against null hypothesis</li>
            <li>Consider practical significance alongside statistical significance</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Common Mistakes:</h3>
          <ul>
            <li>Relying solely on p-values</li>
            <li>Ignoring effect sizes</li>
            <li>Multiple testing problems</li>
            <li>Confusing statistical and practical significance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegressionPValue; 