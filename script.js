//Add reference to  HTML using Document Object Model(DOM)

const startScreen = document.getElementById("start-screen");

const quizScreen = document.getElementById("quiz-screen");

const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");

const questionText = document.getElementById("question-text");

const answersContainer = document.getElementById("answers-container");

const currentQuestionSpan = document.getElementById("current-question");

const totalQuestionsSpan = document.getElementById("total-questions");

const scoreSpan = document.getElementById("score");

const finalScoreSpan = document.getElementById("final-score");

const maxScoreSpan = document.getElementById("max-score");

const resultMessage = document.getElementById("result-message");

const restartButton = document.getElementById("restart-btn");

const progressBar = document.getElementById("progress");

const questionsBank = [
    {
        
        question: "What does HTML stand for?", 
        options: [
            {text: "High Transfer Machine Language", correct: false },
            {text: "Hyperlink and Text Markup Language", correct: false },
            {text: "Hyper Text Machine Language", correct: false },
            {text: "Hyper Text Markup Language", correct: true},
        ],

    },

        {
        question: "Which HTML element is used to define the most important heading?",
        options: [
            { text: "<heading>", correct: false },
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            { text: "<br>", correct: true },
            { text: "<lb>", correct: false },
            { text: "<break>", correct: false },
            { text: "<hr>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify a unique identifier for an HTML element?",
        options: [
            { text: "class", correct: false },
            { text: "id", correct: true },
            { text: "type", correct: false },
            { text: "name", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        options: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Systems", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "surface-color", correct: false }
        ]
    },
    {
        question: "How do you select an element with the class name 'menu' in CSS?",
        options: [
            { text: "#menu", correct: false },
            { text: "menu", correct: false },
            { text: ".menu", correct: true },
            { text: "*menu", correct: false }
        ]
    },

    {
        question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
        options: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },

    {
        question: "What is the correct way to write an array in JavaScript?",
        options: [
            { text: "const colors = ['red', 'green', 'blue']", correct: true },
            { text: "const colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "const colors = 'red', 'green', 'blue'", correct: false },
            { text: "const colors = {\"red\", \"green\", \"blue\"}", correct: false }
        ]
    },

    {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "push()", correct: false },
            { text: "slice()", correct: false }
        ]
    },

    {
        question: "What is the data type of the value 'true' in JavaScript?",
        options: [
            { text: "String", correct: false },
            { text: "Boolean", correct: true },
            { text: "Number", correct: false },
            { text: "Object", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to display a scalar measurement within a known range?",
        options: [
            { text: "<gauge>", correct: false },
            { text: "<range>", correct: false },
            { text: "<meter>", correct: true },
            { text: "<progress>", correct: false }
        ]
    },
    {
        question: "Which attribute is required for an <img> element to provide accessibility?",
        options: [
            { text: "title", correct: false },
            { text: "alt", correct: true },
            { text: "src", correct: false },
            { text: "href", correct: false }
        ]
    },
    {
        question: "In the CSS Box Model, which layer is between the padding and the margin?",
        options: [
            { text: "Content", correct: false },
            { text: "Border", correct: true },
            { text: "Outline", correct: false },
            { text: "Width", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the stack order of elements?",
        options: [
            { text: "z-index", correct: true },
            { text: "layer-order", correct: false },
            { text: "stack-level", correct: false },
            { text: "position", correct: false }
        ]
    },
    {
        question: "What is the default value of the position property in CSS?",
        options: [
            { text: "absolute", correct: false },
            { text: "relative", correct: false },
            { text: "static", correct: true },
            { text: "fixed", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: [
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "===", correct: true },
            { text: "equals", correct: false }
        ]
    },
    {
        question: "What will 'typeof null' return in JavaScript?",
        options: [
            { text: "'null'", correct: false },
            { text: "'object'", correct: true },
            { text: "'undefined'", correct: false },
            { text: "'boolean'", correct: false }
        ]
    },
    {
        question: "Which built-in JavaScript method converts a JSON string into a JavaScript object?",
        options: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.toObject()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "How do you add a new item to the end of a JavaScript array?",
        options: [
            { text: "push()", correct: true },
            { text: "append()", correct: false },
            { text: "pop()", correct: false },
            { text: "addToEnd()", correct: false }
        ]
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        options: [
            { text: "onmouseclick", correct: false },
            { text: "onclick", correct: true },
            { text: "onchange", correct: false },
            { text: "onhover", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to embed an independent, self-contained article?",
        options: [
            { text: "<section>", correct: false },
            { text: "<article>", correct: true },
            { text: "<aside>", correct: false },
            { text: "<div>", correct: false }
        ]
    },
    {
        question: "Which HTML5 attribute specifies that an input field must be filled out before submitting?",
        options: [
            { text: "validate", correct: false },
            { text: "required", correct: true },
            { text: "mandatory", correct: false },
            { text: "placeholder", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to make a grid container?",
        options: [
            { text: "grid-template: container", correct: false },
            { text: "display: grid", correct: true },
            { text: "layout: grid", correct: false },
            { text: "display: flex-grid", correct: false }
        ]
    },
    {
        question: "What does 'justify-content' align items along in a standard Row Flexbox container?",
        options: [
            { text: "The main axis", correct: true },
            { text: "The cross axis", correct: false },
            { text: "The vertical grid", correct: false },
            { text: "The border layout", correct: false }
        ]
    },
    {
        question: "Which CSS property adds a shadow effect to text elements?",
        options: [
            { text: "box-shadow", correct: false },
            { text: "element-shadow", correct: false },
            { text: "shadow-effect", correct: false },
            { text: "text-shadow", correct: true }
        ]
    },
    {
        question: "What is the output of 'console.log(2 + '2')' in JavaScript?",
        options: [
            { text: "4", correct: false },
            { text: "'22'", correct: true },
            { text: "NaN", correct: false },
            { text: "TypeError", correct: false }
        ]
    },
    {
        question: "Which method prevents a default action from happening on a JavaScript event?",
        options: [
            { text: "event.stopImmediatePropagation()", correct: false },
            { text: "event.stopPropagation()", correct: false },
            { text: "event.preventDefault()", correct: true },
            { text: "event.cancelAction()", correct: false }
        ]
    },
    {
        question: "What is the primary scope of a variable declared with 'let' in JavaScript?",
        options: [
            { text: "Global scope only", correct: false },
            { text: "Function scope only", correct: false },
            { text: "Block scope", correct: true },
            { text: "Module scope only", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method creates a new array filled with the results of calling a function on every element?",
        options: [
            { text: "forEach()", correct: false },
            { text: "filter()", correct: false },
            { text: "reduce()", correct: false },
            { text: "map()", correct: true }
        ]
    },
    {
        question: "How do you select an HTML element by its ID using the modern DOM API?",
        options: [
            { text: "document.querySelector('#idName')", correct: true },
            { text: "document.selectElement('#idName')", correct: false },
            { text: "document.getElementsById('idName')", correct: false },
            { text: "document.queryID('idName')", correct: false }
        ]
    },

        {
        question: "Which HTML tag is used to display preformatted text exactly as written in the source code?",
        options: [
            { text: "<code>", correct: false },
            { text: "<pre>", correct: true },
            { text: "<samp>", correct: false },
            { text: "<text>", correct: false }
        ]
    },
    {
        question: "Which HTML5 attribute links a form input to a predefined list of options?",
        options: [
            { text: "list", correct: true },
            { text: "options", correct: false },
            { text: "datalist", correct: false },
            { text: "choices", correct: false }
        ]
    },
    {
        question: "Which CSS pseudo-class matches an element that is currently targeted by a URL fragment identifier?",
        options: [
            { text: ":active", correct: false },
            { text: ":focus", correct: false },
            { text: ":target", correct: true },
            { text: ":visited", correct: false }
        ]
    },
    {
        question: "What does the 'em' unit represent in CSS text sizing?",
        options: [
            { text: "The font size of the root element", correct: false },
            { text: "The pixel depth of the device screen", correct: false },
            { text: "The font size of the element's parent", correct: true },
            { text: "The width of the visible viewport", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to clip content when it overflows its container?",
        options: [
            { text: "overflow", correct: true },
            { text: "clip-path", correct: false },
            { text: "visibility", correct: false },
            { text: "display", correct: false }
        ]
    },
    {
        question: "What is the result of 'console.log(typeof NaN)' in JavaScript?",
        options: [
            { text: "'number'", correct: true },
            { text: "'NaN'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'null'", correct: false }
        ]
    },
    {
        question: "Which keyword is used inside an asynchronous function to pause execution until a Promise resolves?",
        options: [
            { text: "wait", correct: false },
            { text: "pause", correct: false },
            { text: "await", correct: true },
            { text: "defer", correct: false }
        ]
    },
    {
        question: "Which JavaScript method merges two or more arrays without modifying the existing arrays?",
        options: [
            { text: "concat()", correct: true },
            { text: "join()", correct: false },
            { text: "push()", correct: false },
            { text: "combine()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
            { text: "To format the code according to industry rules", correct: false },
            { text: "To enforce stricter parsing and error handling", correct: true },
            { text: "To speed up code compilation times", correct: false },
            { text: "To hide confidential data from browsers", correct: false }
        ]
    },
    {
        question: "Which storage mechanism holds data in the browser with no expiration date?",
        options: [
            { text: "sessionStorage", correct: false },
            { text: "Cookie", correct: false },
            { text: "localStorage", correct: true },
            { text: "CacheStorage", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to provide a caption for a <figure> element?",
        options: [
            { text: "<figcaption>", correct: true },
            { text: "<caption>", correct: false },
            { text: "<legend>", correct: false },
            { text: "<label>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies where to open a linked document when clicked?",
        options: [
            { text: "rel", correct: false },
            { text: "target", correct: true },
            { text: "href", correct: false },
            { text: "location", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'rem' unit in CSS?",
        options: [
            { text: "Relative to the font-size of the parent element", correct: false },
            { text: "Relative to the font-size of the root element", correct: true },
            { text: "Relative to the height of the viewport", correct: false },
            { text: "Relative to the monitor's resolution", correct: false }
        ]
    },
    {
        question: "Which CSS property specifies the order in which flex items appear inside a container?",
        options: [
            { text: "flex-index", correct: false },
            { text: "order", correct: true },
            { text: "z-index", correct: false },
            { text: "stack", correct: false }
        ]
    },
    {
        question: "Which CSS property changes the mouse pointer shape when hovering over an element?",
        options: [
            { text: "pointer-events", correct: false },
            { text: "mouse", correct: false },
            { text: "cursor", correct: true },
            { text: "hover-icon", correct: false }
        ]
    },
    {
        question: "What does the JavaScript array method 'unshift()' do?",
        options: [
            { text: "Removes the first element of an array", correct: false },
            { text: "Removes the last element of an array", correct: false },
            { text: "Adds new elements to the beginning of an array", correct: true },
            { text: "Reverses the order of elements in an array", correct: false }
        ]
    },
    {
        question: "What is the correct way to write an arrow function in JavaScript?",
        options: [
            { text: "const myFunc = () => {}", correct: true },
            { text: "const myFunc = function() => {}", correct: false },
            { text: "const myFunc = () -> {}", correct: false },
            { text: "function myFunc() => {}", correct: false }
        ]
    },
    {
        question: "What value does a JavaScript function return by default if no return statement is specified?",
        options: [
            { text: "null", correct: false },
            { text: "false", correct: false },
            { text: "0", correct: false },
            { text: "undefined", correct: true }
        ]
    },
    {
        question: "Which HTML5 global attribute allows users to edit the visible text content of an element?",
        options: [
            { text: "editable", correct: false },
            { text: "contenteditable", correct: true },
            { text: "text-edit", correct: false },
            { text: "input", correct: false }
        ]
    },
    {
        question: "Which JavaScript operator extracts properties from an object or items from an array into distinct variables?",
        options: [
            { text: "Destructuring assignment", correct: true },
            { text: "Spread operator", correct: false },
            { text: "Rest parameters", correct: false },
            { text: "Type conversion", correct: false }
        ]
    },

        {
        question: "Which HTML tag is used to embed client-side vector graphics natively in the page?",
        options: [
            { text: "<canvas>", correct: false },
            { text: "<svg>", correct: true },
            { text: "<graphics>", correct: false },
            { text: "<picture>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies an initial value for an input text field?",
        options: [
            { text: "placeholder", correct: false },
            { text: "value", correct: true },
            { text: "text", correct: false },
            { text: "default", correct: false }
        ]
    },
    {
        question: "Which CSS property configuration prevents text from wrapping to a new line?",
        options: [
            { text: "white-space: nowrap", correct: true },
            { text: "text-wrap: none", correct: false },
            { text: "word-break: keep-all", correct: false },
            { text: "overflow: hidden", correct: false }
        ]
    },
    {
        question: "What is the correct CSS syntax to make all paragraph elements bold?",
        options: [
            { text: "p { font-weight: bold; }", correct: true },
            { text: "p { text-style: bold; }", correct: false },
            { text: "p { font-size: bold; }", correct: false },
            { text: "<p style='bold'>", correct: false }
        ]
    },
    {
        question: "Which CSS pseudo-class matches an element only when it has user focus?",
        options: [
            { text: ":hover", correct: false },
            { text: ":active", correct: false },
            { text: ":focus", correct: true },
            { text: ":visited", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to execute a function repeatedly at set time intervals?",
        options: [
            { text: "setTimeout()", correct: false },
            { text: "setInterval()", correct: true },
            { text: "runRepeatedly()", correct: false },
            { text: "requestAnimationFrame()", correct: false }
        ]
    },
    {
        question: "What is the value of 'result' after executing: const result = '5' - 2;?",
        options: [
            { text: "3", correct: true },
            { text: "'52'", correct: false },
            { text: "NaN", correct: false },
            { text: "TypeError", correct: false }
        ]
    },
    {
        question: "Which built-in JavaScript property returns the total number of characters in a string?",
        options: [
            { text: "size", correct: false },
            { text: "count", correct: false },
            { text: "length", correct: true },
            { text: "index", correct: false }
        ]
    },
    {
        question: "Which HTML5 attribute must be applied to an element to make it draggable via the Drag and Drop API?",
        options: [
            { text: "draggable='true'", correct: true },
            { text: "drag='allowed'", correct: false },
            { text: "moveable='true'", correct: false },
            { text: "allow-drag='true'", correct: false }
        ]
    },
    {
        question: "Which JavaScript method returns a shallow copy of a portion of an array into a new array object without modifying the original?",
        options: [
            { text: "splice()", correct: false },
            { text: "slice()", correct: true },
            { text: "split()", correct: false },
            { text: "shift()", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to group related elements in a form and draw a box around them?",
        options: [
            { text: "<fieldset>", correct: true },
            { text: "<legend>", correct: false },
            { text: "<group>", correct: false },
            { text: "<form>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the URL of the page that processes the submitted form data?",
        options: [
            { text: "method", correct: false },
            { text: "action", correct: true },
            { text: "target", correct: false },
            { text: "href", correct: false }
        ]
    },
    {
        question: "Which CSS property specifies how an image or video should be resized to fit its container?",
        options: [
            { text: "object-fit", correct: true },
            { text: "image-size", correct: false },
            { text: "aspect-ratio", correct: false },
            { text: "background-size", correct: false }
        ]
    },
    {
        question: "What is the correct CSS syntax to select all elements with the name 'button' inside a 'div' element?",
        options: [
            { text: "div button", correct: true },
            { text: "div.button", correct: false },
            { text: "div + button", correct: false },
            { text: "div > .button", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the spacing between lines of text?",
        options: [
            { text: "letter-spacing", correct: false },
            { text: "line-height", correct: true },
            { text: "word-spacing", correct: false },
            { text: "text-indent", correct: false }
        ]
    },
    {
        question: "Which operator checks if a specific property exists within a JavaScript object?",
        options: [
            { text: "has", correct: false },
            { text: "exists", correct: false },
            { text: "in", correct: true },
            { text: "instanceof", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method tests whether all elements in the array pass the test implemented by the provided function?",
        options: [
            { text: "some()", correct: false },
            { text: "every()", correct: true },
            { text: "filter()", correct: false },
            { text: "find()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'const' keyword when declaring an object in JavaScript?",
        options: [
            { text: "It prevents the object from being mutated or modified", correct: false },
            { text: "It prevents the variable from being reassigned to a new value", correct: true },
            { text: "It automatically freezes all nested properties", correct: false },
            { text: "It makes the object globally accessible across files", correct: false }
        ]
    },
    {
        question: "Which HTML5 API allows a web application to store up to 5MB of structured data locally inside the user's browser session?",
        options: [
            { text: "IndexedDB", correct: false },
            { text: "WebSQL", correct: false },
            { text: "Web Storage API", correct: true },
            { text: "FileSystem API", correct: false }
        ]
    },
    {
        question: "Which method is used to remove an event listener that was previously registered with addEventListener()?",
        options: [
            { text: "removeEventListener()", correct: true },
            { text: "detachEvent()", correct: false },
            { text: "clearListener()", correct: false },
            { text: "deleteEventListener()", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to represent the header of a section or the entire page?",
        options: [
            { text: "<head>", correct: false },
            { text: "<header>", correct: true },
            { text: "<top>", correct: false },
            { text: "<heading>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies that an input field should automatically get focus when the page loads?",
        options: [
            { text: "focus", correct: false },
            { text: "autofocus", correct: true },
            { text: "active", correct: false },
            { text: "select", correct: false }
        ]
    },
    {
        question: "Which CSS property configuration forces an element to break lines inside words if the text overflows its boundary?",
        options: [
            { text: "word-break: break-all", correct: true },
            { text: "text-wrap: force", correct: false },
            { text: "overflow: scroll", correct: false },
            { text: "white-space: normal", correct: false }
        ]
    },
    {
        question: "Which CSS layout feature allows you to change the alignment of items along the cross axis inside a Flexbox container?",
        options: [
            { text: "justify-content", correct: false },
            { text: "align-items", correct: true },
            { text: "flex-direction", correct: false },
            { text: "place-content", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to dynamically calculate a structural length value using mathematical expressions?",
        options: [
            { text: "calc()", correct: true },
            { text: "math()", correct: false },
            { text: "compute()", correct: false },
            { text: "expr()", correct: false }
        ]
    },
    {
        question: "What is the return value of 'console.log(Array.isArray({}))' in JavaScript?",
        options: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "undefined", correct: false },
            { text: "TypeError", correct: false }
        ]
    },
    {
        question: "Which JavaScript structural pattern allows you to group multiple asynchronous operations and wait for all of them to settle successfully?",
        options: [
            { text: "Promise.all()", correct: true },
            { text: "Promise.race()", correct: false },
            { text: "Promise.any()", correct: false },
            { text: "Async.awaitAll()", correct: false }
        ]
    },
    {
        question: "Which array method checks if at least one element in a JavaScript array passes a given functional condition?",
        options: [
            { text: "every()", correct: false },
            { text: "some()", correct: true },
            { text: "filter()", correct: false },
            { text: "find()", correct: false }
        ]
    },
    {
        question: "Which HTML5 semantic element is intended to wrap introductory content or navigational links inside a sidebar?",
        options: [
            { text: "<aside>", correct: true },
            { text: "<section>", correct: false },
            { text: "<nav>", correct: false },
            { text: "<div>", correct: false }
        ]
    },
    {
        question: "Which JavaScript function converts an object or value into a clean JSON string formatting?",
        options: [
            { text: "JSON.parse()", correct: false },
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.toString()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to mark text that has been deleted from a document?",
        options: [
            { text: "<remove>", correct: false },
            { text: "<del>", correct: true },
            { text: "<s>", correct: false },
            { text: "<strike>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies that an input field can accept multiple values or files?",
        options: [
            { text: "multiple", correct: true },
            { text: "multi", correct: false },
            { text: "allow-many", correct: false },
            { text: "split", correct: false }
        ]
    },
    {
        question: "Which CSS property allows you to control the scaling behavior of a single item within a Flexbox row layout?",
        options: [
            { text: "flex-grow", correct: true },
            { text: "flex-basis-max", correct: false },
            { text: "scale-flex", correct: false },
            { text: "item-width", correct: false }
        ]
    },
    {
        question: "Which CSS pseudo-element is used to insert structural content directly before the content of an element?",
        options: [
            { text: "::first", correct: false },
            { text: "::front", correct: false },
            { text: "::before", correct: true },
            { text: "::start", correct: false }
        ]
    },
    {
        question: "Which CSS property defines whether an element's borders are joined together or separated in a structural table?",
        options: [
            { text: "border-collapse", correct: true },
            { text: "border-spacing", correct: false },
            { text: "table-layout", correct: false },
            { text: "border-style", correct: false }
        ]
    },
    {
        question: "What is the return value of 'Math.floor(4.7)' in JavaScript?",
        options: [
            { text: "5", correct: false },
            { text: "4.7", correct: false },
            { text: "4", correct: true },
            { text: "4.5", correct: false }
        ]
    },
    {
        question: "Which JavaScript string method checks if a string terminates with the sequence of characters from another string?",
        options: [
            { text: "endsWith()", correct: true },
            { text: "includes()", correct: false },
            { text: "matches()", correct: false },
            { text: "lastIndex()", correct: false }
        ]
    },
    {
        question: "Which JavaScript console method outputs an interactive graphical list of the properties of a specified object?",
        options: [
            { text: "console.log()", correct: false },
            { text: "console.dir()", correct: true },
            { text: "console.info()", correct: false },
            { text: "console.props()", correct: false }
        ]
    },
    {
        question: "Which HTML5 global attribute handles whether spelling errors should be highlighted by the browser?",
        options: [
            { text: "spellcheck", correct: true },
            { text: "autocorrect", correct: false },
            { text: "grammar", correct: false },
            { text: "check-spelling", correct: false }
        ]
    },
    {
        question: "Which operator matches values based on their evaluation patterns inside modern JavaScript switch statements?",
        options: [
            { text: "case", correct: true },
            { text: "match", correct: false },
            { text: "when", correct: false },
            { text: "default", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to insert a thematic break or horizontal rule?",
        options: [
            { text: "<line>", correct: false },
            { text: "<break>", correct: false },
            { text: "<hr>", correct: true },
            { text: "<divider>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute prevents autocomplete suggestions on input fields?",
        options: [
            { text: "autocomplete='off'", correct: true },
            { text: "suggestions='none'", correct: false },
            { text: "cache='false'", correct: false },
            { text: "autofill='disabled'", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to make text uppercase or lowercase?",
        options: [
            { text: "text-style", correct: false },
            { text: "font-variant", correct: false },
            { text: "text-transform", correct: true },
            { text: "case-format", correct: false }
        ]
    },
    {
        question: "Which CSS layout engine uses grid lines, tracks, and areas to position elements in two dimensions?",
        options: [
            { text: "Flexbox", correct: false },
            { text: "Grid", correct: true },
            { text: "Float", correct: false },
            { text: "Absolute positioning", correct: false }
        ]
    },
    {
        question: "Which CSS visibility value hides an element but keeps its structural space in the page layout?",
        options: [
            { text: "display: none", correct: false },
            { text: "visibility: hidden", correct: true },
            { text: "opacity: 0", correct: false },
            { text: "overflow: hidden", correct: false }
        ]
    },
    {
        question: "What is the correct syntax to create a new template literal string in JavaScript?",
        options: [
            { text: "const str = `Hello ${name}`", correct: true },
            { text: "const str = 'Hello ${name}'", correct: false },
            { text: "const str = \"Hello ${name}\"", correct: false },
            { text: "const str = (Hello [name])", correct: false }
        ]
    },
    {
        question: "Which JavaScript loop is explicitly designed to iterate over the keys or properties of an object?",
        options: [
            { text: "for...of", correct: false },
            { text: "while", correct: false },
            { text: "for...in", correct: true },
            { text: "forEach", correct: false }
        ]
    },
    {
        question: "Which method is used to convert a floating point number to a string with a fixed number of decimals?",
        options: [
            { text: "toFixed()", correct: true },
            { text: "toPrecision()", correct: false },
            { text: "round()", correct: false },
            { text: "parseFloat()", correct: false }
        ]
    },
    {
        question: "Which HTML5 input type generates a slider interface element for numerical values?",
        options: [
            { text: "type='slider'", correct: false },
            { text: "type='range'", correct: true },
            { text: "type='number'", correct: false },
            { text: "type='gauge'", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method executes a reducer function on each element to produce a single summary output value?",
        options: [
            { text: "reduce()", correct: true },
            { text: "map()", correct: false },
            { text: "filter()", correct: false },
            { text: "accumulate()", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to highlight text for reference or notation purposes?",
        options: [
            { text: "<highlight>", correct: false },
            { text: "<mark>", correct: true },
            { text: "<strong>", correct: false },
            { text: "<spot>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the media type of the resource at the target URL?",
        options: [
            { text: "type", correct: true },
            { text: "media", correct: false },
            { text: "rel", correct: false },
            { text: "kind", correct: false }
        ]
    },
    {
        question: "Which CSS property establishes the initial main size of a flex item before space distribution?",
        options: [
            { text: "flex-basis", correct: true },
            { text: "flex-grow", correct: false },
            { text: "flex-shrink", correct: false },
            { text: "flex-size", correct: false }
        ]
    },
    {
        question: "Which CSS combiner matches elements that are direct children of a specified parent?",
        options: [
            { text: "Space ( )", correct: false },
            { text: "Greater-than symbol (>)", correct: true },
            { text: "Plus sign (+)", correct: false },
            { text: "Tilde sign (~)", correct: false }
        ]
    },
    {
        question: "Which CSS list-style-type value removes bullet points completely from an unordered list?",
        options: [
            { text: "none", correct: true },
            { text: "hidden", correct: false },
            { text: "no-bullet", correct: false },
            { text: "blank", correct: false }
        ]
    },
    {
        question: "Which modern JavaScript loop is specifically designed to iterate over iterable objects like Arrays and Maps?",
        options: [
            { text: "for...in", correct: false },
            { text: "for...each", correct: false },
            { text: "for...of", correct: true },
            { text: "loop.through", correct: false }
        ]
    },
    {
        question: "What does the 'this' keyword reference by default inside a global function context in non-strict mode?",
        options: [
            { text: "The current object instance", correct: false },
            { text: "The window/global object", correct: true },
            { text: "undefined", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method extracts a specific value by returning the index of the first matched element?",
        options: [
            { text: "indexOf()", correct: true },
            { text: "search()", correct: false },
            { text: "findIndex()", correct: false },
            { text: "position()", correct: false }
        ]
    },
    {
        question: "Which HTML5 global attribute adds a custom data payload directly to an element markup structure?",
        options: [
            { text: "payload-*", correct: false },
            { text: "custom-*", correct: false },
            { text: "data-*", correct: true },
            { text: "meta-*", correct: false }
        ]
    },
    {
        question: "Which modern operator checks if a left-hand value is null or undefined, returning a right-hand fallback if it is?",
        options: [
            { text: "Logical OR (||)", correct: false },
            { text: "Nullish coalescing (??)", correct: true },
            { text: "Ternary operator (? :)", correct: false },
            { text: "Optional chaining (?.)", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to display a small inline comment or side note, like copyright text?",
        options: [
            { text: "<sub>", correct: false },
            { text: "<small>", correct: true },
            { text: "<span>", correct: false },
            { text: "<note>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies a short hint that describes the expected value of an input field?",
        options: [
            { text: "hint", correct: false },
            { text: "title", correct: false },
            { text: "placeholder", correct: true },
            { text: "value", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to specify whether an element's background image scrolls with the page or is fixed?",
        options: [
            { text: "background-attachment", correct: true },
            { text: "background-position", correct: false },
            { text: "background-clip", correct: false },
            { text: "background-origin", correct: false }
        ]
    },
    {
        question: "Which CSS pseudo-class targets an element that has no children elements or text nodes at all?",
        options: [
            { text: ":blank", correct: false },
            { text: ":void", correct: false },
            { text: ":empty", correct: true },
            { text: ":clear", correct: false }
        ]
    },
    {
        question: "Which CSS property configuration prevents mouse interactions like clicking or hovering on an element?",
        options: [
            { text: "pointer-events: none", correct: true },
            { text: "user-select: none", correct: false },
            { text: "cursor: default", correct: false },
            { text: "interaction: disabled", correct: false }
        ]
    },
    {
        question: "Which built-in JavaScript function converts a numerical string into a floating-point number?",
        options: [
            { text: "Number.toFloat()", correct: false },
            { text: "parseFloat()", correct: true },
            { text: "Math.float()", correct: false },
            { text: "convertToNumber()", correct: false }
        ]
    },
    {
        question: "Which operator allows you to safely read nested property values from an object structure without throwing a null-pointer error?",
        options: [
            { text: "Optional chaining (?.)", correct: true },
            { text: "Nullish coalescing (??)", correct: false },
            { text: "Logical AND (&&)", correct: false },
            { text: "Safe navigation (->)", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method modifies the original array structure by sorting its elements in place?",
        options: [
            { text: "order()", correct: false },
            { text: "arrange()", correct: false },
            { text: "sort()", correct: true },
            { text: "filter()", correct: false }
        ]
    },
    {
        question: "Which HTML5 semantic element is explicitly designed to contain a set of navigation links?",
        options: [
            { text: "<links>", correct: false },
            { text: "<menu>", correct: false },
            { text: "<nav>", correct: true },
            { text: "<routing>", correct: false }
        ]
    },
    {
        question: "What is the primary technical term for a JavaScript function that references variables from its outer lexical scope?",
        options: [
            { text: "Closure", correct: true },
            { text: "Callback", correct: false },
            { text: "Prototype", correct: false },
            { text: "Constructor", correct: false }
        ]
    },

        {
        question: "Which HTML element is used to define a modern, responsive container for multiple image sources?",
        options: [
            { text: "<source>", correct: false },
            { text: "<imagegroup>", correct: false },
            { text: "<picture>", correct: true },
            { text: "<canvas>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the relationship between the current document and the linked resource?",
        options: [
            { text: "type", correct: false },
            { text: "rel", correct: true },
            { text: "link", correct: false },
            { text: "connect", correct: false }
        ]
    },
    {
        question: "Which CSS property specifies whether an element should be visible when turned or flipped facing away from the screen?",
        options: [
            { text: "backface-visibility", correct: true },
            { text: "transform-style", correct: false },
            { text: "perspective-origin", correct: false },
            { text: "rotate-hidden", correct: false }
        ]
    },
    {
        question: "Which CSS pseudo-class allows you to select elements based on a mathematical formula tracking their index order among siblings?",
        options: [
            { text: ":nth-child()", correct: true },
            { text: ":index-match()", correct: false },
            { text: ":only-child", correct: false },
            { text: ":first-of-type", correct: false }
        ]
    },
    {
        question: "Which CSS value forces a layout element to reset or strictly clear float alignments on both left and right sides?",
        options: [
            { text: "clear: both", correct: true },
            { text: "float: none", correct: false },
            { text: "overflow: auto", correct: false },
            { text: "display: block", correct: false }
        ]
    },
    {
        question: "Which JavaScript standard method safely removes a specified property key and value from a mutable object structure?",
        options: [
            { text: "delete object.property", correct: true },
            { text: "object.remove(property)", correct: false },
            { text: "clear object.property", correct: false },
            { text: "object.property = null", correct: false }
        ]
    },
    {
        question: "Which native global function parses a JSON-formatted text block into a structural JavaScript object?",
        options: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.objectify()", correct: false },
            { text: "Object.fromJSON()", correct: false }
        ]
    },
    {
        question: "Which JavaScript array method filters out an individual item by returning the index value of its absolute last appearance?",
        options: [
            { text: "lastIndexOf()", correct: true },
            { text: "indexOf()", correct: false },
            { text: "findIndex()", correct: false },
            { text: "searchLast()", correct: false }
        ]
    },
    {
        question: "What structural programming mechanism allows a JavaScript function code block to continue tracking variables inside an isolated lexical parent environment after it returns?",
        options: [
            { text: "Closure", correct: true },
            { text: "Hoisting", correct: false },
            { text: "Callback chain", correct: false },
            { text: "Prototype link", correct: false }
        ]
    }
];


// Quiz STATE Variablss

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = questionsBank.length;
maxScoreSpan.textContent = questionsBank.length;

//EventLIisteners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

//function declaration for startButton Event Listener

  function startQuiz() {
    //reset variables
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestions();
  }

//  Declare showQuestions function called in startQuiz function

  function showQuestions() {
    //reset state
    answersDisabled = false;
    const currentQuestion = questionsBank[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / questionsBank.length) * 100;

    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

     currentQuestion.options.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });

  }

  function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < questionsBank.length) {
      showQuestions();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / questionsBank.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
