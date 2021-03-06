// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Арабски',
  'bg':'Български',
  'da':'Датски',
  'de':'Немски',
  'el':'Гръцки',
  'en':'Английски',
  'es':'Испански',
  'fr':'Френски',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Унгарски',
  'it':'Италиански',
  'ja':'Японски',
  'ko':'Корейски',
  'nl':'Холандски',
  'pl':'Полски',
  'pt':'Португалски',
  'pt-br':'Португалски (BR)',
  'ro':'Румънски',
  'ru':'Руски',
  'sv':'Шведски',
  'th':'Таи',
  'tr':'Турски',
  'uk':'Украински',
  'vi':'Виетнамски',
  'zh-hans':'Китайски (опростен)',
  'zh-hant':'Китайски (традиционен)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Начална страница"
s.moreResourcesOfThisType = "Още ресурси от този тип."
s.accessKeyN = 'Код за достъп n прескача към<a href="#internal-links" accesskey="n">навигацията във страницата</a>. <a href="#contentstart">Отиди в началото на съдържанието.</a>'
s.examplesInAnotherScript = "Този документ съдържа и примери написани на дург език/скрипт."
s.worldMap = "Карта на света"
s.searchI18nSite = "Търсене в сайта I18n" 
s.translationDisclaimer = 'Този документ е преведен. В случй на несъответствие или грешки, <a href="'+f.filename+'.en">най-новият Английси оригинал</a> трябва да се счита за официален. <a href="#copyright">Оригиналното авторско право</a> принадлежи на W3C, както е указано долу.'
s.translator = "Преводач:"
s.relatedLinks = "Линкове по темата"
s.articles = "Статии" // used in breadcrumbs, top right of page 
s.topicIndexText = "Topic index"
s.techIndexText = "Techniques index"
s.gotoW3cHome = "Начлана страница на W3C"
s.gotoI18nHome = "Нчална страница на операциите по интернационализация"
s.internationalizationTitle = "Интернационализация"
s.i18nActivityHomePage = "Нчална страница на операциите по интернационализация."
s.home = "Начало"
s.aboutI18nActivity = "Относно операциите по интернационализация."
s.about = "Информция"
s.groupsThatMakeUp = "Групи ангажирани с операциите по интернационализация."
s.groups = "Групи"
s.topicIndexForInformation = "Съдържание на информацията на тоизи сайт."
s.topics = "Съдържание"
s.taskBasedIndex = "Аьбучен указател на i18n технологиите."
s.techniques = "Технологии"
s.informationResources = "Информация за Интернационализационният сайт."
s.resources = "Ресурси"
s.newsFiltersAndFeeds = "Информация за филтрите за новини, RSS фийдове за W3C Интернационализация."
s.news = "Новини"
s.onThisPage = "на тази страница"
s.questionAlt = "Въпроси"
s.questionLink = "Въпрос"
s.question = "Въпрос"
s.backgroundAlt = "Основна информация"
s.backgroundLink = "Основа"
s.background = "Основа"
s.answer = "Отговор" // heading
s.answerAlt = "Отговор"
s.answerLink = "Отговор"
s.byTheWayAlt = "Допълнителна полезна информация"
s.byTheWayLink = "Междо другото"
s.byTheWay = "Междо другото"
s.furtherReadingAlt = "Странична информация"
s.furtherReadingLink = "Странична информация"
s.furtherReading = "Странична информация"
s.intendedAudience = "Аудитория:"
s.skipToAnswer = "[Отиди на отговора]"
s.tellUsWhatYouThink = "Изкажете своето мнение (на Английски)."
s.sendAComment = "Изпрати коментар"
s.subscribeToRSS = "Абонирай се за RSS фиид."
s.newResourcesAlt = "Нотифицира ви всеки път когато има нов публикация."
s.newResources = "Нови ресурси"
s.homePageNewsAlt = "Всички новини от началната страница."
s.homePageNews = "Новините от началната страница"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Автор:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Редактирано от:" // person's name appears after colon
s.translatedBy = "Преводач:"
s.validXHTML = "Валиден XHTML 1.0!"
s.validCSS = "Валиден CSS!"
s.codedInUtf8 = "Енкодинк UTF-8!"

s.translatedFromEnglishVer = "Превод от Английско съдържание от дата "+dt.enVersion+". Последна ревизия на преведената версия: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Напрвени са промени в <a href="'+f.filename+'.en">Английският оригинал</a> след последният превод на документа. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Ново"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Актуализирано" // same as New
s.translation_updated="Преводът е актуализиран на:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
