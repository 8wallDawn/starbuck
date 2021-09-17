// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    //<div id="player"></div> 내의 player를 매개변수로 받는다
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID <재상할 유튜브 url 참고>
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function (event) { // 영상 재생의 준비가 되면 function() 실행
                event.target.mute() // 재생하는 영상 음소거
            }
        }
    });
}