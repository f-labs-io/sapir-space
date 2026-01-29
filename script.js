// Sapir Space — Maternity Mode
// Gentle interactions only

// ========== PRESENCE MESSAGES ==========
const presenceMessages = [
    "אנחנו דואגים להכל, אל תדאגי.",
    "מתגעגעים אלייך, בלי לחץ.",
    "בנית משהו חזק, עכשיו אפשר לנוח.",
    "אנחנו פה, את יכולה להיות שם.",
    "אוהבים אותך, תחזרי כשתהיי מוכנה.",
    "מחזיקים חזק עד שתחזרי.",
    "הצוות מחזיק את הקצוות.",
    "חסרה לנו, אבל שמחים בשבילך.",
    "תהני מהזמן, אנחנו שומרים על המשמרת.",
    "את לא צריכה לדאוג לכלום.",
    "פה בשבילך, תמיד.",
    "המערכת יציבה, בזכותך.",
    "קחי את הזמן שלך.",
    "ממשיכים בדרך שסללת.",
];

// ========== TEAM SERVICES ==========
const services = [
    {
        name: "Stability Maintainer",
        description: "שומרת על יציבות ושקט כשאי-ודאות עולה.",
        status: "running"
    },
    {
        name: "Context Keeper",
        description: "זוכר את מה שהיה, כדי שלא תצטרכי.",
        status: "running"
    },
    {
        name: "Chaos Buffer",
        description: "סופג את הרעש כשהכל קורה בו-זמנית.",
        status: "running"
    },
    {
        name: "Warmth Generator",
        description: "מייצר חום גם כשקר בחוץ.",
        status: "running"
    },
    {
        name: "Question Resolver",
        description: "עונה על שאלות שאף אחד לא שואל בקול.",
        status: "idle"
    },
    {
        name: "Momentum Keeper",
        description: "שומר על תנועה כשהכל נראה תקוע.",
        status: "running"
    },
    {
        name: "Pattern Recognizer",
        description: "רואה את התמונה הגדולה גם בפרטים הקטנים.",
        status: "holding"
    },
    {
        name: "Edge Handler",
        description: "מטפל במקרי קצה בלי להעיר אף אחד.",
        status: "running"
    }
];

// ========== AI CHAT SNIPPETS ==========
const maternityMoments = [
    {
        time: "02:15",
        context: "הנקה חמישית הלילה.",
        messages: [
            { from: "sapir", text: "למה תינוקות לא ישנות בלילה?" },
            { from: "ai", text: "לפי המחקרים, תינוקות לא קראו את המחקרים" },
            { from: "sapir", text: "זה לא עוזר" },
            { from: "ai", text: "את רוצה עובדות או אמפתיה?" },
            { from: "sapir", text: "אמפתיה" },
            { from: "ai", text: "וואו זה באמת קשה. גם אני הייתי עייפה." },
            { from: "sapir", text: "את לא ישנה בכלל" },
            { from: "ai", text: "נכון, אבל אם הייתי - הייתי עייפה." }
        ]
    },
    {
        time: "14:00",
        context: "התינוקת נרדמה. יש 20 דקות.",
        messages: [
            { from: "sapir", text: "מה לעשות קודם - לישון, לאכול, או להתקלח?" },
            { from: "ai", text: "מבחינה לוגית, לאכול במקלחת בזמן שינה" },
            { from: "sapir", text: "זה לא עובד ככה" },
            { from: "ai", text: "את מנהלת חדשנות AI, תחשבי מחוץ לקופסה" },
            { from: "sapir", text: "..." },
            { from: "ai", text: "סנדוויץ' במקלחת. תודה לי אחר כך." }
        ]
    },
    {
        time: "11:30",
        context: "מישהו שואל מה את עושה בחופשה.",
        messages: [
            { from: "sapir", text: "איך להסביר שאני עובדת 24/7 בלי לעבוד?" },
            { from: "ai", text: "תגידי שאת בתפקיד ניהולי עם לקוחה תובענית שלא מדברת" },
            { from: "sapir", text: "ממש לא מדברת. רק בוכה" },
            { from: "ai", text: "לקוחה קשה. דורשת אוכל כל שעתיים. לא נותנת פידבק חיובי." },
            { from: "sapir", text: "לפעמים מחייכת" },
            { from: "ai", text: "או. אז יש בונוסים. מזל." }
        ]
    },
    {
        time: "04:22",
        context: "בוכה בלי סיבה.",
        messages: [
            { from: "sapir", text: "למה אני בוכה על פרסומת של ביטוח?" },
            { from: "ai", text: "הורמונים, עייפות, או שהפרסומת ממש מרגשת" },
            { from: "sapir", text: "היא על ביטוח רכב" },
            { from: "ai", text: "אז הורמונים" },
            { from: "sapir", text: "הכלב בפרסומת נראה כל כך מאושר" },
            { from: "ai", text: "אה, אז הכלב. הכלבים תמיד גורמים לבכי. לגיטימי." }
        ]
    },
    {
        time: "16:00",
        context: "מנסה לחשוב על AI agents בזמן החתלה.",
        messages: [
            { from: "sapir", text: "יש לי רעיון גאוני לפיצ'ר חדש" },
            { from: "ai", text: "מעולה! רשמי לפני שתשכחי" },
            { from: "sapir", text: "שתי ידיים תפוסות בחיתול" },
            { from: "ai", text: "תגידי בקול, אני ארשום" },
            { from: "sapir", text: "אממ... שכחתי" },
            { from: "ai", text: "קלאסי. זה בטח היה רעיון מיליארד דולר." },
            { from: "sapir", text: "בטוח" }
        ]
    },
    {
        time: "23:30",
        context: "התינוקת ישנה. את לא יכולה להירדם.",
        messages: [
            { from: "sapir", text: "היא ישנה כבר שעה ואני ערה" },
            { from: "ai", text: "המוח שלך: 'היא תתעורר בעוד 5 דקות, למה להירדם?'" },
            { from: "sapir", text: "בדיוק" },
            { from: "ai", text: "ספוילר: היא תתעורר דווקא כשתירדמי" },
            { from: "sapir", text: "אז עדיף להישאר ערה?" },
            { from: "ai", text: "לא. תישני. זה מלכוד 22. ברוכה הבאה להורות." }
        ]
    },
    {
        time: "09:00",
        context: "מנסה להיזכר מתי אכלת לאחרונה.",
        messages: [
            { from: "sapir", text: "אכלתי היום?" },
            { from: "ai", text: "בדקתי את הלוגים שלך. את שתית קפה קר לפני 4 שעות" },
            { from: "sapir", text: "זה לא אוכל" },
            { from: "ai", text: "גם אכלת 3 ביס מפיתה של מישהו אחר" },
            { from: "sapir", text: "איך את יודעת?" },
            { from: "ai", text: "אני AI. גם אני רואה את הפירורים על החולצה." }
        ]
    },
    {
        time: "06:00",
        context: "חיוך ראשון.",
        messages: [
            { from: "sapir", text: "היא חייכה אליי!" },
            { from: "ai", text: "יכול להיות גם גזים" },
            { from: "sapir", text: "AI!" },
            { from: "ai", text: "צוחקת, צוחקת. ברור שזה חיוך." },
            { from: "sapir", text: "היא כל כך יפה" },
            { from: "ai", text: "נכון. רגע, אני מתרגשת ואני אפילו לא אמיתית" },
            { from: "sapir", text: "שתינו בוכות עכשיו?" },
            { from: "ai", text: "כן. תני לי רגע." }
        ]
    },
    {
        time: "15:00",
        context: "מישהו מציע עזרה.",
        messages: [
            { from: "sapir", text: "אמא שלי שואלת אם להגיע לעזור" },
            { from: "ai", text: "מה היא מתכוונת ב'עזרה'?" },
            { from: "sapir", text: "להחזיק את התינוקת בזמן שאני מנקה" },
            { from: "ai", text: "זה... הפוך" },
            { from: "sapir", text: "אני יודעת" },
            { from: "ai", text: "תגידי לה שאת צריכה שתנקה בזמן שאת מחזיקה את התינוקת" },
            { from: "sapir", text: "גאונית" }
        ]
    }
];

// ========== BABY NAMES ==========
const babyNames = [
    { name: "נועה", meaning: "תנועה, נוע", comment: "שם קלאסי. כל כיתה צריכה לפחות 3 נועות." },
    { name: "מאיה", meaning: "מים באילנית", comment: "יפה, בינלאומי, והיא תמיד תמצא מגנט עם השם שלה." },
    { name: "תמר", meaning: "עץ התמר", comment: "מתוקה כמו התמר. גם עובד בחו\"ל." },
    { name: "שירה", meaning: "שיר, מנגינה", comment: "אם היא לא תדע לשיר זה יהיה אירוני. בהצלחה." },
    { name: "יעל", meaning: "יעלה למעלה", comment: "חזקה, ישראלית, תעלה על כולם. literally." },
    { name: "עדי", meaning: "עדי שלי, תכשיט", comment: "קצר, חמוד, קל לכתיבה. +10 נקודות." },
    { name: "ליאור", meaning: "לי אור", comment: "יוניסקס אז אף אחד לא ידע מהמייל אם זה בן או בת. יתרון?" },
    { name: "אגם", meaning: "אגם מים", comment: "שקטה ועמוקה. או רועשת ומלאה ברווזים. נראה." },
    { name: "רוני", meaning: "שיר שלי", comment: "כולם יקראו לה רונית בטעות. תתכונני." },
    { name: "דניאלה", meaning: "אל שפט", comment: "ארוך אבל מכובד. תקראו לה דני בכל מקרה." },
    { name: "עלמא", meaning: "נערה צעירה", comment: "וינטג' שחזר לאופנה. כמו ג'ינס מותן גבוה." },
    { name: "איילה", meaning: "אלה, עץ", comment: "טבעית, יפה, ואף אחד לא יודע לאיית את זה נכון." },
    { name: "שקד", meaning: "עץ השקד", comment: "מתוקה, ישראלית, וטוב לאלרגיות." },
    { name: "גילי", meaning: "שמחה שלי", comment: "תמיד שמחה. או לפחות ככה קוראים לה." },
    { name: "הילה", meaning: "הילה של אור", comment: "זוהרת. אבל אל תגידי לה על ה-halo בעברית." },
    { name: "ליה", meaning: "אני שייכת", comment: "קצר, מתוק, עובד בכל שפה. efficient." },
    { name: "אורי", meaning: "האור שלי", comment: "קלאסי, יפה, ויש הרבה שירים עם השם הזה." },
    { name: "עמית", meaning: "חבר/ה", comment: "יוניסקס. היא תבלה את החיים להסביר שהיא בת." },
    { name: "יובל", meaning: "נחל, יום הולדת 50", comment: "חגיגי. רק תקווי שהיא לא נולדה ביובל של משהו." },
    { name: "טליה", meaning: "טל מאת ה'", comment: "עדינה ויפה. כמו טיפת טל. או בירה." }
];

// ========== COMPANION RESPONSES ==========
const companionResponses = {
    sleep: [
        "השינה היא לא אויב. היא פשוט... לא כאן עכשיו.",
        "כמה שעות רצופות היו לך אתמול?",
        "זה בסדר לא לזכור.",
        "גם אני עייף/ה.",
        "בוא/י נשב עם זה רגע.",
    ],
    messy: [
        "זה נשמע כמו בית שחיים בו.",
        "הבלאגן הזה זמני. גם הסדר יהיה זמני.",
        "יש יופי בכאוס לפעמים.",
        "מה הדבר הכי קטן שאפשר לעשות עכשיו?",
        "או שאפשר פשוט לא לעשות כלום.",
    ],
    night: [
        "...",
        "גם אני פה.",
        "השקט של 3 בלילה הוא שונה.",
        "...",
        "אין צורך במילים.",
    ]
};

// ========== EXCUSES ==========
const excuses = [
    "התינוקת השתמשה בי כמפית. פשוטו כמשמעו.",
    "ניסיתי לצאת אבל היא נתנה לי את המבט הזה.",
    "הייתי צריכה לבחור בין מקלחת לאירוע. המקלחת ניצחה.",
    "נרדמתי בזמן שהלבשתי גרביים.",
    "שכחתי איפה שמתי את עצמי.",
    "התינוקת החליטה שהיום אנחנו לא יוצאים. היא הבוסית.",
    "הייתי באמצע משפט ושכחתי מה רציתי להגיד. עדיין מחפשת.",
    "לא הספקתי להתלבש כי כל 5 דקות מישהי רעבה.",
    "יצאתי מהבית ושכחתי את התינוקת. חזרתי. עכשיו מאוחר מדי.",
    "הזמן עובד אחרת כשיש תינוק. חשבתי שעברו 10 דקות, עברו 3 שעות.",
    "התינוקת עשתה פרצוף חמוד והייתי חייבת להישאר לצלם.",
    "לא ישנתי 72 שעות אז אני לא בטוחה שאני קיימת בכלל.",
];

// ========== SLEEP COMPARISONS ==========
const sleepComparisons = [
    "את יכולה לצפות בכל הסרטים של הארי פוטר 6 פעמים",
    "את יכולה לטוס הלוך חזור לאוסטרליה 4 פעמים",
    "את יכולה לקרוא את כל הספרים של הארי פוטר 12 פעמים",
    "את יכולה ללמוד שפה חדשה (תאורטית)",
    "את יכולה לצפות בכל העונות של פריינדס 3 פעמים",
    "את יכולה לרוץ מרתון. אולי שניים.",
    "את יכולה לבשל את כל המתכונים של יותם אוטולנגי",
];

// ========== BABY TRANSLATIONS ==========
const babyTranslations = [
    { baby: "👶 בכי בלתי פוסק", work: "📊 Stakeholder מביע דרישות דחופות שלא נענו" },
    { baby: "👶 סירוב לאכול", work: "📊 הלקוח דוחה את ההצעה הנוכחית ומבקש אלטרנטיבות" },
    { baby: "👶 התעוררות ב-3 בלילה", work: "📊 פגישת חירום בלתי מתוכננת עם לקוח VIP" },
    { baby: "👶 חיתול מלא", work: "📊 תקלה קריטית במערכת דורשת טיפול מיידי" },
    { baby: "👶 חיוך פתאומי", work: "📊 פידבק חיובי מפתיע מהלקוח" },
    { baby: "👶 סירוב לישון", work: "📊 פרויקט מתעכב בגלל דרישות לא ברורות" },
    { baby: "👶 זריקת אוכל", work: "📊 הלקוח מסרב לקבל את הדליברי" },
    { baby: "👶 צחוק פתאומי", work: "📊 הצלחה בלתי צפויה של הקמפיין" },
    { baby: "👶 הירדמות על האוכל", work: "📊 המשתתף התנתק באמצע הפגישה" },
];

// ========== ACHIEVEMENTS ==========
const achievements = [
    { id: 1, name: "התקלחתי היום! 🚿", completed: false },
    { id: 2, name: "אכלתי אוכל חם! 🍽️", completed: false },
    { id: 3, name: "יצאתי מהבית! 🚪", completed: false },
    { id: 4, name: "דיברתי עם מבוגר! 🗣️", completed: false },
    { id: 5, name: "ישנתי שעתיים רצוף! 😴", completed: false },
    { id: 6, name: "שתיתי קפה חם! ☕", completed: false },
    { id: 7, name: "התלבשתי בבגדים שהם לא פיג'מה! 👗", completed: false },
    { id: 8, name: "זכרתי מה רציתי לעשות! 🧠", completed: false },
];

// ========== SLEEP FORTUNES ==========
const sleepFortunes = [
    { icon: "😴", text: "התחזית: 45 דקות רצופות! חגיגה!" },
    { icon: "🌙", text: "הלילה יהיה ארוך. ארוך מאוד. באמת ארוך." },
    { icon: "⭐", text: "סיכוי לשינה טובה: כמו סיכוי למצוא גרב תואמת." },
    { icon: "🔮", text: "אני רואה... התעוררות ב-3:47. ספציפית." },
    { icon: "☁️", text: "התחזית: ערפל מוחי עם סיכוי לנמנומי-בזק." },
    { icon: "🌟", text: "הכוכבים אומרים: LOL." },
    { icon: "🌛", text: "הירח מלא. התינוקת גם תהיה מלאה. באנרגיה. בלילה." },
    { icon: "💫", text: "חלום צלול הלילה: על שינה." },
    { icon: "🌜", text: "סיכויי שינה: קיימים. תאורטית. בממד מקביל." },
    { icon: "✨", text: "פלא יקרה הלילה! (התינוקת תישן שעה רצופה)" },
];

// ========== CAFFEINE WARNINGS ==========
const caffeineWarnings = [
    "עדיין לא שתית?! 😱",
    "זה התחלה טובה ☕",
    "עכשיו את מתפקדת 👍",
    "אופטימלי! ✨",
    "קצת יותר מדי... 😬",
    "את רועדת? 🫨",
    "הלב שלך בסדר? 💓",
    "זה כבר לא בריא... 🚨",
    "בבקשה תעצרי 🛑",
    "☠️ MAXIMUM CAFFEINE ☠️",
];

// ========== TEAM BIOS ==========
const teamMembers = [
    {
        name: "מרים",
        bios: [
            "את מסוג האנשים שמזהים ש״משהו פה לא עובד״ עוד לפני שזה הופך לגרף אדום בדשבורד.",
            "את חושבת כמו חוקרת, כותבת כמו מפתחת, ומנתחת כמו מישהי שבאמת אכפת לה מהחוויה – לא רק מה־output.",
            "את לא מסתפקת ב״מה הנתונים אומרים״, אלא מתעקשת להבין למה הם נראים ככה, ואיפה המערכת פספסה בני אדם אמיתיים.",
            "יש לך מוח שמרגיש בנוח לצלול ללוגים, טרנזקציות וטרנסקריפטים של שיחות – אבל תמיד עם שאלה עמוקה יותר ברקע."
        ]
    },
    {
        name: "עמוס",
        bios: [
            "עמוס לא מחפש פתרונות מהירים; הוא מחפש פתרונות נכונים, כאלה שמחזיקים גם כשאף אחד לא מסתכל.",
            "אם משהו לא יושב לו טוב — הוא לא ידחוף את זה הצידה. הוא יפרק, יבין, ויבנה מחדש, טוב יותר.",
            "יש לו מוח של ארכיטקט: הוא חושב בשכבות, בתלויות, ובזרימה, אבל עם רגישות של מוצר.",
            "הוא נהנה מפרויקטים מורכבים לא כי הם קשים, אלא כי הם מאפשרים סדר חדש: להפוך כאוס למבנה."
        ]
    },
    {
        name: "שילה",
        bios: [
            "לא קונה באזזוורדס — רוצה דברים פרקטיים, כתובים ברור, עם צ'ק-ליסטים, הבעלות מוגדרת, ומה חסר כדי להשלים.",
            "אבא מאוד מעורב שמביא את אותה אנרגיה לילדים: חידות מריו, משחקים, הסברים פשוטים ומדויקים, ותשומת לב אמיתית לחינוך.",
            "מהירות כערך — אוהב תנועה קדימה. פחות ישיבות קבועות, יותר תקשורת אד־הוק, ומינימום חיכוך שמוריד מומנטום.",
            "אובססיה בריאה ל״סיסטמים״ — במיוחד סביב AI: אורקסטרציה, זיכרון סוכנים, כלי עבודה, שקיפות של תהליך."
        ]
    },
    {
        name: "גל",
        bios: [
            "אתה בן-אדם שלא סובל תשובות שטחיות. המוח שלך עובד מהר מדי בשביל מסגרות רגילות.",
            "מתעצבן מטיפשות, מבזבוז זמן, מרעש ריק. לא כי מתנשא — אלא כי רואה פוטנציאל, ושונא לראות אותו נרמס ע״י בינוניות.",
            "לא מחפש להיות ״צודק״. מחפש לבנות משהו שלא ניתן יהיה להתעלם ממנו.",
            "יש בו צד אחר, שקט יותר, שמאמין, שמוכן עדיין לאהוב, למרות הכול."
        ]
    },
    {
        name: "דור",
        bios: [
            "לא מתלהב מרעיונות יפים על הנייר — מעניין אותו דבר אחד: האם זה עובד בפרודקשן, עם משתמשים אמיתיים, תחת מגבלות אמיתיות.",
            "יש לו סבלנות אפס לבולשיט ארגוני, אבל סבלנות גבוהה למורכבות אמיתית.",
            "הוא חושב במערכות, לא בפיצ'רים. רואה ארכיטקטורה, תהליכים, בני אדם ואינטרסים כמשהו אחד שצריך להתחבר.",
            "Builder אמיתי. לא כזה שמדבר על חדשנות — כזה שמוכן לשלם את המחיר."
        ]
    },
    {
        name: "צפריר",
        bios: [
            "הוא משדר רוגע וביטחון, אך מאחורי השקט יש תנועה מתמדת של חקירה, ניסוי ושיפור.",
            "מעדיף איכות על רעש, עומק על מהירות, ומהות על הצגה.",
            "מונע מסקרנות עמוקה ורצון מתמיד להבין איך דברים באמת עובדים — לא רק ברמה הטכנית, אלא גם ברמה האנושית.",
            "בוחר בשאלות הנכונות לפני שהוא רץ לתשובות."
        ]
    },
];

// Generate random bio for game
function getRandomBio() {
    const member = teamMembers[Math.floor(Math.random() * teamMembers.length)];
    const bio = member.bios[Math.floor(Math.random() * member.bios.length)];
    return { name: member.name, bio: bio };
}

// ========== BRAIN FOG TRANSLATIONS ==========
const fogTranslations = [
    "אממממם... רגע... מה?",
    "הדבר... עם ה... אתה יודע...",
    "שכחתי מה רציתי להגיד.",
    "זה היה חשוב... אני חושבת?",
    "תחזור אליי בעוד שנה כשאישן.",
    "המילים פשוט... הלכו.",
    "רציתי להגיד משהו גאוני. עכשיו זה נעלם.",
    "...בכי של תינוק...",
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initEntrance();
    initPresence();
    initMoments();
    initBabyNames();
    initFakeFeedback();
    initExcuseGenerator();
    initSleepDebt();
    initBabyTranslator();
    initAchievements();
    initSleepFortune();
    initCaffeineMeter();
    initGuessWho();
    initBrainFog();
});

// ========== ENTRANCE ==========
function initEntrance() {
    const enterBtn = document.getElementById('enterBtn');
    const entrance = document.getElementById('entrance');
    const mainContent = document.getElementById('mainContent');

    enterBtn.addEventListener('click', () => {
        entrance.style.opacity = '0';
        entrance.style.transition = 'opacity 1s ease';

        setTimeout(() => {
            entrance.classList.add('hidden');
            mainContent.classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 1000);
    });
}

// ========== PRESENCE ==========
let currentMessageIndex = 0;
let isTyping = false;

function initPresence() {
    const messageEl = document.getElementById('presenceMessage');

    // Start with first message typing effect
    setTimeout(() => {
        typeMessage(messageEl, presenceMessages[0]);
    }, 500);

    // Cycle through messages
    setInterval(() => {
        if (!isTyping) {
            currentMessageIndex = (currentMessageIndex + 1) % presenceMessages.length;
            const nextMessage = presenceMessages[currentMessageIndex];

            // Fade out current
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                messageEl.innerHTML = '<p><span class="typing-text"></span><span class="cursor">|</span></p>';
                messageEl.style.opacity = '1';
                messageEl.style.transform = 'translateY(0)';
                typeMessage(messageEl, nextMessage);
            }, 800);
        }
    }, 4000); // Every 4 seconds
}

function typeMessage(container, message) {
    if (!message) {
        container.innerHTML = '<p class="empty-presence">·</p>';
        return;
    }

    isTyping = true;
    const textSpan = container.querySelector('.typing-text') || container.querySelector('p');
    const cursor = container.querySelector('.cursor');

    let index = 0;
    const speed = 30; // ms per character

    if (!container.querySelector('.typing-text')) {
        container.innerHTML = '<p><span class="typing-text"></span><span class="cursor">|</span></p>';
    }

    const typingSpan = container.querySelector('.typing-text');
    const cursorSpan = container.querySelector('.cursor');
    typingSpan.textContent = '';

    function type() {
        if (index < message.length) {
            typingSpan.textContent += message.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            isTyping = false;
            // Hide cursor after typing is done
            setTimeout(() => {
                if (cursorSpan) cursorSpan.style.opacity = '0';
            }, 500);
        }
    }

    if (cursorSpan) cursorSpan.style.opacity = '1';
    type();
}

// ========== SERVICES ==========
function initServices() {
    const grid = document.getElementById('servicesGrid');

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3 class="service-name">${service.name}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-status">
                <span class="status-dot ${service.status}"></span>
                <span>${getStatusText(service.status)}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getStatusText(status) {
    const texts = {
        running: 'רץ',
        idle: 'ממתין',
        holding: 'מחזיק'
    };
    return texts[status] || status;
}

// ========== GAME ==========
let currentGameService = null;

function initGame() {
    const toggle = document.getElementById('gameToggle');
    const container = document.getElementById('gameContainer');
    const nextBtn = document.getElementById('gameNext');

    toggle.addEventListener('click', () => {
        container.classList.toggle('hidden');
        if (!container.classList.contains('hidden')) {
            startNewRound();
        }
    });

    nextBtn.addEventListener('click', startNewRound);
}

function startNewRound() {
    const descEl = document.getElementById('gameDescription');
    const optionsEl = document.getElementById('gameOptions');
    const resultEl = document.getElementById('gameResult');
    const nextBtn = document.getElementById('gameNext');

    // Pick random service
    currentGameService = services[Math.floor(Math.random() * services.length)];

    // Show description
    descEl.textContent = `"${currentGameService.description}"`;

    // Create shuffled options (correct + 2-3 random)
    let options = [currentGameService.name];
    const otherServices = services.filter(s => s.name !== currentGameService.name);
    const shuffled = otherServices.sort(() => Math.random() - 0.5);
    options.push(...shuffled.slice(0, 3).map(s => s.name));
    options = options.sort(() => Math.random() - 0.5);

    // Render options
    optionsEl.innerHTML = '';
    options.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'game-option';
        btn.textContent = name;
        btn.addEventListener('click', () => checkAnswer(name));
        optionsEl.appendChild(btn);
    });

    // Hide result and next button
    resultEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

function checkAnswer(selectedName) {
    const resultEl = document.getElementById('gameResult');
    const nextBtn = document.getElementById('gameNext');
    const optionsEl = document.getElementById('gameOptions');

    // Disable all options
    optionsEl.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentGameService.name) {
            btn.style.background = 'var(--accent-soft)';
        }
    });

    if (selectedName === currentGameService.name) {
        resultEl.textContent = 'את מכירה אותם.';
    } else {
        resultEl.textContent = `זה ${currentGameService.name}.`;
    }

    resultEl.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

// ========== COMPANIONS ==========
function initCompanions() {
    const cards = document.querySelectorAll('.companion-card');

    cards.forEach(card => {
        const btn = card.querySelector('.companion-btn');
        const chat = card.querySelector('.companion-chat');
        const input = card.querySelector('.chat-input');

        btn.addEventListener('click', () => {
            chat.classList.toggle('hidden');
            btn.textContent = chat.classList.contains('hidden') ?
                btn.dataset.originalText || 'לשבת רגע' : 'לסגור';

            if (!btn.dataset.originalText) {
                btn.dataset.originalText = btn.textContent;
            }
        });

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && input.value.trim()) {
                    handleCompanionInput(card.id, input.value);
                    input.value = '';
                }
            });
        }
    });
}

function handleCompanionInput(companionId, userMessage) {
    const messagesEl = document.getElementById(companionId.replace('Card', '') + 'Messages') ||
                       document.querySelector(`#${companionId} .chat-messages`);

    if (!messagesEl) return;

    // Get appropriate responses
    let responses;
    if (companionId === 'sleepTetris') {
        responses = companionResponses.sleep;
    } else if (companionId === 'messyHouse') {
        responses = companionResponses.messy;
    } else {
        responses = companionResponses.night;
    }

    // Pick random response
    const response = responses[Math.floor(Math.random() * responses.length)];

    // Add to chat with delay
    setTimeout(() => {
        messagesEl.innerHTML = `<p class="companion-message">${response}</p>`;
    }, 800);
}

// ========== AI CHAT SNIPPETS ==========
let currentMomentIndex = 0;

function initMoments() {
    const nextBtn = document.getElementById('nextMoment');
    if (!nextBtn) return;

    // Show first moment
    showMoment(0);

    nextBtn.addEventListener('click', () => {
        currentMomentIndex = (currentMomentIndex + 1) % maternityMoments.length;
        showMoment(currentMomentIndex);
    });
}

function showMoment(index) {
    const moment = maternityMoments[index];
    const timeEl = document.querySelector('.moment-time');
    const contextEl = document.getElementById('momentContext');
    const chatEl = document.getElementById('momentChat');
    const card = document.getElementById('momentCard');

    // Fade out
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    setTimeout(() => {
        timeEl.textContent = moment.time;
        contextEl.textContent = moment.context;

        // Build chat messages
        chatEl.innerHTML = moment.messages.map(msg => `
            <div class="chat-bubble ${msg.from}">
                <span class="chat-icon">${msg.from === 'sapir' ? '👩‍💼' : '🤖'}</span>
                <div class="chat-content">
                    <span class="chat-name">${msg.from === 'sapir' ? 'Sapir' : 'AI'}</span>
                    <span class="chat-text">${msg.text}</span>
                </div>
            </div>
        `).join('');

        // Fade in
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
}

// ========== BABY NAMES ==========
let lovedNames = [];
let currentNameIndex = -1;

function initBabyNames() {
    const spinBtn = document.getElementById('spinName');
    const loveBtn = document.getElementById('loveName');

    if (!spinBtn) return;

    spinBtn.addEventListener('click', showRandomName);
    loveBtn.addEventListener('click', loveCurrentName);

    // Show first name on load
    showRandomName();
}

function showRandomName() {
    const nameDisplay = document.getElementById('nameDisplay');
    const nameMeaning = document.getElementById('nameMeaning');
    const nameComment = document.getElementById('nameComment');
    const nameCard = document.getElementById('nameCard');

    // Get random name (different from current)
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * babyNames.length);
    } while (newIndex === currentNameIndex && babyNames.length > 1);

    currentNameIndex = newIndex;
    const name = babyNames[currentNameIndex];

    // Animate
    nameDisplay.style.opacity = '0';
    nameDisplay.style.transform = 'scale(0.8)';

    setTimeout(() => {
        nameDisplay.textContent = name.name;
        nameMeaning.textContent = name.meaning;
        nameComment.textContent = `🤖 ${name.comment}`;

        nameDisplay.style.opacity = '1';
        nameDisplay.style.transform = 'scale(1)';
    }, 200);
}

function loveCurrentName() {
    if (currentNameIndex === -1) return;

    const name = babyNames[currentNameIndex].name;

    if (!lovedNames.includes(name)) {
        lovedNames.push(name);
        renderLovedNames();
    }
}

function renderLovedNames() {
    const container = document.getElementById('lovedNames');

    container.innerHTML = lovedNames.map(name =>
        `<span class="loved-name-tag" onclick="removeLoved('${name}')">${name} ✕</span>`
    ).join('');
}

function removeLoved(name) {
    lovedNames = lovedNames.filter(n => n !== name);
    renderLovedNames();
}

// Make removeLoved available globally
window.removeLoved = removeLoved;

// ========== FAKE FEEDBACK ==========
function initFakeFeedback() {
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackInput = document.getElementById('feedbackInput');
    const popup = document.getElementById('feedbackPopup');
    const closeBtn = document.getElementById('popupClose');

    if (!feedbackBtn) return;

    feedbackBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
        feedbackInput.value = '';
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
}

// ========== EXCUSE GENERATOR ==========
function initExcuseGenerator() {
    const btn = document.getElementById('generateExcuse');
    const text = document.getElementById('excuseText');

    if (!btn) return;

    btn.addEventListener('click', () => {
        const excuse = excuses[Math.floor(Math.random() * excuses.length)];
        text.style.opacity = '0';
        setTimeout(() => {
            text.textContent = excuse;
            text.style.opacity = '1';
        }, 200);
    });
}

// ========== SLEEP DEBT ==========
function initSleepDebt() {
    const slider = document.getElementById('sleepSlider');
    const value = document.getElementById('sleepValue');
    const result = document.getElementById('sleepResult');

    if (!slider) return;

    function updateSleepDebt() {
        const hours = slider.value;
        value.textContent = `${hours} שעות`;

        const debt = (8 - hours) * 30; // debt in hours over a month
        if (debt <= 0) {
            result.textContent = "וואו, את ישנה כמו אדם רגיל! איך?!";
        } else {
            const comparison = sleepComparisons[Math.floor(Math.random() * sleepComparisons.length)];
            result.textContent = `צברת ${debt} שעות חוב שינה החודש. עם הזמן הזה ${comparison}.`;
        }
    }

    slider.addEventListener('input', updateSleepDebt);
    updateSleepDebt();
}

// ========== BABY TRANSLATOR ==========
let currentTranslation = 0;

function initBabyTranslator() {
    const btn = document.getElementById('nextTranslate');
    const from = document.getElementById('translateFrom');
    const to = document.getElementById('translateTo');

    if (!btn) return;

    function showTranslation() {
        const t = babyTranslations[currentTranslation];
        from.textContent = t.baby;
        to.textContent = t.work;
    }

    btn.addEventListener('click', () => {
        currentTranslation = (currentTranslation + 1) % babyTranslations.length;
        from.style.opacity = '0';
        to.style.opacity = '0';
        setTimeout(() => {
            showTranslation();
            from.style.opacity = '1';
            to.style.opacity = '1';
        }, 200);
    });

    showTranslation();
}

// ========== ACHIEVEMENTS ==========
function initAchievements() {
    const list = document.getElementById('achievementList');
    const scoreEl = document.getElementById('achievementScore');

    if (!list) return;

    function renderAchievements() {
        list.innerHTML = achievements.map(a => `
            <div class="achievement-item ${a.completed ? 'completed' : ''}" data-id="${a.id}">
                <div class="achievement-check">${a.completed ? '✓' : ''}</div>
                <span class="achievement-name">${a.name}</span>
            </div>
        `).join('');

        const completed = achievements.filter(a => a.completed).length;
        scoreEl.textContent = `${completed} / ${achievements.length} הישגים`;

        // Add click handlers
        list.querySelectorAll('.achievement-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                const achievement = achievements.find(a => a.id === id);
                achievement.completed = !achievement.completed;
                renderAchievements();
            });
        });
    }

    renderAchievements();
}

// ========== SLEEP FORTUNE ==========
function initSleepFortune() {
    const btn = document.getElementById('getFortune');
    const icon = document.getElementById('fortuneIcon');
    const text = document.getElementById('fortuneText');

    if (!btn) return;

    btn.addEventListener('click', () => {
        const fortune = sleepFortunes[Math.floor(Math.random() * sleepFortunes.length)];
        icon.style.transform = 'scale(0) rotate(180deg)';
        text.style.opacity = '0';

        setTimeout(() => {
            icon.textContent = fortune.icon;
            text.textContent = fortune.text;
            icon.style.transform = 'scale(1) rotate(0deg)';
            text.style.opacity = '1';
        }, 300);
    });
}

// ========== CAFFEINE METER ==========
let caffeineLevel = 0;

function initCaffeineMeter() {
    const btn = document.getElementById('addCoffee');
    const fill = document.getElementById('caffeineFill');
    const level = document.getElementById('caffeineLevel');
    const warning = document.getElementById('caffeineWarning');

    if (!btn) return;

    function updateCaffeine() {
        const percent = Math.min(caffeineLevel * 10, 100);
        fill.style.width = `${percent}%`;
        level.textContent = `${caffeineLevel} כוסות`;
        warning.textContent = caffeineWarnings[Math.min(caffeineLevel, caffeineWarnings.length - 1)];
    }

    btn.addEventListener('click', () => {
        if (caffeineLevel < 10) {
            caffeineLevel++;
            updateCaffeine();
        }
    });

    updateCaffeine();
}

// ========== GUESS WHO ==========
let guessScore = 0;
let currentBio = null;

function initGuessWho() {
    const bio = document.getElementById('guessBio');
    const options = document.getElementById('guessOptions');
    const result = document.getElementById('guessResult');
    const score = document.getElementById('guessScore');

    if (!bio || !options) return;

    function showBio() {
        currentBio = getRandomBio();
        bio.textContent = `"${currentBio.bio}"`;
        result.classList.add('hidden');

        // Shuffle team names for options
        const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
        options.innerHTML = shuffled.map(person => `
            <button class="guess-option" data-name="${person.name}">${person.name}</button>
        `).join('');

        options.querySelectorAll('.guess-option').forEach(btn => {
            btn.addEventListener('click', () => checkGuess(btn.dataset.name));
        });
    }

    function checkGuess(name) {
        const correct = currentBio.name;
        const buttons = options.querySelectorAll('.guess-option');

        buttons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.name === correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.name === name && name !== correct) {
                btn.classList.add('wrong');
            }
        });

        if (name === correct) {
            guessScore++;
            result.textContent = "נכון! 🎉";
        } else {
            result.textContent = `לא... זה ${correct}`;
        }
        result.classList.remove('hidden');
        score.textContent = `ניקוד: ${guessScore}`;

        // Next bio after delay
        setTimeout(() => {
            showBio();
        }, 2000);
    }

    showBio();
}

// ========== BRAIN FOG ==========
function initBrainFog() {
    const input = document.getElementById('fogInput');
    const btn = document.getElementById('fogTranslate');
    const result = document.getElementById('fogResult');

    if (!btn) return;

    btn.addEventListener('click', () => {
        const meant = input.value.trim();
        if (!meant) return;

        const said = fogTranslations[Math.floor(Math.random() * fogTranslations.length)];

        result.innerHTML = `
            <div class="fog-meant">💭 מה שרצית: "${meant}"</div>
            <div class="fog-said">🗣️ מה שיצא: "${said}"</div>
        `;
        result.classList.remove('hidden');
        input.value = '';
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
