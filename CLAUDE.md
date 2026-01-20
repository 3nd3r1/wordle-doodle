# Wordle Doodle

A simple web-based tool that helps you create visual patterns using Wordle's color-coded tiles and generates word combinations to achieve those patterns.

## What it does

This tool lets you:

- Draw images/patterns on a 5×6 Wordle grid using the three tile states (correct/green, present/yellow, absent/gray)
- Generate word suggestions that could produce your desired pattern when used as Wordle guesses
- Create simple pixel art like smiley faces, hearts, or geometric patterns within Wordle's constraints

## How to use

1. **Open the interface**: Open `index.html` in a web browser
2. **Select tile state**: Choose between Correct (🟩), Present (🟨), or Absent (⬛)
3. **Draw your pattern**: Click on grid cells to paint them with the selected state
4. **Generate words**: Click "Generate Words" to get word suggestions for each row
5. **Use in Wordle**: Take the suggested words and use them as guesses in actual Wordle games

## Features

- **Interactive 5×6 grid**: Matches Wordle's exact dimensions
- **Three tile states**: All Wordle color states (green/yellow/gray)
- **Pattern drawing**: Click to paint, click again to erase
- **Word generation**: Suggests actual 5-letter words for each pattern row
- **Clear function**: Reset the entire grid with one click
- **Responsive design**: Works on desktop and mobile devices

## Example patterns you can create

- **Smiley face**: Use correct tiles for eyes and smile
- **Heart shape**: Draw a simple heart using present/correct tiles
- **Geometric shapes**: Triangles, squares, or abstract designs
- **Letters**: Spell out initials or simple letters
- **Borders**: Create frame patterns around the edges

## Technical details

- Pure HTML/CSS/JavaScript - no dependencies
- Uses a curated word bank of common 5-letter words
- Real-time pattern interaction with immediate visual feedback
- Responsive grid layout that scales to screen size
- Clean, Wordle-inspired visual design

## Project Structure

```
wordle-doodle/
├── src/
│   ├── index.html      # Main HTML file
│   ├── css/
│   │   └── styles.css  # All styling
│   └── js/
│       └── app.js      # Main application logic
└── CLAUDE.md           # This documentation
```

## Files

- `src/index.html` - Clean HTML structure with external CSS/JS references
- `src/css/styles.css` - All styling and visual design
- `src/js/app.js` - Complete JavaScript application logic
- `CLAUDE.md` - This documentation file

## Usage tips

- Start with simple patterns before attempting complex designs
- Remember that Wordle has constraints - some patterns may not have matching words
- Green tiles (correct) are the most flexible for word generation
- The tool suggests multiple words per row when possible
- Try different combinations if initial word suggestions don't work in actual Wordle

## Limitations

- Word generation is simplified and may not account for all Wordle rules
- Limited word bank (though includes ~500 common words)
- Doesn't validate against actual Wordle solutions
- Pattern complexity is limited by 5×6 grid constraints

Perfect for Wordle enthusiasts who want to create memorable guess patterns or challenge friends with specific visual outcomes!
