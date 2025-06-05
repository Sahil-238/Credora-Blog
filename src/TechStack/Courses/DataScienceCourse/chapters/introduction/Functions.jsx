import React from 'react';

const Functions = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Functions in Data Science</h1>
      <div className="chapter-text">
        <p>Functions are essential building blocks in data science that help organize code, make it reusable, and perform specific tasks efficiently.</p>

        <div className="example-section">
          <h3>Example Functions:</h3>
          <div className="code-block">
{`# Function to calculate basic statistics
def calculate_stats(data):
    return {
        'mean': np.mean(data),
        'median': np.median(data),
        'std': np.std(data)
    }

# Function to clean data
def clean_data(df):
    # Remove duplicates
    df = df.drop_duplicates()
    # Handle missing values
    df = df.fillna(df.mean())
    return df

# Function to create features
def create_features(df):
    df['age_group'] = pd.cut(df['age'], 
        bins=[0, 18, 35, 50, 65, 100],
        labels=['0-18', '19-35', '36-50', '51-65', '65+'])
    return df`}
          </div>
        </div>

        <h3>Types of Functions in Data Science:</h3>
        <ul>
          <li>Data cleaning functions</li>
          <li>Feature engineering functions</li>
          <li>Statistical analysis functions</li>
          <li>Visualization functions</li>
          <li>Model evaluation functions</li>
        </ul>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Write clear, single-purpose functions</li>
            <li>Include proper documentation</li>
            <li>Handle errors appropriately</li>
            <li>Use type hints for better code clarity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Functions; 