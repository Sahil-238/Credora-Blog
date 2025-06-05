const courseStructure = {
  introduction: {
    title: 'Introduction',
    sections: [
      { id: 'what-is-data', title: 'What is Data Science?' },
      { id: 'data-lifecycle', title: 'Data Science Lifecycle' },
      { id: 'tools-setup', title: 'Tools & Environment Setup' },
      { id: 'python-basics', title: 'Python Basics for Data Science' },
      { id: 'jupyter-notebooks', title: 'Jupyter Notebooks' }
    ]
  },
  data_analysis: {
    title: 'Data Analysis',
    sections: [
      { id: 'data-collection', title: 'Data Collection' },
      { id: 'data-cleaning', title: 'Data Cleaning' },
      { id: 'exploratory-analysis', title: 'Exploratory Data Analysis' },
      { id: 'pandas-intro', title: 'Introduction to Pandas' },
      { id: 'numpy-basics', title: 'NumPy Basics' },
      { id: 'data-visualization', title: 'Data Visualization' },
      { id: 'matplotlib', title: 'Matplotlib' },
      { id: 'seaborn', title: 'Seaborn' }
    ]
  },
  statistics: {
    title: 'Statistics',
    sections: [
      { id: 'descriptive-stats', title: 'Descriptive Statistics' },
      { id: 'probability', title: 'Probability' },
      { id: 'distributions', title: 'Probability Distributions' },
      { id: 'hypothesis-testing', title: 'Hypothesis Testing' },
      { id: 'correlation', title: 'Correlation Analysis' },
      { id: 'regression', title: 'Regression Analysis' }
    ]
  },
  machine_learning: {
    title: 'Machine Learning',
    sections: [
      { id: 'ml-intro', title: 'Introduction to ML' },
      { id: 'supervised-learning', title: 'Supervised Learning' },
      { id: 'unsupervised-learning', title: 'Unsupervised Learning' },
      { id: 'scikit-learn', title: 'Scikit-learn' },
      { id: 'model-evaluation', title: 'Model Evaluation' },
      { id: 'feature-engineering', title: 'Feature Engineering' }
    ]
  },
  deep_learning: {
    title: 'Deep Learning',
    sections: [
      { id: 'neural-networks', title: 'Neural Networks' },
      { id: 'tensorflow', title: 'TensorFlow' },
      { id: 'keras', title: 'Keras' },
      { id: 'cnn', title: 'Convolutional Neural Networks' },
      { id: 'rnn', title: 'Recurrent Neural Networks' },
      { id: 'transfer-learning', title: 'Transfer Learning' }
    ]
  },
  projects: {
    title: 'Projects',
    sections: [
      { id: 'eda-project', title: 'EDA Project' },
      { id: 'ml-project', title: 'ML Project' },
      { id: 'dl-project', title: 'Deep Learning Project' },
      { id: 'capstone', title: 'Capstone Project' }
    ]
  }
};

export default courseStructure; 