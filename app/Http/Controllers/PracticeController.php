<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PracticeController extends Controller
{
    public function index() {
        return view('/panda/01');
    }
    public function csv(){
        $f = fopen("googlemap/tenpohanbai.csv", "r");
        //dd($f);

        // test.csvの行を1行ずつ読み込みます。
        while($data = fgetcsv($f)){
            // 読み込んだ結果を表示します。
            var_dump($data);
        }
        // test.csvを閉じます。
        fclose($f);
     }

    public function ajax(){
        if(isset($_GET['your_name']))
        {
        	$name = htmlspecialchars($_GET['your_name'], ENT_QUOTES, "UTF-8");
        	echo 'こんにちは、' . $name . 'さん。';
        }
        else
        	echo '名前を入力してください。';
    }
    public function test2(){
        $f = 'test2';
        return $f;
    }
}
