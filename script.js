const APIUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

window.onload = async function () {

    /* event listener */
    document.querySelector("#searchInput").addEventListener('change', fetchQueries);

    /* function */
    async function fetchQueries() {
        const request = await fetch(`${APIUrl}${document.querySelector("#searchInput").value}`).catch(err => console.log(`ERR: ${err}`));
        const res = await request.json().catch(err => console.log(`ERR: ${err}`));
        console.log(res);
    }
}



document.querySelector('#searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.querySelector('#searchInput').value;
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.location.href = url;
});


