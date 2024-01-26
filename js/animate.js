const fadeInTarget = document.querySelectorAll('.animate__animated'); 

function observation(){
    // 各要素に対して処理を繰り返す
    fadeInTarget.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__swing'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__swing');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);