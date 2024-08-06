// Select the input field and the output div
const API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

const queryInput = document.getElementById('queryInput');

// Add an event listener to the input field
queryInput.addEventListener('input', function () {
    // Get the current value of the input field
    const currentValue = queryInput.value;
    // Reset the field,
    try {
        fetch(`${API}${currentValue}`).then((response) => {
            console.log(response);

            response.json().then((data) => {
                const queries = data[1];
                document.querySelector("#queries").innerHTML = "";

                queries.forEach(suggestion => {

                    document.querySelector("#queries").innerHTML += `<li><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(suggestion)}">${suggestion}</a></li>`
                });
            })
        })
    } catch (error) {
        console.error(error.message);
    }
});


function search() {
    const query = document.getElementById('queryInput').value;
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    window.location.href = url;
}