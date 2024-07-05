const quizList = [
    // {
    //     text: '過去に発売されたチロルチョコの種類は275種類である。',
    //     answer: 0,
    //     memo: '300種類を超えるらしい。'
    // },
    // {
    //     text: '全国のセブンイレブンの店舗数は16704店である。',
    //     answer: 0,
    //     memo: '2023年6月末現在、全国に21407店あるらしい。'
    // },
    // {
    //     text: 'カルビーのポテトチップスにはSUPERBIGというサイズがあるものがある。',
    //     answer: 1,
    //     memo: '472g入っているらしい。'
    // },
    // {
    //     text: 'サイゼリアの間違い探しは41種類ある。(2023年4月現在)',
    //     answer: 1,
    //     memo: '初めて登場したのは2006年。'
    // },
    // {
    //     text: '東京ディズニーシーにある、タワー・オブ・テラーの高さは63mである。',
    //     answer: 0,
    //     memo: '正しくは59mでこれより高くすると航空法に引っかかってしまうらしい。'
    // },
    // {
    //     text: '読売ランドのグッジョバ!!の『日清焼きそばU.F.O.』の味の組み合わせは5460通りである。',
    //     answer: 1,
    //     memo: '『日清焼きそばU.F.O.』を作るワークショップは読売ランドが日本初!!'
    // },
    // {
    //     text: 'ムーミンはカバである。',
    //     answer: 0,
    //     memo: '正しくはムーミン谷の妖精らしい。'
    // },
    // {
    //     text: 'ロッテリアのメニュー表にはスマイルがある。',
    //     answer: 0,
    //     memo: 'マクドナルドにはスマイルがあることがあるらしい。'
    // },
    // {
    //     text: '七夕の短冊に書くお願い事を叶えてくれるのは織姫様である。',
    //     answer: 0,
    //     memo: '短冊にお願い事を書くのは昔の人が字の練習をするためらしい。つまり誰も叶えてはくれない...'
    // }

    {
        text: 'ゆづるの中間テストの数Bの点数は43点である。',
        answer: 0,
        memo: '正しくは44点（；；）'
    },
    {
        text: 'ゆづるが短冊に願ったことは「英語ができるようになりますように」である。',
        answer: 0,
        memo: '「ぐっすり寝られますように」と願った'
    },
    {
        text: 'ゆづるの中間テストでの生物の勉強時間は10分である。',
        answer: 1,
        memo: '70点だった。'
    },
    // {
    //     text: '今日の登校時間は110分である。(１の位四捨五入)',
    //     answer: 0,
    //     memo: '約130分だと思う。'
    // },
    {
        text: 'ゆづるの朝の登校時間は80分である。',
        answer: 1,
        memo: 'とても無駄の無い乗換え時間!'
    },
    {
        text: 'ゆづるは過去に100点満点のテストで1桁を取ったことがある。',
        answer: 0,
        memo: '実は無いのです!最低点はもちろん英語...'
    },
    // {
    //     text: 'ゆづるがまほちゃんとLINEを交換したのは2022年(中3の時)の3月より前である。',
    //     answer: 0,
    //     memo: 'どうやら2023年の6月7日らしい。'
    // },
    {
        text: 'ゆづるの一番好きな花はネモフィラである。',
        answer: 0,
        memo: 'デルフィニウムっていう花が好き。'
    },
    // {
    //     text: '1年前の生徒面談でゆづるがサイゼリアで食べたものはパスタである。',
    //     answer: 1,
    //     memo: '海鮮系のパスタを食べた気がする。'
    // },
    {
        text: 'ゆづるの血液型はAB型である。',
        answer: 0,
        memo: 'O型でしたー。'
    },
    // {
    //     text: 'ゆづるの今日の睡眠時間は6時間である。',
    //     answer: 0,
    //     memo: '約2時間....常に眠い..'
    // },
    {
        text: 'ゆづるの6月の最長睡眠時間は6時間である。',
        answer: 1,
        memo: '普段は3時間未満....常に眠い..'
    },
    {
        text: 'ゆづるの英語の過去最低点は13点である。(wordtestを除く)',
        answer: 0,
        memo: '正しくは11点'
    },
    {
        text: 'ゆづるは文化祭の役員をやっている。',
        answer: 0,
        memo: '実行委員だから役員ではない!'
    },
    {
        text: 'ゆづるの今年度の出席番号は14番である。',
        answer: 0,
        memo: '正しくは16番'
    },
    // {
    //     text: 'ゆづるが昨日一番驚いたことは「帰り道の下馬の交差点にまほちゃんがいたこと」である。',
    //     answer: 0,
    //     memo: '正解は「まほちゃんとかなめちゃんがLINE交換していないこと」でしたー。'
    // },
    {
        text: 'ゆづるには上にお姉ちゃんまたはお兄ちゃんがいる。',
        answer: 0,
        memo: '妹がいる。'
    },
    {
        text: 'ゆづるのスマホに入っているゲームアプリは2つである。',
        answer: 1,
        memo: '2つともターゲット層が高校生でも女子でもなかったりする。'
    },
    // {
    //     text: 'れんこんさんの付き添いでみんなでテラスモールに行ったとき、ゆづるはロフトでシマエナガの付箋を「しじゅうから」だと思って買った。',
    //     answer: 0,
    //     memo: 'スズメだと思って買ったらスズメじゃなかった...'
    // },
    {
        text: 'ゆづるが一番嫌いな教科は英語である。',
        answer: 0,
        memo: '体育が一番嫌い...!'
    },
    {
        text: 'ゆづるは小学生時代、日能研の町田校に通っていた。',
        answer: 0,
        memo: 'SAPIXでしたー。'
    },
    {
        text: 'ゆづるの誕生日は勤労感謝の日である。',
        answer: 0,
        memo: '11月3日は文化の日!'
    },
    {
        text: 'ゆづるが好きな色は水色である。',
        answer: 1,
        memo: '正直青はあまり好きではない...'
    },
    {
        text: 'ゆづるが今「1番好きな教科は?」と聞かれて答える教科はおそらく数学ですが、2番目に好きな教科は化学である。',
        answer: 1,
        memo: 'みんなで受ける授業が楽しい(*´꒳`*)'
    },
    {
        text: '6月にゆづるが一番長く開いていたスマホアプリはYouTubeである。',
        answer: 0,
        memo: 'どうやら雀魂らしい。'
    },
    {
        text: 'ゆづるのさっきまでの19問の誤答数は0問である。',
        answer: 1,
        memo: '間違えるはずがない!'
    },
    //まほちゃんが9点
];


//今何問目か
let quizNumber = 0;
// 正解数
let score = 0;

//問題を表示する
function showQuiz() {
    document.getElementById("next").style.display = "none";
    document.getElementById("end").style.display = "none";
    const quiz = quizList[quizNumber];
    document.getElementById('quiz-text').innerText = quiz.text;
    document.getElementById('button-no').removeAttribute("disabled");
    document.getElementById('button-yes').removeAttribute("disabled");
}

//回答ボタンを押した時
function submit(input) {
    document.getElementById('button-no').setAttribute("disabled", true);
    document.getElementById('button-yes').setAttribute("disabled", true);
    //答え合わせ
    check(input);
    //解説を出す
    const quiz = quizList[quizNumber];
    // document.getElementById('comment').innerText = quiz.memo;
    // document.getElementById('quiz-text').innerText = quiz.memo;
    //問題番号を1つ進める
    quizNumber += 1;
    //次の問題へ
    /*if (next_quiz == 1, quizNumber < quizList.length) {
        next_quiz()
    } else {
        finish();
    }*/
    // 問題があれば問題文を表示、そうでなければ結果発表する。
    /*if (quizNumber < quizList.length) {
        showQuiz();
    } else {
        finish();
    }*/
    document.getElementById("next").style.display = "block";
}

function next_quiz() {
    if (quizNumber < quizList.length) {
        document.getElementById('judgement').innerText = '';
        document.getElementById('comment').innerText = '';
        showQuiz();
    } else {
        finish();
    }
}


//正解ならば、得点を1加算する。
function check(input) {
    const quiz = quizList[quizNumber];
    let result = '残念...'
    if (input == quiz.answer) {
        score += 1;
        result = '正解!'
    }
    document.getElementById('quiz-text').innerText = ` ${result}：${quiz.memo}`;
}

function reload() {
    window.location.reload();
}

//結果発表
function finish() {
    document.getElementById("next").style.display = "none";
    const finish_text = `${quizList.length}問中、${score}問正解でした！`;
    document.getElementById('finish').innerText = finish_text
    document.getElementById("end").style.display = "block";
}