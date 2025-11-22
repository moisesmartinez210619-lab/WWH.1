const WORDS = [
  {kriol: "wata", spanish: "agua", pron: "waata"},
  {kriol: "house", spanish: "casa", pron: "house"},
  {kriol: "frend", spanish: "amigo", pron: "frend"},
  {kriol: "buk", spanish: "libro", pron: "buuk"},
  {kriol: "torms", spanish: "turno", pron: "toorms"},
  {kriol: "mi", spanish: "yo", pron: "mii"},
  {kriol: "yu", spanish: "tú", pron: "yuu"},
  {kriol: "dis", spanish: "esto", pron: "diis"},
   {kriol: "dis", spanish: "esto", pron: "diis"},
   {kriol: "niem", spanish: "nombre", pron: "nieim"},
   {kriol: "pupa", spanish: "padre", pron: "pupa"},
  {kriol: "kount", spanish: "contar", pron: "kount"},
  {kriol: "pipl", spanish: "personar", pron: "pipul"},
  {kriol: "him", spanish: "el", pron: "him"},
  {kriol: "wen", spanish: "cuando", pron: "wen"},
  {kriol: "kaal", spanish: "llamar", pron: "kaal"},
  {kriol: "good", spanish: "bien", pron: "good"},
  {kriol: "evenin", spanish: "tarde", pron: "eevnin"},
  {kriol: "nait", spanish: "noche", pron: "nait"},
  {kriol: "manin", spanish: "mañana", pron: "manin"},
  {kriol: "kiip", spanish: "mantener", pron: "keep"},
  {kriol: "how", spanish: "como", pron: "houw"},
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
