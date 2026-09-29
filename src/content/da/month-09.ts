import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_EATWELL: Source = {
  label: 'NHS: Eat well',
  url: 'https://www.nhs.uk/live-well/eat-well/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_VITAMINS: Source = {
  label: 'NHS: Vitamins and minerals',
  url: 'https://www.nhs.uk/conditions/vitamins-and-minerals/',
};
const NHS_EXERCISE: Source = {
  label: 'NHS: Exercise',
  url: 'https://www.nhs.uk/live-well/exercise/',
};
const NHS_SLEEP: Source = {
  label: 'NHS: Sleep and tiredness',
  url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/',
};
const NHS_EATING: Source = {
  label: 'NHS: Eating disorders',
  url: 'https://www.nhs.uk/conditions/eating-disorders/',
};
const ACOG_PMS: Source = {
  label: 'ACOG: Premenstrual Syndrome (PMS)',
  url: 'https://www.acog.org/womens-health/faqs/premenstrual-syndrome',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea: Painful Periods',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};
const SUNDHED_JERN: Source = {
  label: 'Sundhed.dk: Jernmangel',
};

const M = 9;

export const month09: MonthContent = {
  month: M,
  theme: 'Kost, træning og restitution',
  focus: 'Gør det gode valg til det nemme valg: hvad I kan lave og spise sammen i hver fase.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Mad flytter noget, men den kurerer ikke',
      insight:
        'Denne måned handler om kost, træning og restitution, og den begynder med en ærlig ramme: ingen kost fjerner PMS, og ingen træningsplan fjerner kramper. Men mad, bevægelse og søvn er de tre håndtag, der er nemmest at dreje på i hverdagen, og de flytter noget målbart: jernniveau, blodsukker, søvnkvalitet og smerte. Det gode ved dem er, at de er fælles. Du spiser det samme, sover i samme seng og kan gå den samme tur. Din rolle er ikke at blive hendes coach. Den er at gøre det gode valg til det nemme valg for jer begge, uden at nogen skal forklare sig.',
      action:
        'Spørg hende i dag: "Er der noget med mad eller søvn, du gerne vil have, at vi gør anderledes i denne måned?" Og lyt uden at foreslå noget endnu.',
      phaseTags: [],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Jern: det blødningen koster',
      insight:
        'Hver menstruation koster jern, og kvinder i den fødedygtige alder er den gruppe, der oftest har jernmangel. Jern bærer ilt i blodet, og et lavt lager mærkes som træthed, der ikke forsvinder efter søvn, åndenød på trapper, kolde hænder, hovedpine og kort lunte. Har hun kraftige blødninger, er risikoen markant højere. Jern findes i to former: hæmjern fra kød, fisk og indmad, som optages let, og ikke-hæmjern fra linser, bønner, tofu, havregryn og grønne blade, som optages dårligere. Begge tæller, og det er i menstruationsugen, det giver mest mening at tænke over det. Langvarig træthed fortjener en blodprøve, ikke en teori.',
      action:
        'Læg jern på middagsbordet i dag uden at nævne ordet jern: kød, linser, bønner eller kikærter. Bare lav det.',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON, SUNDHED_JERN],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'C-vitamin åbner for plantejern',
      insight:
        'Jern fra planter optages flere gange dårligere end jern fra kød, men det kan hjælpes på vej. C-vitamin i samme måltid gør ikke-hæmjern langt lettere at optage; det er en af de bedst dokumenterede kombinationer i ernæring. Det kræver ingen tilskud: peberfrugt, broccoli, citrus, kiwi, jordbær og tomat er nok, hvis det er på tallerkenen samtidig. En linsesuppe med citron, en bønnesalat med peberfrugt, havregrød med bær. Spiser hun lidt eller intet kød, er den kombination ikke en detalje, men grundlaget. Og det er en ting, du kan gøre i køkkenet uden at sige et ord om kost.',
      action:
        'Til aftensmaden: sæt noget med C-vitamin ved siden af det, der har jern. Citronbåde, rå peberfrugt eller en appelsin til dessert.',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Kaffe og te lige til maden',
      insight:
        'Både kaffe og te indeholder stoffer, polyfenoler og tanniner, der binder jern i tarmen og kan halvere optaget fra et måltid. Det gælder især plantejern. Effekten er størst, når drikken tages sammen med maden eller lige efter, og lille, hvis der går en times tid. Man skal ikke droppe morgenkaffen, kun flytte den lidt væk fra det jernrige måltid. Store mængder mælk og kalcium til måltidet hæmmer også optaget noget. Det er en af de få kostregler, der faktisk er værd at kende, fordi den er gratis, og fordi den kan gøre en reel forskel for en kvinde, der bløder hver måned.',
      action:
        'Server vand eller et glas juice til aftensmaden, og lav kaffen eller teen en time senere i stedet.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_IRON],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Varme eller kulde?',
      insight:
        'Varme er den bedst dokumenterede hjemmebehandling mod menstruationskramper. En varmepude på omkring 40 grader på underlivet i et par timer har i studier virket lige så godt som ibuprofen, og kombinationen er bedre end hver for sig. Varme afslapper livmodermusklen og øger blodgennemstrømningen. Kulde virker ikke på kramper, men mange har glæde af den til andet: en kold klud i nakken ved menstruationshovedpine, en kølig pose på ømme bryster i dagene før. Tommelfingerregel: varme til krampe og lænd, kulde til hovedpine og hævelse. Et varmt bad om aftenen rammer begge dele, fordi det også hjælper søvnen.',
      action:
        'Fyld varmedunken eller varm puden, før hun spørger, og læg den i sofaen eller sengen, hvor hun er.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Bevægelse som smertestillende',
      insight:
        'Det lyder forkert, når man har ondt, men let bevægelse dæmper menstruationssmerter hos mange. En gåtur, cykling i roligt tempo, yoga eller udstrækning øger blodgennemstrømningen i bækkenet og frigiver kroppens egne smertestillende stoffer, endorfiner. Studier peger på, at kvinder, der bevæger sig regelmæssigt, har mildere kramper, og at et enkelt let pas kan tage toppen af smerten her og nu. Det er ikke det samme som at træne igennem. Hård træning på dag 1 kan gøre det værre for nogle. Pointen er blid aktivitet, gerne udendørs, og gerne sammen. Det er lettere at gå en tur, når nogen går med.',
      action:
        'Foreslå en kort gåtur på 15-20 minutter i dag, i hendes tempo. Tag et nej uden at overtale.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Væske, hovedpine og blodtab',
      insight:
        'Væskemangel forstærker to ting, der allerede er i spil i menstruationen og dagene før: hovedpine og træthed. Kroppen mister væske med blodet, og mange drikker mindre, når de har kvalme eller ligger ned. Samtidig kan let dehydrering forværre kramper, fordi musklerne bliver mere følsomme. Anbefalingen er seks til otte glas væske om dagen, og det tæller alt: vand, te, mælk, suppe. Tørst er et sent signal, så en flaske inden for rækkevidde hjælper mere end et godt råd. Er hovedpinen tilbagevendende omkring menstruationen, er det ofte hormonel migræne, som fortjener en læge, ikke bare mere vand.',
      action:
        'Sæt et fyldt glas eller en flaske vand der, hvor hun sidder eller ligger, og fyld den op igen, når den er tom.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Omega-3 og smerte',
      insight:
        'Fed fisk som laks, makrel, sild og sardiner indeholder omega-3-fedtsyrer, der dæmper dannelsen af de prostaglandiner, der giver kramper. Flere mindre studier har fundet, at kvinder, der får omega-3 dagligt over nogle måneder, oplever mildere menstruationssmerter og bruger mindre smertestillende. Evidensen er ikke bombesikker, studierne er små, men effekten går den samme vej i de fleste, og risikoen ved at spise fisk to gange om ugen er nul. Plantekilder som hørfrø, chiafrø og valnødder giver en anden form for omega-3, der omdannes dårligere, men stadig tæller. Det er en ændring for hele måneden, ikke kun for menstruationsugen.',
      action:
        'Lav eller køb et måltid med fed fisk i dag, eller sæt fisk på listen til to aftener i den kommende uge.',
      phaseTags: [],
      sources: [NHS_EATWELL, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Follikelfasen: tid til styrke',
      insight:
        'Når blødningen stopper, og østrogen stiger, får de fleste mere energi og hurtigere restitution. Østrogen har en beskyttende effekt på musklerne og hjælper med genopbygning efter træning. Nogle mindre studier har fundet, at styrketræning koncentreret i follikelfasen gav lidt større muskelvækst end samme mængde træning i lutealfasen. Evidensen er stadig tynd, men princippet holder uanset: læg de hårde pas der, hvor kroppen har overskud til dem. Det er nu, tunge løft, intervaller, lange løbeture og nye personlige rekorder giver bedst mening. Det er også her, det er sjovest at træne sammen, fordi I begge kan give den gas.',
      action:
        'Spørg, om hun har lyst til at træne eller løbe sammen i denne uge, og book en konkret dag og et tidspunkt.',
      phaseTags: ['follicular'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Protein til restitution',
      insight:
        'Muskler bygges op efter træning, ikke under, og det kræver protein. Den generelle anbefaling til voksne er omkring 0,8 gram per kilo kropsvægt om dagen, men styrketræner man regelmæssigt, er 1,2-1,6 gram per kilo et rimeligt mål. Det svarer for en kvinde på 65 kilo til cirka 80-100 gram protein om dagen, fordelt på måltiderne: æg og yoghurt til morgen, bønner, kylling, fisk eller tofu til frokost og aften. Mange kvinder spiser for lidt protein, især til morgenmad, og mærker det som træthed og sult efter træning. Det er ikke en "muskelmand-ting". Protein giver også mæthed og hjælper med at holde blodsukkeret stabilt.',
      action:
        'Sørg for, at der er protein i det første måltid i morgen: æg, skyr, hytteost eller bønner. Gør det klar i aften.',
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Lav mad sammen',
      insight:
        'Follikelfasen er det bedste tidspunkt at etablere vaner, fordi der er overskud til det. Madlavning er en af de få husholdningsopgaver, der kan være hyggelig frem for et krav, når man gør den sammen. Det handler ikke om at lave noget avanceret, men om at stå i køkkenet samtidig: én hakker, én rører, musik i baggrunden. Det giver samtale, uden at det er "en samtale", og det giver et fælles ejerskab til, hvad der bliver spist. Den partner, der aldrig laver mad, ender med at kommentere maden. Den, der laver den, forstår, hvorfor tingene er, som de er. Det er den forskel, mange kvinder mærker mest.',
      action:
        'Lav aftensmaden sammen i aften. Du vælger retten og handler ind, så hun kun skal møde op i køkkenet.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Indkøbsliste: første halvdel af cyklussen',
      insight:
        'Hvis du handler ind, bestemmer du en stor del af, hvad der er muligt at spise derhjemme. I første halvdel af cyklussen, fra menstruationen og frem mod ægløsning, er det disse ting, der er værd at have i huset: jernrige varer (oksekød, linser, kikærter, bønner, havregryn, spinat), C-vitamin ved siden af (peberfrugt, citrus, kiwi, broccoli), protein til restitution (æg, skyr, kylling, fisk, tofu) og fed fisk et par gange om ugen. Plus det, hun faktisk kan lide. En liste, der kun består af "sundt", bliver ikke spist. En liste, der tager højde for, hvad kroppen mister og bygger op, er en stille form for omsorg.',
      action:
        'Skriv ugens indkøbsliste i dag, og sørg for, at mindst fem af varerne kommer fra listen ovenfor. Vis hende den, og spørg, hvad der mangler.',
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL, NHS_IRON],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Hendes mad er ikke dit projekt',
      insight:
        'Der er en grænse mellem at gøre det gode valg nemt og at holde øje. Kommentarer som "skal du virkelig have mere?", "har du ikke fået nok sukker i dag?" eller "det er ikke særlig sundt" hjælper aldrig, uanset hvor kærligt de er ment. De gør mad til noget, der skal forsvares, og det er præcis det modsatte af, hvad kroppen har brug for, især i lutealfasen, hvor appetitten stiger af biologiske grunde. Din indflydelse ligger i, hvad der er i køleskabet, hvad du selv laver, og hvad du selv spiser. Ikke i, hvad hun putter i munden. Hun er voksen, og hendes krop er hendes. Den regel har ingen undtagelser.',
      action:
        'Læg mærke til i dag, om du er ved at kommentere noget, hun spiser. Hvis ja: sig ingenting. Kommentér i stedet noget, du selv vil gøre.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Ægløsning: brug toppen',
      insight:
        'Omkring ægløsningen topper østrogen, og mange oplever cyklussens højeste energi, bedste humør og hurtigste restitution. Det er tidspunktet for det hårdeste træningspas, den lange vandretur, det løb eller den nye aktivitet, I har talt om. Nogle mærker et kort jag i underlivet og en smule oppustethed, men ellers arbejder kroppen med. Der er én ting, der er værd at vide: østrogen påvirker ledbåndenes stivhed, og nogle studier peger på flere knæskader i dagene omkring ægløsning. Det er ikke en grund til at holde igen, men til at varme ordentligt op. Ellers: giv den gas sammen, mens kroppen er med på det.',
      action:
        'Planlæg noget aktivt og lidt ambitiøst inden for de næste par dage: en lang tur, et hårdt pas, en svømmetur.',
      phaseTags: ['ovulation'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Alkohol gennem cyklussen',
      insight:
        'Alkohol rammer ikke ens hele måneden. Omkring ægløsning er der ofte lyst til at fejre, og der er ikke noget galt i et glas. Men i lutealfasen, og især i PMS-dagene, koster det mere: alkohol forstyrrer søvnen, som allerede er dårligere på grund af progesteron, og den forværrer humørsvingninger og uro dagen efter. Studier har fundet en sammenhæng mellem alkohol og både hyppighed og styrke af PMS. Alkohol dræner også kroppen for væske og sænker blodsukkeret senere på natten, hvilket forstærker uro og sult. Ingen forbud, kun timing: det glas, der er en glæde dag 14, er ofte en dårlig handel dag 26.',
      action:
        'Hvis I skal have et glas i aften, så sørg for mad og vand ved siden af. Er hun i PMS-dagene, så foreslå selv noget uden alkohol.',
      phaseTags: ['ovulation', 'luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Cycle syncing: myte og fornuft',
      insight:
        'Du har måske set "cycle syncing": planer, der fortæller præcis, hvad man skal spise og træne i hver fase. Den ærlige status er, at der er meget lidt forskning bag de detaljerede skemaer. Kroppens energibehov stiger kun cirka 100-300 kalorier om dagen i lutealfasen, og ingen fødevare "balancerer hormoner". Det, der holder, er de enkle principper: jern og C-vitamin i menstruationen, hårde pas når energien er høj, stabilt blodsukker og mere restitution i den sidste uge. Det er almindelig god ernæring med bedre timing, ikke magi. Vær skeptisk over for alt, der sælger tilskud eller kræver et abonnement. Vær åben over for det, hun selv mærker virker.',
      action:
        'Spørg hende, om hun har stødt på cycle syncing, og hvad hun tænker om det. Del dette korts ærlige version.',
      phaseTags: [],
      sources: [NHS_EATWELL, NHS_PMS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Lutealfasen: hold blodsukkeret stabilt',
      insight:
        'Efter ægløsning gør progesteron kroppen lidt mindre følsom over for insulin, og forbrændingen stiger en smule. Det betyder, at blodsukkeret svinger mere: hurtige kulhydrater giver et højere hop og et dybere fald. Faldet mærkes som pludselig sult, rysten, irritabilitet og trang til mere af det samme. Det er en stor del af forklaringen på, at PMS-dagene føles så ustabile. Modtrækket er kedeligt og effektivt: regelmæssige måltider hver tredje til fjerde time, protein og fibre i hvert, og aldrig for lang tid uden mad. En sen frokost på dag 25 er en kendt opskrift på et skænderi klokken 15.',
      action:
        'Tjek, hvornår hun sidst har spist, hvis stemningen skifter i eftermiddag. Sæt noget med protein frem uden at kommentere det.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Fibre gør mætheden lang',
      insight:
        'Fibre bremser optaget af sukker fra tarmen, så et måltid med fuldkorn, bønner, grøntsager og frugt giver en jævnere blodsukkerkurve end det samme antal kalorier fra hvidt brød og slik. Anbefalingen er 30 gram fibre om dagen, og de fleste får omkring det halve. Fibre hjælper også mod den forstoppelse, som progesteron ofte giver i lutealfasen, fordi det sænker tarmens bevægelser. Havregryn, rugbrød, linser, æbler, pærer, gulerødder, nødder og frø er de nemme kilder. Sammen med rigeligt vand er det en af de mest undervurderede ting mod oppustethed. Skift ét hvidt produkt ud med et fuldkornsprodukt, så er du i gang.',
      action:
        'Skift én ting i huset til fuldkorn i dag: brødet, risen, pastaen eller morgenmaden. Uden at gøre et nummer ud af det.',
      phaseTags: ['luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Magnesium og PMS: hvad evidensen siger',
      insight:
        'Magnesium bliver ofte anbefalet mod PMS, og det er værd at kende den ærlige status. Nogle mindre studier har fundet, at magnesium dæmpede oppustethed, ømme bryster og humørsymptomer, og at kombinationen med B6 virkede lidt bedre. Andre studier fandt ingen effekt. Samlet set: begrænset evidens, men lav risiko ved fornuftige doser, og en mulig gevinst. Magnesium fra maden er der ingen tvivl om: fuldkorn, nødder, frø, bønner, mørk chokolade og grønne blade er alle gode kilder. Overvejer hun et tilskud, er det en samtale med apoteket eller lægen, ikke med en influencer, især hvis hun tager anden medicin eller har nyreproblemer.',
      action:
        'Sæt nødder, frø eller mørk chokolade frem som snack i dag. Det er magnesium uden at kalde det magnesium.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Kalcium og PMS: den bedste af de svage',
      insight:
        'Af alle kosttilskud mod PMS er kalcium det med den mest konsistente evidens. Et større lodtrækningsstudie fandt, at 1200 mg kalcium dagligt over tre cyklusser dæmpede humørsymptomer, væskeophobning, smerte og sult markant, og senere studier har peget samme vej. Mekanismen er ikke helt klar, men kalciumniveauet i blodet svinger med østrogen. Kalcium fra maden er det sikreste sted at starte: mælk, yoghurt, ost, kalciumberiget plantemælk, sardiner, mandler og grønkål. Den daglige anbefaling for voksne ligger omkring 700-1000 mg. D-vitamin er nødvendigt for at optage kalcium, og i den danske vinter er det svært at få nok fra solen alene.',
      action:
        'Tjek køleskabet: er der yoghurt, ost, mælk eller beriget plantemælk? Hvis ikke, så køb det i dag.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Salt, oppustethed og væske',
      insight:
        'Oppustethed i lutealfasen skyldes, at progesteron og østrogen påvirker, hvordan nyrerne håndterer salt og væske. Kroppen holder på mere, og maven, fingrene og brysterne kan føles hævede. Det er ikke fedt, det er vand, og det forsvinder, når menstruationen begynder. Meget salt forværrer det: færdigretter, chips, saltede nødder og takeaway indeholder ofte flere gange den mængde salt, man selv ville bruge. Modtrækket er ikke at drikke mindre, tværtimod; rigeligt vand hjælper nyrerne med at skille sig af med overskuddet. Kalium fra kartofler, bananer og grøntsager hjælper også. Og tøj, der ikke strammer om maven, er ikke en detalje i den uge.',
      action:
        'Lav mad fra bunden i aften i stedet for færdigret eller takeaway, og server rigeligt vand til.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Koffein sidst i lutealfasen',
      insight:
        'Koffein har en halveringstid på omkring fem timer, så en kop klokken 15 er stadig halvt aktiv klokken 20. I lutealfasen, hvor søvnen allerede er lettere på grund af progesteron og en højere kropstemperatur, kan det være forskellen på at falde i søvn og at ligge og vende sig. Koffein kan også forstærke uro, hjertebanken og ømme bryster i PMS-dagene, og det er en af de få ting, sundhedsmyndighederne faktisk anbefaler at skære ned på ved PMS. Det betyder ikke ingen kaffe. Det betyder tidligere kaffe og færre kopper i den sidste uge. Og det er lettest at gøre, hvis I begge gør det.',
      action:
        'Lav kaffen tidligt i dag, og foreslå noget koffeinfrit efter frokost: urtete, koffeinfri kaffe eller bare vand.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Sænk intensiteten, øg restitutionen',
      insight:
        'I den sidste uge før menstruation har mange lavere energi, dårligere søvn og længere restitution efter hård træning. Kropstemperaturen er højere, hvilket gør varme og udholdenhedstræning mere krævende, og progesteron nedbryder muskel lidt mere, end østrogen bygger op. Det er ikke tiden til nye rekorder, og det er ikke tiden til at presse igennem, når kroppen siger nej. Men bevægelse hjælper stadig på humøret og på PMS-symptomer, så nøglen er mindre intensitet, ikke mindre bevægelse. Gåture, let styrke, svømning, yoga. Regelmæssig, moderat motion dæmper PMS-symptomer mærkbart, og det er kontinuiteten, ikke hårdheden, der tæller.',
      action:
        'Hvis I har planlagt hård træning i denne uge, så foreslå selv at skrue ned og gå en tur i stedet. Gør det til dit forslag, ikke hendes nederlag.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Søvnhygiejne i den svære uge',
      insight:
        'Dårlig søvn er den enkeltfaktor, der forværrer PMS mest, og lutealfasen gør søvnen sværere af sig selv: højere kropstemperatur, hyppigere opvågninger, mere uro. Derfor er søvnhygiejne ikke et luksusbegreb i den uge, det er førstehjælp. De ting, der virker, er kendte: samme sengetid hver dag, et køligt og mørkt soveværelse, ingen skærme den sidste halve time, intet koffein efter middag og ingen alkohol som "sovemiddel". Og ro om aftenen, som ikke kommer af sig selv, hvis der stadig er opvask, beskeder og planer klokken 22. Det er der, du kommer ind. Du kan ikke sove for hende, men du kan rydde aftenen for hende.',
      action:
        'Tag hele aftenrutinen i dag: opvask, børn, låse, lys. Sig "gå bare i seng, jeg tager resten" en halv time tidligere end normalt.',
      phaseTags: ['luteal'],
      sources: [NHS_SLEEP, NHS_PMS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Indkøbsliste: anden halvdel af cyklussen',
      insight:
        'I ugen op til menstruationen ændrer behovene sig, og det kan indkøbslisten afspejle. Det, der er værd at have: fuldkorn og fibre (havregryn, rugbrød, brune ris, linser), protein til hvert måltid (æg, skyr, kylling, fisk, bønner), kalcium (yoghurt, ost, mælk), magnesium (nødder, frø, mørk chokolade), kalium mod væske (bananer, kartofler), fed fisk, og gode snacks til de sultne timer: frugt, nødder, hytteost, grovkiks. Mindre af: færdigretter, chips, sodavand, alkohol. Og ja, den chokolade eller de chips, hun faktisk ønsker sig. Formålet med listen er ikke at kontrollere, men at gøre det nemt at spise regelmæssigt uden at skulle tænke over det.',
      action:
        'Handl ind til de næste tre dage efter listen ovenfor, og læg en snack med protein synligt frem på køkkenbordet.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EATWELL],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Kropsbillede: det, du siger, bliver hængende',
      insight:
        'Kroppen ændrer sig gennem cyklussen: oppustet i lutealfasen, tungere i menstruationen, lettere omkring ægløsning. Vægten kan svinge et par kilo på en uge alene af væske. Mange kvinder ved det godt og har alligevel svært ved at lade være med at måle sig på det, fordi kroppen er blevet kommenteret hele livet. Det, du siger, lander oven på det. Selv "du ser sund ud" eller "har du tabt dig?" fortæller, at kroppen bliver vurderet. Det mest hjælpsomme er at gøre kroppen til et ikke-emne: tale om, hvad den kan, hvordan dagen var, hvad hun gjorde godt. Og aldrig kommentere mave, vægt eller portioner.',
      action:
        'Sig noget i dag om, hvad hun gjorde eller kunne, ikke hvordan hun så ud. Og læg mærke til, hvor let det modsatte kommer.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Når mad bliver et problem: det fortjener en læge',
      insight:
        'Spiseforstyrrelser er almindelige, ofte skjulte, og de rammer ikke kun teenagere. Tegn, der er værd at tage alvorligt: måltider, der springes over eller spises i smug, regler der bliver strammere, træning der ikke kan aflyses uanset hvad, stærk uro ved mad hun ikke selv har kontrol over, og en cyklus, der bliver uregelmæssig eller forsvinder, fordi kroppen mangler energi. Du skal ikke stille diagnosen, og du skal ikke overvåge. Men du må gerne sige, at du er bekymret, og at det fortjener en læge. Uden at nævne vægt, uden at kommentere maden, og uden at gøre det til en diskussion. Bare: "Jeg er bekymret for dig, og jeg vil gerne hjælpe."',
      action:
        'Hvis noget på listen genkendes: sig sætningen i dag, roligt og uden krav. Hvis ikke: gem kortet, og vær opmærksom.',
      phaseTags: [],
      sources: [NHS_EATING],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Kosttilskud: det, der er værd at vide',
      insight:
        'Markedet for tilskud mod PMS og menstruationsgener er enormt, og det meste er ikke værd at bruge penge på. Status for de mest omtalte: kalcium har den bedste evidens, magnesium og B6 har svag evidens med lav risiko, omega-3 ser ud til at hjælpe på smerter, og D-vitamin er relevant i vinterhalvåret. Jerntilskud skal kun tages, hvis en blodprøve viser mangel, fordi for meget jern er skadeligt. Perikon og andre urter kan påvirke anden medicin, herunder p-piller. Grundreglen er den samme som for alt andet i denne måned: mad først, tilskud efter aftale med læge eller apotek, og dyre "hormonbalance"-produkter er reklame, ikke medicin.',
      action:
        'Hvis der står tilskud i skabet, så spørg nysgerrigt, hvad de er for, og om de virker for hende. Ingen dom, kun interesse.',
      phaseTags: [],
      sources: [NHS_VITAMINS, NHS_PMS],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Restitution er ikke dovenskab',
      insight:
        'Restitution er den del af træning og hverdag, der oftest bliver sprunget over. Musklerne bygges op, når man hviler, immunforsvaret genoprettes, når man sover, og humøret stabiliseres, når der er pauser. I en cyklus er behovet for restitution ikke konstant: det er højest de første menstruationsdage og den sidste uge før, lavest omkring ægløsning. En kvinde, der hviler dag 27, er ikke doven. Hun er klog. Kulturen omkring os belønner at presse igennem, og mange kvinder har lært at ignorere signaler, indtil kroppen råber. Som partner kan du være den, der gør det legitimt at holde pause, ved selv at holde den sammen med hende.',
      action:
        'Sæt dig ned sammen med hende i aften uden skærm og uden dagsorden i 20 minutter. Kald det restitution, og mén det.',
      phaseTags: [],
      sources: [NHS_SLEEP],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 9: det har du lært',
      insight:
        'Du ved nu, at menstruationen koster jern, og at C-vitamin og timing af kaffen gør jernet brugbart. At varme virker på kramper, kulde på hovedpine, og let bevægelse på begge. At kalcium og omega-3 har den bedste evidens, magnesium den svageste, og at cycle syncing er fornuftige principper pakket ind i markedsføring. At blodsukkeret svinger mere i lutealfasen, og at regelmæssige måltider med protein og fibre er det bedste PMS-forsvar, der findes. At hårde pas hører til i første halvdel, restitution i anden. Og det vigtigste: din rolle er køleskabet, køkkenet og aftenen, ikke hendes tallerken. Kommentarer om mad og krop hjælper aldrig; nemme valg gør.',
      action:
        'Fortæl hende de tre ting fra denne måned, du vil holde fast i. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Mad og cyklus: det, der faktisk er evidens for',
      body: [
        'Der findes tusindvis af råd om, hvad kvinder bør spise i hver fase af cyklussen, og det meste af det er gætværk pakket ind i pæne farver. Denne artikel skiller det, der holder, fra det, der ikke gør, så I kan bruge kræfterne på det, der flytter noget.',
        'Det bedst dokumenterede er jern. Hver menstruation koster jern, og jernmangel er den mest udbredte mangeltilstand blandt kvinder i den fødedygtige alder. Symptomerne er træthed, der ikke forsvinder med søvn, åndenød, hovedpine, koncentrationsbesvær og kort lunte, og de bliver ofte forklaret med alt muligt andet. Jern fra kød, fisk og indmad optages let. Jern fra linser, bønner, tofu, havregryn og grønne blade optages dårligere, men C-vitamin i samme måltid gør en stor forskel: peberfrugt, citrus, broccoli, kiwi. Kaffe og te til måltidet hæmmer optaget, så flyt dem en times tid. Jerntilskud skal kun tages efter en blodprøve, fordi for meget jern er skadeligt. Er hun træt i ugevis, er det en læge, ikke en teori.',
        'Det næstbedst dokumenterede er blodsukker. Efter ægløsning gør progesteron kroppen lidt mindre følsom over for insulin, og forbrændingen stiger cirka 100-300 kalorier om dagen. Resultatet er, at hurtige kulhydrater giver højere hop og dybere fald, og faldet mærkes som pludselig sult, rysten, irritabilitet og trang til mere. Modtrækket er ikke en diæt, det er regelmæssighed: måltider hver tredje til fjerde time, protein og fibre i hvert, og snacks, der er lette at gribe. Sult forstærker alt i PMS-dagene, og en sen frokost er en kendt opskrift på et skænderi.',
        'Blandt tilskud er kalcium det med den mest konsistente evidens. Et større lodtrækningsstudie fandt, at 1200 mg dagligt over tre cyklusser dæmpede humørsymptomer, væskeophobning, smerte og sult markant. Omega-3 fra fed fisk ser i flere mindre studier ud til at dæmpe menstruationssmerter, fordi det hæmmer de prostaglandiner, der giver kramper. Magnesium og B6 har svag evidens: nogle studier finder effekt på oppustethed og humør, andre finder ingen. Fælles for dem alle er, at maden er det sikreste sted at starte. Mejeriprodukter, sardiner og grønkål for kalcium; laks, makrel og sild for omega-3; nødder, frø, fuldkorn og mørk chokolade for magnesium. Tilskud er en samtale med apotek eller læge, ikke med en reklame.',
        'Så til "cycle syncing", ideen om, at man skal spise bestemte fødevarer i hver fase for at "balancere hormonerne". Den ærlige status er, at der næsten ingen forskning er bag de detaljerede skemaer. Ingen fødevare balancerer hormoner. Det, skemaerne rammer rigtigt, er de simple principper ovenfor: jern og C-vitamin under menstruationen, stabilt blodsukker og mere fibre i lutealfasen, mindre koffein og alkohol i den sidste uge. Det er almindelig god ernæring med bedre timing. Vær skeptisk over for alt, der sælger et produkt. Vær åben over for det, hun selv mærker.',
        'Det bringer os til det vigtigste: din rolle. Du kan ikke, og skal ikke, styre hvad hun spiser. Kommentarer om portioner, sukker eller "er det sundt?" hjælper aldrig, og de gør mad til noget, der skal forsvares. Din indflydelse er indirekte og stor: hvad der bliver købt ind, hvad der bliver lavet, hvad der står i køleskabet klokken 15 på dag 25, og hvad du selv spiser. Gør det gode valg til det nemme valg, og lad resten være hendes.',
        'I denne uge er opgaven simpel: sørg for jern og C-vitamin på bordet i menstruationsdagene, og flyt kaffen. Det er en lille ting, der gør en reel forskel for en krop, der bløder hver måned.',
      ],
      conversationQuestion:
        'Er der noget mad, du mærker hjælper dig i bestemte dage af cyklussen, og noget du gerne vil have, at vi har i huset oftere?',
      sources: [NHS_IRON, NHS_PMS, NHS_EATWELL],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Træning gennem cyklussen: hårdt, når hun kan, blidt, når hun skal',
      body: [
        'Motion er en af de ting, der har bedst dokumenteret effekt på både menstruationssmerter og PMS. Men det er ikke ligegyldigt, hvordan og hvornår. Denne artikel handler om at lægge intensiteten der, hvor kroppen kan bruge den, og restitutionen der, hvor den har brug for den. Og om, hvordan du kan være med i stedet for at stå på sidelinjen.',
        'Start med det, der er sikkert. Regelmæssig, moderat motion dæmper PMS-symptomer som irritabilitet, nedtrykthed, oppustethed og træthed mærkbart, og det er en af de første anbefalinger, sundhedsmyndighederne giver. Let bevægelse under menstruationen, en gåtur, rolig cykling, yoga, dæmper kramper hos mange, fordi det øger blodgennemstrømningen i bækkenet og frigiver endorfiner. Det er ikke det samme som at træne igennem smerten. Hård træning på dag 1 gør det værre for nogle. Blid aktivitet, gerne udendørs, er reglen.',
        'Så til timingen. I follikelfasen stiger østrogen, og med det energi, restitutionsevne og smertetærskel. Østrogen har en beskyttende effekt på musklerne, og nogle mindre studier har fundet, at styrketræning koncentreret i follikelfasen gav lidt større muskelvækst end samme træning lagt i lutealfasen. Evidensen er tynd, og forskellen mellem kvinder er stor, men princippet holder uanset hvad forskningen ender med: læg de hårde pas, intervallerne, de lange ture og de nye rekorder der, hvor kroppen har overskud til dem. Omkring ægløsning er energien for mange på sit højeste. Én detalje er værd at kende: østrogen påvirker ledbåndenes stivhed, og der er tegn på flere knæskader i dagene omkring ægløsning. Det er ikke en grund til at holde igen, men til at varme ordentligt op.',
        'I lutealfasen skifter det. Progesteron hæver kropstemperaturen, hvilket gør varme og lange udholdenhedspas mere krævende, søvnen bliver lettere, og restitutionen tager længere tid. Progesteron nedbryder muskel lidt mere, end østrogen bygger op. Den sidste uge før menstruation er ikke tiden til at jagte rekorder eller presse igennem, når kroppen siger nej. Men det er heller ikke tiden til at stoppe, fordi bevægelse er noget af det, der hjælper bedst på PMS. Nøglen er lavere intensitet, ikke mindre bevægelse: gåture, let styrke, svømning, yoga, cykling i roligt tempo. Kontinuiteten tæller mere end hårdheden.',
        'Restitution er den del, der oftest bliver sprunget over, og den er ikke ens hele måneden. Behovet er højest de første menstruationsdage og den sidste uge før, lavest omkring ægløsning. Restitution er søvn, mad nok, protein til at bygge op efter træning, og pauser. En kvinde, der hviler dag 27, er ikke doven. Hun lytter til noget, mange har lært at overhøre. Kulturen belønner at presse igennem, og det gælder ikke mindst kvinder, som ofte har fået at vide, at menstruation ikke må være en undskyldning for noget som helst. Den kan godt være en grund til at skrue ned.',
        'Hvad kan du gøre? Træn sammen, når energien er høj: det er sjovere, og det gør de hårde pas til noget fælles. Foreslå selv at skrue ned i den sidste uge, så det bliver dit forslag og ikke hendes nederlag. Gå turen med hende i menstruationsdagene, og tag et nej uden at overtale. Sørg for protein efter træning og mad nok i det hele taget. Og hold pausen sammen med hende, når det er tid til pause. Motion er ikke noget, du skal motivere hende til. Det er noget, I kan gøre sammen i det tempo, cyklussen tillader.',
        'Til sidst en grænse. Træning, der ikke kan aflyses uanset smerte, feber eller udmattelse, og en cyklus, der bliver uregelmæssig eller forsvinder, mens træningsmængden stiger, er ikke disciplin. Det kan være tegn på, at kroppen får for lidt energi, og det fortjener en læge. Du skal ikke stille diagnosen. Du må gerne sige, at du er bekymret.',
      ],
      conversationQuestion:
        'Hvornår i din cyklus har du mest lyst til at træne hårdt, og hvornår ville du ønske, at nogen sagde "lad os bare gå en tur i stedet"?',
      sources: [NHS_PMS, NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Søvn, koffein, alkohol og varme: restitution i praksis',
      body: [
        'Hvis der er én ting, der forværrer PMS mere end noget andet, er det dårlig søvn. Og lutealfasen gør søvnen dårligere af sig selv. Denne artikel handler om, hvad der forstyrrer restitutionen i den sidste uge, hvad der hjælper, og hvor du konkret kan gøre en forskel uden at sige et ord om det.',
        'Start med, hvorfor søvnen bliver sværere. Progesteron hæver kropstemperaturen 0,3-0,5 grader i hele lutealfasen, og en varm krop falder sværere i søvn og vågner oftere. I den sidste uge falder både progesteron og østrogen, og med dem serotonin, som også er byggesten for melatonin, søvnhormonet. Resultatet er lettere søvn, flere opvågninger og mere uro. Det er ikke indbildning, og det er ikke noget, hun kan beslutte sig ud af. Det er fysiologi med en kalender.',
        'Koffein passer dårligt ind i det billede. Halveringstiden er omkring fem timer, så en kop klokken 15 er stadig halvt aktiv ved sengetid. Koffein forstærker desuden uro, hjertebanken og ømme bryster i PMS-dagene, og det er en af de få kostændringer, sundhedsmyndighederne direkte anbefaler ved PMS. Det betyder ikke ingen kaffe. Det betyder kaffe tidligt og færre kopper i den sidste uge, og det er langt lettere, hvis I begge gør det. Husk også, at kaffe og te til måltidet hæmmer jernoptaget; en times afstand er nok.',
        'Alkohol er den anden store søvnforstyrrer. Et glas gør det lettere at falde i søvn, men søvnen bliver overfladisk, og man vågner tidligere. I lutealfasen, hvor søvnen allerede er skrøbelig, koster det mere end resten af måneden. Alkohol dræner også kroppen for væske og sænker blodsukkeret senere på natten, hvilket forstærker uro og sult, og studier har fundet en sammenhæng mellem alkohol og både hyppighed og sværhedsgrad af PMS. Ingen forbud. Bare timing: det glas, der er en glæde omkring ægløsning, er ofte en dårlig handel dag 26.',
        'Så til det, der hjælper. Søvnhygiejne lyder som et luksusbegreb, men i lutealfasen er det førstehjælp: samme sengetid hver dag, et køligt og mørkt soveværelse, et lettere dynetæppe, ingen skærme den sidste halve time, og ro om aftenen. Varme har sin egen plads: en varmepude på underlivet dæmper kramper lige så godt som håndkøbsmedicin i studier, og et varmt bad om aftenen hjælper både på smerte og på at falde i søvn, fordi kroppen køler ned bagefter. Kulde er godt til andet: en kold klud i nakken ved menstruationshovedpine, en kølig pose på ømme bryster. Væske nok hele dagen forebygger hovedpine og forværrede kramper.',
        'Her er din rolle. Du kan ikke sove for hende, men du kan rydde aftenen. Ro om aftenen kommer ikke af sig selv, hvis der stadig er opvask, beskeder, børn og planer klokken 22. Tag aftenrutinen i den sidste uge: opvask, låse, lys, det praktiske. Gør soveværelset køligt. Lav kaffen tidligt, og foreslå selv noget uden koffein og uden alkohol, så hun ikke skal være den, der siger nej. Fyld varmedunken, før hun spørger. Det er usynligt arbejde, og det er noget af det mest konkrete, du kan gøre for at gøre PMS-dagene lettere.',
        'Én ting til sidst: hvis søvnproblemerne er der hele måneden, eller hvis trætheden er så tung, at den påvirker hverdagen uanset søvn, er det ikke lutealfasen. Det kan være jernmangel, stofskifte, søvnapnø eller andet, der kan behandles. Det fortjener en læge.',
      ],
      conversationQuestion:
        'Hvad forstyrrer din søvn mest i ugen før menstruation, og hvad kunne jeg tage over om aftenen, så du kunne gå i seng, når du er træt?',
      sources: [NHS_SLEEP, NHS_PMS, NHS_PAIN],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Sammen om maden uden at blive madpoliti',
      body: [
        'Alt det, denne måned har handlet om, jern, blodsukker, fibre, kalcium, søvn, virker kun, hvis det bliver gjort. Og det bliver ikke gjort, fordi den ene fortæller den anden, hvad hun bør spise. Det bliver gjort, fordi det er nemt, fordi det er fælles, og fordi ingen skal forsvare sig. Denne artikel handler om, hvordan du bliver en del af maden uden at blive dens politi.',
        'Begynd med det praktiske. Den, der handler ind, bestemmer en stor del af, hvad der er muligt at spise. Det er en stille magt, og den kan bruges godt. I første halvdel af cyklussen: jernrige varer, C-vitamin ved siden af, protein til restitution, fed fisk. I anden halvdel: fuldkorn og fibre, protein til hvert måltid, kalcium, nødder og frø, bananer og kartofler mod væske, og snacks, der er lette at gribe: frugt, hytteost, grovkiks. Mindre færdigmad og chips, fordi saltet forværrer oppustethed. Og altid noget, hun faktisk kan lide, også chokoladen. En liste, der kun består af "sundt", bliver ikke spist.',
        'Madlavning er den anden del. Den partner, der aldrig laver mad, ender med at kommentere maden. Den, der laver den, forstår, hvorfor tingene er, som de er. At lave mad sammen er en af de få husholdningsopgaver, der kan være hyggelig frem for et krav: én hakker, én rører, musik i baggrunden. Det giver samtale, uden at det er "en samtale". Og det giver fælles ejerskab. I lutealfasen, hvor overskuddet er lavt, er det dig, der laver maden og har den klar til tiden, fordi en sen middag på dag 25 er en kendt opskrift på et skænderi.',
        'Nu til grænsen. Der er en verden til forskel på at gøre det gode valg nemt og at holde øje. "Skal du virkelig have mere?", "har du ikke fået nok sukker i dag?", "er det nu sundt?" hjælper aldrig, uanset hvor kærligt de er ment. De gør mad til noget, der skal forsvares, og det er det modsatte af, hvad kroppen har brug for, især i lutealfasen, hvor appetitten stiger af rent biologiske grunde. Din indflydelse er, hvad der er i køleskabet, hvad du laver, og hvad du selv spiser. Ikke hvad hun putter i munden. Hun er voksen, og hendes krop er hendes.',
        'Det gælder også kroppen. Vægten svinger et par kilo hen over cyklussen alene af væske, maven er oppustet i lutealfasen, og tøjet sidder anderledes. Mange kvinder ved det godt og har alligevel svært ved ikke at måle sig på det, fordi kroppen er blevet kommenteret hele livet. Selv "du ser sund ud" og "har du tabt dig?" fortæller, at kroppen bliver vurderet. Det mest hjælpsomme er at gøre kroppen til et ikke-emne og tale om, hvad hun gjorde, hvad hun kunne, hvordan dagen var. Og aldrig kommentere mave, vægt eller portioner.',
        'Så noget, der er vigtigt at vide. Spiseforstyrrelser er almindelige, ofte skjulte, og de rammer ikke kun teenagere. Tegn, der er værd at tage alvorligt: måltider, der springes over eller spises i smug, regler, der bliver strammere, træning, der ikke kan aflyses uanset hvad, stærk uro ved mad, hun ikke selv har kontrol over, og en cyklus, der bliver uregelmæssig eller forsvinder, fordi kroppen mangler energi. Du skal ikke stille diagnosen, og du skal ikke overvåge. Men du må gerne sige, roligt og uden at nævne vægt: "Jeg er bekymret for dig, og jeg vil gerne hjælpe." Og at det fortjener en læge.',
        'Ugens opgave er den enkleste i måneden: handl ind efter fasen, lav maden, og sig ingenting om, hvad hun spiser. Det er ikke passivt. Det er at tage ansvar for det, du faktisk har indflydelse på, og lade resten være hendes.',
      ],
      conversationQuestion:
        'Har jeg nogensinde sagt noget om din mad eller din krop, der blev hængende? Og hvad ville du ønske, jeg gjorde i stedet?',
      sources: [NHS_EATWELL, NHS_EATING, NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 9: Kost, træning og restitution',
    summary: [
      'Denne måned handlede om de tre håndtag, der er nemmest at dreje på i hverdagen: mad, bevægelse og søvn. Du har lært, at menstruationen koster jern, at C-vitamin gør plantejern brugbart, og at kaffe og te til måltidet hæmmer optaget. At blodsukkeret svinger mere i lutealfasen, og at regelmæssige måltider med protein og fibre er det bedste forsvar mod PMS-dagenes ustabilitet. At kalcium og omega-3 har den bedste evidens blandt tilskud, magnesium den svageste, og at cycle syncing er fornuftige principper pakket ind i markedsføring.',
      'Du har også lært, at hårde træningspas hører til i follikelfasen og omkring ægløsning, at den sidste uge kalder på lavere intensitet og mere restitution, og at let bevægelse og varme er blandt de bedst dokumenterede midler mod kramper. At koffein og alkohol koster mest i lutealfasen, og at søvnhygiejne i den uge er førstehjælp, ikke luksus. Og at din rolle er køleskabet, køkkenet og aftenen, aldrig hendes tallerken eller hendes krop.',
      'Næste måned handler om fertilitet, prævention og graviditet: hvad hun bærer, hvad du kan tage, og hvordan ansvaret bliver fælles i praksis.',
    ],
    keepDoing: [
      'Sæt jern og C-vitamin på bordet i menstruationsdagene, og flyt kaffen en time væk fra måltidet.',
      'Hav protein- og fibersnacks synligt fremme i lutealfasen, og sig ingenting, når de bliver spist.',
      'Træn hårdt sammen i første halvdel, og foreslå selv at skrue ned i den sidste uge.',
      'Tag aftenrutinen i ugen før menstruation, så hun kan gå i seng, når hun er træt.',
      'Kommentér aldrig hendes mad, portioner eller krop. Kommentér det, hun gør og kan.',
    ],
    quiz: [
      {
        question:
          'Hun er på dag 2 og har været usædvanligt træt i flere uger, også efter gode nætter. Hvad hjælper mest?',
        options: [
          'Købe jerntilskud og bede hende tage dem hver dag',
          'Lave jernrig mad med C-vitamin til, og foreslå en blodprøve hos lægen, hvis trætheden fortsætter',
          'Sige at det er normalt at være træt under menstruationen',
          'Foreslå en ekstra kop kaffe til maden',
        ],
        correctIndex: 1,
        explanation:
          'Langvarig træthed kan være jernmangel, men tilskud skal kun tages efter en blodprøve, fordi for meget jern er skadeligt. Mad først, læge ved tvivl.',
      },
      {
        question:
          'Det er dag 26, klokken 15, og hun snapper ad dig. Hun har ikke spist siden klokken 11. Hvad virker bedst?',
        options: [
          'Spørge om hun er PMS-ramt',
          'Spørge om hun ikke skulle spise noget sundt',
          'Sætte noget med protein og fibre frem uden at kommentere det',
          'Trække dig og lade hende være i fred',
        ],
        correctIndex: 2,
        explanation:
          'Blodsukkeret svinger mere i lutealfasen, og sult forstærker irritabilitet. Mad uden kommentar løser ofte problemet, en kommentar gør det større.',
      },
      {
        question:
          'Hun spørger, om magnesium virker mod PMS. Hvad er det ærligste og mest hjælpsomme svar?',
        options: [
          'Sige at det garanteret virker, og købe det til hende',
          'Sige at evidensen er begrænset, men risikoen lav, og foreslå nødder, frø og fuldkorn først og tilskud efter en snak med apoteket',
          'Sige at det er spild af penge, og at hun skal droppe ideen',
        ],
        correctIndex: 1,
        explanation:
          'Magnesium har svag evidens og lav risiko. Ærlighed om evidensen, mad først og en fagperson til tilskud er den holdning, der holder for alle tilskud.',
      },
      {
        question:
          'I har planlagt et hårdt træningspas sammen på dag 27, og hun er tydeligt udkørt. Hvad er mest hjælpsomt?',
        options: [
          'Presse på, fordi træning hjælper mod PMS',
          'Selv foreslå en gåtur eller et let pas i stedet',
          'Aflyse det hele og sige, at hun skal hvile',
          'Træne alene uden at sige noget',
        ],
        correctIndex: 1,
        explanation:
          'Sidst i lutealfasen er nøglen lavere intensitet, ikke mindre bevægelse. At det bliver dit forslag, gør det til et fælles valg og ikke hendes nederlag.',
      },
      {
        question: 'På dag 24 siger hun: "Jeg føler mig så tyk i dag." Hvad hjælper mest?',
        options: [
          '"Du ser da fin ud."',
          '"Det er nok bare væske, det går over."',
          'Anerkende at det er en hård dag, ikke kommentere kroppen, og tilbyde noget konkret som et varmt bad eller en gåtur',
          'Foreslå, at I spiser salat i aften',
        ],
        correctIndex: 2,
        explanation:
          'Enhver kommentar om kroppen, også en positiv, bekræfter, at den bliver vurderet. Anerkendelse og noget konkret hjælper; forklaringer og madforslag gør det værre.',
      },
      {
        question:
          'Du har lagt mærke til, at hun springer måltider over, træner uanset hvad, og at menstruationen er udeblevet i flere måneder. Hvad er den rigtige reaktion?',
        options: [
          'Holde øje med, hvad hun spiser, og påpege det',
          'Sige roligt, at du er bekymret for hende, at det fortjener en læge, og at du gerne vil hjælpe, uden at nævne vægt eller mad',
          'Vente og se, om det går over af sig selv',
          'Lave mere mad og insistere på, at hun spiser op',
        ],
        correctIndex: 1,
        explanation:
          'Tegnene kan pege på en spiseforstyrrelse eller for lidt energi til kroppen. Du skal ikke overvåge eller diagnosticere, men sige din bekymring og pege på lægen.',
      },
    ],
  },
};
