document.getElementById('summarize-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;

    if (inputText.trim()) {
        // Dummy summarization logic for now
        const summary = inputText.split(' ').slice(0, 10).join(' ') + '...';
        document.getElementById('summary-output').innerText = summary;
    } else {
        document.getElementById('summary-output').innerText = 'Please enter some text to summarize.';
    }
});
