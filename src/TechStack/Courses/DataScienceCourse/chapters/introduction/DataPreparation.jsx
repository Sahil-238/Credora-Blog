import React from 'react';

const DataPreparation = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Data Preparation</h1>
      <div className="chapter-text">
        <p>Data preparation is a crucial step in the data science process that involves cleaning, transforming, and organizing raw data into a format suitable for analysis.</p>

        <h3>Key Steps in Data Preparation:</h3>
        <ul>
          <li>Data Cleaning</li>
          <li>Feature Engineering</li>
          <li>Data Transformation</li>
          <li>Handling Missing Values</li>
          <li>Dealing with Outliers</li>
        </ul>

        <div className="example-section">
          <h3>Common Data Preparation Tasks:</h3>
          <div className="code-block">
{`# Handling missing values
df.fillna(df.mean())

# Removing duplicates
df.drop_duplicates()

# Converting data types
df['date'] = pd.to_datetime(df['date'])

# Scaling numerical features
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df_numeric)

# Encoding categorical variables
pd.get_dummies(df['category'])`}
          </div>
        </div>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Always make a copy of raw data before processing</li>
            <li>Document all data preparation steps</li>
            <li>Check data quality after each transformation</li>
            <li>Use consistent naming conventions</li>
            <li>Handle missing values appropriately based on context</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataPreparation; 