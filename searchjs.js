const suggestionsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "User Interface",
    "Autocomplete",
    "Flexbox",
    "Grid Layout"
];

// Sample search results without irrelevant topics
const searchResults = [
    { title: "HTML Basics", description: "Learn the basics of HTML, the foundational language for building web pages." },
    { title: "HTML Forms", description: "Understand how to create forms in HTML to gather user input." },
    { title: "CSS Flexbox Guide", description: "Master Flexbox for modern, responsive layouts." },
    { title: "CSS Grid Layout", description: "A comprehensive guide to CSS Grid for layout design." },
    { title: "JavaScript Fundamentals", description: "An introduction to JavaScript and how it powers dynamic web experiences." },
    { title: "JavaScript ES6 Features", description: "Explore the new features introduced in ES6 for JavaScript." },
    { title: "Responsive Design Tips", description: "Tips and tricks for creating layouts that adapt to all screen sizes." },
    { title: "User Interface Best Practices", description: "Enhance your UI with best practices for a seamless user experience." },
    { title: "Understanding Autocomplete", description: "Learn how to implement autocomplete features in web applications." },
    { title: "Flexbox vs. Grid", description: "A comparison of Flexbox and Grid layout techniques." },
    { title: "Web Accessibility Guidelines", description: "Essential practices for making your web applications accessible." },
    { title: "JavaScript Libraries Overview", description: "An overview of popular JavaScript libraries and their use cases." }
];

function showSuggestions(input) {
    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";
    if (input.length > 0) {
        suggestionsBox.style.display = "block";
        const filteredSuggestions = suggestionsList.filter(item => item.toLowerCase().includes(input.toLowerCase()));
        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement("p");
            suggestionItem.textContent = item;
            suggestionItem.onclick = () => {
                selectSuggestion(item);
                displayResults(item);
            };
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = "none";
    }
}

function selectSuggestion(text) {
    document.getElementById("search-input").value = text;
    document.getElementById("suggestions").style.display = "none";
    displayResults(text);
}

// Function to display search results based on input
function displayResults(query) {
    const resultsContainer = document.querySelector(".result-cards");
    resultsContainer.innerHTML = ""; // Clear previous results
    const filteredResults = searchResults.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));

    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const resultCard = document.createElement("div");
            resultCard.classList.add("result-card");
            resultCard.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
            resultsContainer.appendChild(resultCard);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found for your search.</p>";
    }
}
