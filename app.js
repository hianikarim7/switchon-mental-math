
"use strict";

/* ─────────────────────────────────────
   I. TRADUCTIONS (i18n)
───────────────────────────────────── */
const T = {
fr:{
  days:'j', lvl:'Niv.', chooseLang:'Choisissez votre langue',
  chooseOp:'Choisissez une opération',
  opAdd:'Addition', opSub:'Soustraction', opMul:'Multiplication', opDiv:'Division',
  back:'Retour', chooseLvl:'Niveau', chooseDiff:'Choisissez la difficulté',
  modeN:'Tournoi', modeC:'Sprint60s', modeD:'Défi Max',
  qLbl:'Question', validate:'✓ OK', secLeft:'secondes',
  sessionDone:'Session terminée !', pts:'points', xpEarned:'+{n} XP gagnés',
  goodLbl:'✅ Bonnes', errLbl:'⚠️ Erreurs', stkLbl:'🔥 Série max',
  rate:'Taux', timeInfo:'⏱ {d}s · Moy. {a}s/q',
  toWork:'🎯 Points à travailler', badgesUnlocked:'🏆 Badges débloqués !',
  replay:'🔁 Rejouer', home:'🏠 Accueil',
  progress:'Mes Progrès', statSessions:'Sessions', statCorrect:'Bonnes rép.',
  statStreak:'Meilleure série', statRate:'Taux moyen',
  chartTitle:'Taux de réussite — 10 dernières sessions',
  noSessions:'Pas encore de sessions.',
  settings:'⚙️ Paramètres', darkMode:'🌙 Mode sombre',
  sounds:'🔊 Sons', vibration:'📳 Vibration', fontSize:'🔤 Taille du texte',
  language:'🌐 Langue', reset:'🗑️ Réinitialiser', resetSub:'Efface tout l\'historique',
  erase:'Effacer', close:'Fermer', badgeLbl:'Badge débloqué',
  p1:'Joueur 1', p2:'Joueur 2', firstTo:'Premier à', duelHint:'Chaque joueur appuie sur sa colonne · 1er correct = 1 pt',
  quit:'Quitter', confirmQuit:'Quitter la session en cours ?', confirmQuit:'Quitter la session en cours ?', confirm:'Effacer toutes les données ?',
  mid:'🧠 Mi-parcours — Continue comme ça !',
  adapt:'💡 Question de récupération — Niveau 2 !',
  duelWin:'🏆 Victoire de {w} !\n\nScore : {s1} – {s2}',
  tabStats:'Stats', tabBadges:'Badges', tabHistory:'Historique',
  lvlAdd:[
    ['Sommes < 10','Sans retenue · ex : 3+4, 2+5'],
    ['Franchir la dizaine (11-18)','Ex : 8+6, 7+9'],
    ['2 chiffres + 1 chiffre','≤99 · 70% sans retenue, 30% avec'],
  ],
  lvlSub:[
    ['Intra-dizaine (≤10)','Ex : 8−3, 10−4'],
    ['Casse de dizaine (11-20)','Mélange avec/sans'],
    ['2 chiffres − 1 chiffre','Simples et avec emprunt'],
  ],
  lvlMul:[
    ['Tables 0,1,2,5,10','Automatisation rapide'],
    ['Tables 3, 4, 6','Difficulté intermédiaire'],
    ['Tables 7,8,9 + distributivité','Ex : 21×4'],
  ],
  lvlDiv:[
    ['Diviseurs 2,5,10 (÷≤100)','Divisions exactes'],
    ['Diviseurs 3,4,6 (÷≤60)','Divisions exactes'],
    ['Diviseurs 7,8,9 + dizaines','Ex : 120÷4'],
  ],
  mixTitle:'Calcul mixte',
  trn_lbl:'Tournoi · Round', pwa_install:'Installer sur l\'écran d\'accueil', pwa_btn:'Installer',
  wc_title:'Bienvenue ! 👋', wc_sub:'Quel est ton prénom ?', wc_placeholder:'Ton prénom', wc_btn:'C’est parti ! 🚀', greeting:'Bonjour', greeting_sub:'Prêt à jouer ?', motivate:['Én avant !','Concentre-toi !','Tu peux le faire !','Super !'], s_editname:'Modifier le prénom', trn_round_done:'Round terminé !', trn_next:'Round suivant →', trn_see_results:'Voir les résultats 🏆', trn_total:'Total',
  praises:['Excellent ! 🎯','Super ! ⭐','Bravo ! 🙌','Parfait ! ✨','Bien joué ! 💪'],
  ansWas:'Réponse : ',
  bn:{first_step:'Premier pas',on_fire:'En feu !',lightning:'Éclair',champion:'Champion',assiduous:'Assidu',add_master:'Maître Addition',mul_master:'Maître Multiplication',perfect:'Perfectionniste',speedster:'Speedster',sniper:'Sniper'},
  bd:{first_step:'Finir votre 1ère session',on_fire:'Série de 5 correctes',lightning:'Série de 10 correctes',champion:'Score ≥ 200',assiduous:'7 jours consécutifs',add_master:'50 bonnes en addition',mul_master:'50 bonnes en multiplication',perfect:'100% sur ≥10 questions',speedster:'Défi ≥80% en <45s',sniper:'20 correctes d\'affilée'},
  wn:{add_basic:'Addition de base',add_cross:'Addition (dizaine)',add_carry:'Addition avec retenue',sub_basic:'Soustraction de base',sub_cross:'Soustraction (dizaine)',sub_borrow:'Soustraction (emprunt)',mul_easy:'Tables faciles',mul_mid:'Tables 3,4,6',mul_hard:'Tables 7,8,9',mul_distrib:'Distributivité',div_easy:'Division facile',div_mid:'Division inter.',div_hard:'Division difficile',div_large:'Division de dizaines'},
  opNames:{add:'Addition',sub:'Soustraction',mul:'Multiplication',div:'Division',addSub:'+/− Mix',mulDiv:'×/÷ Mix',all4:'Mix Total'},
  lvlAddSub:[
    ['+/− Niv.1','Sommes≤10 et soustractions≤10'],
    ['+/− Niv.2','Franchir la dizaine (11–18)'],
    ['+/− Niv.3','2 chiffres ± 1 chiffre (≤99)'],
  ],
  lvlMulDiv:[
    ['×/÷ Niv.1','Tables 2,5,10 · Divis. faciles'],
    ['×/÷ Niv.2','Tables 3,4,6 · Divis. inter.'],
    ['×/÷ Niv.3','Tables 7,8,9 · Divis. difficiles'],
  ],
  lvlAll4:[
    ['Mix Total Niv.1','Les 4 opérations · niveau 1'],
    ['Mix Total Niv.2','Les 4 opérations · niveau 2'],
    ['Mix Total Niv.3','Les 4 opérations · niveau 3'],
  ],
  wd:['D','L','M','M','J','V','S'],
  modeNames:{normal:'Tournoi',challenge:'Sprint60s',duel:'Défi Max'},
},
en:{
  days:'d', lvl:'Lv.', chooseLang:'Choose your language',
  chooseOp:'Choose an operation',
  opAdd:'Addition', opSub:'Subtraction', opMul:'Multiplication', opDiv:'Division',
  back:'Back', chooseLvl:'Level', chooseDiff:'Choose the difficulty',
  modeN:'Tournament', modeC:'Sprint60s', modeD:'Max Challenge',
  qLbl:'Question', validate:'✓ OK', secLeft:'seconds',
  sessionDone:'Session complete!', pts:'points', xpEarned:'+{n} XP earned',
  goodLbl:'✅ Correct', errLbl:'⚠️ Errors', stkLbl:'🔥 Best streak',
  rate:'Rate', timeInfo:'⏱ {d}s · Avg {a}s/q',
  toWork:'🎯 Areas to improve', badgesUnlocked:'🏆 Badges unlocked!',
  replay:'🔁 Play again', home:'🏠 Home',
  progress:'My Progress', statSessions:'Sessions', statCorrect:'Correct ans.',
  statStreak:'Best streak', statRate:'Avg rate',
  chartTitle:'Success rate — last 10 sessions',
  noSessions:'No sessions yet.',
  settings:'⚙️ Settings', darkMode:'🌙 Dark mode',
  sounds:'🔊 Sounds', vibration:'📳 Vibration', fontSize:'🔤 Font size',
  language:'🌐 Language', reset:'🗑️ Reset', resetSub:'Erase all history',
  erase:'Erase', close:'Close', badgeLbl:'Badge unlocked',
  p1:'Player 1', p2:'Player 2', firstTo:'First to', duelHint:'Each player taps their column · 1st correct = 1 pt',
  quit:'Quit', confirmQuit:'Quit the current session?', confirmQuit:'Quit the current session?', confirm:'Erase all data?',
  mid:'🧠 Halfway there — Keep going!',
  adapt:'💡 Recovery question — Level 2!',
  duelWin:'🏆 {w} wins!\n\nScore: {s1} – {s2}',
  tabStats:'Stats', tabBadges:'Badges', tabHistory:'History',
  lvlAdd:[['Sums < 10','No carry · e.g. 3+4'],['Cross ten (11-18)','e.g. 8+6, 7+9'],['2-digit + 1-digit','≤99 · mix carry/no carry']],
  lvlSub:[['Within ten (≤10)','e.g. 8−3, 10−4'],['Cross ten (11-20)','Mix with/without'],['2-digit − 1-digit','Simple and with borrow']],
  lvlMul:[['Tables 0,1,2,5,10','Fast recall'],['Tables 3, 4, 6','Intermediate'],['Tables 7,8,9 + distributivity','e.g. 21×4']],
  lvlDiv:[['Divisors 2,5,10 (÷≤100)','Exact divisions'],['Divisors 3,4,6 (÷≤60)','Exact divisions'],['Divisors 7,8,9 + tens','e.g. 120÷4']],
  mixTitle:'Mixed operations',
  trn_lbl:'Tournament · Round', pwa_install:'Add to Home Screen', pwa_btn:'Install',
  wc_title:'Welcome! 👋', wc_sub:'What is your name?', wc_placeholder:'Your name', wc_btn:'Let’s go! 🚀', greeting:'Hello', greeting_sub:'Ready to play?', motivate:['Let’s go!','Focus!','You can do it!','Go for it!'], s_editname:'Edit name', trn_round_done:'Round done!', trn_next:'Next round →', trn_see_results:'See results 🏆', trn_total:'Total',
  praises:['Excellent! 🎯','Great! ⭐','Bravo! 🙌','Perfect! ✨','Well done! 💪'],
  ansWas:'Answer: ',
  bn:{first_step:'First step',on_fire:'On fire!',lightning:'Lightning',champion:'Champion',assiduous:'Dedicated',add_master:'Addition master',mul_master:'Mult. master',perfect:'Perfectionist',speedster:'Speedster',sniper:'Sniper'},
  bd:{first_step:'Complete your 1st session',on_fire:'Streak of 5 correct',lightning:'Streak of 10 correct',champion:'Score ≥ 200',assiduous:'7 consecutive days',add_master:'50 correct in addition',mul_master:'50 correct in multiplication',perfect:'100% on ≥10 questions',speedster:'Challenge ≥80% in <45s',sniper:'20 correct in a row'},
  wn:{add_basic:'Basic addition',add_cross:'Addition (cross 10)',add_carry:'Addition with carry',sub_basic:'Basic subtraction',sub_cross:'Subtraction (cross 10)',sub_borrow:'Subtraction (borrow)',mul_easy:'Easy tables',mul_mid:'Tables 3,4,6',mul_hard:'Tables 7,8,9',mul_distrib:'Distributivity',div_easy:'Easy division',div_mid:'Mid division',div_hard:'Hard division',div_large:'Large division'},
  opNames:{add:'Addition',sub:'Subtraction',mul:'Multiplication',div:'Division',addSub:'+/− Mix',mulDiv:'×/÷ Mix',all4:'Total Mix'},
  lvlAddSub:[
    ['+/− Lv.1','Sums ≤10 and subtractions ≤10'],
    ['+/− Lv.2','Crossing tens (11–18)'],
    ['+/− Lv.3','2 digits ± 1 digit (≤99)'],
  ],
  lvlMulDiv:[
    ['×/÷ Lv.1','Tables 2,5,10 · Easy divisions'],
    ['×/÷ Lv.2','Tables 3,4,6 · Medium divisions'],
    ['×/÷ Lv.3','Tables 7,8,9 · Hard divisions'],
  ],
  lvlAll4:[
    ['Total Mix Lv.1','All 4 operations · level 1'],
    ['Total Mix Lv.2','All 4 operations · level 2'],
    ['Total Mix Lv.3','All 4 operations · level 3'],
  ],
  wd:['S','M','T','W','T','F','S'],
  modeNames:{normal:'Tournament',challenge:'Sprint60s',duel:'Max Challenge'},
},
es:{
  days:'d', lvl:'Niv.', chooseLang:'Elige tu idioma',
  chooseOp:'Elige una operación',
  opAdd:'Suma', opSub:'Resta', opMul:'Multiplicación', opDiv:'División',
  back:'Volver', chooseLvl:'Nivel', chooseDiff:'Elige la dificultad',
  modeN:'Torneo', modeC:'Sprint60s', modeD:'Desafío Max',
  qLbl:'Pregunta', validate:'✓ OK', secLeft:'segundos',
  sessionDone:'¡Sesión terminada!', pts:'puntos', xpEarned:'+{n} XP ganados',
  goodLbl:'✅ Correctas', errLbl:'⚠️ Errores', stkLbl:'🔥 Mejor racha',
  rate:'Tasa', timeInfo:'⏱ {d}s · Med. {a}s/preg.',
  toWork:'🎯 A mejorar', badgesUnlocked:'🏆 ¡Insignias desbloqueadas!',
  replay:'🔁 Jugar de nuevo', home:'🏠 Inicio',
  progress:'Mis Progresos', statSessions:'Sesiones', statCorrect:'Correctas',
  statStreak:'Mejor racha', statRate:'Tasa media',
  chartTitle:'Tasa de éxito — últimas 10 sesiones',
  noSessions:'Sin sesiones aún.',
  settings:'⚙️ Ajustes', darkMode:'🌙 Modo oscuro',
  sounds:'🔊 Sonidos', vibration:'📳 Vibración', fontSize:'🔤 Tamaño texto',
  language:'🌐 Idioma', reset:'🗑️ Restablecer', resetSub:'Borrar todo el historial',
  erase:'Borrar', close:'Cerrar', badgeLbl:'Insignia desbloqueada',
  p1:'Jugador 1', p2:'Jugador 2', firstTo:'Primero en', duelHint:'Cada jugador toca su columna · 1º correcto = 1 pt',
  quit:'Salir', confirmQuit:'¿Salir de la sesión actual?', confirmQuit:'¿Salir de la sesión actual?', confirm:'¿Borrar todos los datos?',
  mid:'🧠 ¡A la mitad — Sigue así!',
  adapt:'💡 Pregunta de recuperación — ¡Nivel 2!',
  duelWin:'🏆 ¡{w} gana!\n\nMarcador: {s1} – {s2}',
  tabStats:'Estadísticas', tabBadges:'Insignias', tabHistory:'Historial',
  lvlAdd:[['Sumas < 10','Sin acarreo · ej: 3+4'],['Cruzar decena (11-18)','Ej: 8+6'],['2 dígitos + 1','≤99 · mixto']],
  lvlSub:[['Dentro de la decena (≤10)','Ej: 8−3'],['Cruzar decena (11-20)','Con/sin préstamo'],['2 dígitos − 1','Simple y con préstamo']],
  lvlMul:[['Tablas 0,1,2,5,10','Automatización'],['Tablas 3, 4, 6','Intermedio'],['Tablas 7,8,9 + distrib.','Ej: 21×4']],
  lvlDiv:[['Divisores 2,5,10 (÷≤100)','División exacta'],['Divisores 3,4,6 (÷≤60)','División exacta'],['Divisores 7,8,9 + decenas','Ej: 120÷4']],
  mixTitle:'Cálculo mixto',
  trn_lbl:'Torneo · Ronda', pwa_install:'Añadir a inicio', pwa_btn:'Instalar',
  wc_title:'¡Bienvenido! 👋', wc_sub:'¿Cómo te llamas?', wc_placeholder:'Tu nombre', wc_btn:'¡Vamos! 🚀', greeting:'Hola', greeting_sub:'¿Listo para jugar?', motivate:['¡Vamos!','¡Concéntrate!','¡Tú puedes!'], s_editname:'Cambiar nombre',
  pin_title:'Área de padres', pin_sub:'Ingresa tu código PIN',
  pin_set1:'Definir código PIN', pin_set2:'Confirmar código PIN',
  pin_set1s:'Elige 4 dígitos', pin_set2s:'Repite el código',
  pin_wrong:'Código incorrecto ❌', pin_mismatch:'Los códigos no coinciden',
  pin_create_prompt:'¿Proteger el área de padres con PIN?',
  ins_sessions:'Sesiones este mes', ins_avg:'Nota media',
  ins_time:'Tiempo total', ins_streak:'Racha actual',
  ins_weak:'Áreas a mejorar', ins_changepin:'Cambiar PIN',
  ins_no_weak:'🎉 ¡Sin puntos débiles!', back:'Volver', home:'Inicio',
  pin_title:'Parent Area', pin_sub:'Enter your PIN code',
  pin_set1:'Set a PIN code', pin_set2:'Confirm PIN code',
  pin_set1s:'Choose 4 digits', pin_set2s:'Repeat the code',
  pin_wrong:'Wrong code ❌', pin_mismatch:'Codes don’t match',
  pin_create_prompt:'Protect the parent area with a PIN?',
  ins_sessions:'Sessions this month', ins_avg:'Avg score',
  ins_time:'Total time', ins_streak:'Current streak',
  ins_weak:'Areas to improve', ins_changepin:'Change PIN',
  ins_no_weak:'🎉 No weak areas!', back:'Back', home:'Home',
  pin_title:'Espace Parent', pin_sub:'Entrez votre code PIN',
  pin_set1:'Définir un code PIN', pin_set2:'Confirmer le code PIN',
  pin_set1s:'Choisissez 4 chiffres', pin_set2s:'Répétez le code',
  pin_wrong:'Code incorrect ❌', pin_mismatch:'Codes différents',
  pin_create_prompt:'Protéger l\'espace parent avec un code PIN ?',
  ins_sessions:'Sessions ce mois', ins_avg:'Score moyen',
  ins_time:'Temps total', ins_streak:'Série actuelle',
  ins_weak:'Points à travailler', ins_changepin:'Modifier le code PIN',
  ins_no_weak:'🎉 Aucun point faible !', back:'Retour', home:'Accueil',
 trn_round_done:'¡Ronda completada!', trn_next:'Siguiente ronda →', trn_see_results:'Ver resultados 🏆', trn_total:'Total',
  praises:['¡Excelente! 🎯','¡Genial! ⭐','¡Bravo! 🙌','¡Perfecto! ✨','¡Muy bien! 💪'],
  ansWas:'Respuesta: ',
  bn:{first_step:'Primer paso',on_fire:'¡En llamas!',lightning:'Rayo',champion:'Campeón',assiduous:'Dedicado',add_master:'Maestro suma',mul_master:'Maestro mult.',perfect:'Perfeccionista',speedster:'Veloz',sniper:'Francotirador'},
  bd:{first_step:'Termina tu 1ª sesión',on_fire:'Racha de 5 correctas',lightning:'Racha de 10 correctas',champion:'Puntuación ≥ 200',assiduous:'7 días seguidos',add_master:'50 en suma',mul_master:'50 en multiplicación',perfect:'100% en ≥10 preguntas',speedster:'Desafío ≥80% en <45s',sniper:'20 seguidas correctas'},
  wn:{add_basic:'Suma básica',add_cross:'Suma (decena)',add_carry:'Suma con acarreo',sub_basic:'Resta básica',sub_cross:'Resta (decena)',sub_borrow:'Resta (préstamo)',mul_easy:'Tablas fáciles',mul_mid:'Tablas 3,4,6',mul_hard:'Tablas 7,8,9',mul_distrib:'Distributividad',div_easy:'División fácil',div_mid:'División media',div_hard:'División difícil',div_large:'División de decenas'},
  opNames:{add:'Suma',sub:'Resta',mul:'Multiplicación',div:'División',addSub:'+/− Mix',mulDiv:'×/÷ Mix',all4:'Mix Total'},
  lvlAddSub:[
    ['+/− Niv.1','Sumas ≤10 y restas ≤10'],
    ['+/− Niv.2','Cruzar la decena (11–18)'],
    ['+/− Niv.3','2 cifras ± 1 cifra (≤99)'],
  ],
  lvlMulDiv:[
    ['×/÷ Niv.1','Tablas 2,5,10 · Divisiones fáciles'],
    ['×/÷ Niv.2','Tablas 3,4,6 · Divisiones medias'],
    ['×/÷ Niv.3','Tablas 7,8,9 · Divisiones difíciles'],
  ],
  lvlAll4:[
    ['Mix Total Niv.1','Las 4 operaciones · nivel 1'],
    ['Mix Total Niv.2','Las 4 operaciones · nivel 2'],
    ['Mix Total Niv.3','Las 4 operaciones · nivel 3'],
  ],
  wd:['D','L','M','X','J','V','S'],
  modeNames:{normal:'Torneo',challenge:'Sprint60s',duel:'Desafío Max'},
},
ar:{
  days:'ي', lvl:'م.', chooseLang:'اختر لغتك',
  chooseOp:'اختر العملية',
  opAdd:'الجمع', opSub:'الطرح', opMul:'الضرب', opDiv:'القسمة',
  back:'رجوع', chooseLvl:'المستوى', chooseDiff:'اختر الصعوبة',
  modeN:'بطولة', modeC:'سباق سريع', modeD:'تحدي أقصى',
  qLbl:'سؤال', validate:'✓ تأكيد', secLeft:'ثانية',
  sessionDone:'!انتهت الجلسة', pts:'نقطة', xpEarned:'+{n} نقطة XP',
  goodLbl:'✅ صحيح', errLbl:'⚠️ أخطاء', stkLbl:'🔥 أفضل سلسلة',
  rate:'معدل', timeInfo:'⏱ {d}ث · متوسط {a}ث/سؤال',
  toWork:'🎯 نقاط للتحسين', badgesUnlocked:'🏆 !تم فتح شارات',
  replay:'🔁 إعادة اللعب', home:'🏠 الرئيسية',
  progress:'تقدمي', statSessions:'جلسات', statCorrect:'إجابات صحيحة',
  statStreak:'أفضل سلسلة', statRate:'معدل النجاح',
  chartTitle:'معدل النجاح — آخر 10 جلسات',
  noSessions:'لا توجد جلسات حتى الآن.',
  settings:'⚙️ الإعدادات', darkMode:'🌙 الوضع الليلي',
  sounds:'🔊 الأصوات', vibration:'📳 الاهتزاز', fontSize:'🔤 حجم الخط',
  language:'🌐 اللغة', reset:'🗑️ إعادة تعيين', resetSub:'مسح كل السجل',
  erase:'مسح', close:'إغلاق', badgeLbl:'تم فتح شارة',
  p1:'اللاعب 1', p2:'اللاعب 2', firstTo:'الأول إلى', duelHint:'كل لاعب يضغط على عموده · الأول الصحيح = نقطة',
  quit:'خروج', confirmQuit:'هل تريد الخروج من الجلسة؟', confirmQuit:'هل تريد الخروج من الجلسة؟', confirm:'هل تريد مسح جميع البيانات؟',
  mid:'🧠 !منتصف الطريق — واصل هكذا',
  adapt:'!💡 سؤال استرداد — المستوى 2',
  duelWin:'🏆 فاز {w}!\n\nالنتيجة: {s1} – {s2}',
  tabStats:'إحصائيات', tabBadges:'شارات', tabHistory:'السجل',
  lvlAdd:[['مجاميع < 10','بدون حمل · مثال: 3+4'],['تجاوز العشرة (11-18)','مثال: 8+6'],['رقمان + رقم','≤99 · مع/بدون حمل']],
  lvlSub:[['داخل العشرة (≤10)','مثال: 8−3'],['تجاوز العشرة (11-20)','مع/بدون استعارة'],['رقمان − رقم','بسيط ومع استعارة']],
  lvlMul:[['جداول 0,1,2,5,10','حفظ سريع'],['جداول 3، 4، 6','متوسط'],['جداول 7,8,9 + توزيع','مثال: 21×4']],
  lvlDiv:[['مقسوم عليه 2,5,10','قسمة تامة'],['مقسوم عليه 3,4,6','قسمة تامة'],['مقسوم عليه 7,8,9 + عشرات','مثال: 120÷4']],
  praises:['ممتاز! 🎯','رائع! ⭐','أحسنت! 🙌','مثالي! ✨','عمل جيد! 💪'],
  ansWas:'الإجابة: ',
  bn:{first_step:'الخطوة الأولى',on_fire:'نار!',lightning:'برق',champion:'بطل',assiduous:'مثابر',add_master:'خبير الجمع',mul_master:'خبير الضرب',perfect:'مثالي',speedster:'سريع',sniper:'قناص'},
  bd:{first_step:'أكمل جلستك الأولى',on_fire:'سلسلة 5 صحيح',lightning:'سلسلة 10 صحيح',champion:'نقاط ≥ 200',assiduous:'7 أيام متتالية',add_master:'50 صحيح في الجمع',mul_master:'50 صحيح في الضرب',perfect:'100% على ≥10 أسئلة',speedster:'تحدي ≥80% في <45ث',sniper:'20 صحيح متتالي'},
  wn:{add_basic:'جمع أساسي',add_cross:'جمع (عشرة)',add_carry:'جمع مع حمل',sub_basic:'طرح أساسي',sub_cross:'طرح (عشرة)',sub_borrow:'طرح مع استعارة',mul_easy:'جداول سهلة',mul_mid:'جداول 3,4,6',mul_hard:'جداول 7,8,9',mul_distrib:'توزيع الضرب',div_easy:'قسمة سهلة',div_mid:'قسمة متوسطة',div_hard:'قسمة صعبة',div_large:'قسمة عشرات'},
  opNames:{add:'الجمع',sub:'الطرح',mul:'الضرب',div:'القسمة',addSub:'جمع/طرح',mulDiv:'ضرب/قسمة',all4:'مزيج كلي'},
  mixTitle:'حساب مختلط',
  trn_lbl:'بطولة · جولة', pwa_install:'إضافة للشاشة الرئيسية', pwa_btn:'تثبيت',
  wc_title:'أهلاً بك ! 👋', wc_sub:'ما اسمك ؟', wc_placeholder:'اسمك', wc_btn:'هيا نبدأ ! 🚀', greeting:'مرحباً', greeting_sub:'هل أنت مستعد؟', motivate:['هيا !','ركز !','أنت تستطيع !'], s_editname:'تعديل الاسم',
   pin_title:'منطقة الوالدين', pin_sub:'أدخل رمز PIN',
  pin_set1:'تعيين رمز PIN', pin_set2:'تأكيد رمز PIN',
  pin_set1s:'اختر 4 أرقام', pin_set2s:'أعد إدخال الرمز',
  pin_wrong:'رمز خاطئ ❌', pin_mismatch:'الرموز مختلفة',
  pin_create_prompt:'هل تريد حماية منطقة الوالدين برمز PIN؟',
  ins_sessions:'جلسات هذا الشهر', ins_avg:'المعدل العام',
  ins_time:'الوقت الإجمالي', ins_streak:'السلسلة الحالية',
  ins_weak:'نقاط ضعف', ins_changepin:'تغيير رمز PIN',
  ins_no_weak:'🎉 لا توجد نقاط ضعف !', back:'رجوع', home:'الرئيسية', trn_round_done:'انتهت الجولة !', trn_next:'الجولة التالية →', trn_see_results:'عرض النتائج ������', trn_total:'المجموع',
  lvlAddSub:[
    ['جمع/طرح مست.1','مجاميع ≤10 وطرح ≤10'],
    ['جمع/طرح مست.2','عبور العشرات (11–18)'],
    ['جمع/طرح مست.3','رقمان ± رقم (≤99)'],
  ],
  lvlMulDiv:[
    ['ضرب/قسمة مست.1','جداول 2،5،10 · قسمة سهلة'],
    ['ضرب/قسمة مست.2','جداول 3،4،6 · قسمة متوسطة'],
    ['ضرب/قسمة مست.3','جداول 7،8،9 · قسمة صعبة'],
  ],
  lvlAll4:[
    ['مزيج كلي مست.1','العمليات الأربع · مستوى 1'],
    ['مزيج كلي مست.2','العمليات الأربع · مستوى 2'],
    ['مزيج كلي مست.3','العمليات الأربع · مستوى 3'],
  ],
  wd:['أح','إث','ثل','أر','خم','جم','سب'],
  modeNames:{normal:'بطولة',challenge:'سباق سريع',duel:'تحدي أقصى'},
},
};

/* ─────────────────────────────────────
   II. DONNÉES LOCALES
───────────────────────────────────── */
const DB = (() => {
  const KEY = 'switchon_v1';
  const fresh = () => ({
    xp: 0, streak: 0, lastDate: '',
    sessions: 0, correct: 0, wrong: 0, bestStreak: 0,
    badges: [], history: [], weaknesses: {},
    opCorrect: { add:0, sub:0, mul:0, div:0 },
    sprintRec: {}, defiMaxRec: {}, parentPin: '',
    cfg: { lang:'', dark:false, sound:true, haptic:true, fs:'normal', childName:'', childAvatar:'🧒' },
  });
  let d = fresh();
  try { const s = localStorage.getItem(KEY); if (s) d = Object.assign(fresh(), JSON.parse(s)); } catch(e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch(e){} };
  return {
    get: () => d, save,
    addSession(s) {
      d.sessions++;
      d.correct += s.correct;
      d.wrong   += s.wrong;
      if (s.bestStreak > d.bestStreak) d.bestStreak = s.bestStreak;
      d.opCorrect[s.op] = (d.opCorrect[s.op]||0) + s.correct;
      for (const [k,v] of Object.entries(s.weak||{})) d.weaknesses[k] = (d.weaknesses[k]||0) + v;
      d.history.unshift(s);
      if (d.history.length > 20) d.history.pop();
      const today = new Date().toDateString();
      if (d.lastDate !== today) {
        const yest = new Date(); yest.setDate(yest.getDate()-1);
        d.streak = d.lastDate === yest.toDateString() ? d.streak+1 : 1;
        d.lastDate = today;
      }
      save();
    },
    addXP(n)        { d.xp += n; save(); },
    badge(id)       { if (!d.badges.includes(id)) { d.badges.push(id); save(); return true; } return false; },
    getSprintRec(k)  { return (d.sprintRec||{})[k] || 0; },
    setSprintRec(k,v){ if(!d.sprintRec) d.sprintRec={}; d.sprintRec[k]=v; save(); },
    getDefiMaxRecord(op,lv){ return (d.defiMaxRec||{})[op+'_'+lv] || 0; },
    setDefiMaxRecord(op,lv,v){ if(!d.defiMaxRec) d.defiMaxRec={}; d.defiMaxRec[op+'_'+lv]=v; save(); },
    reset()         { d = fresh(); save(); },
  };
})();

/* ─────────────────────────────────────
   III. MODULE LANGUE
───────────────────────────────────── */
const Lang = {
  code: 'fr',
  t()  { return T[this.code] || T.fr; },
  pick(code, fromSettings = false) {
    this.code = code;
    DB.get().cfg.lang = code;
    DB.save();
    const isRTL = code === 'ar';
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir',  isRTL ? 'rtl' : 'ltr');
    // Update lang buttons
    ['fr','en','es','ar'].forEach(c => {
      const b = document.getElementById('lmb-'+c);
      if (b) b.classList.toggle('active', c === code);
    });
    this.apply();
    if (fromSettings) { renderHome(); }
    else { Nav.go('home'); }
  },
  apply() {
    const t = this.t();
    // Labels statiques
    setText('home-sub',     t.chooseOp);
    setText('op-add-lbl',   t.opAdd);
    setText('op-sub-lbl',   t.opSub);
    setText('op-mul-lbl',   t.opMul);
    setText('op-div-lbl',   t.opDiv);
    setText('lv-back-lbl',  t.back);
    setText('q-prog-lbl',   t.qLbl);
    setText('chal-sub',     t.secLeft);
    setText('nk-ok',        t.validate);
    setText('end-title',    t.sessionDone);
    setText('end-pts',      t.pts);
    setText('e-cor-lbl',    t.goodLbl);
    setText('e-err-lbl',    t.errLbl);
    setText('e-stk-lbl',    t.stkLbl);
    setText('e-weak-title', t.toWork);
    setText('e-badges-title',t.badgesUnlocked);
    setText('e-replay-btn', t.replay);
    setText('e-home-btn',   t.home);
    setText('dash-title-lbl',t.progress);
    setText('tab-stats-btn',  t.tabStats);
    setText('tab-badges-btn', t.tabBadges);
    setText('tab-history-btn',t.tabHistory);
    setText('d-sessions-lbl',t.statSessions);
    setText('d-correct-lbl', t.statCorrect);
    setText('d-streak-lbl',  t.statStreak);
    setText('d-rate-lbl',    t.statRate);
    setText('chart-title-lbl',t.chartTitle);
    setText('ov-title',      t.settings);
    setText('s-dark-lbl',    t.darkMode);
    setText('s-sound-lbl',   t.sounds);
    setText('s-haptic-lbl',  t.vibration);
    setText('s-font-lbl',    t.fontSize);
    setText('s-lang-lbl',    t.language);
    setText('s-reset-lbl',   t.reset);
    setText('s-reset-sub',   t.resetSub);
    setText('s-erase-btn',   t.erase);
    setText('ov-close-btn',  t.close);
    // Défi Max labels set in DefiMax.start()
    setText('streak-unit', t.days);
    setText('xp-lv-lbl', '⭐ '+t.lvl+' '+(document.getElementById('home-xp-lv')||{}).textContent||'1');
    // Mode tabs
    setText('tab-normal',    '🏆 '+t.modeN);
    setText('g-back-lbl',    t.quit||'Quitter');
    setText('op-addsub-lbl', (t.opNames&&t.opNames.addSub)||'+/− Mix');
    setText('op-muldiv-lbl', (t.opNames&&t.opNames.mulDiv)||'×/÷ Mix');
    setText('op-all4-lbl',   (t.opNames&&t.opNames.all4)||'Mix Total');
    if(t.mixTitle) setText('mix-title-lbl', t.mixTitle);
    setText('op-addsub-lbl', (t.opNames&&t.opNames.addSub)||'+/− Mix');
    setText('op-muldiv-lbl', (t.opNames&&t.opNames.mulDiv)||'×/÷ Mix');
    setText('op-all4-lbl',   (t.opNames&&t.opNames.all4)||'Mix Total');
    if(t.mixTitle) setText('mix-title-lbl', t.mixTitle);
    setText('tab-challenge', '⚡ '+t.modeC);
    setText('tab-duel',      '🚀 '+t.modeD);
    // Mode labels in level screen will be re-set when opening level screen
  },
};

function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}

/* ─────────────────────────────────────
   IV. NAVIGATION
───────────────────────────────────── */
const Nav = {
  go(id) {
    Game.stopTimers();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-'+id).classList.add('active');
    window.scrollTo(0,0);
    if (id === 'home')      { renderHome(); ParentDash.hide(); }
    if (id === 'dashboard') { renderDashboard(); ParentDash.hide(); }
  },
  level(op) {
    S.op = op;
    const t  = Lang.t();
    setText('lv-op-sym',  ({add:'+',sub:'−',mul:'×',div:'÷'})[op]);
    setText('lv-op-name', t.opNames[op]);
    // Mode tabs
    setText('tab-normal',    '🏆 '+t.modeN);
    setText('g-back-lbl',    t.quit||'Quitter');
    setText('tab-challenge', '⚡ '+t.modeC);
    setText('tab-duel',      '🚀 '+t.modeD);
    ['normal','challenge','duel'].forEach(m => {
      document.getElementById('tab-'+m).classList.toggle('active', m === S.mode);
    });
    buildLevelButtons();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-level').classList.add('active');
    window.scrollTo(0,0);
  },
  openDashboard() {
    if (PIN.hasPin()) {
      PIN.show('check');
    } else {
      // Pas encore de PIN -> proposer d'en créer un ou accéder directement
      const t = Lang.t();
      const msg = t.pin_create_prompt || 'Protéger l\'espace parent avec un code PIN ?';
      if (confirm(msg)) {
        PIN.show('set1');
      } else {
        Nav.go('dashboard');
      }
    }
  },
  settings() {
    applySettings();
    document.getElementById('ov-settings').classList.add('open');
  },
};

function setMode(m) {
  S.mode = m;
  ['normal','challenge','duel'].forEach(x =>
    document.getElementById('tab-'+x).classList.toggle('active', x === m)
  );
}

function buildLevelButtons() {
  const t   = Lang.t();
  const key = {
    add:'lvlAdd', sub:'lvlSub', mul:'lvlMul', div:'lvlDiv',
    addSub:'lvlAddSub', mulDiv:'lvlMulDiv', all4:'lvlAll4'
  }[S.op];
  const list = document.getElementById('levels-list');
  list.innerHTML = '';
  (t[key]||[]).forEach(([lbl, desc], i) => {
    const btn = document.createElement('button');
    btn.className = `level-btn lv${i+1}`;
    btn.innerHTML = `<div class="lvl-badge">${i+1}</div><div class="lvl-text"><strong>${lbl}</strong><span>${desc}</span></div>`;
    btn.onclick = () => { if (S.mode === 'duel') DefiMax.start(i+1); else Game.start(i+1); };
    list.appendChild(btn);
  });
}

/* ─────────────────────────────────────
   V. AUDIO
───────────────────────────────────── */
const SFX = (() => {
  let ac = null;
  const ctx = () => { if (!ac) ac = new (window.AudioContext||window.webkitAudioContext)(); return ac; };
  const tone = (f, type, dur, gain, delay=0) => {
    if (!DB.get().cfg.sound) return;
    try {
      const c = ctx(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type; o.frequency.value = f;
      const t = c.currentTime + delay;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(gain, t+.01);
      g.gain.exponentialRampToValueAtTime(.001, t+dur);
      o.start(t); o.stop(t+dur+.05);
    } catch(e) {}
  };
  return {
    ok:    () => { tone(660,'sine',.14,.25); tone(880,'sine',.14,.2,.1); },
    wrong: () => { tone(200,'sawtooth',.17,.14); },
    tap:   () => { tone(440,'sine',.06,.1); },
    badge: () => { [523,659,784,1047].forEach((f,i) => tone(f,'sine',.2,.2,i*.1)); },
    win:   () => { [523,659,784,1047,1319].forEach((f,i) => tone(f,'sine',.14,.2,i*.08)); },
    mid:   () => { tone(550,'sine',.12,.18); tone(660,'sine',.12,.16,.12); },
  };
})();

const Hap = {
  ok:    () => { if (DB.get().cfg.haptic && navigator.vibrate) navigator.vibrate(35); },
  err:   () => { if (DB.get().cfg.haptic && navigator.vibrate) navigator.vibrate([50,25,50]); },
  badge: () => { if (DB.get().cfg.haptic && navigator.vibrate) navigator.vibrate([70,30,70,30,110]); },
};

/* ─────────────────────────────────────
   VI. GÉNÉRATEURS (sans répétition)
───────────────────────────────────── */
const ri   = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const pick = arr   => arr[Math.floor(Math.random()*arr.length)];
const shuf = arr   => [...arr].sort(() => Math.random()-.5);

// Anti-répétition : mémorise les 12 dernières clés
const AR = {
  hist: [],
  key(q) { return `${q.a}${q.opChar}${q.b}`; },
  seen(q) { return this.hist.includes(this.key(q)); },
  add(q)  { this.hist.push(this.key(q)); if (this.hist.length > 12) this.hist.shift(); },
  reset() { this.hist = []; },
  gen(op, lv, tries=30) {
    for (let i=0; i<tries; i++) {
      const q = genQ(op, lv);
      if (!this.seen(q)) { this.add(q); return q; }
    }
    const q = genQ(op, lv); this.add(q); return q;
  },
};

// Répétition espacée
const SR = {
  queue: [],
  add(q)  { if (this.queue.length < 6) this.queue.push({...q}); },
  should(n) { return this.queue.length > 0 && n > 0 && n % 3 === 0; },
  next()  { return this.queue.shift(); },
  reset() { this.queue = []; },
};

function genQ(op, lv) {
  switch(op) {
    case 'add':    return genAdd(lv);
    case 'sub':    return genSub(lv);
    case 'mul':    return genMul(lv);
    case 'div':    return genDiv(lv);
    case 'addSub': return Math.random() < .5 ? genAdd(lv) : genSub(lv);
    case 'mulDiv': return Math.random() < .5 ? genMul(lv) : genDiv(lv);
    case 'all4':   { const r=Math.random(); return r<.25?genAdd(lv):r<.5?genSub(lv):r<.75?genMul(lv):genDiv(lv); }
    default:       return genAdd(lv);
  }
}

function genAdd(lv) {
  let a, b, tag;
    if (lv === 1) {
    // Générer la somme UNIFORMÉMENT entre 2 et 9, puis choisir a et b
    const sum = ri(2, 9); // distribution uniforme de la réponse
    const aMax = Math.min(sum - 1, 8);
    const aMin = Math.max(1, sum - 8);
    a = ri(aMin, aMax);
    b = sum - a;
    tag = 'add_basic';
  } else if (lv === 2) {
    do { a = ri(2,9); b = ri(2,9); } while (a+b < 11 || a+b > 18);
    tag = 'add_cross';
  } else {
    const carry = Math.random() < .30;
    if (!carry) {
      do { a = ri(10,89); } while (a%10 === 0);
      b = ri(1, 9-(a%10)); tag = 'add_basic';
    } else {
      do { a = ri(10,89); } while (a%10 === 0);
      const mn = 10-(a%10), mx = Math.min(9, 99-a);
      b = mn <= mx ? ri(mn,mx) : ri(1,9);
      if (a+b > 99) b = 99-a;
      if (b < 1) b = 1;
      tag = 'add_carry';
    }
  }
  return { a, b, opChar:'+', answer:a+b, tag, distrib:false };
}

function genSub(lv) {
  let a, b, tag;
  if (lv === 1) {
    a = ri(2,10); b = ri(1, a-1); tag = 'sub_basic';
  } else if (lv === 2) {
    a = ri(11,20);
    const u = a % 10;
    if (u === 0) { b = ri(1,9); tag = 'sub_cross'; }
    else if (Math.random() < .5) { b = ri(u+1, Math.min(9,a-1)); tag = 'sub_cross'; }
    else { b = ri(1,u); tag = 'sub_basic'; }
    if (a-b < 0) b = a-1;
  } else {
    a = ri(11,99); b = ri(1, Math.min(9,a-1));
    tag = (b > a%10 && a%10 !== 0) ? 'sub_borrow' : 'sub_basic';
  }
  return { a, b, opChar:'−', answer:a-b, tag, distrib:false };
}

function genMul(lv) {
  // Tables 0×0 à 10×10 — sans distributivité
  const tbls = { 1:[0,1,2,5,10], 2:[3,4,6], 3:[7,8,9] };
  let a = pick(tbls[lv]), b = ri(0,10);
  if (Math.random() < .5) [a,b] = [b,a];
  return { a, b, opChar:'×', answer:a*b, tag:{ 1:'mul_easy',2:'mul_mid',3:'mul_hard' }[lv], distrib:false };
}

function genDiv(lv) {
  const dvs = { 1:[2,5,10], 2:[3,4,6], 3:[7,8,9] };
  if (lv === 3 && Math.random() < .30) {
    const d = pick([2,3,4,5,6,7,8,9]), q = ri(1,9)*10;
    return { a:d*q, b:d, opChar:'÷', answer:q, tag:'div_large', distrib:false };
  }
  const d = pick(dvs[lv]);
  const top = Math.min(10, Math.floor({ 1:100,2:60,3:90 }[lv]/d));
  const q = ri(1,top);
  return { a:d*q, b:d, opChar:'÷', answer:q, tag:{ 1:'div_easy',2:'div_mid',3:'div_hard' }[lv], distrib:false };
}

function getExplanation(q) {
  const { a, b, opChar, answer } = q;
  if (opChar === '+') {
    const nxt = Math.ceil(a/10)*10;
    if (nxt !== a && nxt < a+b) {
      const s1=nxt-a, s2=b-s1;
      return `${a} + <span class="hl">${s1}</span> = ${nxt} &nbsp;•&nbsp; ${nxt} + <span class="hl">${s2}</span> = <span class="hl">${answer}</span>`;
    }
    return `<span class="hl">${a}</span> + <span class="hl">${b}</span> = <span class="hl">${answer}</span>`;
  }
  if (opChar === '−') {
    const u = a % 10;
    if (b > u && u !== 0) {
      const s1=u, s2=b-s1;
      return `${a} − <span class="hl">${s1}</span> = ${a-s1} &nbsp;•&nbsp; ${a-s1} − <span class="hl">${s2}</span> = <span class="hl">${answer}</span>`;
    }
    return `<span class="hl">${a}</span> − <span class="hl">${b}</span> = <span class="hl">${answer}</span>`;
  }
  if (opChar === '×') {
    if (q.distrib) {
      const tn=Math.floor(a/10)*10, un=a%10;
      return `(${tn}+${un})×${b} = <span class="hl">${tn*b}</span>+<span class="hl">${un*b}</span> = <span class="hl">${answer}</span>`;
    }
    return `${a} × ${b} = <span class="hl">${answer}</span>`;
  }
  if (opChar === '÷')
    return `${b} × <span class="hl">${answer}</span> = ${a} &nbsp;⟹&nbsp; ${a} ÷ ${b} = <span class="hl">${answer}</span>`;
}

/* ─────────────────────────────────────
   VII. BADGES
───────────────────────────────────── */
const BADGE_ICONS = { first_step:'🌟',on_fire:'🔥',lightning:'⚡',champion:'🏆',assiduous:'📅',add_master:'➕',mul_master:'✖️',perfect:'💎',speedster:'🚀',sniper:'🎯' };

function checkBadges(s) {
  const db = DB.get(), earned = [];
  const test = (id, cond) => { if (cond && DB.badge(id)) earned.push(id); };
  test('first_step', db.sessions >= 1);
  test('on_fire',    s.bestStreak >= 5 || db.bestStreak >= 5);
  test('lightning',  s.bestStreak >= 10 || db.bestStreak >= 10);
  test('champion',   s.score >= 200);
  test('assiduous',  db.streak >= 7);
  test('add_master', db.opCorrect.add >= 50);
  test('mul_master', db.opCorrect.mul >= 50);
  test('perfect',    s.correct >= 10 && s.wrong === 0);
  test('speedster',  s.mode === 'challenge' && s.rate >= 80 && s.dur <= 45);
  test('sniper',     s.bestStreak >= 20 || db.bestStreak >= 20);
  earned.forEach((id, i) => setTimeout(() => showBadgeToast(id), i*1800));
  return earned;
}

function showBadgeToast(id) {
  const t = Lang.t();
  document.getElementById('bt-icon').textContent = BADGE_ICONS[id] || '🏆';
  document.getElementById('bt-lbl').textContent  = t.badgeLbl + ' : ';
  document.getElementById('bt-name').textContent = (t.bn||{})[id] || id;
  const toast = document.getElementById('badge-toast');
  toast.classList.add('show');
  SFX.badge(); Hap.badge();
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ─────────────────────────────────────
   VIII. XP / NIVEAUX
───────────────────────────────────── */
const LVL_XP = [100,250,500,1000,2000,3500,5000,7500,10000,15000];
function getXpInfo() {
  const xp = DB.get().xp;
  let lv=1, cum=0;
  for (let i=0; i<LVL_XP.length; i++) {
    if (xp >= cum+LVL_XP[i]) { cum+=LVL_XP[i]; lv=i+2; } else break;
  }
  const cur  = xp - LVL_XP.slice(0,lv-1).reduce((s,v)=>s+v,0);
  const next = LVL_XP[lv-1] || LVL_XP[LVL_XP.length-1];
  return { lv, cur, next };
}
function earnXP(correct, lv, mode) {
  const base = {1:10,2:15,3:20}[lv]||10;
  const mult = mode==='challenge' ? 1.5 : mode==='duel' ? 1.2 : 1;
  const xp = Math.round(correct * base * mult);
  DB.addXP(xp); return xp;
}

/* ─────────────────────────────────────
   IX. ÉTAT DU JEU
───────────────────────────────────── */
const S = {
  op: 'add', lv: 1, mode: 'normal',
  score: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0,
  input: '', q: null, busy: false,
  consecErr: 0, rescue: false,
  gauge: 70, gaugeTimer: null, chalTimer: null, chalLeft: 60,
  t0: 0,           // début session
  qNum: 0,         // index question courante (0-based)
  TOTAL: 20,
  dots: [],        // éléments DOM des points
  midDone: false,
  weak: {},        // erreurs par catégorie
};

/* ─────────────────────────────────────
   X. MOTEUR DE JEU
───────────────────────────────────── */
const Game = {

  start(lv) {
    // Reset complet
    Object.assign(S, {
      lv, score:0, correct:0, wrong:0, streak:0, bestStreak:0,
      input:'', q:null, busy:false, consecErr:0, rescue:false,
      gauge:70, chalLeft:60, t0:Date.now(), qNum:0,
      midDone:false, weak:{},
    });
    AR.reset(); SR.reset();

    const t = Lang.t();
    setText('g-op-sym',   ({add:'+',sub:'−',mul:'×',div:'÷',addSub:'+−',mulDiv:'×÷',all4:'������'})[S.op]);
    setText('g-op-name',  t.opNames[S.op] || t.opNames['add']);
    setText('g-lv-chip',  t.lvl+lv);
    setText('g-score',    '0');
    setText('q-tot',      S.TOTAL);

    const isSprint = S.mode === 'challenge';

    // Tournoi: initialise round tracking
    if (S.mode === 'normal') {
      Tournament.init();
    } else {
      Tournament.hide();
    }

    // Sprint: affiche record actuel
    if (isSprint) {
      const k = S.op + '_' + S.lv;
      const rec = DB.getSprintRec(k);
      const el = document.getElementById('chal-record');
      if (el) el.textContent = rec > 0 ? ('🏅 Record: ' + rec + ' bonnes réponses') : '';
    }

    // Affichage conditionnel
    show('q-prog-card',  !isSprint);
    show('chal-card',     isSprint);
    show('gauge-card',   !isSprint);

    if (!isSprint) this.buildDots();

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-game').classList.add('active');
    window.scrollTo(0,0);

    this.stopTimers();
    if (isSprint) this.startChal();
    else          this.startGauge();

    this.nextQ();
  },

  replay() { this.start(S.lv); },

  confirmQuit() {
    const t = Lang.t();
    const msg = t.confirmQuit || 'Quitter la session en cours ?';
    if (confirm(msg)) { this.stopTimers(); Nav.go('home'); }
  },

  stopTimers() {
    clearInterval(S.gaugeTimer); S.gaugeTimer = null;
    clearInterval(S.chalTimer);  S.chalTimer  = null;
  },

  buildDots() {
    const container = document.getElementById('q-dots');
    container.innerHTML = '';
    S.dots = [];
    for (let i=0; i<S.TOTAL; i++) {
      const d = document.createElement('div');
      d.className = 'q-dot' + (i===0 ? ' current' : '');
      container.appendChild(d);
      S.dots.push(d);
    }
    setText('q-cur', '1');
  },

  markDot(result) {
    if (S.dots[S.qNum]) {
      S.dots[S.qNum].classList.remove('current');
      S.dots[S.qNum].classList.add(result);
    }
    if (S.qNum+1 < S.TOTAL && S.dots[S.qNum+1]) {
      S.dots[S.qNum+1].classList.add('current');
    }
    setText('q-cur', Math.min(S.qNum+2, S.TOTAL));
    // Mi-parcours
    if (S.qNum === Math.floor(S.TOTAL/2)-1 && !S.midDone) {
      S.midDone = true;
      const el = document.getElementById('banner-mid');
      el.textContent = Lang.t().mid;
      el.classList.add('show');
      SFX.mid();
      setTimeout(() => el.classList.remove('show'), 2800);
    }
  },

  startGauge() {
    S.gaugeTimer = setInterval(() => {
      S.gauge = Math.max(0, S.gauge - 0.25);
      const p = Math.round(S.gauge);
      document.getElementById('gauge-fill').style.width = p+'%';
      document.getElementById('gauge-pct').textContent  = p+'%';
      document.getElementById('gauge-fill').classList.toggle('danger', S.gauge < 25);
      if (S.gauge <= 0) this.end();
    }, 200);
  },

  setGauge(v) {
    S.gauge = Math.max(0, Math.min(100, v));
    const p = Math.round(S.gauge);
    document.getElementById('gauge-fill').style.width = p+'%';
    document.getElementById('gauge-pct').textContent  = p+'%';
    document.getElementById('gauge-fill').classList.toggle('danger', S.gauge < 25);
  },

  startChal() {
    S.chalTimer = setInterval(() => {
      S.chalLeft--;
      const el = document.getElementById('chal-time');
      el.textContent = S.chalLeft;
      el.classList.toggle('urgent', S.chalLeft <= 10);
      if (S.chalLeft <= 0) this.end();
    }, 1000);
  },

  nextQ() {
    // FIN automatique à 15 questions (mode normal uniquement)
    if (S.mode === 'normal' && S.qNum >= S.TOTAL) { this.end(); return; }

    S.input = ''; S.busy = false;
    const t = Lang.t();

    // Adaptation Niv.3 → Niv.2 après 3 erreurs consécutives
    let eff = S.lv;
    const adaptEl = document.getElementById('banner-adapt');
    if (S.lv === 3 && S.consecErr >= 3 && !S.rescue) {
      eff = 2; S.rescue = true;
      adaptEl.textContent = t.adapt;
      adaptEl.classList.add('show');
    } else {
      S.rescue = false;
      adaptEl.classList.remove('show');
    }

    // Répétition espacée ou nouvelle question
    S.q = SR.should(S.correct) ? SR.next() : AR.gen(S.op, eff);
    if (!S.q || S.q.a === undefined || S.q.b === undefined) S.q = AR.gen('add', 1);

    // Reset affichage carte
    const card = document.getElementById('q-card');
    card.classList.remove('ok','err','anim-correct','anim-shake');
    document.getElementById('q-a').textContent = S.q.a;
    document.getElementById('q-op').textContent = S.q.opChar;
    document.getElementById('q-b').textContent = S.q.b;
    const bl = document.getElementById('q-blank');
    bl.textContent = ''; bl.classList.remove('typing'); bl.classList.add('empty');
    document.getElementById('q-feedback').textContent = '';
    document.getElementById('q-feedback').className = 'q-feedback';
    document.getElementById('explain-card').classList.remove('show');
    setText('q-cur', S.qNum+1);
  },

  end() {
    this.stopTimers();
    const dur  = Math.round((Date.now()-S.t0)/1000);
    const tot  = S.correct + S.wrong;
    const rate = tot > 0 ? Math.round(S.correct/tot*100) : 0;
    const xpG  = earnXP(S.correct, S.lv, S.mode);
    const sess = {
      op: S.op, lv: S.lv, mode: S.mode,
      score: S.score, correct: S.correct, wrong: S.wrong,
      bestStreak: S.bestStreak, rate, dur,
      weak: S.weak,
      date: new Date().toLocaleDateString(),
    };
    // Sprint: vérifie et met à jour le record
    if (S.mode === 'challenge') {
      const k = S.op + '_' + S.lv;
      const prev = DB.getSprintRec(k);
      if (S.correct > prev) {
        DB.setSprintRec(k, S.correct);
        sess.newSprintRecord = true;
        xpG += 30;
      }
      sess.sprintRecord = DB.getSprintRec(S.op + '_' + S.lv);
    }
    // Tournoi: médaille selon le taux
    if (S.mode === 'normal') {
      const tot = Tournament.totalCorrect();
      // 20 questions total: or ≥18, argent ≥14, bronze sinon
      sess.medal    = tot >= 18 ? '🥇' : tot >= 14 ? '🥈' : '🥉';
      sess.trn_total = tot;
      Tournament.hide();
    }
    DB.addSession(sess);
    const badges = checkBadges(sess);
    this.renderEnd(sess, xpG, badges);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-end').classList.add('active');
    window.scrollTo(0,0);
  },

  renderEnd(s, xpG, badges) {
    const t = Lang.t();
    const emojis = ['😐','😐','👍','🎉','🏆','🏆'];
    const emojiEl = document.getElementById('end-emoji');
    if (s.medal) {
      emojiEl.innerHTML = '<span class="end-medal">' + s.medal + '</span>';
    } else {
      emojiEl.textContent = emojis[Math.min(5, Math.floor(s.rate/20))];
    }
    // Tournoi: afficher le total
    if (s.trn_total !== undefined) {
      const tEl = document.getElementById('e-time');
      const t = Lang.t();
      tEl.textContent = (t.trn_total || 'Total') + ' : ' + s.trn_total + '/20 · ' + s.dur + 's';
    }
    // Sprint record banner
    const srEl = document.getElementById('end-sprint-record');
    if (srEl) {
      if (S.mode === 'challenge') {
        srEl.style.display = '';
        srEl.textContent = s.newSprintRecord
          ? ('🎉 Nouveau record : ' + s.sprintRecord + ' bonnes réponses !')
          : ('🏅 Record actuel : ' + s.sprintRecord + ' bonnes réponses');
      } else {
        srEl.style.display = 'none';
      }
    }
    setText('end-score', s.score);
    setText('end-xp',    t.xpEarned.replace('{n}', xpG));
    setText('e-cor',     s.correct);
    setText('e-err',     s.wrong);
    setText('e-stk',     s.bestStreak);
    setText('e-rate-lbl', t.rate+' : '+s.rate+'%');
    const avg = s.correct > 0 ? Math.round(s.dur/s.correct) : '—';
    setText('e-time', t.timeInfo.replace('{d}',s.dur).replace('{a}',avg));
    setTimeout(() => { document.getElementById('e-rate-fill').style.width = s.rate+'%'; }, 200);
    // Faiblesses
    const wb = document.getElementById('e-weak-box');
    const entries = Object.entries(s.weak||{}).sort((a,b)=>b[1]-a[1]).slice(0,3);
    if (entries.length) {
      const mx = entries[0][1];
      document.getElementById('e-weak-list').innerHTML = entries.map(([k,v]) =>
        `<div class="w-item">
           <span class="w-name">${(t.wn||{})[k]||k}</span>
           <div class="w-bar-t"><div class="w-bar-f" style="width:${Math.round(v/mx*100)}%"></div></div>
           <span style="font-size:.66rem;color:#7C3900;min-width:20px;font-weight:700">${v}✗</span>
         </div>`).join('');
      wb.style.display = 'block';
    } else wb.style.display = 'none';
    // Badges
    const bb = document.getElementById('e-badges-box');
    if (badges.length) {
      document.getElementById('e-badge-chips').innerHTML = badges.map(id =>
        `<div class="badge-chip">${BADGE_ICONS[id]||'🏆'} ${(t.bn||{})[id]||id}</div>`).join('');
      bb.style.display = 'block';
    } else bb.style.display = 'none';
  },
};

/* ─────────────────────────────────────
   XI. SAISIE NUMPAD
───────────────────────────────────── */
function nkInput(c) {
  if (S.busy || S.input.length >= 4) return;
  S.input += c; SFX.tap(); updateBlank();
}
function nkDel() {
  if (S.busy) return;
  S.input = S.input.slice(0,-1); updateBlank();
}
function updateBlank() {
  const bl = document.getElementById('q-blank');
  if (!S.input) { bl.textContent=''; bl.classList.remove('typing'); bl.classList.add('empty'); }
  else          { bl.textContent=S.input; bl.classList.add('typing'); bl.classList.remove('empty'); }
}

function nkValidate() {
  if (S.busy || !S.input) return;
  S.busy = true;
  const ans = parseInt(S.input, 10);
  const isOk = ans === S.q.answer;
  const t = Lang.t();
  const card = document.getElementById('q-card');
  const fb   = document.getElementById('q-blank');
  const msg  = document.getElementById('q-feedback');

  if (isOk) {
    S.correct++; S.streak++; S.consecErr=0;
    if (S.streak > S.bestStreak) S.bestStreak = S.streak;
    S.score += ({1:10,2:15,3:20}[S.lv]||10) + (S.streak>=5?10:S.streak>=3?5:0);
    card.classList.add('ok','anim-correct');
    fb.style.color = 'var(--green)'; fb.style.borderBottomColor='var(--green)';
    msg.textContent = pick(t.praises); msg.className='q-feedback ok';
    if (S.mode==='normal') Game.setGauge(S.gauge+8);
    SFX.ok(); Hap.ok(); spawnConfetti(4);
    if (S.mode==='normal') Game.markDot('ok');
  } else {
    S.wrong++; S.streak=0; S.consecErr++;
    S.weak[S.q.tag] = (S.weak[S.q.tag]||0)+1;
    SR.add(S.q);
    card.classList.add('err','anim-shake');
    fb.style.color='var(--orange)'; fb.style.borderBottomColor='var(--orange)';
    msg.textContent = t.ansWas + S.q.answer; msg.className='q-feedback err';
    if (S.mode==='normal') Game.setGauge(S.gauge-4);
    SFX.wrong(); Hap.err();
    const ex = document.getElementById('explain-card');
    ex.innerHTML = getExplanation(S.q); ex.classList.add('show');
    if (S.mode==='normal') Game.markDot('err');
  }

  setText('g-score', S.score);
  const sc = document.getElementById('streak-chip');
  setText('streak-val', S.streak);
  sc.classList.toggle('show', S.streak >= 3);

  // Tournoi: marquer le point du round
  if (S.mode === 'normal') Tournament.markQ(isOk);

  S.qNum++;

  setTimeout(() => {
    fb.style.color=''; fb.style.borderBottomColor='';
    if (S.mode==='normal' && S.gauge<=0) { Game.end(); return; }
    if (S.mode==='normal' && S.qNum>=S.TOTAL) { Game.end(); return; }
    // Tournoi: fin de round (4 questions)
    if (S.mode === 'normal' && Tournament.isRoundEnd()) {
      const roundCorrect = Array.from(
        document.querySelectorAll('.trn-q-dot.ok')
      ).length;
      Tournament.showRoundEnd(roundCorrect);
      return; // nextRound() appelé par le bouton
    }
    Game.nextQ();
  }, isOk ? 700 : 1100);
}

/* ─────────────────────────────────────
   XII. DUEL
───────────────────────────────────── */
/* ─────────────────────────────────────
   XII. MODE DÉFI MAX
───────────────────────────────────── */
const DefiMax = {
  lives: 3, score: 0, qCount: 0, currentLv: 1, busy: false,

  start(lv) {
    S.lv = lv;
    this.lives = 3; this.score = 0; this.qCount = 0;
    this.currentLv = lv; this.busy = false;
    AR.reset();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-duel').classList.add('active');
    window.scrollTo(0, 0);
    const t = Lang.t();
    setText('dm-title-lbl', t.modeD   || 'Défi Max');
    setText('dm-quit-lbl',  t.quit    || 'Quitter');
    setText('dm-score-lbl', t.score   || 'Score');
    setText('dm-lives-lbl', t.lives   || 'Vies');
    setText('dm-lv-txt',    t.lvl     || 'Niveau');
    const rec = DB.getDefiMaxRecord(S.op, lv);
    document.getElementById('dm-record').textContent = rec > 0 ? ('🏅 Record: ' + rec) : '';
    this.updateUI();
    this.nextQ();
  },

  updateUI() {
    setText('dm-score', this.score);
    const h = this.lives, e = 3 - h;
    document.getElementById('dm-lives').textContent = '❤️'.repeat(h) + '🖤'.repeat(e);
    setText('dm-level-lbl', (Lang.t().lvl || 'Niv.') + ' ' + this.currentLv);
  },

  nextQ() {
    if (this.lives <= 0) { this.end(); return; }
    this.busy = false;
    this.qCount++;
    // Auto level-up: lv2 after 8 correct, lv3 after 20
    const thresholds = [0, 8, 20];
    if (this.currentLv < 3 && this.score >= thresholds[this.currentLv]) {
      this.currentLv = Math.min(3, this.currentLv + 1);
      this.updateUI();
      const el = document.getElementById('dm-level-lbl');
      if (el) { el.style.color = 'var(--green)'; setTimeout(() => { el.style.color = 'var(--orange)'; }, 900); }
    }
    const q = AR.gen(S.op, this.currentLv);
    this.q = q;
    setText('dm-a', q.a); setText('dm-op', q.opChar); setText('dm-b', q.b);
    setText('dm-q-count', 'Q' + this.qCount);
    // Generate 4 choices (correct + 3 distractors)
    const ans = q.answer;
    const spread = Math.max(3, Math.round(Math.abs(ans) * 0.4) + 2);
    const wrongs = new Set();
    let tries = 0;
    while (wrongs.size < 3 && tries < 60) {
      tries++;
      const w = ans + ri(-spread, spread);
      if (w !== ans && w > 0) wrongs.add(w);
    }
    let off = 1;
    while (wrongs.size < 3) { wrongs.add(ans + off); off++; }
    const choices = shuf([ans, ...[...wrongs].slice(0, 3)]);
    const box = document.getElementById('dm-choices');
    box.innerHTML = '';
    choices.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'dm-choice-btn';
      btn.textContent = v;
      btn.onclick = () => this.answer(v, btn);
      box.appendChild(btn);
    });
    const fb = document.getElementById('dm-feedback');
    fb.textContent = ''; fb.style.color = 'var(--text2)'; fb.style.fontSize = '';
  },

  answer(val, btn) {
    if (this.busy) return;
    this.busy = true;
    document.querySelectorAll('.dm-choice-btn').forEach(b => b.onclick = null);
    const isOk = val === this.q.answer;
    if (isOk) {
      this.score++;
      btn.style.background = 'var(--green)'; btn.style.color = '#fff';
      const fb = document.getElementById('dm-feedback');
      fb.textContent = '✅ +1'; fb.style.color = 'var(--green2)';
      SFX.ok(); Hap.ok();
      if (this.score % 5 === 0) spawnConfetti(3);
    } else {
      this.lives--;
      btn.style.background = '#E53935'; btn.style.color = '#fff';
      document.querySelectorAll('.dm-choice-btn').forEach(b => {
        if (parseInt(b.textContent) === this.q.answer) {
          b.style.background = 'var(--green)'; b.style.color = '#fff';
        }
      });
      const fb = document.getElementById('dm-feedback');
      fb.textContent = '❌ ' + this.q.answer; fb.style.color = '#E53935';
      SFX.wrong(); Hap.err();
    }
    this.updateUI();
    if (this.lives <= 0) { setTimeout(() => this.end(), 900); }
    else                 { setTimeout(() => this.nextQ(), 850); }
  },

  end() {
    const prev = DB.getDefiMaxRecord(S.op, S.lv);
    const isRecord = this.score > prev;
    if (isRecord) DB.setDefiMaxRecord(S.op, S.lv, this.score);
    DB.addXP(this.score * 5); DB.save();
    if (isRecord) { SFX.win(); spawnConfetti(8); } else SFX.ok();
    const fb = document.getElementById('dm-feedback');
    fb.style.fontSize = '1rem'; fb.style.fontWeight = '900';
    fb.style.color = isRecord ? 'var(--orange)' : 'var(--blue)';
    fb.textContent = isRecord
      ? ('🎉 Nouveau record : ' + this.score + ' !')
      : ('🏁 Score : ' + this.score + (prev > 0 ? ' | Record : ' + prev : ''));
    document.getElementById('dm-record').textContent = '🏅 Record: ' + DB.getDefiMaxRecord(S.op, S.lv);
    const box = document.getElementById('dm-choices');
    box.innerHTML = '';
    const reBtn = document.createElement('button');
    reBtn.className = 'dm-choice-btn'; reBtn.style.gridColumn = '1/-1';
    reBtn.style.background = 'var(--blue)'; reBtn.style.color = '#fff'; reBtn.style.fontSize = '1rem';
    reBtn.textContent = '🔄 Rejouer';
    reBtn.onclick = () => this.start(S.lv);
    box.appendChild(reBtn);
    const homeBtn = document.createElement('button');
    homeBtn.className = 'dm-choice-btn'; homeBtn.style.gridColumn = '1/-1';
    homeBtn.style.background = 'var(--card2)'; homeBtn.style.fontSize = '.9rem';
    homeBtn.textContent = '🏠 Accueil';
    homeBtn.onclick = () => Nav.go('home');
    box.appendChild(homeBtn);
  },
};


/* ─────────────────────────────────────
   XIII. TABLEAU DE BORD
───────────────────────────────────── */
function switchTab(name) {
  ['stats','badges','history'].forEach(n => {
    document.getElementById('tab-'+n+'-btn').classList.toggle('active', n===name);
    document.getElementById('pane-'+n).classList.toggle('active', n===name);
  });
  if (name==='stats') requestAnimationFrame(drawChart);
}

function renderDashboard() {
  const db = DB.get(), t = Lang.t();
  const all = db.history||[];
  const tw  = all.reduce((s,x)=>s+(x.wrong||0),0);
  const tot = db.correct + tw;
  setText('d-sessions', db.sessions);
  setText('d-correct',  db.correct);
  setText('d-streak',   db.bestStreak);
  setText('d-rate', tot>0 ? Math.round(db.correct/tot*100)+'%' : '—');
  // Onglets
  setText('tab-stats-btn',   t.tabStats);
  setText('tab-badges-btn',  t.tabBadges);
  setText('tab-history-btn', t.tabHistory);

  // Badges
  document.getElementById('badges-grid').innerHTML = Object.keys(BADGE_ICONS).map(id =>
    `<div class="badge-card ${db.badges.includes(id)?'unlocked':''}">
       <div class="badge-ico">${BADGE_ICONS[id]}</div>
       <div>
         <div class="badge-nm">${(t.bn||{})[id]||id}</div>
         <div class="badge-desc">${(t.bd||{})[id]||''}</div>
       </div>
     </div>`).join('');

  // Historique
  const hl = document.getElementById('hist-list');
  if (!all.length) {
    hl.innerHTML = `<div style="text-align:center;color:var(--text2);padding:24px;font-size:.85rem;font-weight:600">${t.noSessions}</div>`;
  } else {
    const OC = { add:'#1565C0',sub:'#7B1FA2',mul:'#F57C00',div:'#00A651' };
    const OS = { add:'+',sub:'−',mul:'×',div:'÷' };
    hl.innerHTML = all.slice(0,15).map(s =>
      `<div class="hist-item">
         <div class="hist-op" style="background:${OC[s.op]||'#607D8B'}">${OS[s.op]||'?'}</div>
         <div class="hist-info">
           <strong>${(t.opNames||{})[s.op]||s.op} · N${s.lv} · ${(t.modeNames||{})[s.mode]||s.mode}</strong>
           <span>${s.date} · ${s.correct}✓ ${s.wrong}✗ · ${s.rate}%</span>
         </div>
         <div class="hist-sc">${s.score}</div>
       </div>`).join('');
  }
  setTimeout(drawChart, 100);
}

function drawChart() {
  const canvas = document.getElementById('progress-chart');
  if (!canvas) return;
  const sessions = [...(DB.get().history||[])].reverse().slice(-10);
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio||1;
  const rect = canvas.getBoundingClientRect();
  canvas.width  = rect.width  * dpr;
  canvas.height = 120 * dpr;
  ctx.scale(dpr, dpr);
  const W=rect.width, H=120;
  const tc='#5272A0', ac='#1E88E5', gc='#00A651';
  ctx.clearRect(0,0,W,H);
  if (sessions.length < 2) {
    ctx.fillStyle=tc; ctx.font='12px Nunito,sans-serif'; ctx.textAlign='center';
    ctx.fillText(Lang.t().noSessions, W/2, H/2); return;
  }
  const rates = sessions.map(s=>s.rate||0);
  const P = {l:28,r:12,t:10,b:22};
  const cW=W-P.l-P.r, cH=H-P.t-P.b;
  [0,25,50,75,100].forEach(p => {
    const y = P.t+cH*(1-p/100);
    ctx.beginPath(); ctx.strokeStyle='#D0E4FF'; ctx.lineWidth=1;
    ctx.moveTo(P.l,y); ctx.lineTo(W-P.r,y); ctx.stroke();
    ctx.fillStyle=tc; ctx.font='9px Nunito,sans-serif'; ctx.textAlign='right';
    ctx.fillText(p+'%', P.l-3, y+3);
  });
  const xs = rates.map((_,i)=>P.l+(i/(rates.length-1))*cW);
  const ys = rates.map(r=>P.t+cH*(1-r/100));
  // Area
  ctx.beginPath(); ctx.moveTo(xs[0],ys[0]);
  xs.forEach((x,i)=>{if(i>0)ctx.lineTo(x,ys[i]);});
  ctx.lineTo(xs[xs.length-1],H-P.b); ctx.lineTo(xs[0],H-P.b); ctx.closePath();
  const g=ctx.createLinearGradient(0,P.t,0,H-P.b);
  g.addColorStop(0,ac+'44'); g.addColorStop(1,ac+'00');
  ctx.fillStyle=g; ctx.fill();
  // Line
  ctx.beginPath(); ctx.moveTo(xs[0],ys[0]);
  xs.forEach((x,i)=>{if(i>0)ctx.lineTo(x,ys[i]);});
  ctx.strokeStyle=ac; ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.stroke();
  // Dots
  rates.forEach((r,i) => {
    ctx.beginPath(); ctx.arc(xs[i],ys[i],4,0,Math.PI*2);
    ctx.fillStyle=r>=80?gc:r>=60?ac:'#F57C00'; ctx.fill();
    ctx.fillStyle=tc; ctx.font='9px Nunito,sans-serif'; ctx.textAlign='center';
    ctx.fillText(r+'%', xs[i], ys[i]-7);
  });
}

/* ─────────────────────────────────────
   XIV. ACCUEIL
───────────────────────────────────── */
function renderHome() {
  const db=DB.get(),t=Lang.t();
  const nm=db.cfg.childName||'';
  const av=db.cfg.childAvatar||'🧒';
  const chip=document.getElementById('greeting-chip');
  if(chip){chip.style.display=nm?'':'none';if(nm){setText('greeting-avatar',av);setText('greeting-name',(t.greeting||'Bonjour')+' '+nm+' !');setText('greeting-sub',t.greeting_sub||'🎮 Prêt à jouer ?');}}
  setText('home-streak', db.streak);
  setText('streak-unit', t.days);
  const { lv, cur, next } = getXpInfo();
  setText('home-xp-lv', lv);
  setText('home-xp-cur', cur);
  setText('home-xp-nxt', next);
  document.getElementById('xp-fill').style.width = Math.round(cur/next*100)+'%';
  // XP label
  const xpLvEl = document.getElementById('xp-lv-lbl');
  if (xpLvEl) xpLvEl.textContent = '⭐ '+t.lvl+' '+lv;
  // Week strip
  renderWeekStrip();
  // Appliquer toutes les traductions statiques
  Lang.apply();
}

function renderWeekStrip() {
  const t = Lang.t();
  const strip = document.getElementById('week-strip');
  const today = new Date();
  const wd = t.wd || ['D','L','M','M','J','V','S'];
  const played = new Set((DB.get().history||[]).map(s=>s.date));
  let html = '';
  for (let i=6; i>=0; i--) {
    const d = new Date(today); d.setDate(d.getDate()-i);
    const ds = d.toLocaleDateString();
    const p  = played.has(ds), isTd=(i===0);
    html += `<div class="day-dot">
      <div class="day-circ ${p?'played':''} ${isTd?'today':''}">${p?'✓':''}</div>
      <div class="day-lbl">${wd[d.getDay()]||'?'}</div>
    </div>`;
  }
  strip.innerHTML = html;
}

/* ─────────────────────────────────────
   XV. PARAMÈTRES
───────────────────────────────────── */
const Cfg = {
  dark(on)   { DB.get().cfg.dark=on; DB.save(); document.documentElement.setAttribute('data-theme',on?'dark':'light'); },
  sound(on)  { DB.get().cfg.sound=on; DB.save(); },
  haptic(on) { DB.get().cfg.haptic=on; DB.save(); },
  fs(size,btn) {
    DB.get().cfg.fs=size; DB.save();
    document.body.className='fs-'+size;
    document.querySelectorAll('.fs-b').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  },
  reset() {
    if (confirm(Lang.t().confirm||'Effacer ?')) { DB.reset(); Nav.go('home'); }
  },
};

function applySettings() {
  const c = DB.get().cfg;
  document.getElementById('tog-dark').checked   = c.dark||false;
  document.getElementById('tog-sound').checked  = c.sound!==false;
  document.getElementById('tog-haptic').checked = c.haptic!==false;
  document.body.className = 'fs-'+(c.fs||'normal');
  document.querySelectorAll('.fs-b').forEach(b=>b.classList.remove('active'));
  const fb = document.getElementById('fs-'+(c.fs||'normal'));
  if (fb) fb.classList.add('active');
  ['fr','en','es','ar'].forEach(code => {
    const b = document.getElementById('lmb-'+code);
    if (b) b.classList.toggle('active', code===Lang.code);
  });
  // Textes de l'overlay
  const t = Lang.t();
  setText('ov-title',      t.settings);
  setText('s-dark-lbl',    t.darkMode);
  setText('s-sound-lbl',   t.sounds);
  setText('s-haptic-lbl',  t.vibration);
  setText('s-font-lbl',    t.fontSize);
  setText('s-lang-lbl',    t.language);
  setText('s-reset-lbl',   t.reset);
  setText('s-reset-sub',   t.resetSub);
  setText('s-erase-btn',   t.erase);
  setText('ov-close-btn',  t.close);
}

/* ─────────────────────────────────────
   XVI. CONFETTIS
───────────────────────────────────── */
const CONF = ['#1565C0','#00A651','#F57C00','#1E88E5','#43A047','#FFA726'];
function spawnConfetti(n) {
  const ref  = document.getElementById('q-card'); if(!ref) return;
  const rect = ref.getBoundingClientRect();
  const cx = rect.left+rect.width/2, cy = rect.top+rect.height/2;
  for (let i=0; i<n; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-p';
    el.style.cssText = `left:${cx}px;top:${cy}px;background:${pick(CONF)};--tx:${ri(-60,60)}px;--ty:${ri(-75,-15)}px;--rot:${ri(-180,180)}deg;animation-delay:${i*.065}s`;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

/* ─────────────────────────────────────
   XVII. UTILITAIRES
───────────────────────────────────── */
function show(id, visible) {
  const el = document.getElementById(id);
  if (el) el.style.display = visible ? '' : 'none';
}

/* ─────────────────────────────────────
   XVIII. CLAVIER PHYSIQUE
───────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (!document.getElementById('screen-game').classList.contains('active')) return;
  if (e.key >= '0' && e.key <= '9')         { nkInput(e.key); }
  else if (e.key === 'Backspace')            { nkDel(); }
  else if (e.key==='Enter'||e.key===' ')     { e.preventDefault(); nkValidate(); }
});

/* ─────────────────────────────────────
   XIX. INITIALISATION
───────────────────────────────────── */
// Injecter les SVG logos
document.getElementById('lang-logo-svg').innerHTML = LOGO_SVG;
document.getElementById('home-logo-svg').innerHTML = LOGO_SVG;

S.mode = 'normal'; // mode par défaut

/* ─────────────────────────────────────
   XX. ONGLETS ACCUEIL
───────────────────────────────────── */
function homeTab(tab) {
  const isCalc = tab === 'calc';
  document.getElementById('htab-calc').classList.toggle('active', isCalc);
  document.getElementById('htab-games').classList.toggle('active', !isCalc);
  document.getElementById('section-calc').style.display  = isCalc ? '' : 'none';
  document.getElementById('section-games').style.display = isCalc ? 'none' : '';
}

/* ─────────────────────────────────────
   XXI. MODULE JEUX — ROUTEUR
───────────────────────────────────── */
const Games = {
  current: null,
  launch(game) {
    this.current = game;
    const screens = ['memory','logic','balance','vf'];
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-'+game).classList.add('active');
    window.scrollTo(0,0);
    const t = Lang.t();
    // Appliquer les textes i18n des jeux
    applyGameI18n(game, t);
    if (game === 'memory')  { Memory.init(); }
    if (game === 'logic')   { Logic.init(); }
    if (game === 'balance') { Balance.init(); }
    if (game === 'vf')      { VF.init(); }
  },
  exit() {
    if (this.current === 'memory')  Memory.stop();
    if (this.current === 'logic')   Logic.stop();
    if (this.current === 'vf')      VF.stop();
    this.current = null;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-home').classList.add('active');
    window.scrollTo(0,0);
    homeTab('games');
  },
};

function applyGameI18n(game, t) {
  const gti = t.gamesI18n || {};
  const back = t.back || 'Retour';
  const lvls = gti.levels || ['⭐ Facile','⭐⭐ Moyen','⭐⭐⭐ Expert'];
  if (game === 'memory') {
    setText('mem-back', back);
    setText('mem-title', gti.memory || 'Memory Pairs');
    setText('mem-pairs-lbl', gti.pairs || 'Paires');
    setText('mem-moves-lbl', gti.tries || 'Essais');
    setText('mem-time-lbl',  gti.seconds || 'Secondes');
    setText('mem-l1', lvls[0]); setText('mem-l2', lvls[1]); setText('mem-l3', lvls[2]);
  }
  if (game === 'logic') {
    setText('logic-back', back);
    setText('logic-title', gti.logic || 'Suite Logique');
    setText('logic-q-lbl', gti.question || 'Question');
    setText('logic-lives-lbl', gti.lives || 'Vies');
    setText('logic-timer-lbl', gti.seconds || 'Secondes');
    setText('logic-l1', lvls[0]); setText('logic-l2', lvls[1]); setText('logic-l3', lvls[2]);
  }
  if (game === 'balance') {
    setText('bal-back', back);
    setText('bal-title', gti.balance || 'Balance');
    setText('bal-q-lbl', gti.question || 'Question');
    setText('bal-lives-lbl', gti.lives || 'Vies');
    setText('bal-l1', lvls[0]); setText('bal-l2', lvls[1]); setText('bal-l3', lvls[2]);
  }
  if (game === 'vf') {
    setText('vf-back', back);
    setText('vf-title', gti.vf || 'Vrai ou Faux');
    setText('vf-score-lbl',  gti.points || 'Points');
    setText('vf-streak-lbl', gti.series || 'Série');
    setText('vf-q-lbl',      gti.question || 'Question');
    setText('vf-q-instruct', gti.vfInstruct || 'Cette affirmation est-elle vraie ?');
    setText('vf-true-lbl',   gti.trueLbl  || 'VRAI');
    setText('vf-false-lbl',  gti.falseLbl || 'FAUX');
    setText('vf-l1', lvls[0]); setText('vf-l2', lvls[1]); setText('vf-l3', lvls[2]);
  }
}

// Ajouter les traductions des jeux aux dictionnaires existants
(function patchI18n() {
  const patches = {
    fr: { gamesI18n: {
      calcTab:'🔢 Calcul Mental', gamesTab:'🎮 Jeux Éducatifs',
      chooseGame:'Choisis un jeu',
      memory:'Memory Pairs', logic:'Suite Logique', balance:'Balance', vf:'Vrai ou Faux',
      pairs:'Paires trouvées', tries:'Essais', seconds:'Secondes',
      question:'Question', lives:'Vies', points:'Points', series:'Série',
      levels:['⭐ Facile','⭐⭐ Moyen','⭐⭐⭐ Expert'],
      vfInstruct:'Cette affirmation est-elle vraie ?',
      trueLbl:'VRAI', falseLbl:'FAUX',
      congrats:'Bravo ! 🎉', gameOver:'Fin de partie !',
      newGame:'Nouveau jeu', memWin:'🎉 Toutes les paires trouvées !',
      timeUp:'⏰ Temps écoulé !',
    }},
    en: { gamesI18n: {
      calcTab:'🔢 Mental Math', gamesTab:'🎮 Educational Games',
      chooseGame:'Choose a game',
      memory:'Memory Pairs', logic:'Number Sequence', balance:'Balance Scale', vf:'True or False',
      pairs:'Pairs found', tries:'Attempts', seconds:'Seconds',
      question:'Question', lives:'Lives', points:'Points', series:'Streak',
      levels:['⭐ Easy','⭐⭐ Medium','⭐⭐⭐ Expert'],
      vfInstruct:'Is this statement true?',
      trueLbl:'TRUE', falseLbl:'FALSE',
      congrats:'Well done! 🎉', gameOver:'Game over!',
      newGame:'New game', memWin:'🎉 All pairs found!',
      timeUp:'⏰ Time is up!',
    }},
    es: { gamesI18n: {
      calcTab:'🔢 Cálculo Mental', gamesTab:'🎮 Juegos Educativos',
      chooseGame:'Elige un juego',
      memory:'Memory Pairs', logic:'Serie Lógica', balance:'Balanza', vf:'Verdadero o Falso',
      pairs:'Pares encontrados', tries:'Intentos', seconds:'Segundos',
      question:'Pregunta', lives:'Vidas', points:'Puntos', series:'Racha',
      levels:['⭐ Fácil','⭐⭐ Medio','⭐⭐⭐ Experto'],
      vfInstruct:'¿Esta afirmación es verdadera?',
      trueLbl:'VERDADERO', falseLbl:'FALSO',
      congrats:'¡Bien hecho! 🎉', gameOver:'¡Juego terminado!',
      newGame:'Nuevo juego', memWin:'🎉 ¡Todos los pares encontrados!',
      timeUp:'⏰ ¡Tiempo agotado!',
    }},
    ar: { gamesI18n: {
      calcTab:'🔢 الحساب الذهني', gamesTab:'🎮 الألعاب التعليمية',
      chooseGame:'اختر لعبة',
      memory:'ذاكرة الأزواج', logic:'المتسلسلة المنطقية', balance:'الميزان', vf:'صح أم خطأ',
      pairs:'أزواج مكتشفة', tries:'محاولات', seconds:'ثواني',
      question:'سؤال', lives:'أرواح', points:'نقاط', series:'سلسلة',
      levels:['⭐ سهل','⭐⭐ متوسط','⭐⭐⭐ خبير'],
      vfInstruct:'هل هذه العبارة صحيحة؟',
      trueLbl:'صحيح', falseLbl:'خطأ',
      congrats:'أحسنت! 🎉', gameOver:'انتهت اللعبة!',
      newGame:'لعبة جديدة', memWin:'🎉 تم اكتشاف كل الأزواج!',
      timeUp:'⏰ انتهى الوقت!',
    }},
  };
  Object.entries(patches).forEach(([code, patch]) => {
    if (T[code]) Object.assign(T[code], patch);
  });
})();

/* ─────────────────────────────────────
   XXII. JEU 1 · MEMORY PAIRS
───────────────────────────────────── */
const Memory = {
  level: 1, timer: null, elapsed: 0,
  flipped: [], matched: 0, total: 0,
  moves: 0, busy: false, timerInterval: null,

  // Contenu par niveau : niveau 1=12 cartes (6 paires), 2=16 cartes, 3=20 cartes
  configs: [
    { pairs: 6,  cols: 'g4x3', items: ['1','2','3','4','5','6','7','8','9','10','×','÷'] },
    { pairs: 8,  cols: 'g4x4', items: ['3','4','6','7','8','9','12','16','18','24','36','48','5','15','2×3','4+4'] },
    { pairs: 10, cols: 'g5x4', items: ['7','8','9','6×7','8×8','9×6','7×9','42','64','54','63','72','81','56','48'] },
  ],

  setLevel(lv, btn) {
    this.level = lv;
    document.querySelectorAll('#screen-memory .lv-sel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.init();
  },

  init() {
    this.stop();
    this.flipped = []; this.matched = 0; this.moves = 0;
    this.elapsed = 0; this.busy = false;
    const cfg = this.configs[this.level-1];
    this.total = cfg.pairs;

    // Update grid class
    const grid = document.getElementById('mem-grid');
    grid.className = 'memory-grid ' + cfg.cols;

    // Pick random items and create pairs
    const pool = [...cfg.items].sort(() => Math.random()-.5).slice(0, cfg.pairs);
    const cards = [...pool, ...pool].sort(() => Math.random()-.5);

    grid.innerHTML = '';
    cards.forEach((val, i) => {
      const card = document.createElement('div');
      card.className = 'mem-card';
      card.dataset.value = val;
      card.dataset.index = i;
      card.innerHTML = `
        <div class="mem-back">🧮</div>
        <div class="mem-front">${val}</div>`;
      card.onclick = () => this.flip(card);
      grid.appendChild(card);
    });

    setText('mem-pairs', `0/${cfg.pairs}`);
    setText('mem-moves', '0');
    setText('mem-time', '0');
    document.getElementById('mem-feedback').classList.remove('show','ok','err');

    // Start timer
    this.timerInterval = setInterval(() => {
      this.elapsed++;
      setText('mem-time', this.elapsed);
    }, 1000);
  },

  stop() {
    clearInterval(this.timerInterval); this.timerInterval = null;
  },

  flip(card) {
    if (this.busy) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (this.flipped.length >= 2) return;

    card.classList.add('flipped');
    this.flipped.push(card);
    SFX.tap();

    if (this.flipped.length === 2) {
      this.moves++;
      setText('mem-moves', this.moves);
      this.busy = true;
      const [c1, c2] = this.flipped;
      if (c1.dataset.value === c2.dataset.value) {
        // Match !
        setTimeout(() => {
          c1.classList.add('matched'); c2.classList.add('matched');
          this.matched++;
          this.flipped = []; this.busy = false;
          SFX.ok(); Hap.ok(); spawnConfetti(3);
          setText('mem-pairs', `${this.matched}/${this.total}`);
          if (this.matched === this.total) this.win();
        }, 400);
      } else {
        // No match
        setTimeout(() => {
          c1.classList.remove('flipped'); c2.classList.remove('flipped');
          this.flipped = []; this.busy = false;
          SFX.wrong();
        }, 900);
      }
    }
  },

  win() {
    this.stop();
    const t = Lang.t();
    const gti = t.gamesI18n || {};
    const fb = document.getElementById('mem-feedback');
    fb.textContent = (gti.memWin||'🎉 Bravo !') + ` — ${this.moves} essais · ${this.elapsed}s`;
    fb.className = 'feedback-overlay show ok';
    SFX.win(); Hap.badge();
    DB.addXP(Math.max(10, 100 - this.moves * 3 + (this.level*20)));
    DB.save();
    spawnConfetti(8);
  },
};

/* ─────────────────────────────────────
   XXIII. JEU 2 · SUITE LOGIQUE
───────────────────────────────────── */
const Logic = {
  level: 1, qNum: 0, total: 10,
  score: 0, lives: 3, timer: null, timeLeft: 0,

  // Générateurs de suites par niveau
  generators: [
    // Niveau 1 : suites simples +n, ×n basiques
    () => {
      const types = [
        () => { const s=ri(1,5),a=ri(1,9); return { seq:[a,a+s,a+2*s,a+3*s], ans:a+4*s, hint:`+${s}` }; },
        () => { const s=ri(2,5),a=ri(1,4); return { seq:[a,a*2,a*4,a*8], ans:a*16, hint:`×2` }; },
        () => { const s=ri(2,10),a=ri(2,20); return { seq:[a,a+s,a+2*s], ans:a+3*s, hint:`+${s}` }; },
      ];
      return pick(types)();
    },
    // Niveau 2 : suites avec règle alternée, carrés, etc.
    () => {
      const types = [
        () => { const s1=ri(2,5),s2=ri(1,4),a=ri(1,8); return { seq:[a,a+s1,a+s1+s2,a+2*s1+s2,a+2*s1+2*s2], ans:a+3*s1+2*s2, hint:`+${s1},+${s2}...` }; },
        () => { const n=ri(2,7); return { seq:[n*n, (n+1)*(n+1), (n+2)*(n+2), (n+3)*(n+3)], ans:(n+4)*(n+4), hint:'n²' }; },
        () => { const s=ri(3,8),a=ri(50,100); return { seq:[a,a-s,a-2*s,a-3*s], ans:a-4*s, hint:`-${s}` }; },
      ];
      return pick(types)();
    },
    // Niveau 3 : Fibonacci-like, ×n+c, puissances (avec garde-fous)
    () => {
      const types = [
        // Fibonacci-like
        () => { const a=ri(1,5),b=ri(1,5); return { seq:[a,b,a+b,a+2*b,2*a+3*b], ans:3*a+5*b, hint:'Fibonacci' }; },
        // ×r simple
        () => { const r=pick([2,3]),a=ri(1,5); return { seq:[a,a*r,a*r*r,a*r*r*r], ans:a*r*r*r*r, hint:`×${r}` }; },
        // Puissances de 2 (avec bounds check)
        () => { const p=[1,2,4,8,16,32,64,128]; const s=ri(0,4); return { seq:p.slice(s,s+4), ans:p[s+4], hint:'×2' }; },
        // Différences croissantes +2,+4,+6
        () => { const a=ri(1,8); return { seq:[a,a+2,a+6,a+12,a+20], ans:a+30, hint:'+2,+4,+6...' }; },
      ];
      const g = pick(types)();
      g.ans = Math.round(g.ans);
      return g;
    },
  ],

  setLevel(lv, btn) {
    this.level = lv;
    document.querySelectorAll('#screen-logic .lv-sel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.init();
  },

  init() {
    this.stop();
    this.qNum = 0; this.score = 0; this.lives = 3;
    setText('logic-score', '0');
    this.updateLives();
    this.nextQ();
  },

  stop() { clearInterval(this.timer); this.timer = null; },

  updateLives() {
    setText('logic-lives', '❤️'.repeat(this.lives) + '🖤'.repeat(3-this.lives));
  },

  nextQ() {
    if (this.qNum >= this.total || this.lives <= 0) { this.end(); return; }
    this.qNum++;
    setText('logic-q-num', `${this.qNum}/${this.total}`);
    document.getElementById('logic-feedback').classList.remove('show','ok','err');

    const g = this.generators[this.level-1]();
    this.current = g;

    // Affiche la séquence
    const seqEl = document.getElementById('logic-seq');
    seqEl.innerHTML = g.seq.map(n =>
      `<div class="logic-num">${n}</div><div class="logic-arrow">→</div>`
    ).join('') + '<div class="logic-num unknown">?</div>';

    // Affiche hint
    setText('logic-hint', g.hint ? `Règle : ${g.hint}` : '');

    // Génère 3 distracteurs
    const ans = g.ans;
    const wrongs = new Set();
    while (wrongs.size < 3) {
      const d = ans + ri(-Math.max(2,Math.round(ans*.3)), Math.max(2,Math.round(ans*.3)));
      if (d !== ans && d > 0 && Number.isInteger(d)) wrongs.add(d);
    }
    const choices = shuf([ans, ...[...wrongs].slice(0,3)]);
    const choicesEl = document.getElementById('logic-choices');
    choicesEl.innerHTML = '';
    choices.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'logic-choice-btn';
      btn.textContent = v;
      btn.onclick = () => this.answer(v, btn);
      choicesEl.appendChild(btn);
    });

    // Timer (niveau 2: 20s, niveau 3: 12s, niveau 1: sans timer)
    this.stop();
    const timeLimit = [0, 20, 12][this.level-1];
    if (timeLimit > 0) {
      this.timeLeft = timeLimit;
      setText('logic-timer', timeLimit);
      const timerEl = document.getElementById('logic-timer');
      this.timer = setInterval(() => {
        this.timeLeft--;
        timerEl.textContent = this.timeLeft;
        timerEl.classList.toggle('urgent', this.timeLeft <= 5);
        if (this.timeLeft <= 0) { this.stop(); this.answer(null, null); }
      }, 1000);
    } else {
      setText('logic-timer', '∞');
    }
  },

  answer(val, btn) {
    this.stop();
    document.querySelectorAll('.logic-choice-btn').forEach(b => b.onclick = null);
    const isOk = val === this.current.ans;
    document.querySelectorAll('.logic-choice-btn').forEach(b => {
      if (parseInt(b.textContent) === this.current.ans) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
    });

    const fb = document.getElementById('logic-feedback');
    if (isOk) {
      const pts = this.level * 10 * (this.timeLeft > 0 ? 1+this.timeLeft*.05 : 1);
      this.score += Math.round(pts);
      setText('logic-score', this.score);
      fb.textContent = `✅ ${Math.round(pts)} pts !`;
      fb.className = 'feedback-overlay show ok';
      SFX.ok(); Hap.ok(); spawnConfetti(3);
    } else {
      this.lives--;
      this.updateLives();
      fb.textContent = `❌ Réponse : ${this.current.ans}`;
      fb.className = 'feedback-overlay show err';
      SFX.wrong(); Hap.err();
    }
    setTimeout(() => this.nextQ(), 1200);
  },

  end() {
    this.stop();
    const t = Lang.t(), gti = t.gamesI18n||{};
    const msg = this.lives <= 0 ? (gti.gameOver||'Fin !') : (gti.congrats||'Bravo !');
    const fb = document.getElementById('logic-feedback');
    fb.textContent = `${msg} — ${this.score} points (${this.qNum-1}/${this.total})`;
    fb.className = 'feedback-overlay show ' + (this.score > 0 ? 'ok' : 'err');
    if (this.score > 0) { SFX.win(); DB.addXP(this.score); DB.save(); spawnConfetti(6); }
    // Restart bouton
    const restart = document.createElement('button');
    restart.className = 'game-action-btn';
    restart.style.marginTop = '10px';
    restart.textContent = gti.newGame || 'Nouveau jeu';
    restart.onclick = () => { restart.remove(); this.init(); };
    document.getElementById('screen-logic').querySelector('.game-screen-wrap').appendChild(restart);
  },
};

/* ─────────────────────────────────────
   XXIV. JEU 3 · BALANCE
───────────────────────────────────── */
const Balance = {
  level: 1, qNum: 0, total: 8,
  score: 0, lives: 3,

  // Génère une équation de balance sûre (sans crash)
  genPuzzle(lv) {
    const clrs = ['#1E88E5','#43A047','#F57C00','#8E24AA','#E53935','#00897B','#F9A825'];
    const mkW = v => ({ v, c: clrs[Math.abs(v) % clrs.length] });

    if (lv === 1) {
      // a + b = c + ?  avec des entiers 1-9
      const a = ri(1,5), b = ri(1,5);
      const total = a + b;
      const c = ri(1, total - 1);
      const x = total - c;
      return {
        left:  [mkW(a), mkW(b)],
        right: [mkW(c), { v:x, c:'#FFB300', unknown:true }],
        unknownVal: x, leftSum: total, rightSum: total,
      };
    } else if (lv === 2) {
      // a × n = c + ?
      const a = ri(2,6), n = ri(2,4);
      const total = a * n;
      const c = ri(1, total - 1);
      const x = total - c;
      return {
        left:  [{ v:a*n, label:`${a}×${n}`, c:'#1E88E5' }],
        right: [mkW(c), { v:x, c:'#FFB300', unknown:true }],
        unknownVal: x, leftSum: total, rightSum: total,
      };
    } else {
      // a + b = c + d + ?
      const a = ri(2,8), b = ri(2,8), c = ri(1,5);
      const total = a + b;
      const d = ri(1, Math.max(1, total - c - 1));
      const x = total - c - d;
      if (x <= 0) {
        // fallback : niveau 2
        const a2 = ri(3,7), n2 = ri(2,4);
        const t2 = a2*n2; const c2 = ri(1, t2-2); const x2 = t2-c2;
        return {
          left: [{v:t2, label:`${a2}×${n2}`, c:'#1E88E5'}],
          right: [mkW(c2), {v:x2, c:'#FFB300', unknown:true}],
          unknownVal:x2, leftSum:t2, rightSum:t2,
        };
      }
      return {
        left:  [mkW(a), mkW(b)],
        right: [mkW(c), mkW(d), { v:x, c:'#FFB300', unknown:true }],
        unknownVal: x, leftSum: total, rightSum: total,
      };
    }
  },

  setLevel(lv, btn) {
    this.level = lv;
    document.querySelectorAll('#screen-balance .lv-sel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.init();
  },

  init() {
    this.qNum = 0; this.score = 0; this.lives = 3;
    setText('bal-score', '0');
    this.updateLives();
    this.nextQ();
  },

  updateLives() { setText('bal-lives', '❤️'.repeat(this.lives) + '🖤'.repeat(3-this.lives)); },

  nextQ() {
    if (this.qNum >= this.total || this.lives <= 0) { this.end(); return; }
    this.qNum++;
    setText('bal-q-num', `${this.qNum}/${this.total}`);
    document.getElementById('bal-feedback').classList.remove('show','ok','err');
    document.getElementById('bal-beam').style.transform = 'translateX(-50%)';

    const p = this.genPuzzle(this.level);
    this.current = p;

    // Affiche les poids (gauche)
    const renderWeights = (items, containerId) => {
      const el = document.getElementById(containerId);
      el.innerHTML = items.map(w =>
        w.unknown
          ? `<div class="weight-block" style="background:#FFB300;border:3px dashed #FFF;font-size:.9rem">?</div>`
          : `<div class="weight-block" style="background:${w.c}">${w.label||w.v}</div>`
      ).join('');
    };
    renderWeights(p.left,  'bal-w-left');
    renderWeights(p.right, 'bal-w-right');

    // Texte équation
    const leftStr  = p.left.map(w=>w.label||w.v).join(' + ');
    const rightStr = p.right.map(w=>w.unknown ? '?' : (w.label||w.v)).join(' + ');
    setText('bal-left-txt',  leftStr);
    setText('bal-right-txt', rightStr);

    // Génère choix
    const ans = p.unknownVal;
    const wrongs = new Set();
    while (wrongs.size < 3) {
      const d = ans + ri(-Math.max(2,Math.round(ans*.4)), Math.max(2,Math.round(ans*.4)));
      if (d !== ans && d > 0) wrongs.add(d);
    }
    const choices = shuf([ans, ...[...wrongs].slice(0,3)]);
    const balChoices = document.getElementById('bal-choices');
    balChoices.innerHTML = '';
    choices.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'balance-choice-btn';
      btn.textContent = v;
      btn.onclick = () => this.answer(v, btn);
      balChoices.appendChild(btn);
    });
  },

  answer(val, btn) {
    document.querySelectorAll('.balance-choice-btn').forEach(b => b.onclick = null);
    const isOk = val === this.current.unknownVal;

    // Animate beam
    const beam = document.getElementById('bal-beam');
    if (isOk) {
      beam.style.transform = 'translateX(-50%) rotate(0deg)';
    } else {
      beam.style.transform = 'translateX(-50%) rotate(12deg)';
    }

    document.querySelectorAll('.balance-choice-btn').forEach(b => {
      if (parseInt(b.textContent) === this.current.unknownVal) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
    });

    const fb = document.getElementById('bal-feedback');
    if (isOk) {
      const pts = this.level * 15;
      this.score += pts;
      setText('bal-score', this.score);
      fb.textContent = `✅ Parfait ! +${pts} pts`;
      fb.className = 'feedback-overlay show ok';
      SFX.ok(); Hap.ok(); spawnConfetti(4);
    } else {
      this.lives--;
      this.updateLives();
      fb.textContent = `❌ Réponse : ${this.current.unknownVal}`;
      fb.className = 'feedback-overlay show err';
      SFX.wrong(); Hap.err();
    }
    setTimeout(() => this.nextQ(), 1300);
  },

  end() {
    const t = Lang.t(), gti = t.gamesI18n||{};
    const msg = this.lives <= 0 ? (gti.gameOver||'Fin !') : (gti.congrats||'Bravo !');
    const fb = document.getElementById('bal-feedback');
    fb.textContent = `${msg} — ${this.score} points`;
    fb.className = 'feedback-overlay show ' + (this.score > 0 ? 'ok' : 'err');
    if (this.score > 0) { SFX.win(); DB.addXP(this.score); DB.save(); spawnConfetti(6); }
    const restart = document.createElement('button');
    restart.className = 'game-action-btn';
    restart.style.marginTop = '10px';
    restart.textContent = gti.newGame || 'Nouveau jeu';
    restart.onclick = () => { restart.remove(); this.init(); };
    document.getElementById('screen-balance').querySelector('.game-screen-wrap').appendChild(restart);
  },
};

/* ─────────────────────────────────────
   XXV. JEU 4 · VRAI OU FAUX
───────────────────────────────────── */
const VF = {
  level: 1, qNum: 0, total: 10,
  score: 0, streak: 0, timer: null,
  timeLimit: 0, timeLeft: 0, busy: false,

  // Génère une affirmation vraie ou fausse selon le niveau
  genStatement(lv) {
    const isTrue = Math.random() < .5;

    if (lv === 1) {
      // Addition/soustraction simples
      const a = ri(1,9), b = ri(1,9);
      const real = a + b;
      const shown = isTrue ? real : real + pick([-3,-2,-1,1,2,3]);
      return { text:`${a} + ${b} = ${shown}`, truth: isTrue };
    } else if (lv === 2) {
      // Multiplication des tables
      const types = [
        () => { const a=ri(2,10),b=ri(2,10); const r=a*b; const s=isTrue?r:r+pick([-4,-3,-2,-1,1,2,3,4]); return {text:`${a} × ${b} = ${s}`,truth:isTrue}; },
        () => { const a=ri(1,9),b=ri(1,9); const r=a+b; const s=isTrue?r:r+pick([-2,-1,1,2]); return {text:`${a} + ${b} = ${s}`,truth:isTrue}; },
        () => { const a=ri(2,20),b=ri(1,a-1); const r=a-b; const s=isTrue?r:r+pick([-2,-1,1,2]); return {text:`${a} − ${b} = ${s}`,truth:isTrue}; },
      ];
      return pick(types)();
    } else {
      // Mix d'opérations, propriétés : commutativité, etc.
      const types = [
        () => { const a=ri(2,12),b=ri(2,12); const r=a*b; const s=isTrue?r:r+pick([-10,-7,-5,-3,3,5,7,10]); return {text:`${a} × ${b} = ${s}`,truth:isTrue}; },
        () => { const a=ri(10,99),b=ri(1,a); const r=a-b; const s=isTrue?r:r+pick([-5,-3,-1,1,3,5]); return {text:`${a} − ${b} = ${s}`,truth:isTrue}; },
        () => { const a=ri(2,9),b=ri(2,9); const comm=Math.random()<.5; return {text:comm?`${a} × ${b} = ${b} × ${a}`:`${a} + ${b} = ${b} − ${a}`, truth:comm}; },
        () => { const n=ri(2,9); const sq=n*n; const shown=isTrue?sq:sq+pick([-4,-1,1,4]); return {text:`${n}² = ${shown}`,truth:isTrue}; },
      ];
      return pick(types)();
    }
  },

  setLevel(lv, btn) {
    this.level = lv;
    document.querySelectorAll('#screen-vf .lv-sel-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.init();
  },

  init() {
    this.stop();
    this.qNum = 0; this.score = 0; this.streak = 0; this.busy = false;
    this.timeLimit = [0, 8, 5][this.level-1]; // lv1: sans timer, lv2:8s, lv3:5s
    setText('vf-score', '0');
    setText('vf-streak', '0🔥');
    document.getElementById('vf-timer-fill').style.width = '100%';
    document.getElementById('vf-feedback').classList.remove('show','ok','err');
    this.nextQ();
  },

  stop() { clearInterval(this.timer); this.timer = null; },

  nextQ() {
    if (this.qNum >= this.total) { this.end(); return; }
    this.qNum++;
    this.busy = false;
    this.stop();
    setText('vf-qnum', `${this.qNum}/${this.total}`);
    document.getElementById('vf-feedback').classList.remove('show','ok','err');
    document.getElementById('vf-timer-fill').classList.remove('urgent');
    ['vf-true-btn','vf-false-btn'].forEach(id => {
      document.getElementById(id).classList.remove('flash-ok','flash-err');
    });

    const stmt = this.genStatement(this.level);
    this.current = stmt;
    setText('vf-statement', stmt.text);

    // Timer
    if (this.timeLimit > 0) {
      this.timeLeft = this.timeLimit;
      const fill = document.getElementById('vf-timer-fill');
      fill.style.transition = 'none';
      fill.style.width = '100%';
      requestAnimationFrame(() => {
        fill.style.transition = `width ${this.timeLimit}s linear`;
        fill.style.width = '0%';
      });
      this.timer = setInterval(() => {
        this.timeLeft -= .1;
        if (this.timeLeft <= this.timeLimit * .3) fill.classList.add('urgent');
        if (this.timeLeft <= 0) { this.stop(); this.answer(null); }
      }, 100);
    }
  },

  answer(userTruth) {
    if (this.busy) return;
    this.busy = true;
    this.stop();

    const isOk = (userTruth !== null) && (userTruth === this.current.truth);
    const trueBtn  = document.getElementById('vf-true-btn');
    const falseBtn = document.getElementById('vf-false-btn');
    const fb = document.getElementById('vf-feedback');

    // Feedback visuel sur les boutons
    if (this.current.truth === true)  trueBtn.classList.add('flash-ok');
    else                               falseBtn.classList.add('flash-ok');
    if (userTruth !== null && !isOk) {
      (userTruth ? trueBtn : falseBtn).classList.add('flash-err');
    }

    if (isOk) {
      this.streak++;
      const bonus = this.streak >= 5 ? 2 : this.streak >= 3 ? 1.5 : 1;
      const timeBonus = this.timeLimit > 0 ? Math.round(this.timeLeft * 2) : 0;
      const pts = Math.round((this.level * 10 + timeBonus) * bonus);
      this.score += pts;
      setText('vf-score', this.score);
      setText('vf-streak', this.streak+'🔥');
      fb.textContent = `✅ +${pts} pts !` + (this.streak >= 3 ? ` 🔥×${this.streak}` : '');
      fb.className = 'feedback-overlay show ok';
      SFX.ok(); Hap.ok();
      if (this.streak % 5 === 0) spawnConfetti(5);
    } else {
      this.streak = 0;
      setText('vf-streak', '0🔥');
      const reason = userTruth === null ? ' ⏰' : '';
      fb.textContent = `❌${reason} C'était ${this.current.truth ? 'VRAI' : 'FAUX'}`;
      fb.className = 'feedback-overlay show err';
      SFX.wrong(); Hap.err();
    }
    document.getElementById('vf-timer-fill').style.width = '0%';
    setTimeout(() => this.nextQ(), 1000);
  },

  end() {
    this.stop();
    const t = Lang.t(), gti = t.gamesI18n||{};
    const fb = document.getElementById('vf-feedback');
    fb.textContent = `${gti.congrats||'Bravo !'} — ${this.score} pts !`;
    fb.className = 'feedback-overlay show ok';
    SFX.win(); DB.addXP(this.score); DB.save(); spawnConfetti(8);
    const restart = document.createElement('button');
    restart.className = 'game-action-btn';
    restart.style.marginTop = '10px';
    restart.textContent = gti.newGame || 'Nouveau jeu';
    restart.onclick = () => { restart.remove(); this.init(); };
    document.getElementById('screen-vf').querySelector('.game-screen-wrap').appendChild(restart);
  },
};

// Patch homeTab labels selon la langue après chaque changement de langue
const _origLangPick = Lang.pick.bind(Lang);
Lang.pick = function(code, fromSettings) {
  _origLangPick(code, fromSettings);
  if(!fromSettings&&!DB.get().cfg.childName){setTimeout(()=>Welcome.show(),50);return;}
  const t = T[code] || T.fr;
  const gti = t.gamesI18n || {};
  setText('ht-calc-lbl',  gti.calcTab  || '🔢 Calcul Mental');
  setText('ht-games-lbl', gti.gamesTab || '🎮 Jeux Éducatifs');
  setText('home-games-sub', gti.chooseGame || 'Choisis un jeu');
  setText('g-memory-lbl',  gti.memory  || 'Memory Pairs');
  setText('g-logic-lbl',   gti.logic   || 'Suite Logique');
  setText('g-balance-lbl', gti.balance || 'Balance');
  setText('g-vf-lbl',      gti.vf      || 'Vrai ou Faux');
};

/* ─────────────────────────────────────
   TOURNOI — Gestion visuelle des rounds
───────────────────────────────────── */

const AVATARS=['🧒','👦','👧','🧑','👩','👨','🦸','🧙','🧚','🐯','🦁','🐸','🐼','🚀','⚡','🌟','🎯','🎸','🎨','🏆'];
const Welcome={
  selectedAvatar:'🧒',
  show(){
    const t=Lang.t();
    const lw=document.getElementById('welcome-logo-wrap');
    if(lw) lw.innerHTML=LOGO_SVG;
    setText('wc-title', t.wc_title||'Bonjour ! 👋');
    setText('wc-sub',   t.wc_sub  ||'Quel est ton prénom ?');
    setText('wc-btn-lbl',t.wc_btn ||'C’est parti ! 🚀');
    const inp=document.getElementById('child-name-input');
    if(inp) inp.placeholder=t.wc_placeholder||'Ton prénom';
    const grid=document.getElementById('avatar-grid');
    if(grid){
      grid.innerHTML='';
      AVATARS.forEach(av=>{
        const btn=document.createElement('button');
        btn.className='avatar-btn'+(av===this.selectedAvatar?' selected':'');
        btn.textContent=av;
        btn.onclick=()=>this.selectAvatar(av);
        grid.appendChild(btn);
      });
    }
    const saved=DB.get().cfg.childName;
    if(saved&&inp){
      inp.value=saved;
      this.selectedAvatar=DB.get().cfg.childAvatar||'🧒';
      this.refreshAvatars();
      document.getElementById('wc-start-btn').disabled=false;
    }
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById('screen-welcome').classList.add('active');
    window.scrollTo(0,0);
    setTimeout(()=>{if(inp)inp.focus();},400);
  },
  selectAvatar(av){this.selectedAvatar=av;this.refreshAvatars();SFX.tap();},
  refreshAvatars(){document.querySelectorAll('.avatar-btn').forEach(btn=>btn.classList.toggle('selected',btn.textContent===this.selectedAvatar));},
  onInput(){
    const v=document.getElementById('child-name-input')?.value.trim()||'';
    const btn=document.getElementById('wc-start-btn');
    if(btn) btn.disabled=v.length<2;
  },
  confirm(){
    const name=document.getElementById('child-name-input')?.value.trim()||'';
    if(name.length<2) return;
    const cfg=DB.get().cfg;
    cfg.childName=name; cfg.childAvatar=this.selectedAvatar;
    DB.save();
    Nav.go('home');
    SFX.win(); spawnConfetti(6);
  },
};


/* ─────────────────────────────────────
   MODE PARENT — Système PIN
───────────────────────────────────── */
const PIN = {
  _buf:    '',      // saisie en cours
  _mode:   'check', // 'check' | 'set1' | 'set2'
  _first:  '',      // premier PIN pour confirmation

  // Hash simple (suffisant pour usage local)
  _hash(s) {
    let h = 0;
    for (let i=0; i<s.length; i++) h = ((h<<5)-h)+s.charCodeAt(i)|0;
    return String(h>>>0);
  },

  hasPin()  { return !!DB.get().parentPin; },

  show(mode='check') {
    this._buf=''; this._mode=mode; this._first='';
    const t = Lang.t();
    // Labels selon mode
    const titles = {
      check: t.pin_title  || 'Espace Parent',
      set1:  t.pin_set1   || 'Définir un code PIN',
      set2:  t.pin_set2   || 'Confirmer le code PIN',
    };
    const subs = {
      check: t.pin_sub    || 'Entrez votre code PIN',
      set1:  t.pin_set1s  || 'Choisissez 4 chiffres',
      set2:  t.pin_set2s  || 'Répétez le code',
    };
    setText('pin-title', titles[mode]);
    setText('pin-sub',   subs[mode]);
    setText('pin-err',   '');
    setText('pin-back-lbl', (t.back||'←') + ' ' + (t.home||'Accueil'));
    this._renderDots();
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById('screen-pin').classList.add('active');
    window.scrollTo(0,0);
  },

  press(d) {
    if (this._buf.length >= 4) return;
    SFX.tap();
    this._buf += d;
    this._renderDots();
    if (this._buf.length === 4) setTimeout(() => this._submit(), 300);
  },

  del() {
    if (!this._buf.length) return;
    this._buf = this._buf.slice(0,-1);
    this._renderDots();
    setText('pin-err','');
  },

  _renderDots() {
    for (let i=0;i<4;i++) {
      const d = document.getElementById('pd'+i);
      if (d) {
        d.className = 'pin-dot';
        if (i < this._buf.length) d.classList.add('filled');
      }
    }
  },

  _shakeError(msg) {
    const t = Lang.t();
    setText('pin-err', msg);
    for (let i=0;i<4;i++) {
      const d=document.getElementById('pd'+i);
      if(d){d.className='pin-dot filled error';}
    }
    setTimeout(()=>{
      this._buf=''; this._renderDots();
      setText('pin-err','');
    },900);
    SFX.wrong(); Hap.err();
  },

  _submit() {
    const t = Lang.t();
    if (this._mode === 'check') {
      const stored = DB.get().parentPin;
      if (!stored) {
        // No PIN set yet → go to set mode
        this.show('set1'); return;
      }
      if (this._hash(this._buf) === stored) {
        SFX.win(); spawnConfetti(4);
        Nav.go('dashboard');
        setTimeout(()=>ParentDash.show(), 200);
      } else {
        this._shakeError(t.pin_wrong || 'Code incorrect');
      }
    } else if (this._mode === 'set1') {
      this._first = this._buf;
      this._buf = '';
      this.show('set2');
    } else if (this._mode === 'set2') {
      if (this._buf !== this._first) {
        this._shakeError(t.pin_mismatch || 'Les codes ne correspondent pas');
        this._first = '';
        setTimeout(() => this.show('set1'), 1000);
      } else {
        DB.get().parentPin = this._hash(this._buf);
        DB.save();
        SFX.win(); spawnConfetti(4);
        Nav.go('dashboard');
        setTimeout(()=>ParentDash.show(), 200);
      }
    }
  },

  changePIN() {
    this.show('set1');
  },

  resetPIN() {
    DB.get().parentPin = '';
    DB.save();
  },
};

/* ─────────────────────────────────────
   PARENT DASHBOARD — Statistiques enrichies
───────────────────────────────────── */
const ParentDash = {
  show() {
    const db = DB.get(), t = Lang.t();
    const panel = document.getElementById('parent-panel');
    if (!panel) return;
    panel.style.display = '';

    // Sessions ce mois
    const now = new Date();
    const mStr = (now.getMonth()+1)+'/'+now.getFullYear();
    const monthSessions = (db.history||[]).filter(h => (h.date||'').includes('/'+now.getFullYear())).length;
    setText('ins-sessions', monthSessions);

    // Score moyen (10 dernières sessions)
    const recent = (db.history||[]).slice(-10);
    const avgScore = recent.length
      ? Math.round(recent.reduce((s,h)=>s+(h.rate||0),0)/recent.length)
      : 0;
    setText('ins-avg-score', avgScore+'%');

    // Temps total (en minutes)
    const totalSec = (db.history||[]).reduce((s,h)=>s+(h.dur||0),0);
    setText('ins-time', Math.round(totalSec/60)+' min');

    // Série
    setText('ins-streak', '🔥 '+(db.streak||0));

    // Labels i18n
    setText('ins-sessions-lbl', t.ins_sessions || 'Sessions ce mois');
    setText('ins-avg-lbl',      t.ins_avg      || 'Score moyen');
    setText('ins-time-lbl',     t.ins_time     || 'Temps total');
    setText('ins-streak-lbl',   t.ins_streak   || 'Série actuelle');
    setText('ins-weak-lbl',     t.ins_weak     || 'Points à travailler');
    setText('ins-changepin-lbl',t.ins_changepin|| 'Modifier le code PIN');

    // Points faibles (agrégation des weaknesses)
    const wkList = document.getElementById('weak-list');
    if (wkList) {
      const agg = {};
      (db.history||[]).slice(-20).forEach(h => {
        Object.entries(h.weak||{}).forEach(([k,v])=>{ agg[k]=(agg[k]||0)+v; });
      });
      const sorted = Object.entries(agg).sort((a,b)=>b[1]-a[1]).slice(0,5);
      const maxV = sorted[0]?.[1] || 1;
      const wn = t.wn || {};
      wkList.innerHTML = sorted.length
        ? sorted.map(([k,v])=>`
            <div class="weak-row">
              <span class="weak-op">${wn[k]||k}</span>
              <div class="weak-bar-wrap"><div class="weak-bar" style="width:${Math.round(v/maxV*100)}%"></div></div>
              <span class="weak-pct">${v}</span>
            </div>`).join('')
        : '<div style="text-align:center;color:var(--text2);padding:16px">' + (t.ins_no_weak||'🎉 Aucun point faible !') + '</div>';
    }
  },

  hide() {
    const panel = document.getElementById('parent-panel');
    if (panel) panel.style.display = 'none';
  },
};

const Tournament = {
  ROUNDS: 5,
  Q_PER_ROUND: 4,   // 5×4 = 20 questions
  roundScores: [],  // correct per round

  init() {
    this.roundScores = [];
    S.round  = 1;
    S.roundQ = 0;
    this.updateBar();
    const bar = document.getElementById('tournament-bar');
    if (bar) bar.classList.add('visible');
    // Reset all round indicators
    for (let r = 1; r <= 5; r++) {
      const el = document.getElementById('trn-r' + r);
      if (el) { el.className = 'trn-round' + (r === 1 ? ' active' : ''); }
    }
  },

  updateBar() {
    const t = Lang.t();
    const lbl = document.getElementById('trn-lbl');
    if (lbl) lbl.innerHTML = (t.trn_lbl || 'Tournoi · Round') +
      ' <span id="trn-round-num">' + S.round + '</span>/5';
    // Round dots
    for (let r = 1; r <= 5; r++) {
      const el = document.getElementById('trn-r' + r);
      if (!el) continue;
      el.className = 'trn-round' +
        (r < S.round  ? ' done'   :
         r === S.round ? ' active' : '');
    }
    // Question mini-dots (4 per round)
    for (let q = 0; q < 4; q++) {
      const el = document.getElementById('trn-q' + q);
      if (!el) continue;
      if (q < S.roundQ)  el.className = 'trn-q-dot ok';
      else if (q === S.roundQ) el.className = 'trn-q-dot cur';
      else el.className = 'trn-q-dot';
    }
  },

  markQ(isOk) {
    const el = document.getElementById('trn-q' + S.roundQ);
    if (el) el.className = 'trn-q-dot ' + (isOk ? 'ok' : 'err');
    S.roundQ++;
    // Mark next dot as current (if still in round)
    if (S.roundQ < 4) {
      const nx = document.getElementById('trn-q' + S.roundQ);
      if (nx) nx.className = 'trn-q-dot cur';
    }
  },

  isRoundEnd() {
    return S.roundQ >= this.Q_PER_ROUND;
  },

  showRoundEnd(roundCorrect) {
    this.roundScores.push(roundCorrect);
    const t = Lang.t();
    const isLast = S.round >= this.ROUNDS;

    // Stars for this round (0-4 correct)
    const stars = '⭐'.repeat(roundCorrect) + '☆'.repeat(4 - roundCorrect);
    const el = {
      lbl:  document.getElementById('re-lbl'),
      num:  document.getElementById('re-num'),
      stars:document.getElementById('re-stars'),
      score:document.getElementById('re-score'),
      btn:  document.getElementById('re-next-btn'),
      btnL: document.getElementById('re-next-lbl'),
    };
    if (el.lbl)   el.lbl.textContent  = t.trn_round_done || 'Round terminé !';
    if (el.num)   el.num.textContent  = 'R' + S.round;
    if (el.stars) el.stars.textContent = stars;
    if (el.score) el.score.textContent = roundCorrect + '/4 ' + (t.correct || 'correctes');
    if (el.btnL)  el.btnL.textContent  = isLast
      ? (t.trn_see_results || 'Voir les résultats 🏆')
      : (t.trn_next || 'Round suivant →');

    const overlay = document.getElementById('screen-round-end');
    if (overlay) overlay.classList.add('show');
    SFX.mid();
  },

  nextRound() {
    const overlay = document.getElementById('screen-round-end');
    if (overlay) overlay.classList.remove('show');

    if (S.round >= this.ROUNDS) {
      Game.end();
      return;
    }
    S.round++;
    S.roundQ = 0;
    // Reset q-dots for new round
    for (let q = 0; q < 4; q++) {
      const el = document.getElementById('trn-q' + q);
      if (el) el.className = 'trn-q-dot' + (q === 0 ? ' cur' : '');
    }
    this.updateBar();
    Game.nextQ();
  },

  hide() {
    const bar = document.getElementById('tournament-bar');
    if (bar) bar.classList.remove('visible');
    const overlay = document.getElementById('screen-round-end');
    if (overlay) overlay.classList.remove('show');
  },

  // Total score across all rounds for medal
  totalCorrect() {
    return this.roundScores.reduce((a,b) => a+b, 0);
  },
};

const savedLang = DB.get().cfg.lang;
if (savedLang) {
  // Langue déjà choisie → accueil direct
  Lang.code = savedLang;
  document.documentElement.setAttribute('lang', savedLang);
  document.documentElement.setAttribute('dir',  savedLang==='ar'?'rtl':'ltr');
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  if(DB.get().cfg.childName){
    document.getElementById('screen-home').classList.add('active');
    renderHome();
  } else { Welcome.show(); }
} else {
  // Premier lancement → écran splash langue
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-lang').classList.add('active');
}
