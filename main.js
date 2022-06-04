//랜덤번호 지정 fin.

//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 down!!
//랜덤번호가 > 유저번호 up!!
//reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable 된다.)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 줄이지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 줄이지 않는다.


let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let chances = 5
let gameOver = false
let history = []

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus", function(){userInput.value=""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100) + 1
    console.log("정답", computerNum)
}

function play(){
//    console.log("게임시작")
    let userValue = userInput.value
    if(userValue < 0 || userValue>100){
        resultArea.textContent = "1과 100사이로 입력해주세요"        
        return
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 저장되어 있는 값 입니다"
        return
    }

    chances--
    console.log(chances)
    chanceArea.textContent = `남은기회 : ${chances}번`

    console.log(userValue)


    if(userValue < computerNum){
        console.log("up!!!")
        resultArea.textContent = "up!!!"
    }else if(userValue > computerNum){
        console.log("down!!")
        resultArea.textContent = "down!!"
    }else {
        console.log("정답입니다.")
        resultArea.textContent = "정답"
        gameOver = true
    }

    history.push(userValue)
    console.log(history)

    if(chances<1){
        gameOver = true
    }
    if(gameOver==true){
        playButton.disabled = true
    }

}

function reset(){
    // user input창이 깨끗이 정리되고 새로운 번호가 생성
    userInput.value =""
    pickRandomNum()
    resultArea.textContent = "정답이 리셋되었습니다"

}

pickRandomNum();
