var EasyAnswer = "<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='Higher' required />" + 
"Cases are higher" + "</label>" + "<label class='radio' style=':hover {border:none}'>" + 
"<input name='diff1' type='radio' value='Lower' required/>" + "Cases are lower" + " </label>" + 
"<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='Same' required/>" + 
"Cases are the same" + " </label>";

var DifficultAnswer =
"<label class='radio'>" + "<input name='diff1' type='radio' value='Less33' required/>" + 
"Less than <sup>1</sup>&frasl;<sub>3</sub>" + "</label>" + 
"<label class='radio'>" + "<input name='diff1' type='radio' value='33-66' required/>" + 
"Between <sup>1</sup>&frasl;<sub>3</sub> -- <sup>2</sup>&frasl;<sub>3</sub> </label>" +
"<label class='radio'>" + "<input name='diff1' type='radio' value='More66' required/>" + 
"More than <sup>2</sup>&frasl;<sub>3</sub> </label>";

var MediumQuestionHigh = "Of the three countries with the highest number of deaths, which has the highest hospitalizations?";
var MediumQuestionLow = "Of the three countries with the lowest number of deaths, which has the lowest hospitalizations?"

const Trainingsurvey = [
    {
        q: "In France, are cases higher, lower, or the same in December compared to the previous month?",
        image: "/static/img/stimuli/training/Vert-Vert-7.png",
        col1: "On November 20, 2020, the average number of cases in Belgium was 352, Canada had 125 average cases, France had 395 average cases, \
        Germany had 220 average cases, Portugal had 630 average cases, the United Kingdom had 327 average cases and the United States of America \
        had 515 average cases.",
        col2: "On December 20, 2020, the average number of cases in Belgium was 219, Canada had 182 average cases, France had 206 average cases, \
        Germany had 280 average cases, Portugal had 357 average cases, the United Kingdom had 401 average cases and the United States of America \
        had 660 average cases.",
        options: EasyAnswer,
        answer: "Lower",
        type: "Vert-Vert",
        density: "7",
        level: "Easy",
        qnum: 1
    },
    {
        q: "In Denmark, are cases higher, lower, or the same in March compared to the previous month?",
        image: "/static/img/stimuli/training/Vert-Rad-7.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Vert-Rad",
        density: "7",
        level: "Easy",
        qnum: 2
    },
    {
        q: "In Estonia, are cases higher, lower, or the same in December compared to the previous month?",
        image: "/static/img/stimuli/training/Vert-Star-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Star",
        density: "7",
        level: "Easy",
        qnum: 3
    },
    {
        q: "In Bolivia, are cases higher, lower, or the same in June compared to the previous month?",
        image: "/static/img/stimuli/training/Horiz-Vert-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Horiz-Vert",
        density: "7",
        level: "Easy",
        qnum: 4
    }

]

const AllStimuli = [
    {
        q: "In Denmark, are cases higher, lower, or the same in November compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Vert-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Vert",
        density: "7",
        level: "Easy",
        qnum: 1
    },
    {
        q: "In Malta, are cases higher, lower, or the same in November compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Vert-14.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Vert-Vert",
        density: "14",
        level: "Easy",
        qnum: 2
    },
    {
        q: "In Moldova, are cases higher, lower, or the same in April compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Horiz-7.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Vert-Horiz",
        density: "7",
        level: "Easy",
        qnum: 3
    },
    {
        q: "In Morocco, are cases higher, lower, or the same in June compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Horiz-14.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Horiz",
        density: "14",
        level: "Easy",
        qnum: 4
    },
    {
        q: "In Finland, are cases higher, lower, or the same in September compared to the previous month?",
        image: "/static/img/stimuli/Easy/Horiz-Vert-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Horiz-Vert",
        density: "7",
        level: "Easy",
        qnum: 5
    },
    {
        q: "In Bulgaria, are cases higher, lower, or the same in September compared to the previous month?",
        image: "/static/img/stimuli/Easy/Horiz-Vert-14.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Horiz-Vert",
        density: "14",
        level: "Easy",
        qnum: 6
    },
    {
        q: "In Seychelles, are cases higher, lower, or the same in November compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Rad-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Rad",
        density: "7",
        level: "Easy",
        qnum: 7
    },
    {
        q: "In Lebanon, are cases higher, lower, or the same in March compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Rad-14.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Rad",
        density: "14",
        level: "Easy",
        qnum: 8
    },
    {
        q: "In Slovakia, are cases higher, lower, or the same in June compared to the previous month?",
        image: "/static/img/stimuli/Easy/Rad-Vert-7.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Rad-Vert",
        density: "7",
        level: "Easy",
        qnum: 9
    },
    {
        q: "In Gibraltar, are cases higher, lower, or the same in October compared to the previous month?",
        image: "/static/img/stimuli/Easy/Rad-Vert-14.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Rad-Vert",
        density: "14",
        level: "Easy",
        qnum: 10
    },
    {
        q: "In Guinea, are cases higher, lower, or the same in August compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Star-7.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Star",
        density: "7",
        level: "Easy",
        qnum: 11
    },
    {
        q: "In Mali, are cases higher, lower, or the same in December compared to the previous month?",
        image: "/static/img/stimuli/Easy/Vert-Star-14.png",
        options: EasyAnswer,
        answer: "Higher",
        type: "Vert-Star",
        density: "14",
        level: "Easy",
        qnum: 12
    },
    {
        q: "In Belgium, are cases higher, lower, or the same in May compared to the previous month?",
        image: "/static/img/stimuli/Easy/Star-Vert-7.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Star-Vert",
        density: "7",
        level: "Easy",
        qnum: 13
    },
    {
        q: "In Georgia, are cases higher, lower, or the same in February compared to the previous month?",
        image: "/static/img/stimuli/Easy/Star-Vert-14.png",
        options: EasyAnswer,
        answer: "Lower",
        type: "Star-Vert",
        density: "14",
        level: "Easy",
        qnum: 14
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Vert-Vert-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required />" + 
        "Canada" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Netherlands' required/>" + "Netherlands" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required/>" + 
        "Malaysia" + " </label>",
        answer: "Canada",
        type: "Vert-Vert",
        density: "7",
        level: "Medium",
        qnum: 15
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Vert-Vert-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required />" + 
        "Malaysia" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Ireland' required/>" + "Ireland" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Finland' required/>" + 
        "Finland" + " </label>",
        answer: "Ireland",
        type: "Vert-Vert",
        density: "14",
        level: "Medium",
        qnum: 16
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Vert-Horiz-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" + 
        "Hungary" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Norway' required/>" + "Norway" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" + 
        "Czechia" + " </label>",
        answer: "Norway",
        type: "Vert-Horiz",
        density: "7",
        level: "Medium",
        qnum: 17
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Vert-Horiz-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" + 
        "Hungary" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='France' required/>" + "France" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Slovenia' required/>" + 
        "Slovenia" + " </label>",
        answer: "Hungary",
        type: "Vert-Horiz",
        density: "14",
        level: "Medium",
        qnum: 18
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Horiz-Vert-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" + 
        "Hungary" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Austria' required/>" + "Austria" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required/>" + 
        "Canada" + " </label>",
        answer: "Canada",
        type: "Horiz-Vert",
        density: "7",
        level: "Medium",
        qnum: 19
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Horiz-Vert-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required />" + 
        "Czechia" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Slovakia' required/>" + "Slovakia" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Croatia' required/>" + 
        "Croatia" + " </label>",
        answer: "Czechia",
        type: "Horiz-Vert",
        density: "14",
        level: "Medium",
        qnum: 20
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Vert-Rad-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" + 
        "Italy" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Slovenia' required/>" + "Slovenia" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required/>" + 
        "Canada" + " </label>",
        answer: "Slovenia",
        type: "Vert-Rad",
        density: "7",
        level: "Medium",
        qnum: 21
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Vert-Rad-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Serbia' required />" + 
        "Serbia" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Poland' required/>" + "Poland" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='France' required/>" + 
        "France" + " </label>",
        answer: "Serbia",
        type: "Vert-Rad",
        density: "14",
        level: "Medium",
        qnum: 22
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Rad-Vert-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" + 
        "Italy" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Luxembourg' required/>" + "Luxembourg" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Malta' required/>" + 
        "Malta" + " </label>",
        answer: "Malta",
        type: "Rad-Vert",
        density: "7",
        level: "Medium",
        qnum: 23
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Rad-Vert-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Poland' required />" + 
        "Poland" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Czechia' required/>" + "Czechia" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required/>" + 
        "Italy" + " </label>",
        answer: "Poland",
        type: "Rad-Vert",
        density: "14",
        level: "Medium",
        qnum: 24
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Vert-Star-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='U.K.' required />" + 
        "U.K." + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Belgium' required/>" + "Belgium" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" + 
        "Czechia" + " </label>",
        answer: "U.K.",
        type: "Vert-Star",
        density: "7",
        level: "Medium",
        qnum: 25
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Vert-Star-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" + 
        "Italy" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Spain' required/>" + "Spain" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Belgium' required/>" + 
        "Belgium" + " </label>",
        answer: "Italy",
        type: "Vert-Star",
        density: "14",
        level: "Medium",
        qnum: 26
    },
    {
        q: MediumQuestionHigh,
        image: "/static/img/stimuli/Medium/Star-Vert-7.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='U.K.' required />" + 
        "U.K." + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Portugal' required/>" + "Portugal" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Israel' required/>" + 
        "Israel" + " </label>",
        answer: "U.K.",
        type: "Star-Vert",
        density: "7",
        level: "Medium",
        qnum: 27
    },
    {
        q: MediumQuestionLow,
        image: "/static/img/stimuli/Medium/Star-Vert-14.png",
        options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required />" + 
        "Malaysia" + "</label>" + "<label class='radio'>" + 
        "<input name='diff1' type='radio' value='Slovakia' required/>" + "Slovakia" + " </label>" + 
        "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" + 
        "Czechia" + " </label>",
        answer: "Malaysia",
        type: "Star-Vert",
        density: "14",
        level: "Medium",
        qnum: 28
    },
    {
        q: "Approximately, what portion of people are vaccinated in Fiji?",
        image: "/static/img/stimuli/Difficult/Vert-Vert-7.png",
        options: DifficultAnswer,
        answer: "Less33",
        type: "Vert-Vert",
        density: "7",
        level: "Difficult",
        qnum: 29
    },
    {
        q: "Approximately, what portion of people are vaccinated in Czechia?",
        image: "/static/img/stimuli/Difficult/Vert-Vert-14.png",
        options: DifficultAnswer,
        answer: "33-66",
        type: "Vert-Vert",
        density: "14",
        level: "Difficult",
        qnum: 30
    },
    {
        q: "Approximately, what portion of people are vaccinated in Kazakhstan?",
        image: "/static/img/stimuli/Difficult/Vert-Horiz-7.png",
        options: DifficultAnswer,
        answer: "33-66",
        type: "Vert-Horiz",
        density: "7",
        level: "Difficult",
        qnum: 31
    },
    {
        q: "Approximately, what portion of people are vaccinated in Colombia?",
        image: "/static/img/stimuli/Difficult/Vert-Horiz-14.png",
        options: DifficultAnswer,
        answer: "Less33",
        type: "Vert-Horiz",
        density: "14",
        level: "Difficult",
        qnum: 32
    },
    {
        q: "Approximately, what portion of people are vaccinated in Laos?",
        image: "/static/img/stimuli/Difficult/Horiz-Vert-7.png",
        options: DifficultAnswer,
        answer: "33-66",
        type: "Horiz-Vert",
        density: "7",
        level: "Difficult",
        qnum: 33
    },
    {
        q: "Approximately, what portion of people are vaccinated in Uruguay?",
        image: "/static/img/stimuli/Difficult/Horiz-Vert-14.png",
        options: DifficultAnswer,
        answer: "More66",
        type: "Horiz-Vert",
        density: "14",
        level: "Difficult",
        qnum: 34
    },
    {
        q: "Approximately, what portion of people are vaccinated in Rwanda?",
        image: "/static/img/stimuli/Difficult/Vert-Rad-7.png",
        options: DifficultAnswer,
        answer: "Less33",
        type: "Vert-Rad",
        density: "7",
        level: "Difficult",
        qnum: 35
    },
    {
        q: "Approximately, what portion of people are vaccinated in Brazil?",
        image: "/static/img/stimuli/Difficult/Vert-Rad-14.png",
        options: DifficultAnswer,
        answer: "More66",
        type: "Vert-Rad",
        density: "14",
        level: "Difficult",
        qnum: 36
    },
    {
        q: "Approximately, what portion of people are vaccinated in Romania?",
        image: "/static/img/stimuli/Difficult/Rad-Vert-7.png",
        options: DifficultAnswer,
        answer: "Less33",
        type: "Rad-Vert",
        density: "7",
        level: "Difficult",
        qnum: 37
    },
    {
        q: "Approximately, what portion of people are vaccinated in Finland?",
        image: "/static/img/stimuli/Difficult/Rad-Vert-14.png",
        options: DifficultAnswer,
        answer: "More66",
        type: "Rad-Vert",
        density: "14",
        level: "Difficult",
        qnum: 38
    },
    {
        q: "Approximately, what portion of people are vaccinated in Bhutan?",
        image: "/static/img/stimuli/Difficult/Vert-Star-7.png",
        options: DifficultAnswer,
        answer: "More66",
        type: "Vert-Star",
        density: "7",
        level: "Difficult",
        qnum: 39
    },
    {
        q: "Approximately, what portion of people are vaccinated in Chile?",
        image: "/static/img/stimuli/Difficult/Vert-Star-14.png",
        options: DifficultAnswer,
        answer: "More66",
        type: "Vert-Star",
        density: "14",
        level: "Difficult",
        qnum: 40
    },
    {
        q: "Approximately, what portion of people are vaccinated in Samoa?",
        image: "/static/img/stimuli/Difficult/Star-Vert-7.png",
        options: DifficultAnswer,
        answer: "33-66",
        type: "Star-Vert",
        density: "7",
        level: "Difficult",
        qnum: 41
    },
    {
        q: "Approximately, what portion of people are vaccinated in Mozambique?",
        image: "/static/img/stimuli/Difficult/Star-Vert-14.png",
        options: DifficultAnswer,
        answer: "Less33",
        type: "Star-Vert",
        density: "14",
        level: "Difficult",
        qnum: 42
    }


]