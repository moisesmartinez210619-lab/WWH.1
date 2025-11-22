const WORDS = [
  {kriol: "diya", spanish: "agua", pron: "dí-ya"},
  {kriol: "bèt", spanish: "casa", pron: "bet"},
  {kriol: "frend", spanish: "amigo", pron: "frend"},
  {kriol: "buk", spanish: "libro", pron: "buk"},
  {kriol: "tun", spanish: "turno", pron: "tun"},
  {kriol: "pan", spanish: "pan", pron: "pan"},
  {kriol: "wan", spanish: "uno", pron: "wan"},
  {kriol: "tu", spanish: "dos", pron: "tu"},
  {kriol: "mi", spanish: "yo", pron: "mi"},
  {kriol: "yu", spanish: "tú", pron: "yu"},
  {kriol: "sol", spanish: "sol", pron: "sol"},
  {kriol: "mar", spanish: "mar", pron: "mar"},
  {kriol: "kel", spanish: "que", pron: "kel"},
  {kriol: "dis", spanish: "esto", pron: "dis"},
];

const search = document.getElementById("search");
const results = document.getElementById("results");
const count = document.getElementById("count");
const noResults = document.getElementById("noResults");

function escapeHtml(txt) {
  return txt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function render(list, q) {
  results.innerHTML = "";
  if (!q) {
    noResults.style.display = "block";
    count.textContent = "";
    return;
  }
  noResults.style.display = "none";
  if (list.length === 0) {
    results.innerHTML = `<div class="noResults">Sin resultados para "${q}"</div>`;
    count.textContent = "";
    return;
  }
  count.textContent = list.length;
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="kriol">${escapeHtml(item.kriol)}</div>
      <div class="spanish">${escapeHtml(item.spanish)}</div>
      <div class="pron"><em>${escapeHtml(item.pron || "")}</em></div>
    `;
    results.appendChild(card);
  });
}

search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = WORDS.filter(w =>
    w.kriol.toLowerCase().includes(q) ||
    w.spanish.toLowerCase().includes(q)
  );
  render(filtered, q);
});

render([], "");
