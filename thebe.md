---
thebe: true
kernelspec:
  display_name: Python 3
  language: python
  name: python3
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: "0.13"
    jupytext_version: "1.11.5"
---

Table 1 below allows for a look into the translation results:

```{code-cell} python
import pandas as pd
import random
from IPython.display import display, Markdown

csv_path = "data/translations.csv"  # CSV with all translations
data = pd.read_csv(csv_path, delimiter=';')

random_row = data.sample(n=1).iloc[0]  # Select a random row

# Show in a table
table = "| Header | Content |\n"
table += "|--------|---------|\n"
for column, value in random_row.items():
    # Only show the first 400 characters
    truncated_value = str(value)[:400] + "..." if len(str(value)) > 400 else str(value)
    table += f"| {column} | {truncated_value} |\n"
display(Markdown(table))
```

<button onclick="thebeButton()">Show another random example from the translation</button>

<script>
    function thebeButton() {
        Jupyter.notebook.execute_cells([1]);
    }
</script>
