var log = "";


// send 버튼 클릭 할
function sendtext() {
	var nickname = document.getElementById("nickname").value;
	var text = document.getElementById("input").value;
	var date = new Date
	var hour = date.getHours();
	hour = convert(hour);
	var min = date.getMinutes();
	min = convert(min);
	var sec = date.getSeconds();
	sec = convert(sec);
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
// 시간을 두자리로 바꿔줌
function convert(digit) {
	if(digit < 10){ // 10보다 작으면, 숫자앞에 0을 붙여서 리턴
		digit = "0" + digit;
		return digit;
	}
	else{
		return digit;
	}
}