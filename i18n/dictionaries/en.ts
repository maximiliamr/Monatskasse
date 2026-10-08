// Alle Texte der Seite auf Englisch. Felder vom Typ Html dürfen einfaches Markup
// enthalten (<em>, <strong>, <a>, <p>, <ul>/<li>), alles andere ist reiner Text.
import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "My Budget – Monthly Budget Planner for iPhone and iPad",
    description: "How much is left this month? My Budget is the budget planner for iPhone and iPad: log expenses in seconds, track recurring bills automatically and keep your budget in view – no account, no ads, no tracking.",
    ogTitle: "My Budget – Monthly Budget Planner for iPhone and iPad",
    ogDescription: "Budget, expenses and recurring bills at a glance. No account, no ads, no tracking.",
    ogImageAlt: "My Budget on iPhone: overview and insights for a month",
  },
  nav: {
    label: "Main navigation",
    features: "Features",
    privacy: "Privacy",
    help: "Help",
  },
  ids: {
    features: "features",
    devices: "devices",
    privacy: "privacy",
    applePay: "apple-pay",
    help: "help",
    contact: "contact",
  },
  language: {
    menu: "Language",
    button: "Choose language",
    hint: {
      text: "This page is also available in English.",
      action: "Read in English",
      close: "Dismiss",
    },
  },
  hero: {
    eyebrow: "Budget planner for iPhone and iPad",
    title: "How much is left this month?",
    lead: "My Budget shows you at a glance what you’ve spent and what’s left until the end of the month. Log expenses in seconds, track recurring bills automatically and keep an eye on your budget.",
    pills: ["No account", "No ads", "No tracking"],
    ctaFeatures: "See Features",
    ctaHelp: "Help & Contact",
    phoneAlt: "The overview in My Budget: in October, $2,096.83 of a $5,000 budget is left, 58 percent used.",
    widgetAlt: "Small widget on the Home Screen: 58% of the budget used, “Lasts until month-end” below it, and one payment to review.",
  },
  features: {
    title: "Simple every day. Clear at the end of the month.",
    intro: "You log what you spend. My Budget keeps count and always shows you where you stand.",
    rows: [
      {
        kicker: "Log",
        title: "Logged in seconds",
        text: "Amount, title, done. My Budget suggests frequent entries as you type, including category and payment method.",
        checks: [
          "Snap a photo of a receipt: the total, date and items are recognized on your device – with an arithmetic check, sales tax included, so the amounts add up",
          "Shared a bill? Divide it by the number of people or enter your share – even afterward, for example for an Apple Pay payment",
          "Paid abroad? Log the amount in the local currency – My Budget converts it at the European Central Bank’s daily rate and keeps what you paid",
          "Already logged? If a scanned receipt belongs to a recurring bill or an Apple Pay payment that’s already there, My Budget offers to attach it there – instead of counting it twice",
          "Business trip? Collect receipts and hand them to accounting as one report with a tap – a PDF with every receipt, a table and the original files. Recurring bills can be business expenses too, like a software subscription for work",
          "Also with Siri, with Shortcuts or with the button in Control Center",
        ],
        alt: "Check Receipt: a $18.76 receipt is recognized, the four items add up exactly to the total, and Groceries is suggested as the category.",
      },
      {
        kicker: "Automatic",
        title: "Apple Pay logs itself",
        text: "Set up an automation in the Shortcuts app once – one for all your cards. After that, Apple Pay payments land in My Budget on their own, with amount, merchant and card.",
        checks: [
          "The app walks you through the setup step by step – <a href=\"#apple-pay\">the guide is also right here</a>",
          "Every card gets its payment method: assign it once, and it’s always filed correctly",
          "To be safe, payments go to “To Review” first, because iOS also reports declined payments",
        ],
        alt: "To Review: four Apple Pay payments – Bakery, Farmers Market, Corner Café and Gas Station – waiting to be confirmed with a tap.",
      },
      {
        kicker: "Insights",
        title: "See where your money goes",
        text: "How does this month compare with last month? Where will you end up if things keep going like this? And where does the money actually go? My Budget shows you – tap, or touch and slide.",
        checks: [
          "The month day by day next to last month, with a forecast to the end of the month",
          "The history over three, six or twelve months, split into recurring bills and everyday spending",
          "By category, payment method or merchant – each with its own page and every expense behind it",
          "Tap a month, and everything below shows just that month – down to the weekdays",
        ],
        alt: "Insights: $2,903.17 in October, 11 percent less than September by day 8, a forecast of $4,132 and so $868 under budget. Below, the history with an average of $3,963 and five of five months within budget.",
      },
      {
        kicker: "Expenses & Recurring",
        title: "Everything in its place",
        text: "Every expense sorted by day, with category and payment method – and quickly found again with search. Add rent, insurance and subscriptions once, and My Budget logs them on time, all by itself.",
        checks: [
          "Daily, weekly, monthly or yearly",
          "Spread over the month in the daily average instead of giving you a shock on the first",
          "A reminder one day before large recurring bills",
          "In a foreign currency, too – each expense at the rate of its day",
        ],
        alt: "Expenses by day: Groceries $142.60, Coffee $6.75, Gas $52.80, Lunch $16.50.",
      },
    ],
  },
  devices: {
    title: "Your numbers, wherever you need them",
    intro: "On your Home Screen and Lock Screen, on iPhone and on iPad – always with the same numbers.",
    widgets: {
      kicker: "Widgets",
      title: "One glance, without opening the app",
      text: "Widgets in three sizes and on the Lock Screen show whether your budget lasts until month-end, what’s left per day and what’s coming up. Amounts only appear if you turn them on.",
      alt: "Medium widget: 58% of the budget used, “Lasts until month-end” below it. On the right, what’s coming up: rent and car insurance on November 1, one payment to review and 24 days left this month.",
    },
    ipad: {
      kicker: "iPhone and iPad",
      title: "The same numbers everywhere",
      text: "Your entries sync automatically through your iCloud. On iPad and the unfolded iPhone Duo in two columns, with plenty of room.",
      alt: "My Budget on iPad in two columns: the budget ring and key figures on the left, the breakdown by category and the latest expenses on the right.",
    },
  },
  details: {
    title: "Thoughtful down to the details",
    intro: "Little things that make a difference every day.",
    tiles: [
      {
        title: "Your budget as a ring",
        text: "Green while everything’s on track, orange from three quarters, red when you’re over. Adjustable for single months, like the month of your vacation.",
      },
      {
        title: "Reminders when it matters",
        text: "At 80 and 100 percent of your budget, a day before large recurring bills, and with a review at the start of each month. Nothing more.",
      },
      {
        title: "Siri and Shortcuts",
        text: "“Log an expense in My Budget” – or ask how your month is going.",
      },
      {
        title: "Your categories",
        text: "Your own categories with emoji and color, plus your payment methods – from checking to cash.",
      },
      {
        title: "Export and backup",
        text: "As a spreadsheet for Numbers or Excel, or as a full backup of all expenses, categories, payment methods, recurring bills and budgets.",
      },
      {
        title: "Dark Mode and large text",
        text: "My Budget follows your settings and stays easy to read with large text.",
      },
    ],
  },
  privacy: {
    title: "Your finances are nobody else’s business",
    intro: "My Budget doesn’t need an account, doesn’t run its own server and shows no ads. Your entries stay on your device and in your private iCloud.",
    tiles: [
      {
        title: "No account",
        text: "No sign-up and no bank credentials. My Budget doesn’t connect to any bank and never moves money.",
      },
      {
        title: "Your iCloud",
        text: "Syncing runs through your private iCloud. We as the developer have no access to it.",
      },
      {
        title: "No tracking",
        text: "No ads, no analytics tools and no third-party software that collects data about you.",
      },
      {
        title: "Locked with Face ID",
        text: "If you like, My Budget asks for Face ID before your numbers are shown.",
      },
    ],
    link: "Read the Privacy Policy",
  },
  applePay: {
    title: "Set up Apple Pay",
    intro: "Once, in the Shortcuts app. The steps depend on your iOS version – on iPhone, My Budget shows you the right ones under <em>Manage → Log Apple Pay Automatically</em>.",
    versions: ["iOS 27", "iOS 26"],
    osHint: "To find your version, open Settings and go to “General” → “About”.",
    quick: null,
    ios27: [
      {
        title: "Open Shortcuts",
        text: "Open the Shortcuts app and tap “Automation” in the Library – if you land in a list, tap ‹ in the top left first. Then tap ＋ at the bottom.",
        warn: null,
        mock: "<b>Library</b> <div class=\"mk-row\">All Shortcuts<span class=\"chev\">›</span></div> <div class=\"mk-row\">Gallery<span class=\"chev\">›</span></div> <div class=\"mk-row hint\">Automation<span class=\"chev\">›</span></div> <span class=\"mk-circle hint\">＋</span>",
        cards: false,
      },
      {
        title: "Build it yourself",
        text: "At the top, the app offers to describe the shortcut for you. Tap “Edit” in the top right instead.",
        warn: null,
        mock: "<div class=\"mk-bar\"><span class=\"mk-circle\">‹</span><b>New Shortcut</b><span class=\"mk-pill hint\">Edit</span></div> <div class=\"mk-search mk-faded\">Describe a shortcut</div>",
        cards: false,
      },
      {
        title: "The “Wallet” trigger",
        text: "Tap the search field at the bottom, then “Automation”. Type “Wallet” and choose “Wallet – When I tap a Wallet Card or Pass”.",
        warn: "Without “Automation”, the search only finds actions, not the trigger – and the automation never runs when you pay.",
        mock: "<div class=\"mk-search\"><span class=\"mk-token hint\">Automation</span>Wallet</div> <div class=\"mk-row hint\"><span><b>Wallet</b><small>“When I tap a Wallet Card or Pass”</small></span></div>",
        cards: false,
      },
      {
        title: "Add the action",
        text: "The top now reads “When Any Card is tapped” – leave it that way, with “Automation” on. Type “Log Expense” in the search field at the bottom and tap the My Budget action.",
        warn: null,
        mock: "<div class=\"mk-trigger\">When <span class=\"mk-any\">Any Card</span> is tapped</div> <div class=\"mk-row\">Automation<span class=\"mk-switch\"></span></div> <div class=\"mk-search\">Log Expense</div> <div class=\"mk-row hint\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture>Log Expense</div>",
        cards: false,
      },
      {
        title: "Connect the fields",
        text: "In the action, tap the faded “Amount”, then “Select Variable” above the keyboard, and then “Transaction”. Tap the blue “Transaction” and choose “Amount”. Connect “Merchant” to Transaction › “Merchant” and “Card” to Transaction › “Card or Pass” the same way.",
        warn: null,
        mock: "<div class=\"mk-sentence\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture> Log <span class=\"mk-var\">Amount</span> at <span class=\"mk-var\">Merchant</span> with <span class=\"mk-var\">Card</span></div> <div class=\"mk-map\"><b>Amount</b><small>Transaction ›</small><span class=\"mk-var\">Amount</span></div> <div class=\"mk-map\"><b>Merchant</b><small>Transaction ›</small><span class=\"mk-var\">Merchant</span></div> <div class=\"mk-map\"><b>Card</b><small>Transaction ›</small><span class=\"mk-var\">Card or Pass</span></div>",
        cards: false,
      },
      {
        title: "Done",
        text: "Tap ‹ in the top left – it saves automatically. “Automation” now lists “When I tap a Wallet pass or payment card”. The next time you pay with your iPhone, the payment appears in My Budget under “To Review”.",
        warn: "Don’t try it with ▶: without a real payment there’s no amount, and the action reports an error. To try it out, use the test expense in My Budget under <em>Manage → Log Apple Pay Automatically</em>.",
        mock: "<b>Automation</b> <div class=\"mk-row\"><span><b>When I tap a Wallet pass or payment card</b><small>Log Expense</small></span><span class=\"mk-switch\"></span></div>",
        cards: false,
      },
      {
        title: "Assign your cards",
        text: "Every card you’ve paid with appears in My Budget under “Your Cards”. Choose its payment method once – after that, the app files every payment made with that card correctly.",
        warn: null,
        mock: "<div class=\"mk-row\">Visa Debit<span class=\"end\">Checking</span></div> <div class=\"mk-row\">Amex Blue<span class=\"end\" style=\"color: #f59e0b\">Assign</span></div>",
        cards: true,
      },
    ],
    ios26: [
      {
        title: "Open Shortcuts",
        text: "Open the Shortcuts app and tap “Automation” at the bottom. Then tap “New Automation” – if you already have automations, tap ＋ in the top right.",
        warn: null,
        mock: "<b>Automation</b> <span class=\"mk-btn hint\">New Automation</span> <div class=\"mk-tabs\"><span>Library</span><span class=\"on hint\">Automation</span><span>Gallery</span></div>",
        cards: false,
      },
      {
        title: "Choose “Wallet”",
        text: "Tap the search field at the bottom, type “Wallet” and choose “Wallet”.",
        warn: null,
        mock: "<b>Personal Automation</b> <div class=\"mk-row hint\"><span><b>Wallet</b><small>“When I tap a Wallet Card or Pass”</small></span></div> <div class=\"mk-search\">Wallet</div>",
        cards: false,
      },
      {
        title: "Cards and run settings",
        text: "Select all the cards you pay with. Choose “Run Immediately” and leave “Notify When Run” off. Then tap “Next” in the top right.",
        warn: null,
        mock: "<b>When I tap</b> <div class=\"mk-row\">Visa Debit<span class=\"end\">✓</span></div> <div class=\"mk-row\">Mastercard<span class=\"end\">✓</span></div> <div class=\"mk-row hint\">Run Immediately<span class=\"end\">✓</span></div>",
        cards: false,
      },
      {
        title: "Create a new shortcut",
        text: "Under “Get Started”, tap “Create New Shortcut”.",
        warn: "Don’t tap “My Budget” or “New Expense” further down: iOS would then create the automation without connected fields, and it couldn’t pass on the amount.",
        mock: "<b>Get Started</b> <div class=\"mk-tiles\"><div class=\"mk-tile hint\">Create New Shortcut</div></div> <div class=\"mk-row no\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture><span>My Budget<small>New Expense, This Month</small></span></div>",
        cards: false,
      },
      {
        title: "Add the action",
        text: "Tap “Search Actions” at the bottom, type “Log Expense” and tap the My Budget action.",
        warn: null,
        mock: "<div class=\"mk-search\">Log Expense</div> <div class=\"mk-row hint\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture>Log Expense</div>",
        cards: false,
      },
      {
        title: "Connect the fields",
        text: "In the action, tap the blue “Amount”, then “Shortcut Input”. Tap the blue “Shortcut Input” again and choose “Amount”. Connect “Merchant” to “Merchant Name” and “Card” to “Card” the same way.",
        warn: null,
        mock: "<div class=\"mk-sentence\"><picture class=\"mk-app\"><source srcset=\"/bilder/icon-dunkel.png\" media=\"(prefers-color-scheme: dark)\"><img src=\"/bilder/icon.png\" width=\"22\" height=\"22\" alt=\"\"></picture> Log <span class=\"mk-var\">Amount</span> at <span class=\"mk-var\">Merchant Name</span> with <span class=\"mk-var\">Card</span></div>",
        cards: false,
      },
      {
        title: "Done",
        text: "Tap ✓ in the top right. The next time you pay with your iPhone at checkout, the payment appears in My Budget under “To Review”.",
        warn: "Don’t try it with ▶: without a real payment there’s no amount, and the action reports an error. To try it out, use the test expense in My Budget under <em>Manage → Log Apple Pay Automatically</em>.",
        mock: "<div class=\"mk-row\"><span><b>1 payment to review</b><small>Grocery Store · $23.40</small></span></div>",
        cards: false,
      },
      {
        title: "Assign your cards",
        text: "Every card you’ve paid with appears in My Budget under “Your Cards”. Choose its payment method once – after that, the app files every payment made with that card correctly.",
        warn: null,
        mock: "<div class=\"mk-row\">Visa Debit<span class=\"end\">Checking</span></div> <div class=\"mk-row\">Amex Blue<span class=\"end\" style=\"color: #f59e0b\">Assign</span></div>",
        cards: true,
      },
    ],
  },
  help: {
    title: "Help",
    intro: "Answers to common questions. And if something doesn’t work, just write to us.",
    faq: [
      {
        q: "How do my entries get to my iPad?",
        a: "<p>My Budget syncs your data through your iCloud. For this, you need to be signed in with the same Apple Account on both devices, and iCloud must not be turned off for My Budget (iOS Settings → your name → iCloud, in the list of apps using iCloud).</p> <p>The first sync can take a few minutes. You can see the current status in the app under <em>Manage → iCloud Sync</em>.</p>",
      },
      {
        q: "How are Apple Pay payments logged automatically?",
        a: "<p>With an automation that you set up once in the Shortcuts app. The steps are above under <a href=\"#apple-pay\">Set up Apple Pay</a>; in the app, <em>Manage → Log Apple Pay Automatically</em> walks you through the same steps.</p> <p>On iOS 27, step 3 is the one that matters: tap the “Automation” filter first, or the search won’t find the “Wallet” trigger. On iOS 26, it’s step 4: choose “Create New Shortcut”, not “My Budget” further down – otherwise the connected fields are missing.</p>",
      },
      {
        q: "I have several cards – how do I assign them?",
        a: "<p>One automation covers all your cards. In the action, connect the “Card” field as well. Every card you pay with then appears under <em>Manage → Log Apple Pay Automatically → Your Cards</em>. Choose its payment method there once, and My Budget files every payment made with that card correctly – including those still waiting under “To Review”.</p> <p>You can also assign a new card right under “To Review”.</p>",
      },
      {
        q: "The automation doesn’t run – what can I do?",
        a: "<ul> <li>Only paying with your iPhone at checkout triggers the automation – not paying with Apple Watch, and not online purchases.</li> <li>On iOS 27, “Automation” must be turned on in the trigger; on iOS 26, “Run Immediately” must be selected in the automation.</li> <li>Wallet needs cellular data: iOS Settings → “Cellular” → turn on “Wallet”.</li> <li>In My Budget, <em>Manage → Log Apple Pay Automatically</em> shows at the top when a payment last arrived and whether the merchant and card came with it.</li> </ul>",
      },
      {
        q: "Trying it with ▶ shows an error – is something wrong?",
        a: "<p>No. With ▶, the automation runs without a real payment, so Wallet provides no amount and My Budget reports an error. With a real payment made with your iPhone, the amount, merchant and card come along.</p> <p>To try it out, <em>Manage → Log Apple Pay Automatically → Create Test Expense</em> creates a payment that arrives under “To Review” just like a real one.</p>",
      },
      {
        q: "Why is a payment under “To Review”?",
        a: "<p>The iOS automation also reports payments that were declined. That’s why automatically logged payments land under “To Review” first and only count toward your monthly total once you confirm them.</p> <p>If you correct the category or payment method while reviewing, My Budget remembers the merchant and files it correctly on your next purchase. If the automation runs twice, the same amount at the same merchant within five minutes is logged only once.</p>",
      },
      {
        q: "I paid for several people – does only my share count?",
        a: "<p>Yes, if you split the expense: when logging it with “Split with Others”, for Apple Pay payments under “To Review” with “Split”, and afterward for any expense in its details with “Split”.</p> <p>You divide evenly by the number of people or enter your share. Only your share then counts toward your budget; the total you paid stays on record, and you can undo the split at any time.</p>",
      },
      {
        q: "Can I log expenses in a foreign currency when I travel?",
        a: "<p>Yes. When logging, tap the currency below the amount and choose, for example, euros, pounds or Canadian dollars. My Budget converts the amount to your home currency using the European Central Bank’s reference rate for the day of the expense; what you paid stays with the expense. If the Apple Pay automation reports a payment in a foreign currency, My Budget takes it the same way.</p> <p>The most accurate figure is the amount on your card statement, because it includes your bank’s fee. Tap the converted line and enter it. For currencies the ECB doesn’t publish, you enter the rate yourself.</p>",
      },
      {
        q: "I moved abroad – can I change the currency?",
        a: "<p>Yes, under <em>Manage → Currency</em>. My Budget converts every expense at the rate of its day and your budget at today’s rate. The previous amounts stay saved – if you switch back, they’re restored exactly. If your amounts were meant in the new currency from the start, choose “Change Currency Only”.</p>",
      },
      {
        q: "Can I submit expense reports to accounting?",
        a: "<p>Yes. Turn on the module under <em>Manage → Expense Reports</em>. A separate tab then collects receipts and expenses: take a photo of a receipt, add a photo or PDF from Files, enter one by hand, or mark an Apple Pay payment as business under “To Review”. One tap turns them into the report: a PDF with a cover page, the table and every receipt, plus the table as CSV and the original files as a ZIP – to share by email or save to Files.</p> <p>Business expenses are reimbursed, so they don’t count toward your budget – unless you want them to. What was submitted and reimbursed stays on record, and a new report starts for the next trip.</p>",
      },
      {
        q: "How accurately are receipts recognized?",
        a: "<p>My Budget reads the receipt right on your iPhone and runs an arithmetic check: only if the items add up exactly to the total – plus sales tax where it’s added at the end – does the app offer them for selection. That way, neither a tax amount nor “Cash 20.00” accidentally becomes the total.</p> <p>This works on every iPhone that runs My Budget. On iPhone 15 Pro and later with Apple Intelligence turned on, Apple’s language model also suggests the category and helps with cluttered receipts; on iPhone Air, 17 Pro and 17 Pro Max with iOS 27, it sees the photo too. None of this leaves your device.</p>",
      },
      {
        q: "How do I add recurring bills like rent or subscriptions?",
        a: "<p>When logging an expense, turn on “Make Recurring”, or tap the plus under <em>Manage → Recurring</em>. You choose whether it’s due daily, weekly, monthly or yearly. My Budget then logs it on time, all by itself.</p>",
      },
      {
        q: "Can I change the budget for a single month?",
        a: "<p>Yes. On the Overview, tap the slider icon in the budget ring. You set the default budget for all months under <em>Manage → Monthly Budget</em>.</p>",
      },
      {
        q: "How do I back up or export my data?",
        a: "<p>Under <em>Manage → Export &amp; Back Up</em>: as a spreadsheet for Numbers or Excel, or as a full backup of all expenses, categories, payment methods, recurring bills and budgets.</p>",
      },
      {
        q: "How do I protect the app with Face ID?",
        a: "<p>Under <em>Manage → Lock App</em>. The app then asks for confirmation when you open it again after more than a minute in the background.</p>",
      },
      {
        q: "How do I delete all my data?",
        a: "<p>If you delete the app, its data on that device is removed. You delete the data in iCloud in iOS Settings: tap your name, then “iCloud”, open the storage overview and choose “My Budget”.</p>",
      },
      {
        q: "Does My Budget connect to my bank?",
        a: "<p>No. My Budget is a personal budget planner. The app doesn’t need bank credentials, doesn’t connect to any bank and never moves money.</p>",
      },
      {
        q: "Which devices are supported?",
        a: "<p>iPhone and iPad with iOS or iPadOS 18.5 or later. On iPad and the unfolded iPhone Duo, My Budget shows two columns.</p>",
      },
    ],
  },
  contact: {
    title: "Questions, ideas or found a bug?",
    text: "Just send an email to <a href=\"mailto:maxi.ruhl@hotmail.de\">maxi.ruhl@hotmail.de</a>.",
    button: "Send an Email",
    small: "If something doesn’t work as expected, a diagnostics report helps: in the app under <em>Manage → iCloud Sync → Share Diagnostics</em>. It contains none of the contents of your expenses.",
  },
  footer: {
    privacy: "Privacy Policy",
    help: "Help",
    contact: "Contact",
    copyright: "© 2026 Maximilian Ruhl",
    fine: "All amounts shown in the images are sample data. Apple, Apple Pay, Face ID, iCloud, iPad, iPadOS, iPhone and Siri are trademarks of Apple Inc., registered in the U.S. and other countries.",
  },
  privacyPage: {
    title: "Privacy Policy – My Budget",
    description: "How My Budget handles your data: no account, no server of its own, no ads and no tracking. Your entries stay on your device and in your private iCloud.",
    home: "Home",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn’t exist or no longer exists.",
    back: "Back to the home page",
  },
  facts: {
    title: "At a glance",
    languages: "Languages",
    items: [
      "Budget planner app for iPhone and iPad, iOS and iPadOS 18.5 or later",
      "Free, with no ads and no in-app purchases",
      "No account and no bank connection – entries stay on the device and in the user’s private iCloud",
      "No analytics, tracking or advertising tools",
      "Made by Maximilian Ruhl",
    ],
  },
};

export default en;
