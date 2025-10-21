
const cortex_core = ['jstor', 'jstor 2']


function conduct_search() {

  search_var = document.getElementById("search_var").value
  console.log(search_var)
  vs = search_var.split('')
  document.getElementById("search_var_result").innerHTML = cortex_core.includes(search_var)

  document.getElementById("search_output").innerHTML = cortex_core.filter(vs[0])
}


const documents = [
  /*
    { id: , content: '',author: '', ai_score: '0%', url: ''},

  */
  { id: 1, content: "Two Lectures on Comets", author: 'Winthrop, John', ai_score: 'None', url: 'https://www.jstor.org/stable/community.32503417?seq=1' },
  { id: 2, content: "A Biblical Chronology of the World, from Creation to Christ", author: 'A. W. Blakesley', ai_score: 'none', url: 'https://www.jstor.org/stable/community.39731890' },
  { id: 3, content: 'A Defence of the Protestant Bible', author: 'Akroatees', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731889' },
  { id: 4, content: 'A Discourse of the True Meaning of the Bible', author: 'Lady Cook', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731902' },
  { id: 5, content: 'Library of the American Bible Union', author: 'T.J. Conant', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731906' },
  { id: 6, content: 'Google users are less likely to click on links when an AI summary appears in the results', author: 'Athena Chapekis and Anna Lieb', ai_score: 'Low', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
  { id: 7, content: 'Vivaldi takes a stand: keep browsing human', author: 'Jon von Tetzchner', ai_score: 'Low', url: 'https://vivaldi.com/blog/keep-exploring/' },
  { id: 8, content: 'Doing more, but learning less: The risks of AI in research', author: 'Mike Cummings', ai_score: 'Low', url: 'https://news.yale.edu/2024/03/07/doing-more-learning-less-risks-ai-research' },
];
const pre = 'https://'
function performSearch() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const results = search(query);
  displayResults(results);
}

function search(query) {
  return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResults(results) {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = '';
  results.forEach(result => {
    const listItem = document.createElement('a');
    listItem.innerHTML = '<span class="si" style="font-size: 12pt;">' + result.content + '</span> <p style="font-size: 8pt;" id="sid">AI Likelihood: ' + result.ai_score + ' | Author: ' + result.author + '</p>';
    listItem.style = 'color: var(--mercury);border-bottom: 0px solid var(--mercury);'
    listItem.target = '_blank'
    listItem.href = result.url
    resultsElement.appendChild(listItem);
  });
}