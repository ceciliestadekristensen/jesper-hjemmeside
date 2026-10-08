/* =========================================================
   Malermester Jesper Lauritsen – funktioner
   Menu på mobil, karrusel, galleri og kontaktformular.
   Billeder og tekster ligger i js/billeder.js
   ========================================================= */

const EMAIL = "malermesterlauritsen@gmail.com";

const KATEGORI_FARVE = {
  Indvendigt: "var(--rb-roed)",
  Udvendigt: "var(--rb-orange)",
  Tapet: "var(--rb-blaa)",
  Erhverv: "var(--rb-lilla)"
};

const PIL_VENSTRE = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>';
const PIL_HOEJRE = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>';

/* Laver en billedboks. Mangler filen, vises pladsholder-teksten i stedet. */
function lavBillede(src, pladsholder, alt, ekstraKlasse) {
  const boks = document.createElement("div");
  boks.className = "billede" + (ekstraKlasse ? " " + ekstraKlasse : "");
  boks.dataset.tekst = pladsholder;
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.addEventListener("error", () => img.remove());
    boks.appendChild(img);
  }
  return boks;
}

function lavMaerke(tekst, efter) {
  const m = document.createElement("span");
  m.className = "maerke" + (efter ? " maerke--efter" : "");
  m.textContent = tekst;
  return m;
}

/* Et før/efter-par eller et enkelt billede */
function lavVisning(punkt, beskrivelse) {
  if (punkt.billede) {
    return lavBillede(punkt.billede, "[Billede]", beskrivelse, "enkelt");
  }
  const par = document.createElement("div");
  par.className = "par";
  const foer = lavBillede(punkt.foer, "[Før]", "Før: " + beskrivelse);
  const efter = lavBillede(punkt.efter, "[Efter]", "Efter: " + beskrivelse);
  foer.appendChild(lavMaerke("Før", false));
  efter.appendChild(lavMaerke("Efter", true));
  par.append(foer, efter);
  return par;
}

/* ---------- Menu på mobil ---------- */
function startMenu() {
  const knap = document.querySelector(".menu-knap");
  const menu = document.getElementById("menu");
  if (!knap || !menu) return;
  knap.addEventListener("click", () => {
    const aaben = knap.getAttribute("aria-expanded") === "true";
    knap.setAttribute("aria-expanded", String(!aaben));
    menu.classList.toggle("aaben", !aaben);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("aaben")) {
      knap.setAttribute("aria-expanded", "false");
      menu.classList.remove("aaben");
      knap.focus();
    }
  });
}

/* ---------- Karrusel på forsiden ---------- */
function startKarrusel() {
  const rod = document.getElementById("karrusel");
  if (!rod || typeof FOER_EFTER === "undefined" || !FOER_EFTER.length) return;

  const visning = rod.querySelector(".karrusel__visning");
  const tekst = rod.querySelector(".karrusel__tekst");
  const taeller = rod.querySelector(".taeller");
  const prikker = document.getElementById("karrusel-prikker");
  const n = FOER_EFTER.length;
  let i = 0;

  prikker.innerHTML = "";
  FOER_EFTER.forEach((_, k) => {
    const p = document.createElement("button");
    p.type = "button";
    p.className = "prik";
    p.setAttribute("aria-label", "Vis opgave " + (k + 1));
    p.innerHTML = "<span></span>";
    p.addEventListener("click", () => vis(k));
    prikker.appendChild(p);
  });

  function vis(k) {
    i = (k + n) % n;
    const punkt = FOER_EFTER[i];
    visning.replaceChildren(lavVisning(punkt, punkt.tekst));
    tekst.textContent = punkt.tekst;
    taeller.textContent = (i + 1) + " / " + n;
    prikker.querySelectorAll(".prik").forEach((p, k2) => {
      p.setAttribute("aria-current", k2 === i ? "true" : "false");
    });
  }

  rod.querySelector("[data-forrige]").addEventListener("click", () => vis(i - 1));
  rod.querySelector("[data-naeste]").addEventListener("click", () => vis(i + 1));
  rod.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") vis(i - 1);
    if (e.key === "ArrowRight") vis(i + 1);
  });

  /* Swipe på mobil */
  let startX = null;
  visning.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  visning.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) vis(dx < 0 ? i + 1 : i - 1);
    startX = null;
  });

  vis(0);
}

/* ---------- Galleri ---------- */
function startGalleri() {
  const gitter = document.getElementById("galleri");
  if (!gitter || typeof GALLERI === "undefined") return;

  GALLERI.forEach((opgave) => {
    const kort = document.createElement("article");
    kort.className = "opgave";
    kort.dataset.kategori = opgave.kategori;

    const billedplads = document.createElement("div");
    const tekstdel = document.createElement("div");
    tekstdel.className = "opgave__tekst";

    const kat = document.createElement("span");
    kat.className = "kategori";
    kat.innerHTML = '<i style="background:' + (KATEGORI_FARVE[opgave.kategori] || "var(--tekst-svag)") + '"></i>';
    kat.append(opgave.kategori);

    const p = document.createElement("p");
    p.textContent = opgave.tekst;
    tekstdel.append(kat, p);

    let i = 0;
    const antal = opgave.billeder.length;
    const vis = () => billedplads.replaceChildren(lavVisning(opgave.billeder[i], opgave.tekst));

    if (antal > 1) {
      const styring = document.createElement("div");
      styring.className = "opgave__styring";
      const forrige = document.createElement("button");
      forrige.type = "button";
      forrige.className = "pil";
      forrige.setAttribute("aria-label", "Forrige billede");
      forrige.innerHTML = PIL_VENSTRE;
      const naeste = document.createElement("button");
      naeste.type = "button";
      naeste.className = "pil pil--fyldt";
      naeste.setAttribute("aria-label", "Næste billede");
      naeste.innerHTML = PIL_HOEJRE;
      const t = document.createElement("span");
      t.className = "taeller";
      const opdater = () => { vis(); t.textContent = (i + 1) + " / " + antal; };
      forrige.addEventListener("click", () => { i = (i - 1 + antal) % antal; opdater(); });
      naeste.addEventListener("click", () => { i = (i + 1) % antal; opdater(); });
      styring.append(forrige, t, naeste);
      tekstdel.appendChild(styring);
      opdater();
    } else {
      vis();
    }

    kort.append(billedplads, tekstdel);
    gitter.appendChild(kort);
  });

  /* Filterknapper */
  const knapper = document.querySelectorAll(".filter");
  knapper.forEach((knap) => {
    knap.addEventListener("click", () => {
      const valgt = knap.dataset.filter;
      knapper.forEach((k) => k.setAttribute("aria-pressed", String(k === knap)));
      gitter.querySelectorAll(".opgave").forEach((kort) => {
        kort.hidden = valgt !== "Alle" && kort.dataset.kategori !== valgt;
      });
    });
  });
}

/* ---------- Kontaktformular ----------
   Sendes via Web3Forms i baggrunden, så kunden bliver på siden
   og får en tak-besked på dansk. */
function startFormularer() {
  document.querySelectorAll('form[action*="web3forms"]').forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const knap = form.querySelector('button[type="submit"]');
      const besked = form.querySelector(".formular__besked");
      const knapTekst = knap.textContent;
      knap.disabled = true;
      knap.textContent = "Sender...";
      besked.textContent = "";
      try {
        const svar = await fetch(form.action, { method: "POST", body: new FormData(form) });
        const data = await svar.json();
        if (data.success) {
          form.reset();
          besked.textContent = "Tak for din besked! Jeg vender tilbage hurtigst muligt.";
          besked.style.color = "#2E7D32";
        } else {
          throw new Error(data.message);
        }
      } catch (fejl) {
        besked.textContent = "Beskeden kunne ikke sendes. Ring i stedet på 28 29 90 38 eller skriv til " + EMAIL + ".";
        besked.style.color = "#B3261E";
      }
      knap.disabled = false;
      knap.textContent = knapTekst;
    });
  });
}
/* ---------- Forstør billeder ---------- */
function startLightbox() {
  const boks = document.createElement("div");
  boks.className = "lightbox";
  boks.hidden = true;
  boks.setAttribute("role", "dialog");
  boks.setAttribute("aria-modal", "true");
  boks.setAttribute("aria-label", "Forstørret billede");
  boks.innerHTML = '<button class="lightbox__luk" type="button" aria-label="Luk billede">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>' +
    '</button><img class="lightbox__billede" alt="">';
  document.body.appendChild(boks);
  const stort = boks.querySelector(".lightbox__billede");
  const luk = boks.querySelector(".lightbox__luk");
  let forrigeFokus = null;

  function aaben(img) {
    stort.src = img.currentSrc || img.src;
    stort.alt = img.alt;
    boks.hidden = false;
    document.body.style.overflow = "hidden";
    forrigeFokus = document.activeElement;
    luk.focus();
  }
  function lukBoks() {
    boks.hidden = true;
    stort.removeAttribute("src");
    document.body.style.overflow = "";
    if (forrigeFokus) forrigeFokus.focus();
  }

  luk.addEventListener("click", lukBoks);
  boks.addEventListener("click", (e) => { if (e.target === boks) lukBoks(); });
  document.addEventListener("keydown", (e) => {
    if (!boks.hidden && (e.key === "Escape" || e.key === "Tab")) { e.preventDefault(); if (e.key === "Escape") lukBoks(); }
  });

  const kanForstoerres = (el) => el && el.matches(".billede img") && !el.closest("a");
  document.addEventListener("click", (e) => {
    if (kanForstoerres(e.target)) aaben(e.target);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && kanForstoerres(document.activeElement)) aaben(document.activeElement);
  });
  const goerFokuserbar = () => document.querySelectorAll(".billede img").forEach((img) => {
    if (!img.closest("a") && !img.hasAttribute("tabindex")) img.tabIndex = 0;
  });
  goerFokuserbar();
  new MutationObserver(goerFokuserbar).observe(document.body, { childList: true, subtree: true });
}
document.addEventListener("DOMContentLoaded", () => {
  startMenu();
  startKarrusel();
  startGalleri();
  startFormularer();
  startLightbox();
  const header = document.querySelector(".header");
  const skygge = () => header && header.classList.toggle("skygge", window.scrollY > 8);
  window.addEventListener("scroll", skygge, { passive: true });
  skygge();
  const aar = document.getElementById("aar");
  if (aar) aar.textContent = new Date().getFullYear();
});
