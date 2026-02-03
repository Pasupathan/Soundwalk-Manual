# Interactive Soundwalk Manual
## Professional ISO 12913-2 Based Soundscape Assessment Training

---

## Overview

This interactive manual provides comprehensive training for conducting soundwalks from initial planning through to publishing research papers. It implements complete ISO 12913-2 Method A protocols with professional, publication-ready code for data analysis and visualization.

### Key Features

✅ **ISO 12913-2 Method A Complete Implementation**
- All perceptual affective quality (PAQ) attributes
- Complete sound source identification
- Appropriateness and quality assessments
- Contextual information collection

✅ **Professional Data Analysis**
- Soundscapy library integration for standard-compliant analysis
- Psychoacoustic metrics (Loudness, Sharpness, Roughness, Tonality)
- Statistical comparisons and correlations
- Publication-ready visualizations

✅ **Complete Working Example**
- 4-location office soundwalk scenario
- Realistic synthetic data generation
- Full analysis pipeline demonstration
- Professional figure generation

✅ **Paper Writing Guidance**
- Step-by-step manuscript development
- Journal selection criteria
- Response to reviewers strategies
- Complete workflow timeline

---

## Getting Started

### Installation

1. **Install Python 3.9 or later**

2. **Install required packages:**

```bash
pip install -r requirements.txt
```

3. **Open the interactive manual:**
   - Open `index.html` in your web browser
   - Navigate through sections using the left sidebar
   - Click code toggle buttons to view complete Python implementations

### Quick Start Guide

1. **Plan Your Soundwalk** (Step 1)
   - Define research questions
   - Select 3-4 diverse locations
   - Recruit 5-12 participants

2. **Conduct the Walk** (Steps 2-5)
   - Follow ISO 12913-2 protocol
   - 2-minute silent listening per location
   - Complete questionnaire on-site
   - Synchronous acoustic measurements

3. **Analyze Data** (Steps 6-7)
   - Use provided Python scripts
   - Calculate ISO coordinates
   - Generate professional visualizations
   - Perform statistical comparisons

4. **Write Paper** (Step 9)
   - Follow paper writing guide
   - Use analysis outputs
   - Apply journal-specific formatting

---

## File Structure

```
soundwalk_manual_interactive/
├── index.html                      # Main interactive manual
├── styles.css                      # Professional styling
├── script.js                       # Interactive functionality
├── SOUND WALK MANUAL.md           # Original markdown manual
├── README.md                       # This file
├── requirements.txt               # Python dependencies
│
├── code/                          # All Python implementation files
│   ├── iso12913_survey.py        # ISO 12913-2 Method A questionnaire
│   ├── soundscapy_analysis.py    # Soundscapy-based data analysis
│   ├── psychoacoustic_analysis.py # Psychoacoustic metrics (MoSQIto)
│   ├── data_visualization.py     # Professional visualization suite
│   ├── complete_example_4locations.py # Full working example
│   └── paper_writing_guide.md    # Manuscript preparation guide
│
└── example_outputs/               # Generated when running examples
    ├── soundwalk_data.csv
    ├── acoustic_measurements.csv
    ├── comprehensive_results.png
    ├── circumplex.png
    ├── paq_profiles.png
    └── ... (more outputs)
```

---

## Code Files Explained

### 1. `iso12913_survey.py`
**Complete ISO 12913-2 Method A Questionnaire Implementation**

Features:
- All 8 PAQ attributes (pleasant, chaotic, vibrant, uneventful, calm, annoying, eventful, monotonous)
- 15 sound source categories with dominance ratings
- Appropriateness assessments (activity and place)
- Overall quality rating
- Open-ended questions (standout sound, negative/positive influences)
- Contextual information (familiarity, usage frequency)
- Data validation functions

Usage:
```python
from iso12913_survey import ISO12913Survey

survey = ISO12913Survey('L1', 'Open-Plan Office')
questionnaire = survey.generate_complete_questionnaire()
response = survey.collect_responses('P001')
```

### 2. `soundscapy_analysis.py`
**Professional Soundscape Data Analysis**

Features:
- ISO Pleasant and ISO Eventful coordinate calculation
- Descriptive statistics by location
- ANOVA and post-hoc comparisons
- Circumplex plots (ISO 12913-2 standard format)
- PAQ radar charts
- Location comparison visualizations
- Automated report generation

Usage:
```python
from soundscapy_analysis import SoundscapeAnalysis

analyzer = SoundscapeAnalysis('soundwalk_data.csv')
analyzer.prepare_data()
analyzer.calculate_iso_coordinates()
analyzer.compare_locations('ISOPleasant')
analyzer.plot_circumplex(save_path='circumplex.png')
analyzer.generate_report('report.txt')
```

### 3. `psychoacoustic_analysis.py`
**Psychoacoustic Metrics for Sound Recordings**

Features:
- Loudness (ISO 532-1 Zwicker method) in sones
- Sharpness (DIN 45692) in acum
- Roughness (Daniel & Weber method) in asper
- Tonality (Aures method)
- Frequency spectrum analysis (1/3 octave, FFT)
- Time-series and statistical summaries
- Multi-location comparison tools

Usage:
```python
from psychoacoustic_analysis import PsychoacousticAnalysis

analyzer = PsychoacousticAnalysis('location1_recording.wav')
analyzer.analyze_all()
analyzer.plot_all_metrics(save_path='psychoacoustic_analysis.png')
summary = analyzer.get_summary()
```

### 4. `data_visualization.py`
**Publication-Ready Visualization Suite**

Features:
- Comprehensive multi-panel figures
- ISO 12913-2 compliant circumplex plots
- PAQ comparison charts
- Sound source dominance visualizations
- Acoustic-perception scatter plots
- Floor plan heatmaps
- Report-ready summary figures
- Professional styling (300 DPI, journal standards)

Usage:
```python
from data_visualization import SoundwalkVisualization

viz = SoundwalkVisualization(data_df, acoustic_df)
viz.create_comprehensive_figure('results.png')
viz.create_floor_plan_heatmap(location_coords=coords, save_path='heatmap.png')
```

### 5. `complete_example_4locations.py`
**Full Working Example - 4 Office Locations**

Features:
- Realistic synthetic data generation
- Complete workflow demonstration
- Integration of all analysis modules
- Automated output generation
- Key findings extraction

Usage:
```bash
python code/complete_example_4locations.py
```

This generates:
- soundwalk_data.csv (40 responses: 10 participants × 4 locations)
- acoustic_measurements.csv (4 locations)
- comprehensive_results.png (multi-panel figure)
- circumplex.png, paq_profiles.png, comparison_bars.png
- floor_plan_heatmap.png
- analysis_report.txt
- summary_table.csv
- key_findings.txt

---

## Dependencies

### Required Python Packages

```
pandas >= 1.3.0
numpy >= 1.21.0
matplotlib >= 3.5.0
seaborn >= 0.11.0
scipy >= 1.7.0
soundscapy >= 0.6.0
mosqito >= 1.0.0  # For psychoacoustic analysis
soundfile >= 0.10.0  # For audio file handling
```

Install all at once:
```bash
pip install pandas numpy matplotlib seaborn scipy soundscapy mosqito soundfile
```

### Optional Packages
```
jupyter  # For notebook-based analysis
openpyxl  # For Excel file export
scikit-learn  # For advanced statistical analysis
```

---

## Running the Complete Example

### Step-by-Step Execution

1. **Navigate to the project directory:**
```bash
cd "c:\Users\chach\OneDrive\OneDrive - Delft University of Technology\Desktop\TU DELFT\MASTER THESIS\soundwalk_manual_interactive"
```

2. **Run the complete example:**
```bash
python code/complete_example_4locations.py
```

3. **Check outputs:**
```bash
ls example_outputs/
```

4. **View generated figures:**
   - Open PNG files in image viewer
   - Review analysis_report.txt for detailed results
   - Check summary_table.csv for publication tables

### Expected Output

```
================================================================================
COMPLETE SOUNDWALK EXAMPLE - 4 OFFICE LOCATIONS
ISO 12913-2 Method A Implementation
================================================================================

STEP 1: Data Generation
Generating realistic example data...
Generated 40 responses for 4 locations
Data saved to example_outputs/soundwalk_data.csv

Generating acoustic measurement data...
Acoustic data saved to example_outputs/acoustic_measurements.csv

STEP 2: Data Analysis
================================================================================
RUNNING COMPLETE ANALYSIS PIPELINE
================================================================================

1. Running Soundscapy analysis...
Preparing data for analysis...
Data prepared: 40 valid responses
Calculating ISO coordinates...
ISO coordinates calculated
...

ANALYSIS COMPLETE!
================================================================================
All outputs saved to: example_outputs/
```

---

## Using with Your Own Data

### Data Format Requirements

**Perceptual Data CSV Structure:**

```csv
participant_id,location_id,location_name,paq_pleasant,paq_chaotic,paq_vibrant,paq_uneventful,paq_calm,paq_annoying,paq_eventful,paq_monotonous,source_human_conversation,source_mechanical_hvac,...,overall_quality,appropriate_activity,appropriate_place,sound_standout,sound_negative,sound_positive,familiarity,usage_frequency
P001,L1,Open-Plan Office,3,4,3,2,2,4,3,2,4,3,...,3,3,3,conversation,HVAC,none,4,5
P001,L2,Focus Room,4,2,2,4,4,2,2,4,1,3,...,4,5,4,quiet,none,calm,5,5
...
```

**Acoustic Data CSV Structure:**

```csv
location_id,location_name,LAeq,LAFmax,LAF95,LCeq,duration_s,weather,notes
L1,Open-Plan Office,56.2,72.1,48.3,68.4,120,Indoor,Speech dominant
L2,Focus Room,42.1,48.2,39.1,50.3,120,Indoor,HVAC only
...
```

### Adapting the Code

1. **Modify location definitions:**
   Edit `complete_example_4locations.py`:
   ```python
   self.locations = {
       'L1': {'name': 'Your Location 1', ...},
       'L2': {'name': 'Your Location 2', ...},
       ...
   }
   ```

2. **Load your actual data:**
   ```python
   analyzer = SoundscapeAnalysis('your_data.csv')
   ```

3. **Customize visualizations:**
   ```python
   viz = SoundwalkVisualization(your_data, your_acoustic_data)
   viz.create_comprehensive_figure(save_path='custom_results.png')
   ```

---

## Troubleshooting

### Common Issues

**Issue: "ModuleNotFoundError: No module named 'soundscapy'"**
```bash
pip install soundscapy
```

**Issue: "ModuleNotFoundError: No module named 'mosqito'"**
```bash
pip install mosqito
```

**Issue: Psychoacoustic analysis fails**
- Ensure audio files are in WAV format
- Check sampling rate (44.1 kHz or 48 kHz recommended)
- Verify files are mono or will be converted automatically

**Issue: Visualization plots not displaying**
- Install matplotlib backend: `pip install PyQt5` or use `%matplotlib inline` in Jupyter

**Issue: Data validation errors**
- Check CSV column names match expected format
- Ensure all PAQ values are 1-5 range
- Verify no missing required columns

---

## Best Practices

### For Data Collection

1. **Synchronize measurements**: Start acoustic recording exactly when listening begins
2. **Consistent timing**: Always use 2-minute listening periods
3. **Calibrate equipment**: Calibrate sound level meter before each session
4. **Document everything**: Note unusual events, weather, time of day
5. **Participant comfort**: Ensure safe, accessible listening positions

### For Data Analysis

1. **Data validation first**: Always run validation before analysis
2. **Check assumptions**: Verify normality, homogeneity before parametric tests
3. **Report effect sizes**: Include Cohen's d, eta-squared, not just p-values
4. **Visualize before statistics**: Plot data to understand patterns
5. **Document code**: Comment your analysis scripts for reproducibility

### For Paper Writing

1. **Follow ISO terminology**: Use "soundscape," "perceptual attributes," not "noise perception"
2. **Report full protocol**: Include all questionnaire sections, not just PAQ
3. **Acknowledge limitations**: Be transparent about sample size, site specificity
4. **Compare appropriately**: Only compare with studies using same methods
5. **Archive data**: Use repositories (Zenodo, OSF) for data sharing

---

## Citation

If you use this manual or code in your research, please cite:

```
[Your Name] (2025). Interactive Soundwalk Manual: ISO 12913-2 Based Soundscape 
Assessment Training. [Repository/DOI if published]
```

And cite the ISO standards:
```
ISO 12913-1:2014. Acoustics — Soundscape — Part 1: Definition and conceptual framework.
ISO 12913-2:2018. Acoustics — Soundscape — Part 2: Data collection and reporting requirements.
ISO 12913-3:2019. Acoustics — Soundscape — Part 3: Data analysis.
```

---

## Contributing

Contributions welcome! Areas for enhancement:
- Additional visualization templates
- More example datasets
- Translations to other languages
- Integration with other analysis tools
- Extended statistical methods

---

## License

This manual and code are provided for educational and research purposes. 
Please respect ISO copyright for the standards themselves.

---

## Contact

For questions, issues, or collaboration:
- Create an issue in the repository
- Email: [your contact email]

---

## Acknowledgments

This manual was developed to facilitate training on ISO 12913-based soundscape assessment. It integrates methods from the international soundscape research community and standard acoustic measurement practices.

Special thanks to:
- Soundscapy development team for the Python library
- MoSQIto team for psychoacoustic analysis tools
- ISO TC 43/SC 2 for soundscape standardization efforts

---

**Last Updated:** February 2, 2025
**Version:** 1.0
