/* =========================================================
   BILLEDER OG TEKSTER TIL KARRUSEL OG GALLERI
   ---------------------------------------------------------
   Et før/efter-par:     { foer: "billeder/....jpg", efter: "billeder/....jpg" }
   Et enkelt billede:    { billede: "billeder/....jpg" }
   Findes et billede ikke, vises en grå pladsholder.
   ========================================================= */

/* Karrusellen på forsiden: ét før/efter-par per opgave */
const FOER_EFTER = [
  {
    tekst: "Her har jeg hjulpet en kunde med udvendigt malerarbejde af gavle, vinduer og stakit.",
    foer: "billeder/galleri/gavl-1-foer.jpg",
    efter: "billeder/galleri/gavl-1-efter.jpg"
  },
  {
    tekst: "Så fik jeg hjulpet en kunde med at få malet huset udvendigt.",
    foer: "billeder/galleri/hus-1-foer.jpg",
    efter: "billeder/galleri/hus-1-efter.jpg"
  },
  {
    tekst: "Så fik jeg hjulpet en kunde med at lysne lofter i en kantine og toilet.",
    foer: "billeder/galleri/kantine-1-foer.jpg",
    efter: "billeder/galleri/kantine-1-efter.jpg"
  },
  {
    tekst: "Her fik jeg hjulpet en kunde med at male deres lofter hvide og friske væggene op.",
    foer: "billeder/galleri/lofter-2-foer.jpg",
    efter: "billeder/galleri/lofter-2-efter.jpg"
  },
  {
    tekst: "Her har jeg spartlet en gipsvæg op og sat mønstret tapet op hos en kunde.",
    foer: "billeder/galleri/tapet-1-foer.jpg",
    efter: "billeder/galleri/tapet-1-efter.jpg"
  },
  {
    tekst: "Her har jeg hjulpet en kunde med spartling, opsætning af filt samt maling af lofter og vægge.",
    foer: "billeder/galleri/filt-3-foer.jpg",
    efter: "billeder/galleri/filt-3-efter.jpg"
  },
  {
    tekst: "Her har jeg hjulpet en kunde med at friske lofter, vægge og træværk op samt malet trappe og gelænder.",
    foer: "billeder/galleri/trappe-1-foer.jpg",
    efter: "billeder/galleri/trappe-1-efter.jpg"
  },
  {
    tekst: "Her har jeg hjulpet en kunde med at friske køkkenlåger, trappe og paneler op.",
    foer: "billeder/galleri/trapperum-1-foer.jpg",
    efter: "billeder/galleri/trapperum-1-efter.jpg"
  },
  {
    tekst: "Så fik jeg hjulpet en kunde med at få kittet og malet vinduerne.",
    foer: "billeder/galleri/vinduer-1-foer.jpg",
    efter: "billeder/galleri/vinduer-1-efter.jpg"
  },
  {
    tekst: "Her har jeg sat en fotostat op hos en kunde.",
    foer: "billeder/galleri/fotostat-1-foer.jpg",
    efter: "billeder/galleri/fotostat-1-efter.jpg"
  }
];

/* Galleriet: hver opgave kan have flere billeder.
   Har en opgave mere end ét billede/par, kommer der pile på kortet. */
const GALLERI = [
  {
    kategori: "Udvendigt",
    tekst: "Her har jeg hjulpet en kunde med udvendigt malerarbejde af gavle, vinduer og stakit.",
    billeder: [
      { foer: "billeder/galleri/gavl-1-foer.jpg", efter: "billeder/galleri/gavl-1-efter.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her fik jeg hjulpet en kunde med at male deres lofter hvide og friske væggene op.",
    billeder: [
      { foer: "billeder/galleri/lofter-2-foer.jpg", efter: "billeder/galleri/lofter-2-efter.jpg" },
      { foer: "billeder/galleri/lofter-1-foer.jpg", efter: "billeder/galleri/lofter-1-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har jeg spartlet en gipsvæg op og sat mønstret tapet op hos en kunde.",
    billeder: [
      { foer: "billeder/galleri/tapet-1-foer.jpg", efter: "billeder/galleri/tapet-1-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har jeg sat fotostater op hos en (nu) meget glad kunde.",
    billeder: [
      { billede: "billeder/galleri/fotostater-2.jpg" },
      { billede: "billeder/galleri/fotostater-1.jpg" },
      { billede: "billeder/galleri/fotostater-3.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har jeg hjulpet en kunde med spartling, opsætning af filt samt maling af lofter og vægge.",
    billeder: [
      { foer: "billeder/galleri/filt-3-foer.jpg", efter: "billeder/galleri/filt-3-efter.jpg" },
      { foer: "billeder/galleri/filt-4-foer.jpg", efter: "billeder/galleri/filt-4-efter.jpg" },
      { foer: "billeder/galleri/filt-1-foer.jpg", efter: "billeder/galleri/filt-1-efter.jpg" },
      { foer: "billeder/galleri/filt-2-foer.jpg", efter: "billeder/galleri/filt-2-efter.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har jeg hjulpet en kunde med at friske køkkenlåger, trappe og paneler op.",
    billeder: [
      { billede: "billeder/galleri/koekken-1.jpg" },
      { foer: "billeder/galleri/trapperum-1-foer.jpg", efter: "billeder/galleri/trapperum-1-efter.jpg" },
      { billede: "billeder/galleri/koekken-2.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her har jeg hjulpet en kunde med at friske lofter, vægge og træværk op samt malet trappe og gelænder.",
    billeder: [
      { foer: "billeder/galleri/trappe-1-foer.jpg", efter: "billeder/galleri/trappe-1-efter.jpg" },
      { foer: "billeder/galleri/trappe-2-foer.jpg", efter: "billeder/galleri/trappe-2-efter.jpg" },
      { billede: "billeder/galleri/trappe-3.jpg" }
    ]
  },
  {
    kategori: "Udvendigt",
    tekst: "Så fik jeg hjulpet en kunde med at få kittet og malet vinduerne.",
    billeder: [
      { foer: "billeder/galleri/vinduer-1-foer.jpg", efter: "billeder/galleri/vinduer-1-efter.jpg" },
      { foer: "billeder/galleri/vinduer-2-foer.jpg", efter: "billeder/galleri/vinduer-2-efter.jpg" }
    ]
  },
  {
    kategori: "Tapet",
    tekst: "Her har jeg sat en fotostat op hos en kunde.",
    billeder: [
      { foer: "billeder/galleri/fotostat-1-foer.jpg", efter: "billeder/galleri/fotostat-1-efter.jpg" },
      { billede: "billeder/galleri/fotostat-1-imens.jpg" }
    ]
  },
  {
    kategori: "Indvendigt",
    tekst: "Her hjælper jeg en kunde med spartling, slibning og opsætning af filt.",
    billeder: [
      { billede: "billeder/galleri/spartling-1.jpg" },
      { billede: "billeder/galleri/spartling-2.jpg" },
      { billede: "billeder/galleri/spartling-3.jpg" }
    ]
  },
  {
    kategori: "Udvendigt",
    tekst: "Så fik jeg hjulpet en kunde med at få malet huset udvendigt.",
    billeder: [
      { foer: "billeder/galleri/hus-1-foer.jpg", efter: "billeder/galleri/hus-1-efter.jpg" },
      { foer: "billeder/galleri/hus-2-foer.jpg", efter: "billeder/galleri/hus-2-efter.jpg" },
      { foer: "billeder/galleri/hus-3-foer.jpg", efter: "billeder/galleri/hus-3-efter.jpg" }
    ]
  },
  {
    kategori: "Erhverv",
    tekst: "Så fik jeg hjulpet en kunde med at lysne lofter i en kantine og toilet.",
    billeder: [
      { foer: "billeder/galleri/kantine-1-foer.jpg", efter: "billeder/galleri/kantine-1-efter.jpg" },
      { foer: "billeder/galleri/kantine-2-foer.jpg", efter: "billeder/galleri/kantine-2-efter.jpg" },
      { foer: "billeder/galleri/kantine-3-foer.jpg", efter: "billeder/galleri/kantine-3-efter.jpg" }
    ]
  }

];
