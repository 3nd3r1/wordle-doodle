class WordleImageGenerator {
    constructor() {
        this.grid = [];
        this.currentState = 'correct';
        this.initGrid();
        this.bindEvents();
        this.wordBank = this.generateWordBank();
    }

    initGrid() {
        const gridContainer = document.getElementById('grid');
        for (let row = 0; row < 6; row++) {
            this.grid[row] = [];
            for (let col = 0; col < 5; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                gridContainer.appendChild(cell);
                this.grid[row][col] = '';
            }
        }
    }

    bindEvents() {
        document.getElementById('grid').addEventListener('click', (e) => {
            if (e.target.classList.contains('cell')) {
                this.toggleCell(e.target);
            }
        });

        document.getElementById('correct-btn').addEventListener('click', () => this.setCurrentState('correct'));
        document.getElementById('present-btn').addEventListener('click', () => this.setCurrentState('present'));
        document.getElementById('absent-btn').addEventListener('click', () => this.setCurrentState('absent'));
        document.getElementById('clear-btn').addEventListener('click', () => this.clearGrid());
        document.getElementById('generate-btn').addEventListener('click', () => this.generateWords());
    }

    setCurrentState(state) {
        this.currentState = state;
        document.querySelectorAll('.state-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(state + '-btn').classList.add('active');
    }

    toggleCell(cell) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        if (this.grid[row][col] === this.currentState) {
            this.grid[row][col] = '';
            cell.className = 'cell';
        } else {
            this.grid[row][col] = this.currentState;
            cell.className = 'cell ' + this.currentState;
        }
    }

    clearGrid() {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 5; col++) {
                this.grid[row][col] = '';
            }
        }
        document.querySelectorAll('.cell').forEach(cell => {
            cell.className = 'cell';
        });
    }

    generateWordBank() {
        return [
            'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
            'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
            'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
            'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD',
            'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW',
            'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD',
            'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING',
            'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH',
            'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHESS',
            'CHEST', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK',
            'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER',
            'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE',
            'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING',
            'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK',
            'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY',
            'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA',
            'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH',
            'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME',
            'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS',
            'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN',
            'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART',
            'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX',
            'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL',
            'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL',
            'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOOSE', 'LOWER', 'LUCKY',
            'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR',
            'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH',
            'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER',
            'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCEAN', 'OFFER', 'OFTEN',
            'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE',
            'PHONE', 'PHOTO', 'PIANO', 'PICKED', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE',
            'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT',
            'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO',
            'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY', 'REALM', 'REBEL', 'REFER', 'RELAX',
            'REPAY', 'REPLY', 'RIGHT', 'RIGID', 'RIVER', 'ROBOT', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND',
            'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SETUP',
            'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
            'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SILLY', 'SINCE', 'SIXTH', 'SIXTY',
            'SIZED', 'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID',
            'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT',
            'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM',
            'STEEL', 'STEEP', 'STEER', 'STERN', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE',
            'STORM', 'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER',
            'SWEET', 'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEETH', 'TERRY', 'TEXAS', 'THANK',
            'THEFT', 'THEIR', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE',
            'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIRED', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH',
            'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIBE',
            'TRICK', 'TRIED', 'TRIES', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST', 'TRUTH', 'TWICE', 'UNDER',
            'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID',
            'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'WASTE', 'WATCH', 'WATER',
            'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN', 'WORLD',
            'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
        ];
    }

    generateWords() {
        const results = [];
        
        for (let row = 0; row < 6; row++) {
            const pattern = this.grid[row];
            const hasPattern = pattern.some(cell => cell !== '');
            
            if (hasPattern) {
                const words = this.findWordsForPattern(pattern);
                results.push({
                    row: row + 1,
                    pattern: pattern,
                    words: words
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
            if (pattern[i] === 'correct') {
                continue;
            } else if (pattern[i] === 'present') {
                continue;
            } else if (pattern[i] === 'absent') {
                continue;
            }
        }
        return true;
    }

    displayResults(results) {
        const resultsDiv = document.getElementById('results');
        
        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>Draw some patterns in the grid first!</p>';
            return;
        }
        
        let html = '<h3>Generated Word Combinations:</h3>';
        
        for (const result of results) {
            html += `<div class="word-result">`;
            html += `<strong>Row ${result.row}:</strong> `;
            html += result.words.length > 0 ? result.words.join(', ') : 'No matching words found';
            html += `</div>`;
        }
        
        html += '<p><small>💡 Use any of these words as guesses in Wordle to create your pattern!</small></p>';
        
        resultsDiv.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WordleImageGenerator();
});