import type { TopicTranslation } from './types';

/**
 * Albanian translations for the highest-priority guides (P0 core: entry,
 * hours, access, parking, history and sunset). Other topics are published in
 * English only; hreflang never points at a translation that does not exist.
 * These are hand-written translations, not machine-generated filler.
 */
export const SQ_CONTENT: Record<string, TopicTranslation> = {
  'guides/entrance-fee': {
    cardTitle: 'Biletat dhe tarifa e hyrjes',
    cardText: 'Çfarë përfshin hyrja, çfarë nuk përfshin dhe ku konfirmohen rregullat aktuale.',
    metaTitle: 'Biletat dhe hyrja në Kalaja e Lëkurësit | Sarandë',
    metaDescription:
      'A duhet biletë për Kalaja e Lëkurësit? Dallimi midis vizitës së rrënojave dhe restorantit, si dhe ku duhet konfirmuar tarifa e hyrjes përpara udhëtimit.',
    h1: 'Biletat dhe tarifa e hyrjes në Kalaja e Lëkurësit',
    lead:
      'Shumë vizitorë kërkojnë një biletë për kalanë, por në të vërtetë bëjnë dy pyetje të ndryshme: a mund të vizitohen rrënojat pa pagesë dhe a ka shërbime me pagesë brenda mureve. Kjo faqe i ndan të dyja.',
    sections: [
      {
        heading: 'A nevojitet biletë për hapësirën e jashtme?',
        paragraphs: [
          'Udhëzuesi ynë kryesor e përshkruan hapësirën e jashtme të kalasë si të vizitueshme pa biletë, ashtu siç raportohet zakonisht edhe nga vizitorë të tjerë. Nuk kemi gjetur një tarifë zyrtare të publikuar së fundmi nga administrimi i vendit.',
          'Kjo është një fotografi e praktikës së zakonshme, jo një garanci. Ky sit nuk shet bileta dhe nuk mund të konfirmojë nëse ditën e vizitës ka pagesë, kufizim të zonave apo mbyllje të përkohshme.',
        ],
        bullets: [
          'Konfirmoni në hyrje ose pranë Bashkisë së Sarandës dhe Institutit të Trashëgimisë Kulturore.',
          'Aktivitete private dhe punime restaurimi mund të ndryshojnë zonat e hapura.',
          'Konsumi në restorant është shërbim i veçantë dhe nuk përfshihet në asnjë biletë.',
        ],
      },
      {
        heading: 'Vizita e kalasë dhe vizita e restorantit',
        paragraphs: [
          'Kalaja dhe restoranti brenda mureve janë dy gjëra të ndryshme. Shëtitja midis mureve historike dhe pikave të shikimit është vizitë kulturore; një vakt në tarracë është blerje nga një operator i pavarur, me menu dhe çmimet e veta.',
          'Një faturë restoranti nuk është biletë hyrjeje, dhe një shëtitje falas nuk jep të drejtë mbi tavolinat apo tarracën e restorantit.',
        ],
      },
      {
        heading: 'A duhet rezervim?',
        paragraphs: [
          'Për një vizitë të shkurtër në rrënojat e jashtme nuk ka rezervim pranë nesh. Për një tavolinë, veçanërisht në perëndim të diellit, kontaktoni drejtpërdrejt operatorin përmes faqes së tij zyrtare.',
          'Udhëtimet me guidë dhe transporti i organizuar shiten nga operatorë të tjerë; çmimet e tyre nuk janë çmime bilete për kalanë.',
        ],
      },
    ],
    faqs: [
      {
        q: 'A është falas vizita në Kalaja e Lëkurësit?',
        a: 'Hapësira e jashtme përshkruhet zakonisht si e vizitueshme pa biletë, por nuk kemi verifikuar një tarifë zyrtare aktuale. Konfirmoni në vend ose pranë institucioneve përkatëse; vaktet në restorant dhe turët me guidë paguhen veçmas.',
      },
      {
        q: 'A mund të blej bileta në këtë faqe?',
        a: 'Jo. Ky është një udhëzues i pavarur, jo administrata e kalasë apo një shitës biletash. Çdo biletë, tur apo tavolinë duhet rregulluar me operatorin përkatës.',
      },
      {
        q: 'A përfshin bileta edhe restorantin?',
        a: 'Jo. Restoranti brenda mureve është biznes i pavarur. Ushqimi, pijet dhe tavolina e rezervuar paguhen veçmas dhe vizita e rrënojave nuk garanton hyrje në tarracë.',
      },
    ],
  },

  'guides/opening-hours': {
    cardTitle: 'Orari i vizitës',
    cardText: 'Hapësira e jashtme, drita e ditës dhe orari i restorantit nuk janë e njëjta gjë.',
    metaTitle: 'Orari i Kalasë së Lëkurësit | Hyrja dhe restoranti',
    metaDescription:
      'Kur mund të vizitohet Kalaja e Lëkurësit? Pse orari i hapësirës së jashtme, i perëndimit të diellit dhe i restorantit janë të ndryshëm.',
    h1: 'Orari i vizitës në Kalaja e Lëkurësit',
    lead:
      'Për këtë vend në kodër nuk ka një orar të vetëm. Rrënojat e jashtme, rruga e ngjitjes, drita e ditës dhe restoranti kanë kufij të ndryshëm praktikë.',
    sections: [
      {
        heading: 'Hapësira e jashtme dhe orari i cituar',
        paragraphs: [
          'Udhëzuesi ynë kryesor përmend orarin 08:00–23:00 si periudhën e zakonshme të vizitës. Kjo është një e dhënë orientuese e udhëzuesit, jo një njoftim zyrtar i publikuar nga administrata.',
          'Vendi është një rrënojë e hapur në kodër, jo muze me portë dhe staf. Nuk mund të garantojmë orë hapjeje, orë të fundit të hyrjes apo ditë pushimi javore.',
        ],
        bullets: [
          'Drita e ditës është kufiri praktik për pikat e shikimit.',
          'Punimet, aktivitetet dhe moti mund të kufizojnë zona të caktuara.',
          'Orari i restorantit i përket operatorit dhe kontrollohet veçmas.',
        ],
      },
      {
        heading: 'Perëndimi i diellit dhe mbrëmja',
        paragraphs: [
          'Perëndimi i diellit është periudha më e ngarkuar. Ora ndryshon shumë midis qershorit dhe dhjetorit, prandaj kërkoni orën e saktë për datën e udhëtimit dhe mbërrini më herët.',
          'Pas errësirës, tërheqëse është ndriçimi i qytetit poshtë, jo muret. Sipërfaqet prej guri dhe shkallët janë më të vështira në errësirë, prandaj merrni një dritë dhe planifikoni zbritjen.',
        ],
      },
      {
        heading: 'Ndryshimet sipas stinës',
        paragraphs: [
          'Saranda ka sezon të fortë turistik. Në verë rruga, parkimi dhe restoranti janë më të ngarkuar; në dimër shërbimet përreth kodrës mund të kenë orare të reduktuara.',
          'Nuk publikojmë garanci për hapje 24-orëshe, orare autobusi apo akses të pakufizuar në çdo zonë. Faktet e kësaj faqeje janë kontrolluar më 4 Nëntor 2026.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Në çfarë ore hapet Kalaja e Lëkurësit?',
        a: 'Hapësira e jashtme vizitohet zakonisht nga mëngjesi deri në mbrëmje vonë dhe udhëzuesi ynë përmend 08:00–23:00. Kjo nuk është orar zyrtar: konfirmoni në vend ose pranë informacionit turistik të Sarandës.',
      },
      {
        q: 'A është e hapur kalaja 24 orë?',
        a: 'Nuk mund ta garantojmë. Edhe pse hapësira e jashtme nuk ka portë me staf, ndriçimi, siguria, aktivitetet dhe rruga mund të kufizojnë vizitën pas errësirës.',
      },
      {
        q: 'A është orari i restorantit edhe orari i kalasë?',
        a: 'Jo. Restoranti është biznes i pavarur me kuzhinë dhe orar të vetin. Për darkë, kontrolloni faqen zyrtare të operatorit.',
      },
    ],
  },

  'guides/how-to-get-there': {
    cardTitle: 'Si të shkoni',
    cardText: 'Nga qendra e Sarandës me makinë, taksi ose në këmbë, dhe kthimi pas perëndimit.',
    metaTitle: 'Si shkohet në Kalaja e Lëkurësit | Rrugët nga Saranda',
    metaDescription:
      'Si të shkoni nga qendra e Sarandës në Kalaja e Lëkurësit: me makinë, taksi, në këmbë dhe si të planifikoni kthimin pas perëndimit të diellit.',
    h1: 'Si shkohet në Kalaja e Lëkurësit nga Saranda',
    lead:
      'Kalaja ndodhet në një kodër mbi Sarandë. Është afër qytetit në vijë të drejtë, por çdo rrugë ngjitjeje ndjek rrugën dredha-dredha të kodrës së Lëkurësit.',
    sections: [
      {
        heading: 'Me makinë ose me taksi',
        paragraphs: [
          'Rruga e zakonshme është ajo e asfaltuar që ngjitet nga ana e Sarandës drejt majës së kodrës. Për perëndimin e diellit, taksi ose makina me qira është zgjedhja më e përdorur, sepse zgjidh edhe kthimin pas errësirës.',
          'Bini dakord për çmimin dhe orën e kthimit përpara se të zbrisni. Nuk mund të garantojmë se ka taksi në dispozicion në majë të kodrës vonë në mbrëmje.',
        ],
        bullets: [
          'Përdorni lidhjen e Google Maps për rrugën aktuale.',
          'Rruga është e ngushtë dhe e ngarkuar në perëndim të diellit.',
          'Lini kohë shtesë gjatë sezonit të verës.',
        ],
      },
      {
        heading: 'Në këmbë nga qyteti',
        paragraphs: [
          'Për vizitorët në formë të mirë fizike, ngjitja në këmbë është e mundur dhe ofron pamje që ndryshojnë hap pas hapi. Është një ngjitje e vazhdueshme në rrugë të asfaltuar, me trafik, pak hije dhe pak vende pushimi.',
          'Në vapën e verës merrni ujë dhe shmangni mesditën. Pas shiut sipërfaqja është e rrëshqitshme dhe pas errësirës rruga nuk është zgjedhje e mirë për një vizitor të panjohur me vendin.',
        ],
      },
      {
        heading: 'Autobusët dhe kthimi',
        paragraphs: [
          'Nuk kemi verifikuar një orar aktual autobusi që shërben pikërisht kalanë, prandaj nuk e publikojmë. Informacioni turistik i Sarandës ose akomodimi juaj mund t\'ju tregojë për shërbime sezonale.',
          'Ekskursionet e organizuara kanë transportin dhe orarin e tyre. Nëse vini me një tur, ndiqni udhëzimet e operatorit për pikën e takimit.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Sa larg është kalaja nga qendra e Sarandës?',
        a: 'Është kodra menjëherë mbi qytet, por rruga ngjitet me kthesa, jo drejt majës. Përdorni një hartë të përditësuar dhe llogaritni më shumë kohë sesa distanca në vijë të drejtë.',
      },
      {
        q: 'A mund të ngjitem në këmbë?',
        a: 'Po, por është ngjitje e vazhdueshme, me trafik, pak hije dhe skaje të parregullta. Për perëndimin e diellit, rregulloni më parë një taksi për zbritjen.',
      },
      {
        q: 'A ka autobus për në kala?',
        a: 'Nuk kemi verifikuar një orar aktual dhe nuk e publikojmë. Pyesni informacionin turistik të Sarandës ose përdorni taksi apo makinë me qira.',
      },
    ],
  },

  'guides/parking': {
    cardTitle: 'Parkimi pranë kalasë',
    cardText: 'Ku ndalen makinat, pse vera është e vështirë dhe çfarë nuk mund të garantojmë.',
    metaTitle: 'Parkimi në Kalaja e Lëkurësit | Sarandë',
    metaDescription:
      'Ku mund të lini makinën pranë Kalasë së Lëkurësit, pse perëndimi i diellit është i ngarkuar dhe cilat të dhëna duhen konfirmuar në vend.',
    h1: 'Parkimi pranë Kalasë së Lëkurësit',
    lead:
      'Shumica e vizitorëve me makinë duan një përgjigje të thjeshtë: sa afër mund të lë makinën? Në një rrugë të ngushtë në majë kodre, kjo varet nga stina dhe nga ngarkesa e ditës.',
    sections: [
      {
        heading: 'Ku ndalen automjetet',
        paragraphs: [
          'Makinat ngjiten nga rruga e asfaltuar dhe ndalen në zonën e majës ose përgjatë afrimit, sipas ngarkesës. Nga aty shpesh ecet edhe një pjesë e shkurtër mbi gurë dhe sipërfaqe të parregullta.',
          'Përdorni lidhjen e hartës për të parë gjendjen aktuale të rrugës. Nuk publikojmë një distancë të saktë deri te pika e shikimit, sepse ajo ndryshon sipas vendit ku mund të ndaloni.',
        ],
      },
      {
        heading: 'Sezoni i verës dhe gjendja e rrugës',
        paragraphs: [
          'Perëndimi i diellit në korrik dhe gusht është momenti më i vështirë. Rruga është e ngushtë, hapësira në majë e kufizuar dhe restoranti sjell trafikun e vet pikërisht kur mbërrijnë edhe vizitorët e panoramës.',
          'Të mbërrish më herët ose të lësh makinën më poshtë dhe të ecësh pjesën e fundit është shpesh më e qetë sesa të kërkosh vend në majë.',
        ],
        bullets: [
          'Mbërrini më herët se ora e perëndimit.',
          'Prisni një pjesë të fundit në këmbë mbi gurë.',
          'Kontrolloni në vend për kufizime apo punime të përkohshme.',
        ],
      },
      {
        heading: 'Tarifat dhe aksesueshmëria',
        paragraphs: [
          'Udhëzuesi ynë kryesor e përshkruan parkimin si falas. Nuk kemi verifikuar një tarifë zyrtare aktuale, një garanci të përhershme falasjeje apo numrin e vendeve të shënuara, prandaj mos u mbështetni në një çmim të supozuar.',
          'Nuk mund të konfirmojmë as vende parkimi për persona me aftësi të kufizuara, rrugë pa shkallë apo tualete të aksesueshme. Kontrolloni përpara udhëtimit.',
        ],
      },
    ],
    faqs: [
      {
        q: 'A ka parkim pranë Kalasë së Lëkurësit?',
        a: 'Automjetet ndalen në zonën e majës së kodrës dhe përgjatë rrugës së afrimit. Nuk ka kapacitet të verifikuar zyrtarisht dhe hapësira është e kufizuar në perëndim të diellit.',
      },
      {
        q: 'A është falas parkimi?',
        a: 'Udhëzuesi ynë e përshkruan si të tillë, por nuk kemi konfirmuar një politikë zyrtare të përhershme. Ndiqni sinjalistikën dhe pyesni në vend.',
      },
      {
        q: 'A mund të parkoj pranë pikës së shikimit?',
        a: 'Jo në mënyrë të garantuar. Sipas ngarkesës, mund t\'ju duhet të ndaloni më poshtë dhe të ecni pjesën e fundit mbi gurë të parregullt.',
      },
    ],
  },

  'history/lekuresi-castle-history': {
    cardTitle: 'Historia e kalasë',
    cardText: 'Shekulli XVI, periudha osmane, kodra strategjike dhe gjendja sot.',
    metaTitle: 'Historia e Kalasë së Lëkurësit | Kalaja osmane e Sarandës',
    metaDescription:
      'Historia e dokumentuar e Kalasë së Lëkurësit: shekulli XVI, periudha osmane, tradita e vitit 1537, mbrojtja e portit dhe e rrugës drejt Butrintit.',
    h1: 'Një histori e shkurtër e Kalasë së Lëkurësit',
    lead:
      'Kalaja e Lëkurësit është një fortesë e rrënuar në kodrën mbi Sarandë. Materiali i Agjencisë Kombëtare të Turizmit e vendos në shekullin XVI, në periudhën osmane, dhe e lidh me Sulejmanin e Madhërishëm e vitin 1537.',
    sections: [
      {
        heading: 'Një fortesë e shekullit XVI në kodër strategjike',
        paragraphs: [
          'Burimi zyrtar e përshkruan kalanë si ndërtim të shekullit XVI të periudhës osmane, me një traditë që e lidh me vitin 1537 dhe Sulejmanin e Madhërishëm. Më e rëndësishme se viti i saktë është vendndodhja: një kodër që sheh Sarandën, portin dhe rrugën drejt Butrintit.',
          'Nga kjo lartësi mund të vëzhgohej lëvizja përgjatë bregdetit dhe në gji. Për këtë arsye fortesa shpjegohet zakonisht me kontrollin e portit dhe të rrugës, jo si rezidencë apo ndërtesë ceremoniale.',
        ],
      },
      {
        heading: 'Nga garnizoni te rrënojat',
        paragraphs: [
          'Me kalimin e shekujve, roli ushtarak i një fortese të vogël në kodër ndryshoi dhe ndërtesa humbi funksionin e saj. Disa udhëzues turistikë shtojnë data të sakta, numra ushtarësh ose ngjarje të emërtuara.',
          'Ne i trajtojmë këto si traditë dytësore kur nuk mund t\'i lidhim me një burim. Sot shihen mure të qëndrueshme, mbetje kullash dhe një hapësirë e brendshme e hapur, pjesë e së cilës përdoret nga një restorant.',
        ],
      },
      {
        heading: 'Kalaja sot',
        paragraphs: [
          'Sot kodra vizitohet më shumë për panoramën sesa për historinë ushtarake. Saranda u rrit si destinacion bregdetar, kalaja u bë pikë referimi mbi gji dhe restoranti brenda mureve është një veprimtari e pavarur tregtare.',
          'Ky udhëzues është i pavarur nga këto veprimtari. Për çështje trashëgimie, institucionet përkatëse janë Instituti i Trashëgimisë Kulturore dhe Bashkia e Sarandës.',
        ],
        bullets: [
          'E dokumentuar: shekulli XVI, periudha osmane, kodra mbi Sarandë, porti dhe rruga drejt Butrintit.',
          'Më pak e sigurt: viti i saktë 1537, numri i ushtarëve, data e braktisjes.',
          'Sot: rrënoja, pika shikimi dhe restorant i veçantë.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kur u ndërtua Kalaja e Lëkurësit?',
        a: 'Agjencia Kombëtare e Turizmit e vendos në shekullin XVI, në periudhën osmane, me një traditë që e lidh me vitin 1537 dhe Sulejmanin e Madhërishëm. Viti i saktë duhet trajtuar si traditë, jo si mbishkrim i dokumentuar.',
      },
      {
        q: 'Pse u ndërtua kalaja pikërisht në këtë kodër?',
        a: 'Pozicioni sheh Sarandën, portin dhe rrugën drejt Butrintit. Burimet kombëtare e lidhin fortesën me mbrojtjen e portit dhe kontrollin e asaj rruge.',
      },
      {
        q: 'A është kalaja e ruajtur plotësisht?',
        a: 'Jo. Është rrënojë me pjesë muresh dhe mbetje kullash. Një pjesë e hapësirës së brendshme përdoret nga një restorant i pavarur.',
      },
    ],
  },

  'guides/sunset-view': {
    cardTitle: 'Perëndimi i diellit',
    cardText: 'Pse kodra funksionon, kur të mbërrini dhe si të ktheheni pas errësirës.',
    metaTitle: 'Perëndimi i diellit në Kalaja e Lëkurësit | Sarandë',
    metaDescription:
      'Si të planifikoni perëndimin e diellit në Kalaja e Lëkurësit: ora e saktë, pikat e shikimit, tarraca e restorantit dhe kthimi në qytet.',
    h1: 'Perëndimi i diellit nga Kalaja e Lëkurësit',
    lead:
      'Perëndimi i diellit është arsyeja kryesore pse shumë vizitorë ngjiten në kodër. Kalaja qëndron mbi Sarandë, me pamje të gjerë nga perëndimi mbi qytetin, gjirin dhe kanalin drejt Korfuzit.',
    sections: [
      {
        heading: 'Pse kjo kodër është pikë e mirë shikimi',
        paragraphs: [
          'Kalaja zë një lartësi mbi qytet, me pamje të gjerë e pa pengesa mbi gjirin e Sarandës. Nga muret syri ndjek bregdetin, grykën e gjirit dhe drejtimin e Butrintit; në horizont, kur moti është i kthjellët, duket Korfuzi.',
          'Dielli perëndon afërsisht nga ana e detit të panoramës, kështu që në orën e fundit ndriçohen si gurët ashtu edhe uji. Ky kombinim i rrënojës historike dhe i detit e bën vendin të veçantë.',
        ],
      },
      {
        heading: 'Si të zgjidhni orën',
        paragraphs: [
          'Mos përdorni një orë fikse. Perëndimi i diellit në Sarandë ndryshon me orë të tëra midis qershorit dhe dhjetorit, prandaj kërkoni orën për datën tuaj dhe punoni prapsht prej saj.',
          'Mbërrini mjaftueshëm herët për të parkuar, për të ecur deri te pika e shikimit dhe për të zgjedhur vendin. Minutat e fundit janë më të ngarkuarat.',
        ],
        bullets: [
          'Kontrolloni orën e perëndimit për datën e udhëtimit.',
          'Në verë, mbërrini rreth një orë më herët.',
          'Qëndroni edhe 20–30 minuta pas perëndimit, kur ndizen dritat e qytetit.',
        ],
      },
      {
        heading: 'Vendet e shikimit dhe restoranti',
        paragraphs: [
          'Muret e jashtme dhe hapësira rreth tyre ofrojnë kënde të ndryshme: nga qyteti poshtë, përgjatë gjirit ose nga perëndimi drejt kanalit. Disa tarraca i përkasin restorantit brenda mureve; përdorimi i tyre vendoset nga operatori, jo nga ky udhëzues.',
          'Për një tavolinë me shërbim, rezervoni drejtpërdrejt te operatori. Qëndrimi falas në hapësirën e jashtme dhe darka e rezervuar janë dy përvoja të ndryshme.',
        ],
      },
      {
        heading: 'Pas perëndimit',
        paragraphs: [
          'Kthimi është pjesa që shpesh nënvlerësohet. Guri, shkallët dhe skaji i rrugës janë më të vështira në errësirë dhe nuk mund të garantojmë ndriçim të vazhdueshëm. Merrni një dritë dhe rregulloni taksinë përpara se të perëndojë dielli.',
          'Në një mbrëmje me re, panorama e largët mund të humbasë, por dritat e qytetit poshtë mbeten tërheqëse.',
        ],
      },
    ],
    faqs: [
      {
        q: 'A mund të shihet perëndimi i diellit nga Kalaja e Lëkurësit?',
        a: 'Po. Kodra sheh gjirin e Sarandës nga perëndimi dhe është ndër pikat më të njohura të zonës. Kontrolloni orën për datën tuaj dhe mbërrini herët, veçanërisht në verë.',
      },
      {
        q: 'A duhet të ha në restorant për të parë perëndimin?',
        a: 'Jo. Hapësirat e jashtme rreth rrënojave kanë pamje të hapur. Disa tarraca i përkasin restorantit; për një tavolinë me shërbim, rezervoni te operatori.',
      },
      {
        q: 'A është i sigurt kthimi në këmbë pas errësirës?',
        a: 'Kërkon përgatitje. Sipërfaqet janë të parregullta, ndriçimi nuk është i garantuar dhe rruga ka trafik. Rregulloni një taksi që më parë dhe merrni një dritë.',
      },
    ],
  },
};
