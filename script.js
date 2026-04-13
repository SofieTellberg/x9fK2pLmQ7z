const buttons = document.querySelectorAll(".open-btn");
const modal = document.getElementById("modal");
const textarea = document.getElementById("modal-text");
const info = {
  1: "Organisation enligt kontrakt",
  2: "Avsteg i de legala delarna/AF-delarna",
  3: "Tilläggsavtal eller ädringsavtal",
  4: "Finns avtal tillgängliga i enterna system?",
  5: "Budget enligt beslut",
  6: "Betalplan enligt kontrakt",
  7: "Riktkostnad",
  8: "Fast arvvode",
  9: "Slutkostnadsprognos",
  10: "Hantering av budgetförändringar (omfattningsförändringar)",
  11: "Justering av riktkostnad",
  12: "Justering av fast arvvode",
  13: "Risk- och möjlighetslista",
  14: "Fakturering",
  15: "Avvikelse i ekonomi uppföljning",
  16: "Avvikelser i ekonomimötesprotokoll",
  17: "Attest och mandat enligt bolagets struktur",
  18: "Kontroll att beställningen stämmer med projektets fas/status",
  19: "Innehållna medel",
  20: "Säkerhet",
  21: "Komponentsredovisning",
  22: "Huvudtidsplan",
  23: "Projekteringstidsplan/FAS 1",
  24: "Produktionstidsplan/FAS 2",
  25: "Tidsplan i interna system",
  26: "Finns eventuella avvikelser från tidsplanen?",
  27: "Dokumentation i interna system",
  28: "Kontroll av kontunuerliga byggmöten",
  29: "Avvikelser mot ramprogram",
  30: "Avvikelser mot projekteringsanvisningar",
  31: "Kontroll av UE:s KMA-plan",
  32: "Kvalitetsplan",
  33: "Protokoll från kvalitetsmöten",
  34: "Arbetsmiljöplan",
  35: "Protokoll från arbetsmiljöronderingar/skyddsronder",
  36: "Dokumentation från arbetsmiljöronderingar",
  37: "Alvarliga tillbud eller olyckor",
  38: "Kontroll av etableringsplan,APD-plan,Arbetsplatsdispossution",
  39: "Kontroll av inskrivningsrutiner",
  40: "Riskinventering",
  41: "Kontroll av relevanta utbildningsbevis",
  42: "Miljöplan",
  43: "Kontroll av miljöronder",
  44: "Fuktplan",
  45: "Kontroll av fuktronder",
  46: "BVB och kemikalier",
  47: "Kontroll av arbetsfordon och drivmedelsförbrukning",
  48: "Kontroll av transporttillstånd",
  49: "Miljö- och fuktinventering",
  50: "Kontroll av kontakt med myndigheter",
  51: "Nödlägesinformation",
  52: "Kontroll av föroreningar och saneringar",
  53: "Verifiering av avfall och farligt avfall",
  54: "Inskrivning personal",
  55: "ID06 kontroll",
  56: "Kontroll av UE",
  57: "Är projektet anmält till Rättvist byggande?",
  58: "Hur hanteras avvikelser?",
  59: "Finns punkten som rubrik på i byggmötesprotokoll?",
  60: "Garantihantering",
  61: "BIM",
  62: "Styr",
  63: "Driftinstruktioner",
  64: "Utbildning driftpersonal",
  65: "Serviceavtal",
  66: "Frlängda garantier",
  67: "Erfarenhetsåterföring"
};

const desc = {
    1: "Är det samma organisation som på kontraktet? Uppfylls rollerna?",
    2: "Vilka avsetg har gjorts? Har det kommunicerats internt?",
    3: "Har det gjorts någon överenskommelse om tillägsavtal eller ändringsavtal?",
    4: "Har ansvarig lagt in avtal och övriga handlingar i interna system?",
    5: "Följer budgeten det som har beslutats?",
    6: "Har entreprenören lämnat en betalplan i enlighet med kontrakt. Är betalplanenprestationsbunden och är den synkad med tidsplan?", //Kolla denna
    7: "Från de tidiga kalkylerna, stämmer de överens med den senaste kalkylen som gjorts? Är projektledaren trygg med att riktkostnaden följer genomförandebeslutet och avtalet med entreprenören?", //Kolla denna
    8: "Från de tidiga kalkylera, stämmer de överens med den senaste kalkylen som gjorts? Är projektledaren trygg med att riktkostnaden följer genomförandebeslutet och avtalet med entreprenören?", //Kolla denna
    9: "Vad har projektet i slutkostnadsprognos och redovisas SKP minst en gång per månad (upparbetade kostnader + prognostiserade kostnader för kvarstående arbeten) i enlighet med kontrakt?", //Kolla denna
    10: "Finns det strukturerat arbetssätt gällande budgetförändringar? Hur godkänns dessa?",
    11: "Har någon justering av riktkostnad gjorts? Finns detta dokumenterat i enlighet med kontrakt?",
    12: "Har någon justering av fast arvvide gjorts? Finns det dokumenterat i enlighet med kontrakt?",
    13: "Hur ser utfallet ut på kalkylerade belopp eller verifierad kostnad ut?",
    14: "Hur sker uppföljning av fakturor fr att säkerställa gränsdragningslistan, rätt timarvode, rätt arvvode osv?", //Kolla denna
    15: "Har några avvikelser identifierats och finns dessa dokumenterade?",
    16: "Finns ekonomimötesprotokoll tillgängligt enligt rutin?",
    17: "Följer projektledaren bolagets delegationsordning i projektet?",
    18: "Har det skett några justeringar i FAS 1? Har det kontrollerats att projektet har rätt beställning för att fullfölja FAS 2? Vid eventuella justeringar i beställningen, har projektet koll på de ekonomiska kostnaderna?", //kolla denna
    19: "Innehålls det medel i enlighet med kontrakt?",
    20: "Har entreprenören överlämnat en säkerhet i enlighet med kontrakt?",
    21: "Har entreprenören överlämnat en komponentsredovisning?",
    22: "Finns huvudtidsplan och följer den kontraktet?",
    23: "Finns projekteringstidsplan och följer den kontraktet?",
    24: "Finns produktionstidsplan och följer den kontraktet?",
    25: "Finns tidsplanen i interna system?",
    26: "Har det skett några avvikelser från tidsplanen? Har de kommunicerats inom bolaget? Har det gjorts några förseningsvite/skadeståndsanspråk?", //Kolla denna
    27: "Finns dokumentation uppladdat i interna system?",
    28: "Hur ofta hålls byggmöten? Protokollförs dessa byggmöten?",
    29: "Har projektet några avvikelser gentemot ramprogram? Hur har dessa hanterats? Har de kommunicerats internt?", //Kolla denna
    30: "Har projektet några avvikelse gentemot projekteringsanvisningar? Hur har dessa hanterats? Har de kommunicerats internt?", //Kolla denna
    31: "Har projektet kontroll på att UE har KMA-planer alternativt separata planer för respektive område?", //Kolla denna
    32: "Finns det en projektspecifik kvalitetsplan? Finns uppgifter om hur projektet ska arbeta med kvalitet och hur följs den upp?", //Kolla denna
    33: "Utförs det kvalitetsmöten? Hur ofta utförs dessa? Hur protokollförs de?", 
    34: "Finns det en arbetsmiljöplan? Innehåller den uppgifter om vem som innehar BAS-P och BAS-U ansvar? Innehåller den övriga relevanta uppgifter?", //Kolla denna
    35: "Hur har arbetsmiljöronder platerats, genomförts och dokumenteras? Samt hur säkerställs det att upptäckta brister åtgärdas och följs upp?", //Kolla denna
    36: "Finns dokumentation från arbetsmiljöberedningar? Beskriver de moment som har planerats inför utförandet och hur har de dokumenterats i en arbetsberedning?", //Kolla denna
    37: "Har projektet koll på om det skett några allvarliga tillbud eller olyckor? Hur ser rutinerna ut för hantering och uppföljning av allvarliga tillbud och olyckor?", //Kolla denna
    38: "Finns det en etableringsplan? Hur ser rutinerna för etableringsplanen ut? Är det ett levande dokument?",
    39: "Hur ser inskrivningsrutinerna ut?",
    40: "Har det utförts en riskinventering? Har den bedömt de risker som finns inom projektet?",
    41: "Har projektet kontroll på att det finns rutiner för kontroll av relevanta utbildningsbevis och intyg? Samt att dessa fortfarande gäller?", 
    42: "Finns det en miljöplan och sitter den väl synligt? Innehåller den relevant information? Har den kommunicerats till övriga i projektet?",
    43: "Utförs det miljöronder och hur ofta utförs de? Hur ofta utförs de? Finns det rutin för utförandet av miljöronder?",
    44: "Finns det en fuktplan och hur ser rutinerna ut för att följa den i projektet?",
    45: "Utförs det fuktronder i projektet och hur ofta görs de? Har entreprenören kontroll på fuktkritiska moment? Hur ser rutinerna ut?",
    46: "Har projektet en egen digital loggbok? Hur ser rutinerna för loggning av produkter ut? Finns det rutiner för säker kemikaliehantering?",
    47: "Har projektet koll på att de arbetsfordon som används i projektet är dokumenterade? Har projektet rutiner för kontroll av drivmedel och att de arbetsfordon som används är tillåtna?", //Kolla denna
    48: "Har projektet koll på de fordon som används inom projektet och att de har de tillstånd som krävs?",
    49: "Har en miljö- och fuktinventering utförts?",
    50: "Har projektet koll på om kontakt med myndigheter krävs (ex miljöförvaltningen & arbetsmiljövereket)?",
    51: "Har det utförts någon nödlägesövning under projektet eller planeras det?",
    52: "Har projektet koll på de föroreningar som identifierats? Finns det rutiner för kontroll att rivnings-/saneringsentreprenören har de intyg som krävs?", //Kolla denna
    53: "Finns rutiner för kontroll på avfallet som produceras i projektet? Får projektet statistik?",
    54: "Hur ser rutinerna för inskrivningsprocessen ut?",
    55: "Hur har det säkerställs att entreprenören har en fungerande rutin för att säkerställa att alla i projektet har ID06?",
    56: "Har projektet kontroll att delaktiga i projektet känner till Rättvist byggande och har de kontaktuppgifter?",
    57: "Är projektet anmält till Rättvist byggande?",
    58: "Har projektet fått rapporter från Rättvist byggande? Hur ser rutinerna för att arbets med rapporterna ut?",
    59: "Finns Rättvist byggande med som en fast punkt i mötesprotokoll?",
    60: "Har det hålls eftermarknadsmöten med entreprenören innan slutbesiktning?",
    61: "Har projektet koll på att korrekta parametrar är inlagda?",
    62: "Har projektet koll på att styr- och fastighetsautomation är uppkopplade?",
    63: "Finns driftinstruktioner tillgängliga?",
    64: "Har driftpersonal fått utbildning?",
    65: "Har projektet kontrollerat att serviceavtalen för hiss, brandlarm och ventilation signerats direkt vid godkänt slutbesiktning?",
    66: "Har projektet kontrollerat att det finns specifika garantibevis för komponenter med >5 års livslängd (t.ex. takpapp & solceller)",
    67: "Har det hafts erfarenhetsåterföringsmöte?"
};

const tasks = {};
const comments = {};
let currentId = null;


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentId = btn.dataset.id;

        textarea.textContent = info[currentId];
        document.getElementById("modal-desc").textContent = desc[currentId];
        modal.style.display = "flex";

        renderTasks();
        document.getElementById("comment-input").value = comments[currentId] || "";

        document.getElementById("comment-input").value = comments[currentId] || "";
    });
});

document.getElementById("close-btn").addEventListener("click", () => {
    modal.style.display="none";
});

document.getElementById("add-task-btn").addEventListener("click", () => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Skriv deluppgift";

    li.appendChild(input);
    document.getElementById("task-list").appendChild(li);

    input.focus();

    input.addEventListener("blur", () => {
    const text = input.value;

    if (!tasks[currentId]) {
        tasks[currentId] = [];
    }

    tasks[currentId].push(text);

    renderTasks();
    });
});

function renderTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    if (!tasks[currentId]) return;

    tasks[currentId].forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}

document.getElementById("comment-input").addEventListener("blur", () => {
    comments[currentId] = document.getElementById("comment-input").value;
});

document.getElementById("save-comment-btn").addEventListener("click", () => {
    const value = document.getElementById("comment-input").value;
    comments[currentId] = value;
});




async function generatePDF() {
  const { jsPDF } = window.jspdf;

  const cards = document.querySelectorAll(".card");
  const pdf = new jsPDF("p", "mm", "a4");

  let y = 10;

  for (let i = 0; i < cards.length; i++) {
    const canvas = await html2canvas(cards[i], { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (y + imgHeight > 280) {
      pdf.addPage();
      y = 10;
    }

    pdf.addImage(imgData, "PNG", 10, y, imgWidth, imgHeight);
    y += imgHeight + 10;
  }

  pdf.save("cards.pdf");
}
        function toggleCard(element) {
            const card = element.closest(".card");
            const extra = card.querySelector(".card-extra");
            if (extra.style.display === "block") {
                extra.style.display = "none";
            } else {
                extra.style.display = "block";
            }
        }
