document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('searchInput').value;
    var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    window.location.href = url;
});

// Focus on the input box when the page loads
window.onload = function() {
    document.getElementById('searchInput').focus();
};
