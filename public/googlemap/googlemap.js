var data = new Array();
data.push({
    "業態": "店舗販売業",
    "施設名称": "ローソン赤坂インターシティＡＩＲ店",
    "施設所在地": "東京都港区赤坂一丁目8番1号",
    "施設方書": "B1",
    "施設電話番号": "03-3583-3939",
    "開設者名称": "有限会社セブンワイズ",
    "許可番号": "31港み生薬第30号",
    "許可開始日": "2019/9/4",
    "緯度":139.742701,
    "経度":35.67005
  
});
data.push({
    "業態": "店舗販売業",
    "施設名称": "トモズ　アークヒルズ店",
    "施設所在地": "東京都港区赤坂一丁目12番32号",
    "施設方書": "2階",
    "施設電話番号": "03-6277-6381",
    "開設者名称": "株式会社トモズ",
    "許可番号": "29港み生薬第20号",
    "許可開始日": "2017/7/7",
    "緯度":139.740015,
    "経度":35.667137,
});     
data.push({
    "業態": "店舗販売業",
    "施設名称": "薬マツモトキヨシ　溜池山王メトロピア店",
    "施設所在地": "東京都港区赤坂二丁目3番7号先",
    "施設方書": "銀座線溜池山王駅構内",
    "施設電話番号": "03-3582-7800",
    "開設者名称": "株式会社マツモトキヨシ",
    "許可番号": "29港み生薬第87号",
    "許可開始日": "2018/4/25",
    "緯度":139.742096,
    "経度":35.671440,
});

var marker_data = new Array(); 
marker_data.push({lat:data[0].緯度,lng:data[0].経度,name:data[0].施設名称});
marker_data.push({lat:data[1].緯度,lng:data[1].経度,name:data[1].施設名称});
marker_data.push({lat:data[2].緯度,lng:data[2].経度,name:data[2].施設名称});
console.log(marker_data);

function initMap() {
  const data1 = { lat:data[0].経度,lng:data[0].緯度}
  const data2 = { lat:data[1].経度,lng:data[1].緯度}
  const data3 = { lat:data[2].経度,lng:data[2].緯度}
  console.log(data1);
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: data1,
  });
  const marker1 = new google.maps.Marker({
    position: data1,
    map: map,
  });
    const marker2 = new google.maps.Marker({
    position: data2,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: data3,
    map: map,
  });

}
window.initMap = initMap;




