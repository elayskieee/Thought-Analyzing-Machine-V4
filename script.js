var thought = document.getElementById("thought");
var languageSelect = document.getElementById("languageSelect");
var analyzeBtn = document.getElementById("analyzeBtn");
var loading = document.getElementById("loading");
var loadingText = document.getElementById("loadingText");
var bar = document.getElementById("bar");
var result = document.getElementById("result");
var resultText = document.getElementById("resultText");
var againBtn = document.getElementById("againBtn");
var topicKeywords = {
    worry: ["worry", "worried", "anxious", "anxiety", "stress", "overthink", "takot", "kinakabahan", "nag-aalala", "nag aalala", " iniisip", "panic", "paranoid", "nervous", "overthinking", "afraid", "scared", "doubt", "doubts", "uncertain", "hindi makatulog", "hindi mapakali", "nalilito", "bothered", "bothering", "pressure", "depressed", "kabalisa", "kabado", "kumukulo ang isip", "nagkakamali", "hindi mapatawad", "panic attack", "worried about", "what if", "can't sleep", "can't stop thinking", "overwhelmed", "restless", "kinakabahan ako", "natatakot ako", "nag-iisip nang sobra", "di mapakali", "di makatulog", "kinakain ng isip", "takot ako", "naguguluhan", "problema", "problem", "what will happen", "paano kung", "baka mangyari", "hindi ko alam kung", "kabado ako"],
    relationships: ["love", "relationship", "partner", "breakup", "heart", "mahal", "jowa", "relasyon", "hiwalay", "kaibigan", "crush", "dating", "girlfriend", "boyfriend", "text", "message", "miss you", "hug", "kiss", "trust", "loyalty", "cheating", "jealous", "hurt", "not talking", "umiiwas", "inlove", "pagmamahal", "pinalitan", "umiwas", "tampo", "pa-ibig", "sinasaktan", "tinataboy", "sinasabihan", "ex", "friend", "best friend", "talking stage", "situationship", "ghosted", "ignored me", "miss ko", "mahal ko", "kaaway na kaibigan", "naghiwalay", "may iba", "nagseselos", "selos", "ayaw na", "di na nag-uusap", "hindi na nagrereply", "di nagrereply", "away kami", "nagbago siya", "gusto ko siya", "gusto niya ako", "namimiss", "break up"],
    work: ["work", "job", "school", "exam", "college", "career", "future", "trabaho", "paaralan", "eskwela", "exam", "kinabukasan", "activities", "assignment", "project", "deadline", "boss", "teacher", "class", "grades", "salary", "promotion", "interview", "resume", "stressful", "overloaded", "busy", "tired", "mga deadlines", "pagtatapos", "pasa", "pag-aaral", "report", "presentation", "requirements", "balakid", "sablay", "saan ako pupunta", "homework", "quiz", "test", "thesis", "school works", "workload", "coworker", "classmate", "review", "graduation", "school project", "trabaho ko", "school ko", "bagsak", "nahihirapan sa school", "nahihirapan sa trabaho", "maraming gawain", "puyat", "late na", "di ko matapos", "hindi ko matapos", "deadline na", "assignment ko", "exam ko", "grades ko", "future ko"],
    conflict: ["angry", "upset", "mad", "fight", "argument", "hurt", "galit", "inis", "away", "nasaktan", "tampo", "sakit", "dispute", "drama", "issue", "misunderstanding", "betrayal", "offended", "awayan", "hindi magkaintindihan", "buwisit", "nainis", "masakit", "pikon", "nag-away", "nag-aaway", "sabay-sabay", "biglaang away", "annoyed", "furious", "argument kami", "nagkasagutan", "pinagtalunan", "pinag-awayan", "sinigawan", "sinungaling", "nagsinungaling", "disrespect", "rude", "nakakainis", "inis na inis", "badtrip", "nakakabwisit", "di kami nagkaintindihan", "hindi kami nagkaintindihan", "may problema kami", "nag-away kami", "nagagalit ako", "nasaktan ako", "pinahiya", "kinontra"]
};
topicKeywords.worry.push(
    "stressed out", "freaking out", "scared of", "can't relax", "keeps bothering me",
    "my mind won't stop", "thinking too much", "worried ako", "sobrang kaba", "di ako mapakali",
    "di ko alam gagawin", "takot mangyari", "kinakabahan sa", "nag-aalala ako", "ang dami kong iniisip"
);
topicKeywords.relationships.push(
    "my boyfriend", "my girlfriend", "my partner", "my friend", "my crush", "my ex",
    "they left me", "we broke up", "they broke up with me", "he left", "she left",
    "may gusto akong", "may gusto siya", "di niya ako pinapansin", "hindi niya ako pinapansin",
    "di na niya ako mahal", "mahal pa ba", "nagkatampuhan", "nawalan ng gana"
);
topicKeywords.work.push(
    "schoolwork", "school work", "class project", "finals", "report card", "my grades",
    "my teacher", "my boss", "work tomorrow", "first day", "shift", "overtime",
    "revising", "studying", "reviewing", "school pressure", "trabahong tambak",
    "tambak na gawain", "maraming deadline", "may pasok", "di makapasa"
);
topicKeywords.conflict.push(
    "we had a fight", "we argued", "got into an argument", "they yelled at me",
    "someone yelled", "they were mean", "being bullied", "bullying", "feeling left out",
    "pinag-awayan namin", "pinagtaasan ng boses", "sinigawan ako", "inaaway ako",
    "binastos ako", "binastos", "pinagtawanan ako", "di ako pinakinggan",
    "hindi ako pinakinggan", "nagkasamaan ng loob", "may nakaaway"
);
var responses = {
    en: {
        worry: [
            "Sounds like this has been taking up a lot of space in your head, have some positive one for your sake. Do you want to sort out what you can actually do next?",
            "I get why that would weigh on you. Let's take it one piece at a time, okay? I'll be right here. Take your time.",
            "That sounds stressful. You don't have to figure out every possible outcome right now. Let all your frustrations out. You have me.",
            "Aww, I get you. That stuff can get stuck in your head talaga. Wanna tell me what part is bothering you the most?",
            "I know, it's hard not to think about it. Maybe let's just figure out one thing you can do for now, okay?",
            "You don't have to solve everything tonight. Take a little break muna, then we can think about it again.",
            "Your mind's doing too much right now, huh? Try not to carry the whole thing all at once.",
            "Gets ko. Sometimes we worry about every possible thing kahit wala pa naman nangyayari. Let's take it one step at a time.",
            "Hey, you're doing your best. Kahit maliit lang muna yung next step, okay na 'yon.",
            "I know it's easier said than done, but try to chill for a bit. You can figure it out little by little.",
            "That sounds like a lot, friend. Want to tell me what happened? I'll listen.",
            "Don't be too hard on yourself, okay? We all get worried sometimes. You'll get through this.",
            "Hey, one thing at a time. You don't have to figure out the whole thing right this second.",
            "I know it's been on your mind a lot. Wanna talk it out with me?",
            "Maybe take a break from thinking about it for a minute. We can come back to it after.",
            "It's okay to feel nervous. Doesn't mean something bad is definitely gonna happen.",
            "I'm here, okay? You can tell me the messy version, no need to have it all figured out."
        ],
        relationships: [
            "Sounds like this person really matters to you. Maybe start with what you want them to understand. Confront them to make them understand it too.",
            "Oh, that kind of situation can be messy. You don't have to decide everything in one go. Think about yourself more this time. How's that?",
            "I can see why that's on your mind. What do you wish would happen next? I can help you understand the situation you can't see right now.",
            "Ugh, relationships can be so confusing sometimes. Maybe just tell them what you actually feel, kahit kinakabahan ka.",
            "I get it, you care about them a lot. But don't forget to think about yourself too, ha?",
            "You deserve someone who listens to you, not just someone you keep trying for.",
            "If something's bothering you, it's okay to bring it up. You don't have to keep it all inside.",
            "Maybe ask them straight up instead of guessing what they mean. Less overthinking that way.",
            "That's rough, especially when you don't know where you stand. I'm here if you wanna kwento.",
            "You can miss someone and still know they aren't treating you right. Both can be true.",
            "If they keep confusing you, maybe take a step back muna and see how you feel.",
            "No need to figure out the whole relationship right now. Just be honest with yourself first.",
            "Oof, that sounds complicated. What do you wish they understood about how you feel?",
            "You can care about them and still take care of yourself too, okay?",
            "Maybe have a proper talk when you're both ready. No need to force it while emotions are high.",
            "It's okay if you don't know what to do yet. Feelings can be confusing sometimes.",
            "Tell me what happened, friend. I'll listen first, no judging."
        ],
        work: [
            "Sounds like work or school is weighing on you. What's the one thing you need to tackle first? I might or can help you.",
            "That looks like a lot. Let's figure out the next small step instead of the whole problem. Just step-by-step, and breathe.",
            "I hear you. You don't have to have your entire future figured out or mapped out today. There's a lot more things that are important right now, and I can help you figure it out. Just tell me more about it.",
            "School or work can be so tiring. Just do the first thing muna, then worry about the rest later.",
            "You don't have to finish everything in one day. Take a break too, you need it.",
            "Sounds like you have a lot going on. What's due first? Let's start there.",
            "It's okay if you're not getting everything done right away. You're not a machine, friend.",
            "Maybe write down the stuff you need to do para hindi lahat nasa isip mo. One at a time lang.",
            "I know you're tired. Do what you can today, then rest. The rest can wait a little.",
            "Don't stress about making the perfect plan. Just start somewhere, kahit maliit na bagay lang.",
            "You can ask someone for help, you know. Hindi mo kailangan gawin lahat mag-isa.",
            "Hey, you're still trying and that counts. Tell me what's making school or work hard right now.",
            "That sounds exhausting. Have you had a chance to take a break and eat something?",
            "Let's pick one thing to do first. The rest of the list can wait its turn.",
            "It's okay if today isn't super productive. You're still doing your best, and that matters.",
            "Maybe message a classmate or coworker and ask what they think. You don't have to guess alone.",
            "Kaya mo 'yan, friend. Small progress is still progress."
        ],
        conflict: [
            "Sounds like that really got to you. Maybe give yourself a little time before deciding what to say. You can't just say whatever is on your mind. That might or will become one of youy regrets.",
            "Yah, that kind of thing can sting. What would help you feel okay about how you handle it? Let's not make this more difficult to handle if there's a solution.",
            "I get why you're upset. You can be honest about it without having to sort it all out right this second. Don't just weigh it all to yourself. I'm here for you.",
            "Ugh, nakakainis nga 'yan. Pero baka cool off muna bago ka mag-reply, baka may masabi kang pagsisihan mo.",
            "I get why you're mad. Kwento mo nga, ano ba talaga nangyari?",
            "You don't have to act like okay ka lang. Sabihin mo lang kung ano yung nararamdaman mo, pero kalma lang muna.",
            "Ang hirap pag may hindi nagkaintindihan. Baka kailangan lang muna ng konting space bago mag-usap ulit.",
            "Gets ko, nakakagalit talaga minsan. Pero wag mo munang patulan habang mainit pa ulo mo, okay?",
            "It's okay to be hurt. Hindi mo kailangan magpanggap na wala lang 'yon.",
            "Maybe tell them what bothered you, pero in a way na hindi na lalo magiging away. Kaya mo 'yan.",
            "Nakaka-stress pag may issue kayo. Take a minute muna, tapos isipin mo kung ano gusto mong sabihin.",
            "I'm on your side, friend. Let's not make it worse lang habang galit pa lahat.",
            "That would annoy me too, honestly. Want to tell me exactly what they said?",
            "Maybe wait until you've both cooled down, then talk it through. Mas okay kaysa magkasagutan habang galit.",
            "You can stand up for yourself without turning it into an even bigger fight.",
            "If you need space muna, that's okay. You can reply when you're ready.",
            "Gets ko na nasaktan ka. Andito lang ako, kwento mo lang."
        ],
        general: [
            "Sounds like this has been on your mind a lot. Do you want to talk through the part that's bothering you most? I'll listen.",
            "I hear you. You don't have to solve the whole thing right now. What's one small thing you can do? I'll try my best to help you.",
            "That sounds like a lot to carry. I'm here, okay? Let's take it one bit at a time. Take a breather. Everything's gonna be alright.",
            "Aww, sounds like a lot. Wanna tell me more about it? I'm listening.",
            "Hey, it's okay if you don't know what to do yet. We'll figure it out, one thing at a time.",
            "Take a breather muna. You don't need to have everything figured out right now.",
            "Whatever it is, you don't have to deal with it alone. I'm here, okay?",
            "I get you. Sometimes you just need to let it out and have someone listen.",
            "It's been a rough day, huh? Be kind to yourself muna. You deserve a little break.",
            "You can take your time. No pressure to solve everything right away.",
            "Tell me what's going on, friend. Maybe talking about it will help a little.",
            "It's okay to feel all over the place sometimes. I'm here for you, promise.",
            "Hey, wanna talk about it? You don't have to make it sound neat or anything.",
            "Sounds like you could use a friend right now. I'm listening.",
            "Whatever happened, we can take it one step at a time. No rush.",
            "You don't need the perfect words. Just tell me what's been going on.",
            "I'm here lang, okay? You can vent if you want."
        ]
    },
    tl: {
        worry: [
            "Parang ang tagal na nitong gumugulo sa isip mo. Himayin muna natin kung ano ang kaya mong gawin ngayon. Kaya mo na ba?",
            "Gets ko kung bakit ka nag-aalala. Isa-isahin lang natin, ha? Hindi natin kailangan i-overthink ang mga bagay na wala pa namang resulta.",
            "Nakaka-stress nga 'yan. Hindi mo kailangang isipin lahat ng posibleng mangyari ngayon. Subukan mong sabihin sa sarili mo ang magiging response ng taong gusto mong sabihan nitong mga sinasabi mo.",
            "Aww, gets kita. Ang hirap pag paulit-ulit 'yan sa isip mo. Gusto mo bang ikwento kung ano'ng pinaka-nakaka-bother?",
            "Alam ko, mahirap hindi isipin. Isa lang muna sa kaya mong gawin ngayon, okay?",
            "Hindi mo kailangan ayusin lahat ngayon. Pahinga ka muna nang konti, tapos isipin ulit natin.",
            "Sobrang dami na yata iniisip mo, no? Wag mong piliting solusyonan lahat nang sabay-sabay.",
            "Gets ko. Minsan nag-aalala tayo sa mga bagay na hindi pa naman nangyayari. Dahan-dahan lang tayo.",
            "Uy, ginagawa mo naman ang best mo. Kahit maliit lang muna ang next step, okay na 'yon.",
            "Alam ko madaling sabihin, pero chill ka muna kahit saglit. Unti-unti rin 'yang maaayos.",
            "Ang bigat naman niyan, friend. Kwento mo sa 'kin kung gusto mo, makikinig ako.",
            "Wag masyadong harsh sa sarili mo, ha? Lahat naman tayo nag-aalala minsan.",
            "Isa-isa lang muna, friend. Hindi mo kailangang isipin lahat ngayon na ngayon.",
            "Alam kong ang hirap alisin sa isip. Gusto mo bang ikwento sa 'kin?",
            "Pahinga muna saglit sa kakaisip. Balikan natin 'yan kapag mas kalmado ka na.",
            "Okay lang kabahan. Hindi ibig sabihin nun siguradong may masamang mangyayari.",
            "Nandito lang ako, ha? Kahit magulo pa yung kwento mo, makikinig ako."
        ],
        relationships: [
            "Parang importante talaga sa'yo 'yang taong 'yan. Ano kaya ang gusto mong maintindihan niya? Subukan mong i-confront o kausapin siya.",
            "Aray mo, magulo talaga minsan ang ganitong sitwasyon. Hindi mo kailangang magdesisyon agad sa lahat. Huminga ka muna, at pag-isipan kung ano ang sunod mong gagawin.",
            "Gets ko kung bakit nasa isip mo 'yan. Ano ba ang gusto mong mangyari next? Nandito lang ako. P'wede mong i-share sa 'kin.",
            "Hala, ang gulo talaga minsan ng love life. Sabihin mo na lang kaya sa kanya yung totoong nararamdaman mo?",
            "Gets ko, importante siya sa'yo. Pero isipin mo rin sarili mo, ha?",
            "Deserve mo rin ng taong nakikinig sa'yo, hindi yung ikaw lang lagi ang nag-eeffort.",
            "Kung may bumabagabag sa'yo, sabihin mo. Hindi mo kailangan sarilinin lahat.",
            "Baka mas okay tanungin mo na lang siya kaysa hulaan mo nang hulaan. Less overthink, diba?",
            "Ang hirap niyan, lalo na kung di mo alam kung saan ka lulugar. Nandito lang ako kung gusto mong magkwento.",
            "P'wede mong ma-miss ang isang tao pero alam mo pa ring hindi okay yung trato niya sa'yo.",
            "Kung lagi ka na lang nalilito sa kanya, baka pahinga ka muna saglit at isipin kung ano'ng gusto mo.",
            "Di mo kailangan ayusin lahat ng tungkol sa relasyon n'yo ngayon. Maging honest ka muna sa sarili mo.",
            "Hala, ang complicated naman. Ano ba yung gusto mong maintindihan niya tungkol sa nararamdaman mo?",
            "P'wede mo siyang mahalin at alagaan pa rin ang sarili mo, ha?",
            "Baka mas okay mag-usap kayo kapag pareho na kayong kalmado. Wag pilitin kung mainit pa ulo n'yo.",
            "Okay lang kung hindi mo pa alam ang gagawin. Nakakalito talaga minsan ang feelings.",
            "Kwento mo sa 'kin kung ano'ng nangyari, friend. Makikinig muna ako, walang judgment."
        ],
        work: [
            "Parang mabigat sa'yo ang trabaho o school ngayon ah. Ano 'yung pinakaunang kailangan mong asikasuhin? Baka makatulong ako.",
            "Ang dami mong kailangang isipin. Unahin muna natin 'yung sa tingin natin ay madali. At kung sa tingin mo na nahihirapan ka sa lahat, kailangan mong isipin na magpahinga muna.",
            "Naiintindihan kita, at ang sitwasyon mo ngayon. Hindi mo kailangang planuhin ang buong kinabukasan mo ngayon. Isipin mo rin ang sarili mo, kung okay ka pa ba sa mga ginagawa mo ngayon.",
            "Nakakapagod talaga ang school o work. Unahin mo muna yung unang kailangan gawin, saka na yung iba.",
            "Hindi mo kailangan matapos lahat ngayong araw. Pahinga ka rin, kailangan mo rin 'yan.",
            "Parang ang dami mong ginagawa. Ano ba yung pinaka-urgent? Doon muna tayo.",
            "Okay lang kung di mo matapos agad lahat. Hindi ka naman robot, friend.",
            "Isulat mo muna yung mga kailangan mong gawin para di lahat nasa isip mo. Isa-isa lang.",
            "Alam kong pagod ka na. Gawin mo lang kaya mo today, tapos pahinga na. Bukas ulit.",
            "Wag ka ma-stress sa perfect na plano. Simulan mo lang kahit sa maliit na bagay.",
            "P'wede ka naman humingi ng tulong, alam mo ba 'yon? Di mo kailangang gawin lahat mag-isa.",
            "Uy, at least sinusubukan mo pa rin. Ano ba yung pinaka-nagpapahirap sa school o work ngayon?",
            "Nakakapagod nga 'yan. Nakapagpahinga ka na ba at nakakain kahit konti?",
            "Pumili lang muna tayo ng isang gagawin. Maghihintay naman yung iba sa listahan.",
            "Okay lang kung hindi sobrang productive ang araw mo. Ginagawa mo naman ang best mo.",
            "Baka p'wede kang magtanong sa kaklase o katrabaho mo. Di mo kailangang hulaan mag-isa.",
            "Kaya mo 'yan, friend. Kahit maliit na progress, progress pa rin 'yan."
        ],
        conflict: [
            "Parang talagang tinamaan ka sa nangyari, grabe nga 'yan. Baka bigyan mo muna ang sarili mo ng oras bago sumagot. P'wede mo kasing pagsisihan 'yan pagkatapos.",
            "Oo, masakit talaga minsan ang gan'yan. Ano kaya ang makakatulong para maging okay ka sa susunod mong gagawin? Nandito lang ako, hinding-hindi ka mag-isa.",
            "Gets ko kung bakit ka nagagalit. P'wede mong sabihin ang nararamdaman mo nang hindi kailangang ayusin lahat agad. Mas'yado ka ng nadadala ng emosyon. Hinga muna, okay?",
            "Ugh, nakakainis nga 'yan. Pero cool off muna bago ka mag-reply, baka may masabi kang pagsisihan mo.",
            "Gets ko kung bakit ka galit. Kwento mo nga, ano ba talaga nangyari?",
            "Di mo kailangang magpanggap na okay ka lang. Sabihin mo lang yung nararamdaman mo, pero kalma muna.",
            "Ang hirap pag may hindi nagkaintindihan. Baka pahinga muna kayo nang konti bago mag-usap ulit.",
            "Gets ko, nakakagalit talaga minsan. Wag mo muna patulan habang mainit pa ulo mo, okay?",
            "Okay lang masaktan. Di mo kailangan magkunwari na wala lang 'yon.",
            "Baka sabihin mo sa kanya kung ano yung nakasakit sa'yo, pero wag na sana mauwi sa mas malaking away. Kaya mo 'yan.",
            "Nakaka-stress pag may issue kayo. Hinga muna saglit, tapos isipin mo kung ano gusto mong sabihin.",
            "Kampi ako sa'yo, friend. Wag lang natin palalain habang galit pa lahat.",
            "Nakakainis nga 'yan, honestly. Ano ba mismo yung sinabi niya?",
            "Baka hintayin n'yong kumalma muna bago pag-usapan. Mas okay kaysa magsagutan habang galit.",
            "P'wede mong ipagtanggol ang sarili mo nang hindi na pinalalaki yung away.",
            "Kung kailangan mo muna ng space, okay lang. Sumagot ka kapag ready ka na.",
            "Gets ko na nasaktan ka. Andito lang ako, kwento mo lang."
        ],
        general: [
            "Parang matagal-tagal na 'yang nasa isip mo. Ano 'yung pinaka-gumugulo sa'yo tungkol dito? Hindi ka nag-iisa, kasama mo ako.",
            "Naiintindihan kita. Hindi mo kailangang ayusin lahat ngayon. Ano ang isang bagay na nasa isip mo na p'wede mong gawin?",
            "Ang bigat n'yan. Nandito lang ako—isa-isahin lang natin, okay? Isipin mo na hindi ka mag-isa. Kahit ilang beses ko 'tong sabihin sa'yo.",
            "Aww, ang bigat naman. Gusto mo bang magkwento? Makikinig ako.",
            "Uy, okay lang kung di mo pa alam gagawin. Pag-iisipan natin 'yan, isa-isa lang.",
            "Pahinga muna saglit, ha? Di mo kailangan may sagot agad sa lahat.",
            "Anuman 'yan, di mo kailangang harapin mag-isa. Nandito lang ako.",
            "Gets kita. Minsan kailangan lang ilabas lahat at may makinig sa'yo.",
            "Ang hirap ng araw mo no? Wag mo muna masyadong pahirapan sarili mo. Pahinga ka rin.",
            "Take your time lang. Walang nagmamadali sa'yo na ayusin lahat ngayon.",
            "Kwento mo sa 'kin, friend. Baka gumaan kahit konti pag nasabi mo na.",
            "Okay lang kung magulo lahat minsan. Nandito ako para sa'yo, promise.",
            "Uy, gusto mo bang pag-usapan? Di mo kailangang ayusin muna yung sasabihin mo.",
            "Parang kailangan mo ng kaibigan ngayon. Makikinig ako.",
            "Anuman 'yan, isa-isahin lang natin. Walang nagmamadali.",
            "Di mo kailangan ng perfect na salita. Sabihin mo lang kung ano'ng nangyayari.",
            "Nandito lang ako, okay? Mag-vent ka lang kung gusto mo."
        ]
    }
};
var activeScan = null;
var isAnalyzing = false;

function analyzeThought(inputText, language) {
    var lower = inputText.toLowerCase();
    var topic = "general";
    var topics = Object.keys(topicKeywords);

    for (var i = 0; i < topics.length; i++) {
        if (topicKeywords[topics[i]].some(function(keyword) {
            return lower.includes(keyword.trim());
        })) {
            topic = topics[i];
            break;
        }
    }

    var options = responses[language][topic];
    return options[Math.floor(Math.random() * options.length)];
}

function resetView() {
    if (activeScan) {
        clearInterval(activeScan);
        activeScan = null;
    }
    thought.disabled = false;
    bar.style.width = "0%";
    loading.style.display = "none";
    result.style.display = "none";
    analyzeBtn.style.display = "inline-block";
    loadingText.textContent = "Waiting for input...";
    isAnalyzing = false;
}

analyzeBtn.addEventListener("click", function() {
    if (isAnalyzing) {
        return;
    }
    if (thought.value.trim() === "") {
        alert("Please type something first.");
        return;
    }
    isAnalyzing = true;
    analyzeBtn.style.display = "none";
    thought.disabled = true;
    loading.style.display = "block";
    result.style.display = "none";
    var progress = 0;
    activeScan = setInterval(function() {
        progress += 2;
        bar.style.width = progress + "%";
        if (progress < 30) {
            loadingText.textContent = "Reading your thoughts...";
        } else if (progress < 60) {
            loadingText.textContent = "Checking valid worries...";
        } else if (progress < 90) {
            loadingText.textContent = "Calculating overthinking level...";
        } else {
            loadingText.textContent = "Finalizing results...";
        }
        if (progress >= 100) {
            clearInterval(activeScan);
            activeScan = null;
            resultText.textContent = analyzeThought(thought.value, languageSelect.value);
            loading.style.display = "none";
            result.style.display = "block";
            isAnalyzing = false;
        }
    }, 100);
});

againBtn.addEventListener("click", function() {
    thought.value = "";
    resetView();
});

thought.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        analyzeBtn.click();
    }
});