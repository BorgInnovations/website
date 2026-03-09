/* ============================================================
   IndexedDB Helper — database: "pwaDB", store: "settings"
   ============================================================ */

   const DB_NAME = "pwaDB";
   const DB_VERSION = 1;
   const STORE_NAME = "settings";
   
   function openDB() {
      return new Promise((resolve, reject) => {
         const req = indexedDB.open(DB_NAME, DB_VERSION);
         req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
               db.createObjectStore(STORE_NAME, { keyPath: "key" });
            }
         };
         req.onsuccess = (e) => resolve(e.target.result);
         req.onerror  = (e) => reject(e.target.error);
      });
   }
   
   async function dbSet(key, value) {
      const db = await openDB();
      return new Promise((resolve, reject) => {
         const tx    = db.transaction(STORE_NAME, "readwrite");
         const store = tx.objectStore(STORE_NAME);
         const req   = store.put({ key, value });
         req.onsuccess = () => resolve();
         req.onerror   = (e) => reject(e.target.error);
      });
   }
   
   async function dbGet(key) {
      const db = await openDB();
      return new Promise((resolve, reject) => {
         const tx    = db.transaction(STORE_NAME, "readonly");
         const store = tx.objectStore(STORE_NAME);
         const req   = store.get(key);
         req.onsuccess = (e) => resolve(e.target.result ? e.target.result.value : null);
         req.onerror   = (e) => reject(e.target.error);
      });
   }
   
   async function dbClear() {
      const db = await openDB();
      return new Promise((resolve, reject) => {
         const tx    = db.transaction(STORE_NAME, "readwrite");
         const store = tx.objectStore(STORE_NAME);
         const req   = store.clear();
         req.onsuccess = () => resolve();
         req.onerror   = (e) => reject(e.target.error);
      });
   }
   
   /* ============================================================
      Boot — load all persisted values and apply them to the DOM
      ============================================================ */
   
   async function loadFromDB() {
      // Content
      document.getElementById("heading").innerHTML =
         (await dbGet("title"))   || "New Document";
      document.getElementById("body").innerHTML =
         (await dbGet("text"))    || "The body";
      document.getElementById("footer").innerHTML =
         (await dbGet("footer"))  || "The footer";
   
      // Colors
      document.getElementById("heading").style.color =
         (await dbGet("titlec"))  || "#000";
      document.getElementById("body").style.color =
         (await dbGet("textc"))   || "#000";
      document.getElementById("footer").style.color =
         (await dbGet("footerc")) || "#000";
   
      // Font sizes
      document.getElementById("heading").style.fontSize =
         (await dbGet("titlefs")) || "18pt";
      document.getElementById("body").style.fontSize =
         (await dbGet("textfs"))  || "12pt";
      document.getElementById("footer").style.fontSize =
         (await dbGet("footerfs"))|| "12pt";
   
      // Font weights
      document.getElementById("heading").style.fontWeight =
         (await dbGet("titlefw")) || "normal";
      document.getElementById("body").style.fontWeight =
         (await dbGet("textfw"))  || "normal";
      document.getElementById("footer").style.fontWeight =
         (await dbGet("footerfw"))|| "normal";
   
      // Font styles
      document.getElementById("heading").style.fontStyle =
         (await dbGet("titlefstyle")) || "normal";
      document.getElementById("body").style.fontStyle =
         (await dbGet("textfstyle"))  || "normal";
      document.getElementById("footer").style.fontStyle =
         (await dbGet("footerfstyle"))|| "normal";
   
      // Text alignment
      document.getElementById("heading").style.textAlign =
         (await dbGet("titlea")) || "left";
      document.getElementById("body").style.textAlign =
         (await dbGet("texta"))  || "left";
      document.getElementById("footer").style.textAlign =
         (await dbGet("footera"))|| "left";
   
      // Font families
      document.getElementById("heading").style.fontFamily =
         (await dbGet("titlefont")) || "Fira_Code";
      document.getElementById("body").style.fontFamily =
         (await dbGet("bodyfont"))  || "Fira_Code";
      document.getElementById("footer").style.fontFamily =
         (await dbGet("footerfont"))|| "Fira_Code";
   
      // Document layout
      document.getElementById("document").style.margin =
         (await dbGet("margins")) || "0px";
      document.getElementById("document").style.paddingBottom =
         (await dbGet("padding")) || "0px";
   }
   
   loadFromDB();
   
   /* ============================================================
      Auto-save interval — persists current state every second
      ============================================================ */
   
   setInterval(async function () {
      // Content
      await dbSet("title",   document.getElementById("heading").innerHTML + ' ');
      await dbSet("text",    document.getElementById("body").innerHTML    + ' ');
      await dbSet("footer",  document.getElementById("footer").innerHTML  + ' ');
   
      // Colors
      await dbSet("titlec",  document.getElementById("header-color").style.color  + ' ');
      await dbSet("textc",   document.getElementById("body-color").style.color    + ' ');
      await dbSet("footerc", document.getElementById("footer-color").style.color  + ' ');
   
      // Font sizes
      await dbSet("titlefs",  document.getElementById("heading").style.fontSize + ' ');
      await dbSet("textfs",   document.getElementById("body").style.fontSize    + ' ');
      await dbSet("footerfs", document.getElementById("footer").style.fontSize  + ' ');
   
      // Font weights
      await dbSet("titlefw",  document.getElementById("heading").style.fontWeight + ' ');
      await dbSet("textfw",   document.getElementById("body").style.fontWeight    + ' ');
      await dbSet("footerfw", document.getElementById("footer").style.fontWeight  + ' ');
   
      // Font styles
      await dbSet("titlefstyle",  document.getElementById("heading").style.fontStyle + ' ');
      await dbSet("textfstyle",   document.getElementById("body").style.fontStyle    + ' ');
      await dbSet("footerfstyle", document.getElementById("footer").style.fontStyle  + ' ');
   
      // Font families
      await dbSet("titlefont",  document.getElementById("heading").style.fontFamily + ' ');
      await dbSet("bodyfont",   document.getElementById("body").style.fontFamily    + ' ');
      await dbSet("footerfont", document.getElementById("footer").style.fontFamily  + ' ');
   
      // Alignment
      await dbSet("titlea",  document.getElementById("header-alignment").style.textAlign + ' ');
      await dbSet("texta",   document.getElementById("body-alignment").style.textAlign   + ' ');
      await dbSet("footera", document.getElementById("footer-alignment").style.textAlign + ' ');
   }, 1000);
   
   /* ============================================================
      clear — wipes the entire IndexedDB store
      ============================================================ */
   
   async function clear() {
      await dbClear();
   }
   
   /* ============================================================
      Navigation Controls
      ============================================================ */
   
   function file() {
      var x = document.getElementById("file");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   async function previewTitle() {
      document.getElementById("previewTitle").innerHTML = await dbGet("title");
   }
   
   function edit() {
      var x = document.getElementById("edit");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function printdoc() {
      document.getElementById("control-nav").style.display = 'none';
      document.getElementById("footMenu").style.display    = 'none';
      document.getElementById("document").style.borderStyle = 'none';
      document.getElementById("document").style.width = '95%';
   
      window.print();
      console.log('Printer go brrrr');
   
      document.getElementById("document").style.width = '85%';
      document.getElementById("document").style.borderStyle = 'solid';
      document.getElementById("footMenu").style.display    = 'block';
      document.getElementById("control-nav").style.display = 'block';
   }
   
   function color() {
      var x = document.getElementById("color");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   /* End Navigation Controls */
   
   /* ============================================================
      Editor Controls
      ============================================================ */
   
   function headingcon() {
      document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="headingcon(); hleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="headingcon(); hcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="headingcon(); hright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function mheadingcon() {
      document.getElementById("ac_1").innerHTML = '<a class="a" onclick="headingcon(); hleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a" onclick="headingcon(); hcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a" onclick="headingcon(); hright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function bodycon() {
      document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="bodycon(); bleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="bodycon(); bcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="bodycon(); bright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function mbodycon() {
      document.getElementById("ac_1").innerHTML = '<a class="a" onclick="bodycon(); bleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a" onclick="bodycon(); bcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a" onclick="bodycon(); bright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function footercon() {
      document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="footercon(); fleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="footercon(); fcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="footercon(); fright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   function mfootercon() {
      document.getElementById("ac_1").innerHTML = '<a class="a" onclick="footercon(); fleft()">Left </a>';
      document.getElementById("ac_2").innerHTML = '<a class="a" onclick="footercon(); fcenter()">Center </a>';
      document.getElementById("ac_3").innerHTML = '<a class="a" onclick="footercon(); fright()">Right </a>';
   
      var x = document.getElementById("alignmentcons");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   async function headingalignment() {
      document.getElementById("heading").style.textAlign = "left";
      await dbSet("titlea", "left ");
   }
   
   function cortex01() {
      var x = document.getElementById("c0rt3x");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
   
   /* ============================================================
      Alignment Controls
      ============================================================ */
   
   async function hleft() {
      document.getElementById("heading").style.textAlign = "left";
      await dbSet("titlea", "left ");
   }
   async function hcenter() {
      document.getElementById("heading").style.textAlign = "center";
      await dbSet("titlea", "center ");
   }
   async function hright() {
      document.getElementById("heading").style.textAlign = "right";
      await dbSet("titlea", "right ");
   }
   
   async function bleft() {
      document.getElementById("body").style.textAlign = "left";
      await dbSet("texta", "left ");
   }
   async function bcenter() {
      document.getElementById("body").style.textAlign = "center";
      await dbSet("texta", "center ");
   }
   async function bright() {
      document.getElementById("body").style.textAlign = "right";
      await dbSet("texta", "right ");
   }
   
   async function fleft() {
      document.getElementById("footer").style.textAlign = "left";
      await dbSet("footera", "left ");
   }
   async function fcenter() {
      document.getElementById("footer").style.textAlign = "center";
      await dbSet("footera", "center ");
   }
   async function fright() {
      document.getElementById("footer").style.textAlign = "right";
      await dbSet("footera", "right ");
   }
   
   /* ============================================================
      Font Size Controls
      ============================================================ */
   
   async function hsetsize() {
      var ff = document.getElementById("customsize").value;
      document.getElementById("heading").style.fontSize = ff;
      await dbSet("titlefs", ff + ' ');
   }
   async function bsetsize() {
      var ff = document.getElementById("customsize").value;
      document.getElementById("body").style.fontSize = ff;
      await dbSet("bodyfs", ff + ' ');
   }
   async function fsetsize() {
      var ff = document.getElementById("customsize").value;
      document.getElementById("footer").style.fontSize = ff;
      await dbSet("footerfs", ff + ' ');
   }
   
   /* ============================================================
      Font Family Controls
      ============================================================ */
   
   async function hsetFiraCode() {
      document.getElementById("heading").style.fontFamily = 'Fira_Code';
      document.getElementById("hFont").innerHTML = 'Fira_Code';
      await dbSet("titlefont", 'Fira_Code');
   }
   async function bsetFiraCode() {
      document.getElementById("body").style.fontFamily = 'Fira_Code';
      document.getElementById("bFont").innerHTML = 'Fira_Code';
      await dbSet("bodyfont", 'Fira_Code');
   }
   async function fsetFiraCode() {
      document.getElementById("footer").style.fontFamily = 'Fira_Code';
      document.getElementById("fFont").innerHTML = 'Fira_Code';
      await dbSet("footerfont", 'Fira_Code');
   }
   
   // Open_Sans
   async function hsetOpenSans() {
      document.getElementById("heading").style.fontFamily = 'Open_Sans';
      document.getElementById("hFont").innerHTML = 'Open_Sans';
      await dbSet("titlefont", 'Open_Sans');
   }
   async function bsetOpenSans() {
      document.getElementById("body").style.fontFamily = 'Open_Sans';
      document.getElementById("bFont").innerHTML = 'Open_Sans';
      await dbSet("bodyfont", 'Open_Sans');
   }
   async function fsetOpenSans() {
      document.getElementById("footer").style.fontFamily = 'Open_Sans';
      document.getElementById("fFont").innerHTML = 'Open_Sans';
      await dbSet("footerfont", 'Open_Sans');
   }
   
   // Merriweather
   async function hsetMerriweather() {
      document.getElementById("heading").style.fontFamily = 'Merriweather';
      document.getElementById("hFont").innerHTML = 'Merriweather';
      await dbSet("titlefont", 'Merriweather');
   }
   async function bsetMerriweather() {
      document.getElementById("body").style.fontFamily = 'Merriweather';
      document.getElementById("bFont").innerHTML = 'Merriweather';
      await dbSet("bodyfont", 'Merriweather');
   }
   async function fsetMerriweather() {
      document.getElementById("footer").style.fontFamily = 'Merriweather';
      document.getElementById("fFont").innerHTML = 'Merriweather';
      await dbSet("footerfont", 'Merriweather');
   }
   
   // Oswald
   async function hsetOswald() {
      document.getElementById("heading").style.fontFamily = 'Oswald';
      document.getElementById("hFont").innerHTML = 'Oswald';
      await dbSet("titlefont", 'Oswald');
   }
   async function bsetOswald() {
      document.getElementById("body").style.fontFamily = 'Oswald';
      document.getElementById("bFont").innerHTML = 'Oswald';
      await dbSet("bodyfont", 'Oswald');
   }
   async function fsetOswald() {
      document.getElementById("footer").style.fontFamily = 'Oswald';
      document.getElementById("fFont").innerHTML = 'Oswald';
      await dbSet("footerfont", 'Oswald');
   }
   
   // OpenDyslexic
   async function hsetOpenDyslexic() {
      document.getElementById("heading").style.fontFamily = 'OpenDyslexic';
      document.getElementById("hFont").innerHTML = 'OpenDyslexic';
      await dbSet("titlefont", 'OpenDyslexic');
   }
   async function bsetOpenDyslexic() {
      document.getElementById("body").style.fontFamily = 'OpenDyslexic';
      document.getElementById("bFont").innerHTML = 'OpenDyslexic';
      await dbSet("bodyfont", 'OpenDyslexic');
   }
   async function fsetOpenDyslexic() {
      document.getElementById("footer").style.fontFamily = 'OpenDyslexic';
      document.getElementById("fFont").innerHTML = 'OpenDyslexic';
      await dbSet("footerfont", 'OpenDyslexic');
   }
   
   /* ============================================================
      Color Controls
      ============================================================ */
   
   async function hcustomcolor() {
      document.getElementById("heading").style.color = document.getElementById("customcolor").value;
      await dbSet("titlec", document.getElementById("customcolor").value + ' ');
   }
   async function bcustomcolor() {
      document.getElementById("body").style.color = document.getElementById("customcolor").value;
      await dbSet("bodyc", document.getElementById("customcolor").value + ' ');
   }
   async function fcustomcolor() {
      document.getElementById("footer").style.color = document.getElementById("customcolor").value;
      await dbSet("footerc", document.getElementById("customcolor").value + ' ');
   }
   
   /* ============================================================
      Save to file
      ============================================================ */
   
   async function save() {
      const title  = (await dbGet("title"))  || '';
      const text   = (await dbGet("text"))   || '';
      const footer = (await dbGet("footer")) || '';
      var blob = new Blob(
         ['<section>' + title + '</section>', '<section>' + text + '</section>', '<section>' + footer + '</section>'],
         { type: "text/plain;charset=utf-8" }
      );
      saveAs(blob, "authorFile.html");
   }
   
   /* End Editor Control */
   
   function expand() {
      document.getElementById("document").style.height = "500px";
   }
   
   function shrink() {
      document.getElementById("document").style.height = "3in";
   }
   
   /* ============================================================
      Clear / Reset document to defaults
      ============================================================ */
   
   async function cleardocument() {
      // Content
      await dbSet("title",  'The Title');
      await dbSet("body",   'The Body');
      await dbSet("footer", 'The Footer');
   
      document.getElementById("heading").innerHTML = 'The Title';
      document.getElementById("body").innerHTML    = 'The Body';
      document.getElementById("footer").innerHTML  = 'The Footer';
   
      // Colors
      await dbSet("titlec",  '#000');
      await dbSet("bodyc",   '#000');
      await dbSet("footerc", '#000');
   
      document.getElementById("heading").style.color = '#000';
      document.getElementById("body").style.color    = '#000';
      document.getElementById("footer").style.color  = '#000';
   
      // Alignment
      await dbSet("titlea",  'left');
      await dbSet("bodya",   'left');
      await dbSet("footera", 'left');
   
      document.getElementById("heading").style.textAlign = 'left';
      document.getElementById("body").style.textAlign    = 'left';
      document.getElementById("footer").style.textAlign  = 'left';
   
      // Font families
      await dbSet("titlefont",  'Fira_Code');
      await dbSet("bodyfont",   'Fira_Code');
      await dbSet("footerfont", 'Fira_Code');
   
      document.getElementById("heading").style.fontFamily = 'Fira_Code';
      document.getElementById("body").style.fontFamily    = 'Fira_Code';
      document.getElementById("footer").style.fontFamily  = 'Fira_Code';
   
      // Font sizes
      await dbSet("titlefs",  '18pt ');
      await dbSet("bodyfs",   '12pt ');
      await dbSet("footerfs", '12pt ');
   
      document.getElementById("header").style.fontSize = '18pt';
      document.getElementById("body").style.fontSize   = '12pt';
      document.getElementById("footer").style.fontSize = '12pt';
   }