// 宣告一個變數 name
var name;
// 宣告一個變數 mybtn 取得id btn這個物件
var mybtn = document.getElementById("btn");
// 監聽mybtn 當被按下時 開始
mybtn.addEventListener("click", start);

/* .ther(function(result){
  console.log(result); //result 是 swal 回傳的結果已物件提供。
  if(result.dismiss==='cencel') console.log("被按下了取消");
  if(result.value) console.log("使用者輸入了"+result.value);
  //  * Swal.fire({
  //  *   #insert a new swal event be here
  //  * });
}); */

// 取得角色名稱
function play() {
  Swal.fire({
    title: '開始宇宙探險，請輸入你的名字',//標題
    input: 'text',//輸入欄位的類型
    inputValue: '加加林',//欄位預設值
    showLoaderOnConfirm: true,//啟用輸入框
    confirmButtonText: '開始冒險旅程',//確定按鈕之文字
    cancelButtonText: '不想告訴你~',//取消按鈕之文字
    showCancelButton: true,//提供取消按鈕
    allowOutsideClick: false//是窗外的按鈕可否觸發取消事件
  }).then(function (result) {//按下按鈕後，能得到一個 object
    if (result.dismiss === 'cancel') {//如果物件。dissmiss=cancel 代表用戶按取消鍵
      name = "阿姆斯壯";
      Swal.fire({//如果是取消反應，提供一個 swal 事件 A-1
        title: `不願具名的太空人嗎?`,
        text: `那就叫你${name}吧!${name}快點準備,太空船準備升空囉`,
        allowOutsideClick: false,
        imageUrl: './img/0.jpg',
        imageHeight: 300
      }).then(start);
    }
    else {//反之，就不是按下取消時
      name = result.value;//confirm 的值會存在物件。value
      Swal.fire({//由於不是取消反應，提供一個 swal 事件 A-2
        title: `${name} 這名字一聽就知道是專業的！`,
        text: '按下OK,準備出發囉!',
        allowOutsideClick: false,
        imageUrl: './img/1.jpg',
        imageHeight: 300
      }).then(start);// 按下確定後，執行叫 start 的 function
    }
  });
}

// 故事本體
function start() {
  let mission;
  Swal.fire({
    title: `太空人${name}，你即將開始登月任務..`,
    text: "一旦做出錯誤的決定就回不了地球了!你要出發了嗎??",
    confirmButtonText: 'GO!',
    cancelButtonText: '還是在想想好了',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: './img/2.jpg',
    imageHeight: 300,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `等你準備好再來吧！`,
        allowOutsideClick: false,
        imageUrl: './img/3.jpg',
        imageHeight: 300
      });
    }
    else {
      Swal.fire({
        title: `開始冒險吧！`,
        allowOutsideClick: false,
        imageUrl: './img/4.jpg',
        imageHeight: 300
      }).then(function () {
        Swal.fire({//lv1
          title: "第1章:奇怪的聲響",
          text: "傳來了奇怪的聲音 是否追蹤聲音來源?",
          confirmButtonText: '去!',
          cancelButtonText: '不去',
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: './img/5.jpg',
          imageHeight: 300,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              //B
              title: "GAME OVER",
              text: `因為你的粗心,釀成鼠患,食物被老鼠吃光後,餓死在外太空`,
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: './img/6.jpg',
              imageHeight: 300
            });
          }
          else {
            Swal.fire({ //G
              title: "過關",
              text: "原來有老鼠偷渡上來正在偷吃,細心的你解除了糧食危機",
              allowOutsideClick: false,
              imageUrl: './img/7.jpg',
              imageHeight: 300
            }).then(function () {
              Swal.fire({//lv2
                title: "第2章:UFO",
                text: "看到了飛碟",
                confirmButtonText: '去找外星人當好朋友',
                cancelButtonText: '完成任務比較重要',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: './img/8.jpg',
                imageHeight: 300,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    //B
                    title: "GAME OVER",
                    text: "因為被UFO撞飛,回不了地球",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: './img/9.jpg',
                    imageHeight: 300
                  });
                }
                else {
                  Swal.fire({ //G
                    title: "過關",
                    text: "順利抵達月球",
                    allowOutsideClick: false,
                    imageUrl: './img/10.jpg',
                    imageHeight: 300
                  }).then(function () {
                    Swal.fire({//lv3
                      title: "第3章:不明光源",
                      text: "突然眼前有刺眼的強光",
                      confirmButtonText: '一探究竟',
                      cancelButtonText: '敵不動我不動',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: './img/11.jpg',
                      imageHeight: 300,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss !== 'cancel') {
                        Swal.fire({
                          //B
                          title: "GAME OVER",
                          text: "被外星人綁架去做研究,死於非命",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: './img/12.jpg',
                          imageHeight: 300
                        });
                      }
                      else {
                        Swal.fire({ //G
                          title: "過關",
                          text: "不明外星生物離開後 順利在月球降落",
                          allowOutsideClick: false,
                          imageUrl: './img/13.jpg',
                          imageHeight: 300
                        }).then(function () {
                          Swal.fire({//lv4
                            title: "第4章:登月任務",
                            text: "任務有兩個 要先完成哪一項呢",
                            confirmButtonText: '尋找外星生物',
                            cancelButtonText: '插上國旗',
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: './img/14.jpg',
                            imageHeight: 300,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                //B
                                title: "GAME OVER",
                                text: "太空船被外星人開走,回不了地球了",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl:'./img/15.jpg',
                                imageHeight: 300
                              });
                            }
                            else {
                              Swal.fire({ //G
                                title: "過關",
                                text: "我的一小步是人類的一大步",
                                allowOutsideClick: false,
                                imageUrl: './img/16.jpg',
                                imageHeight: 300
                              }).then(function () {
                                Swal.fire({//lv5
                                  title: "第5章:歸途",
                                  text: "準備回去了?",
                                  confirmButtonText: '檢查太空船及補充燃料',
                                  cancelButtonText: '歸心似箭,直接出發',
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: './img/17.jpg',
                                  imageHeight: 300,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss === 'cancel') {
                                    Swal.fire(
                                      {
                                        //B
                                        title:"GAME OVER",
                                        text:"因為你的粗心,太空船在穿過大氣層時燃燒機體破碎",
                                        confirmButtonText:"重新來過",
                                        allowOutsideClick: false,
                                        imageUrl:'./img/18.jpg',
                                        imageHeight: 300
                                      }
                                    );
                                  }
                                  else {
                                    Swal.fire({ //G
                                      title: "過關",
                                      text: "回地球後名留青史",
                                      allowOutsideClick: false,
                                      imageUrl: './img/19.jpg',
                                      imageHeight: 300
                                    }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}

// 結果頁
function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('./img/20.jpg')";//結果頁的背景圖
    mybtn.removeEventListener("click", start);//監聽按下時執行
    mybtn.addEventListener("click", function(){
      location.reload();
    });
    mybtn.value = "恭喜過關";
  }
}

play();