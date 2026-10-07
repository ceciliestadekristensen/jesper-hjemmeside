/* =========================================================
   BILLEDER OG TEKSTER TIL KARRUSEL OG GALLERI
   ---------------------------------------------------------
   Læg billederne i mappen "billeder" og skriv filnavnet her.
   Findes et billede ikke endnu, vises en grå pladsholder.

   Et før/efter-par:     { foer: "billeder/....jpg", efter: "billeder/....jpg" }
   Et enkelt billede:    { billede: "billeder/....jpg" }
   ========================================================= */

/* Karrusellen på forsiden: ét før/efter-par per opgave */
const FOER_EFTER = [
  {
    tekst: "Her har vi hjulpet en kunde med udvendig malerarbejde af gavle, vinduer og stakit.",
    foer: "billeder/foer-efter/gavl-foer.jpg",
    efter: "billeder/foer-efter/gavl-efter.jpg"
  },
  {
    tekst: "Her fik vi hjulpet en kunde med at male deres lofter hvide og frisket væggene op.",
    foer: "billeder/foer-efter/lofter-foer.jpg",
    efter: "billeder/foer-efter/lofter-efter.jpg"
  },
  {
    tekst: "Her har vi spartlet en gipsvæg op og sat mønstret tapet op hos en kunde.",
    foer: "billeder/foer-efter/tapet-foer.jpg",
    efter: "billeder/foer-efter/tapet-efter.jpg"
  },
  {
    tekst: "Så fik vi hjulpet en kunde med at få malet huset udvendigt.",
    foer: "billeder/foer-efter/hus-foer.jpg",
    efter: "billeder/foer-efter/hus-efter.jpg"
  },
  {
    tekst: "Her har vi hjulpet en kunde med at friske køkkenlåger, trappe og paneler op.",
    foer: "billeder/foer-efter/koekken-foer.jpg",
    efter: "billeder/foer-efter/koekken-efter.jpg"
  },
  {
    tekst: "Så fik vi hjulpet en kunde med at lysne lofter i en kantine og toilet.",
    foer: "billeder/foer-efter/kantine-foer.jpg",
    efter: "billeder/foer-efter/kantine-efter.jpg"
  },
  {
    tekst: "Så fik vi hjulpet en kunde med at få kittet og malet vinduerne.",
    foer: "billeder/foer-efter/vinduer-foer.jpg",
    efter: "billeder/foer-efter/vinduer-efter.jpg"
  }
];

/* Galleriet: hver opgave kan have flere billeder.
   Har en opgave mere end ét billede/par, kommer der pile på kortet. */
const GALLERI = [
  {
    kategori: "Udvendigt",
    tekst: "Her har vi hjulpet en kunde med udvendig malerarbejde af gavle, vinduer og stakit.",
    billeder: [
      { foer: "billeder/galleri/gavl-1-foer.jpg", efter: "billeder/galleri/gavl-1-efter.jpg" },
      { foer: "billeder/galleri/gavl-2-foer.jpg", efter: "billeder/galleri/gavl-2-efter.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her fik vi hjulpet en kunde med at male deres lofter hvide og frisket væggene op.",
    billeder: [
      { foer: "billeder/galleri/lofter-1-foer.jpg", efter: "billeder/galleri/lofter-1-efter.jpg" },
      { foer: "billeder/galleri/lofter-2-foer.jpg", efter: "billeder/galleri/lofter-2-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har vi spartlet en gipsvæg op og sat mønstret tapet op hos en kunde.",
    billeder: [
      { foer: "billeder/galleri/tapet-1-foer.jpg", efter: "billeder/galleri/tapet-1-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har vi sat fotostater op hos en (nu) meget glad kunde.",
    billeder: [
      { billede: "billeder/galleri/fotostat-1.jpg" },
      { billede: "billeder/galleri/fotostat-2.jpg" },
      { billede: "billeder/galleri/fotostat-3.jpg" }
    ]
  },
  {
    kategori: "Udvendigt",
    tekst: "Så fik vi hjulpet en kunde med at få malet huset udvendigt.",
    billeder: [
      { foer: "billeder/galleri/hus-1-foer.jpg", efter: "billeder/galleri/hus-1-efter.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har vi hjulpet en kunde med spartling, opsætning af filt samt malet lofter og vægge.",
    billeder: [
      { billede: "billeder/galleri/filt-1.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har vi hjulpet en kunde med at friske køkkenlåger, trappe og paneler op.",
    billeder: [
      { foer: "billeder/galleri/koekken-1-foer.jpg", efter: "billeder/galleri/koekken-1-efter.jpg" }
    ]
  },
  {
    kategori: "Erhverv",
    tekst: "Så fik vi hjulpet en kunde med at lysne lofter i en kantine og toilet.",
    billeder: [
      { foer: "billeder/galleri/kantine-1-foer.jpg", efter: "billeder/galleri/kantine-1-efter.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har vi hjulpet en kunde med at friske lofter, vægge og træværk op samt malet trappe og gelænder.",
    billeder: [
      { billede: "billeder/galleri/trappe-1.jpg" }
    ]
  },
  {
    kategori: "Udvendigt",
    tekst: "Så fik vi hjulpet en kunde med at få kittet og malet vinduerne.",
    billeder: [
      { foer: "billeder/galleri/vinduer-1-foer.jpg", efter: "billeder/galleri/vinduer-1-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har vi sat en fotostat op hos en kunde.",
    billeder: [
      { billede: "billeder/galleri/fotostat-b-1.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her hjælper vi en kunde med spartling, slibning og opsætning af filt.",
    billeder: [
      { billede: "billeder/galleri/spartling-1.jpg" }
    ]
  }
];
