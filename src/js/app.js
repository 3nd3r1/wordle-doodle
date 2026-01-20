class WordleImageGenerator {
    constructor() {
        this.grid = [];
        this.currentState = "correct";
        this.wordBank = WORDS;
        this.initGrid();
        this.bindEvents();
    }

    initGrid() {
        const gridContainer = document.getElementById("grid");
        for (let row = 0; row < 6; row++) {
            this.grid[row] = [];
            for (let col = 0; col < 5; col++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.dataset.row = row;
                cell.dataset.col = col;
                gridContainer.appendChild(cell);
                this.grid[row][col] = "";
            }
        }
    }

    bindEvents() {
        document.getElementById("grid").addEventListener("click", (e) => {
            if (e.target.classList.contains("cell")) {
                this.toggleCell(e.target);
            }
        });

        document
            .getElementById("correct-btn")
            .addEventListener("click", () => this.setCurrentState("correct"));
        document
            .getElementById("present-btn")
            .addEventListener("click", () => this.setCurrentState("present"));
        document
            .getElementById("absent-btn")
            .addEventListener("click", () => this.setCurrentState("absent"));
        document
            .getElementById("clear-btn")
            .addEventListener("click", () => this.clearGrid());
        document
            .getElementById("generate-btn")
            .addEventListener("click", () => this.generateWords());
    }

    setCurrentState(state) {
        this.currentState = state;
        document
            .querySelectorAll(".state-btn")
            .forEach((btn) => btn.classList.remove("active"));
        document.getElementById(state + "-btn").classList.add("active");
    }

    toggleCell(cell) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        if (this.grid[row][col] === this.currentState) {
            this.grid[row][col] = "";
            cell.className = "cell";
        } else {
            this.grid[row][col] = this.currentState;
            cell.className = "cell " + this.currentState;
        }
    }

    clearGrid() {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 5; col++) {
                this.grid[row][col] = "";
            }
        }
        document.querySelectorAll(".cell").forEach((cell) => {
            cell.className = "cell";
        });
    }


    generateWords() {
        const results = [];

        for (let row = 0; row < 6; row++) {
            const pattern = this.grid[row];
            const hasPattern = pattern.some((cell) => cell !== "");

            if (hasPattern) {
                const words = this.findWordsForPattern(pattern);
                results.push({
                    row: row + 1,
                    pattern: pattern,
                    words: words,
                });
            }
        }

        this.displayResults(results);
    }

    findWordsForPattern(pattern) {
        const validWords = [];

        for (const word of this.wordBank) {
            if (this.wordMatchesPattern(word, pattern)) {
                validWords.push(word);
            }
        }

        return validWords.slice(0, 5);
    }

    wordMatchesPattern(word, pattern) {
        for (let i = 0; i < 5; i++) {
            if (pattern[i] === "correct") {
                continue;
            } else if (pattern[i] === "present") {
                continue;
            } else if (pattern[i] === "absent") {
                continue;
            }
        }
        return true;
    }

    displayResults(results) {
        const resultsDiv = document.getElementById("results");

        if (results.length === 0) {
            resultsDiv.innerHTML =
                "<p>Draw some patterns in the grid first!</p>";
            return;
        }

        let html = "<h3>Generated Word Combinations:</h3>";

        for (const result of results) {
            html += `<div class="word-result">`;
            html += `<strong>Row ${result.row}:</strong> `;
            html +=
                result.words.length > 0
                    ? result.words.join(", ")
                    : "No matching words found";
            html += `</div>`;
        }

        html +=
            "<p><small>💡 Use any of these words as guesses in Wordle to create your pattern!</small></p>";

        resultsDiv.innerHTML = html;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new WordleImageGenerator();
});
