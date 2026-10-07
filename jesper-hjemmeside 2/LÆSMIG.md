# Hjemmeside – Malermester Jesper Lauritsen

## Filerne

- `index.html` – forsiden
- `ydelser.html`, `galleri.html`, `om-jesper.html`, `kontakt.html` – undersiderne
- `css/style.css` – alt design (farver og skrifttyper står øverst)
- `js/billeder.js` – billeder og tekster til karrusellen og galleriet
- `js/main.js` – menu, karrusel, galleri og kontaktformular
- `billeder/` – alle billeder

## Billeder, der skal lægges ind

Læg billederne i mappen `billeder` med præcis disse navne. Indtil et billede findes, vises en grå boks med en tekst.

| Fil | Hvor |
|---|---|
| `billeder/cover.jpg` | Forsiden øverst (Jesper ved bilen) |
| `billeder/facebook.jpg` | Skærmbillede af Jespers Facebook-side på mobilen (tag det på en telefon, så det har den rigtige form) |
| `billeder/jesper.jpg` | Om Jesper |
| `billeder/hjertestarter.jpg` | Om Jesper, hjertestarteren ved Netto |

### Karrusel og galleri
Navnene står i `js/billeder.js`. Du kan enten give dine billeder de navne, der står der, eller rette navnene i filen, så de passer til dine billeder.

- **Flere billeder til en opgave i galleriet:** tilføj en linje mere under `billeder:` for den opgave. Så kommer der automatisk pile på kortet.
- **Ny opgave:** kopiér en hel blok `{ kategori: ..., tekst: ..., billeder: [...] },` og ret den.
- **Kategorier:** Indvendigt, Udvendigt, Tapet eller Erhverv (stavet præcis sådan, så filterknapperne virker).

Tip: Gør billederne mindre, før de lægges ind (fx max 1600 px brede), så siden loader hurtigt.

## Kontaktformularen

Siden har ingen server, så formularen åbner kundens mailprogram med en færdigudfyldt mail til malermesterlauritsen@gmail.com. Vil I have, at formularen sender direkte, kan den kobles på en gratis tjeneste som Formspree eller Web3Forms.

## Mangler stadig

- Jespers historie på Om Jesper-siden
- Telefontider på Kontakt-siden
- Eventuelt medlemskab af Danske Malermestre (der ligger en skjult sektion klar i `om-jesper.html`)
