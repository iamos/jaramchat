var log = "";
// var message_time ;
// message_time = new Date.getDate();

// send 버튼 클릭 할
function sendtext() {
	var nickname = document.getElementById("nickname").value;
	var text = document.getElementById("input").value;
	var date = new Date
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var time = hour + " : " + min + " : " + sec;
	// alert(hour + " : " + min+ " : " + sec );
	
	// use this!
	// var line = "\n" + nickname +" + "+ text;
	
	log = log + "\n" + "( " + time +" )  " + nickname + " : " + text ;
	// 로그 textarea 에 뿌리는것
	textarea = document.getElementById("log");
	textarea.value = log;
	// 스크롤 자동으로 제일 아래로
	textarea.scrollTop = textarea.scrollHeight;
	
	// 타이핑 창 초기화
	document.getElementById("input").value = "";


}

// 엔터키 누를 때
function press_enter(){
	if(event.keyCode == "13"){
		sendtext();
	}
}
