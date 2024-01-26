// モーダルウィンドウ
window.addEventListener('DOMContentLoaded', function () {
    /* 決め打ち ロゴマーク*/
    const modal_html_logo01 = `
        <div class="micromodal-slide" id="modal_logo01" aria-hidden="true">
            <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
                <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal_logo01-title">
                    <div class="modal-header">
                        <h2 class="modal-title" id="modal_logo01-title">架空の枕メーカのロゴマーク（改善前）</h2>
                        <button class="modal-close" aria-label="Close modal"
                            data-micromodal-close></button>
                    </div>
                    <div class="modal-content" id="modal_logo01-content">
                        <div class="modal-image">
                            <img src="img/001_logo_01.png" alt="ロゴ01">
                        </div>
                        <p class="modal-text">
                            架空の枕メーカのロゴマークを作成しました。
                            良質な睡眠をコンセプトに縁起物のバクをモチーフにして作成しました。
                            睡眠をイメージして月が二つ向い合っている形から作成しました。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <li class="logo01"><img data-micromodal-trigger="modal_logo01" class="modal-open-button" src="img/001_logo_01.png" alt="ロゴ01"></li>`

    const modal_html_logo03 = `
        <div class="micromodal-slide" id = "modal_logo03" aria-hidden="true">
        <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
            <div class="modal-container" role="dialog" aria-modal="true"
                aria-labelledby="modal_logo03-title">
                <div class="modal-header">
                    <h2 class="modal-title" id="modal_logo03-title">架空の枕メーカのロゴマーク（改善後）</h2>
                    <button class="modal-close" aria-label="Close modal"
                        data-micromodal-close></button>
                </div>
                <div class="modal-content" id="modal_logo03-content">
                    <div class="modal-image">
                        <img src="img/001_logo_03.png" alt="ロゴ03">
                    </div>
                    <p class="modal-text">
                        作成した架空の枕メーカのロゴマークを改善したものです。
                        改善案などのアドバイスを受けて色や枠線の太さなどを見直しました。
                        フォントについても、枠線の太さなどを考慮して硬めのものに変更しました。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <li class="logo02"><img data-micromodal-trigger="modal_logo03" class="modal-open-button" src="img/001_logo_03.png" alt="ロゴ03"></li>`

    const modal_html_logo04 = `
    <div class="micromodal-slide" id = "modal_logo04" aria-hidden="true">
        <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
            <div class="modal-container" role="dialog" aria-modal="true"
                aria-labelledby="modal_logo04-title">
                <div class="modal-header">
                    <h2 class="modal-title" id="modal_logo04-title">架空の布団メーカのロゴマーク</h2>
                    <button class="modal-close" aria-label="Close modal"
                        data-micromodal-close></button>
                </div>
                <div class="modal-content" id="modal_logo04-content">
                    <div class="modal-image">
                        <img src="img/001_logo_04.png" alt="ロゴ04">
                    </div>
                    <p class="modal-text">
                        架空の枕メーカのロゴに続き、同じく良質な睡眠をコンセプトに架空の布団メーカのロゴマークを作成しました。
                        白銀比を基にして、こちらも三日月型を２つ組み合わせ、羽毛布団の羽を提供するダックのシルエットで作成しました。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <li class="logo03"><img data-micromodal-trigger="modal_logo04" class="modal-open-button" src="img/001_logo_04.png" alt="ロゴ04"></li>`;

    /* 決め打ち バナー*/
    const modal_html_banner01 = `
        <div class="micromodal-slide" id = "modal_banner01" aria-hidden="true">
        <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
            <div class="modal-container" role="dialog" aria-modal="true"
                aria-labelledby="modal_banner01-title">
                <div class="modal-header">
                    <h2 class="modal-title" id="modal_banner01-title">化粧品のバナー</h2>
                    <button class="modal-close" aria-label="Close modal"
                        data-micromodal-close></button>
                </div>
                <div class="modal-content" id="modal_banner01-content">
                    <div class="modal-image">
                        <img src="img/002_banner_01.jpg" alt="バナー01">
                    </div>
                    <p class="modal-text">
                    授業で作成しました。写真素材は学校でいただき、授業に沿って写真を加工して作成しました。
                    Photoshopで写真素材の色味を調整して影を消してから利用しています。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <li class="banner01"><img data-micromodal-trigger="modal_banner01" class="modal-open-button" src="img/002_banner_01.jpg" alt="バナー01"></li>`;

    const modal_html_banner02 = `
        <div class="micromodal-slide" id = "modal_banner02" aria-hidden="true">
        <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
            <div class="modal-container" role="dialog" aria-modal="true"
                aria-labelledby="modal_banner02-title">
                <div class="modal-header">
                    <h2 class="modal-title" id="modal_banner02-title">架空の支払いサービスのバナー</h2>
                    <button class="modal-close" aria-label="Close modal"
                        data-micromodal-close></button>
                </div>
                <div class="modal-content" id="modal_banner02-content">
                    <div class="modal-image">
                        <img src="img/002_banner_02.jpg" alt="バナー02">
                    </div>
                    <p class="modal-text">
                    授業で作成しました。お手本を見ながら授業に沿って作成しました。
                    写真素材は使用せずIllustratorで作成しました。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <li class="banner02"><img data-micromodal-trigger="modal_banner02" class="modal-open-button" src="img/002_banner_02.jpg" alt="バナー02"></li>`;

    const modal_html_banner03 = `
        <div class="micromodal-slide" id = "modal_banner03" aria-hidden="true">
        <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
            <div class="modal-container" role="dialog" aria-modal="true"
                aria-labelledby="modal_banner03-title">
                <div class="modal-header">
                    <h2 class="modal-title" id="modal_banner03-title">訓練校のバナー</h2>
                    <button class="modal-close" aria-label="Close modal"
                        data-micromodal-close></button>
                </div>
                <div class="modal-content" id="modal_banner03-content">
                    <div class="modal-image">
                        <img src="img/002_banner_03.jpg" alt="バナー03">
                    </div>
                    <p class="modal-text">
                    授業で作成しました。通っている訓練校の募集要綱を基にフリーの写真素材を使って作成しました。
                    Photoshopで写真素材の明るさなどを調整して背景にしました。文字が読みやすくなるよう影をつけました。募集要項を元に、講座の簡潔なアピールポイントを考えました。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <li class="banner03"><img data-micromodal-trigger="modal_banner03" class="modal-open-button" src="img/002_banner_03.jpg" alt="バナー03"></li>`;

    /* 決め打ち ウェブサイト*/
    const modal_html_web01 = `
    <div class="micromodal-slide" id = "modal_web01" aria-hidden="true">
    <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-container" role="dialog" aria-modal="true"
            aria-labelledby="modal_web01-title">
            <div class="modal-header">
                <h2 class="modal-title" id="modal_web01-title">ウェブサイト</h2>
                <button class="modal-close" aria-label="Close modal"
                    data-micromodal-close></button>
            </div>
            <div class="modal-content" id="modal_web01-content">
                <div class="modal-image">
                    <img src="img/003_web_design.jpg" alt="ウェブサイト01">
                </div>
                <p class="modal-text">
                授業で作成したWebサイトのデザインカンプです。動物のいるカフェという題材です。
                自家焙煎コーヒーがメインのモダンな喫茶店のリブランディングが主な目的です。
                オーナーがペットを飼っているという設定で、動物が関わるサービスやデザインを考えました。
                </p>
                <p class="modal-text">
                オーナーのペットを亀として、リブランディングのコンセプトを「デジタルデトックス」に設定しました。リブランディングで想定する客層を近隣の専門学校の学生と観光客と想定しています。ペットを亀としているので、メインカラーを緑色にして全体やメニュー表、ヘッダーやフッターの背景に六角形を重ねた模様を表示しています。
                </p>
                <p class="modal-text">
                ロゴマークはメインカラーとして植物と亀の緑色、コーヒーの茶色、インスピレーションの紫色を設定して作成しました。
                </p>
            </div>
        </div>
    </div>
</div>
<li class="web01"><img data-micromodal-trigger="modal_web01" class="modal-open-button" src="img/003_web_logo.png" alt="ウェブサイト01"></li>`;



    const modal_html_cafebanner01 = `
    <div class="micromodal-slide" id = "modal_cafebanner01" aria-hidden="true">
    <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-container" role="dialog" aria-modal="true"
            aria-labelledby="modal_cafebanner01-title">
            <div class="modal-header">
                <h2 class="modal-title" id="modal_cafebanner01-title">カフェのロゴマーク01</h2>
                <button class="modal-close" aria-label="Close modal"
                    data-micromodal-close></button>
            </div>
            <div class="modal-content" id="modal_cafebanner01-content">
                <div class="modal-image">
                    <img src="img/003_cafeb_01.png" alt="カフェバナー01">
                </div>
                <p class="modal-text">
                カフェのロゴバナーの別案としてFigmaで作成しました。
                デジタルデトックスをコンセプトにしたカフェのバナーとして写真選びや文字の配置に気をつけました。
                </p>
            </div>
        </div>
    </div>
</div>
<li class="cafebanner01"><img data-micromodal-trigger="modal_cafebanner01" class="modal-open-button" src="img/003_cafeb_01.png" alt="バナー03"></li>`;

    const modal_html_cafebanner02 = `
    <div class="micromodal-slide" id = "modal_cafebanner02" aria-hidden="true">
    <div class="micromodal-overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-container" role="dialog" aria-modal="true"
            aria-labelledby="modal_cafebanner02-title">
            <div class="modal-header">
                <h2 class="modal-title" id="modal_cafebanner02-title">カフェのロゴマーク02</h2>
                <button class="modal-close" aria-label="Close modal"
                    data-micromodal-close></button>
            </div>
            <div class="modal-content" id="modal_cafebanner02-content">
                <div class="modal-image">
                    <img src="img/003_cafeb_02.png" alt="カフェバナー02">
                </div>
                <p class="modal-text">
                カフェのロゴバナーの別案としてFigmaで作成しました。
                デジタルデトックスをコンセプトにしたカフェのバナーとして写真選びや文字の配置に気をつけました。
                </p>
            </div>
        </div>
    </div>
</div>
<li class="cafebanner02"><img data-micromodal-trigger="modal_cafebanner02" class="modal-open-button" src="img/003_cafeb_02.png" alt="カフェバナー02"></li>`;


    document.querySelector('.ul_logo').innerHTML = modal_html_logo01 + modal_html_logo03 + modal_html_logo04;
    document.querySelector('.ul_banner').innerHTML = modal_html_banner01 + modal_html_banner02 + modal_html_banner03;
    document.querySelector('.ul_web').innerHTML = modal_html_web01 + modal_html_cafebanner01 + modal_html_cafebanner02;

});


// クリックイベント調整
//ロゴマーク
const ul_logo = document.querySelector('.ul_logo');
ul_logo.addEventListener('click', function (event) {
    let tmp_modal_logo = event.target.attributes[0].nodeValue;
    if(tmp_modal_logo.includes('modal_logo')){
        MicroModal.show(tmp_modal_logo);    
    }else{}
    return;
})
//バナー
const ul_banner = document.querySelector('.ul_banner');
ul_banner.addEventListener('click', function (event) {
    let tmp_modal_banner = event.target.attributes[0].nodeValue;
    if(tmp_modal_banner.includes('modal_banner')){
        MicroModal.show(tmp_modal_banner);    
    }else{}
    return;
})
//サイト
const ul_web = document.querySelector('.ul_web');
ul_web.addEventListener('click', function (event) {
    let tmp_modal_web = event.target.attributes[0].nodeValue;
    if(tmp_modal_web.includes('modal_web') || tmp_modal_web.includes('modal_cafebanner')){
        MicroModal.show(tmp_modal_web);
    }else{}
    return;
})







