
const cortex_core = ['jstor', 'jstor 2']

const alert_icon = '<img src="./img/icons/alert-triangle.svg" alt="alert" style="width: 8pt;">'

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
  { id: 1, title: 'Two Lectures on Comets', content: "Two Lectures on Comets", author: 'Winthrop, John', ai_score: 'None', url: 'https://www.jstor.org/stable/community.32503417?seq=1' },
  { id: 2, title: 'A Biblical Chronology of the World, from Creation to Christ', content: "A Biblical Chronology of the World, from Creation to Christ", author: 'A. W. Blakesley', ai_score: 'none', url: 'https://www.jstor.org/stable/community.39731890' },
  { id: 3, title: 'A Defence of the Protestant Bible', content: 'A Defence of the Protestant Bible', author: 'Akroatees', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731889' },
  { id: 4, title: 'A Discourse of the True Meaning of the Bible', content: 'A Discourse of the True Meaning of the Bible', author: 'Lady Cook', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731902' },
  { id: 5, title: 'Library of the American Bible Union', content: 'Library of the American Bible Union', author: 'T.J. Conant', ai_score: 'None', url: 'https://www.jstor.org/stable/community.39731906' },
  { id: 6, title: 'Google users are less likely to click on links when an AI summary appears in the results', content: 'Google users are less likely to click on links when an AI summary appears in the results', author: 'Athena Chapekis and Anna Lieb', ai_score: 'Low', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
  { id: 7, title: 'Vivaldi takes a stand: keep browsing human', content: 'Vivaldi takes a stand: keep browsing human', author: 'Jon von Tetzchner', ai_score: 'Low', url: 'https://vivaldi.com/blog/keep-exploring/' },
  { id: 8, title: 'Doing more, but learning less: The risks of AI in research', content: 'Doing more, but learning less: The risks of AI in research', author: 'Mike Cummings', ai_score: 'Low', url: 'https://news.yale.edu/2024/03/07/doing-more-learning-less-risks-ai-research' },
  { id: 9, title: 'Vibe Coding Is the New Open Source—in the Worst Way Possible | WIRED', content: 'Vibe Coding Is the New Open Source—in the Worst Way Possible | WIRED', author: 'Lily Hay Newman', ai_score: 'Low', url: 'https://www.wired.com/story/vibe-coding-is-the-new-open-source/' },
  { id: 10, title: 'People Who Say Theyre Experiencing AI Psychosis Beg the FTC for Help | WIRED', content: 'People Who Say Theyre Experiencing AI Psychosis Beg the FTC for Help | WIRED', author: 'Staff Writer ' + alert_icon, ai_score: 'Medium', url: 'https://www.wired.com/story/ftc-complaints-chatgpt-ai-psychosis/' },
  { id: 1761771245369, title: '', content: "Open Educational Resources (OER) Program", author: "MSU", ai_score: "Low", url: "https://lib.msu.edu/oer" },
  { id: 1761771333022, title: 'OER Commons', content: "OER Commons", author: "OER Commons", ai_score: "Low", url: "https://oercommons.org/" },
  { id: 1761771562622, title: 'A-REI An Extraneous Solution', content: "A-REI An Extraneous Solution ", author: "Illustrative Mathematics", ai_score: "Low", url: "https://oercommons.org/courses/a-rei-an-extraneous-solution" },
  { id: 1761771620806, title: 'Linear algebra I: First introduction', content: "Linear algebra I: First introduction", author: "David Liao", ai_score: "Low", url: "https://oercommons.org/courses/linear-algebra-i-first-introduction" },
  { id: 1761771767097, title: 'Coordinates and the Cartesian Plane ', content: "Coordinates and the Cartesian Plane ", author: "Aubrey McKelvey", ai_score: "Low", url: "https://oercommons.org/courses/coordinates-and-the-cartesian-plane" },
  { id: 1761776566034, title: 'OpenStax Algebra & Trigonometry', content: "OpenStax Algebra & Trigonometry", author: " California Community Colleges Online Education Initiative", ai_score: "Low", url: "https://oercommons.org/courses/openstax-algebra-trigonometry" },
  { id: 1761776654505, title: 'Open Educational Resources (OER)', content: " Open Educational Resources (OER)", author: "educause", ai_score: "Low", url: "https://library.educause.edu/topics/teaching-and-learning/open-educational-resources-oer" },
  { id: 1761776694271, title: 'Massive List of OER', content: "Massive List of OER ", author: "commonwealthu", ai_score: "Low", url: "https://library.commonwealthu.edu/OER/list" },
  { id: 1761776763858, title: 'Peer-reviewed + Openly licensed. 100% free. Text Books', content: "Peer-reviewed + Openly licensed. 100% free. Text Books", author: "openstax", ai_score: "N/A", url: "https://openstax.org/subjects" },
  { id: 1761776837442, title: 'Algebra and Trigonometry 2e', content: "Algebra and Trigonometry 2e", author: "Valeree Falduto, Palm Beach State College Rachael Gross, Towson University David Lippman, Pierce College Melonie Rasmussen, Pierce College Rick Norwood, East Tennessee State University Nicholas Belloit, Florida State College at Jacksonville Harold Whipple, Formerly of Columbia College Jean-Marie Magnier, Springfield Technical Community College Christina Fernandez", ai_score: "Low", url: "https://openstax.org/details/books/algebra-and-trigonometry-2e" },
  { id: 1761776888746, title: 'Calculus Volume 1', content: "Calculus Volume 1", author: "Joseph Lakey, New Mexico State University Elaine A. Terry, Saint Joseph’s University Alfred K. Mulzet, Florida State College at Jacksonville Sheri J. Boyd, Rollins College Joyati Debnath, Winona State University Michelle Merriweather, Bronxville High School David Smith, University of the Virgin Islands Nicoleta Virginia Bila, Fayetteville State University Valeree Falduto, Palm Beach State College Kirsten R. Messer, Colorado State University-Pueblo William Radulovich, Formerly at Florida State College at Jacksonville Erica M. Rutter, Arizona State University David Torain, Hampton University Catherine Abbott, Keuka College Julie Levandosky, Framingham State University David McCune, William Jewell College", ai_score: "Low", url: "https://openstax.org/details/books/calculus-volume-1" },
  { id: 1761776924607, title: 'Calculus Volume 2', content: "Calculus Volume 2", author: "William Radulovich, Formerly at Florida State College at Jacksonville Erica M. Rutter, Arizona State University David Smith, University of the Virgin Islands Kirsten R. Messer, Colorado State University-Pueblo Alfred K. Mulzet, Florida State College at Jacksonville Nicoleta Virginia Bila, Fayetteville State University Sheri J. Boyd, Rollins College Joyati Debnath, Winona State University Valeree Falduto, Palm Beach State College Elaine A. Terry, Saint Joseph’s University David Torain, Hampton University Michelle Merriweather, Bronxville High School Catherine Abbott, Keuka College Joseph Lakey, New Mexico State University Julie Levandosky, Framingham State University David McCune, William Jewell College", ai_score: "Low", url: "https://openstax.org/details/books/calculus-volume-2" },
  { id: 1761776953654, title: 'Calculus Volume 3', content: "Calculus Volume 3", author: "Nicoleta Virginia Bila, Fayetteville State University Sheri J. Boyd, Rollins College David Smith, University of the Virgin Islands Elaine A. Terry, Saint Joseph’s University David Torain, Hampton University Kirsten R. Messer, Colorado State University-Pueblo Alfred K. Mulzet, Florida State College at Jacksonville William Radulovich, Formerly at Florida State College at Jacksonville Erica M. Rutter, Arizona State University David McCune, William Jewell College Michelle Merriweather, Bronxville High School Joseph Lakey, New Mexico State University Julie Levandosky, Framingham State University Valeree Falduto, Palm Beach State College Catherine Abbott, Keuka College Joyati Debnath, Winona State University", ai_score: "Low", url: "https://openstax.org/details/books/calculus-volume-3" },
  { id: 1761777003546, title: 'College Algebra 2e', content: "College Algebra 2e", author: "Valeree Falduto, Palm Beach State College Rachael Gross, Towson University David Lippman, Pierce College Melonie Rasmussen, Pierce College Rick Norwood, East Tennessee State University Nicholas Belloit, Florida State College at Jacksonville Harold Whipple, Formerly of Columbia College Jean-Marie Magnier, Springfield Technical Community College Christina Fernandez", ai_score: "Low", url: "https://openstax.org/details/books/college-algebra-2e" },
  { id: 1761777042855, title: 'College Algebra 2e with Corequisite Support', content: "College Algebra 2e with Corequisite Support", author: "Jay Abramson, Arizona State University Sharon North, St. Louis Community College", ai_score: "Low", url: "https://openstax.org/details/books/college-algebra-corequisite-support-2e" },
  { id: 1761777107582, title: 'Contemporary Mathematics', content: "Contemporary Mathematics", author: "Donna Kirk, University of Wisconsin at Superior, Barbara Boschmans, Northern Arizona University Brian Beaudrie, Northern Arizona University Matthew Cathey, Wofford College Valeree Falduto, Palm Beach State College Maureen Gerlofs, Texas State University Quin Hearn, Broward College Ian Walters, DYouville College", ai_score: "Low", url: "https://openstax.org/details/books/contemporary-mathematics" },
  { id: 1761784385016, title: 'Precalculus 2e', content: "Precalculus 2e", author: "Jay Abramson, Arizona State University Valeree Falduto, Palm Beach State College Rachael Gross, Towson University David Lippman, Pierce College Melonie Rasmussen, Pierce College Rick Norwood, East Tennessee State University Nicholas Belloit, Florida State College at Jacksonville Harold Whipple, Formerly of Columbia College Jean-Marie Magnier, Springfield Technical Community College Christina Fernandez", ai_score: "Low", url: "https://openstax.org/details/books/precalculus-2e" },
  { id: 1761785172594, title: "Principles of Data Science", content: "Comprehensive data science text for one- or two-semester courses, applicable to various fields with diverse examples, real-world data, ethics, and AI discussions. Dr. Shaun V. Ault, Dr. Soohyun Nam Liao, Larry Musolino, Wisam Bukaita, Aeron Zentner", author: "Dr. Shaun V. Ault, Dr. Soohyun Nam Liao, Larry Musolino, Wisam Bukaita, Aeron Zentner", ai_score: "Low", url: "https://openstax.org/details/books/principles-data-science" },
  { id: 1761790119126, title: "Introductory Business Statistics 2e", content: "Introductory Business Statistics 2e is a free, comprehensive textbook for one-semester statistics courses, focusing on business applications and real-world examples. Alexander Holmes, The University of Oklahoma Barbara Illowsky, De Anza College Susan Dean, De Anza College Kevin Hadley, Federal Reserve Bank of Kansas City", author: "Alexander Holmes, The University of Oklahoma Barbara Illowsky, De Anza College Susan Dean, De Anza College Kevin Hadley, Federal Reserve Bank of Kansas City", ai_score: "Low", url: "https://openstax.org/details/books/introductory-business-statistics-2e" },

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
    listItem.innerHTML = '<span class="si" style="font-size: 12pt;">' + result.title + '</span> <p style="font-size: 8pt;" id="sid">AI Likelihood: ' + result.ai_score + ' | Author: ' + result.author + '</p>';
    listItem.style = 'color: var(--mercury);border-bottom: 0px solid var(--mercury);'
    listItem.target = '_blank'
    listItem.href = result.url
    resultsElement.appendChild(listItem);
  });
}