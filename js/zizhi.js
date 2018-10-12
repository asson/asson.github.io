$(function(){
    var datas = [
    {name:'白霞', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_01.jpg"},
    {name:'程品', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_02.jpg"},
//     {name:'丁现义', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_03.jpg"},
    {name:'付佳利', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_04.jpg"},
    {name:'李然', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_05.jpg"},
    {name:'李校红', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_06.jpg"},
    {name:'施亚娟', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_07.jpg"},
    {name:'王建虎', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_08.jpg"},
    {name:'吴志浩', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_09.jpg"},
    {name:'武英豪', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_10.jpg"},
    {name:'杨鹏', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_11.jpg"},
    {name:'于向丽', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_12.jpg"},
    {name:'张晓飞', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_13.jpg"},
    {name:'陈发磊', sex: '男', position: '制片总监', image: "./images/zizhi/flaking_14.jpg"},
    {name:'郝志远', sex: '男', position: '制片总监', image: "./images/zizhi/flaking_15.jpg"},
    {name:'刘彩娟', sex: '女', position: '制片总监', image: "./images/zizhi/flaking_16.jpg"},
    {name:'荣彦龙', sex: '男', position: '制片总监', image: "./images/zizhi/flaking_17.jpg"},
    {name:'王强', sex: '男', position: '制片总监', image: "./images/zizhi/flaking_18.jpg"},
    {name:'邢运', sex: '男', position: '制片总监', image: "./images/zizhi/flaking_19.jpg"},
    {name:'白玮冬', sex: '男', position: '编导', image: "./images/zizhi/flaking_20.jpg"},
    {name:'董典', sex: '男', position: '编导', image: "./images/zizhi/flaking_21.jpg"},
    {name:'申倩', sex: '女', position: '编导', image: "./images/zizhi/flaking_22.jpg"},
    {name:'石瑞雪', sex: '女', position: '编导', image: "./images/zizhi/flaking_23.jpg"},
    {name:'史智勇', sex: '男', position: '后期剪辑', image: "./images/zizhi/flaking_24.jpg"},
    {name:'谢梦', sex: '女', position: '编导', image: "./images/zizhi/flaking_25.jpg"},
    {name:'薛彪', sex: '男', position: '摄影', image: "./images/zizhi/flaking_26.jpg"},
    {name:'岳圣', sex: '男', position: '摄影', image: "./images/zizhi/flaking_27.jpg"},
    {name:'赵燕晖', sex: '男', position: '总导演', image: "./images/zizhi/flaking_28.jpg"},
    {name:'郑文斌', sex: '女', position: '统筹', image: "./images/zizhi/flaking_29.jpg"},

    {name:'李冰', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_30.jpg"},
    {name:'林志永', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_31.jpg"},
    {name:'龙志鹏', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_32.jpg"},
    {name:'戚园园', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_33.jpg"},
    {name:'王博文', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_34.jpg"},
    {name:'王玉', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_35.jpg"},
    {name:'吴兴旺', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_36.jpg"},
    {name:'徐蕾', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_37.jpg"},
    {name:'殷宪杨', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_38.jpg"},
    {name:'张鹏飞', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_39.jpg"},
    {name:'张薇', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_40.jpg"},
    {name:'朱敏', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_41.jpg"},

    {name:'程瑜', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_42.jpg"},
    {name:'高岫', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_43.jpg"},
    {name:'李真', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_44.jpg"},
    {name:'刘瑞东', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_45.jpg"},
    {name:'刘新伟', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_46.jpg"},
    {name:'王伟明', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_47.jpg"},
    {name:'温海凤', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_48.jpg"},
    {name:'吴军霞', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_49.jpg"},
    {name:'赵孟', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_50.jpg"},

    {name:'蔡霖芳', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_51.jpg"},
    {name:'梅旭奎', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_52.jpg"},
    {name:'施小宇', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_53.jpg"},
    {name:'王曼菲', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_54.jpg"},
    {name:'王兆明', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_55.jpg"},
    {name:'张鹏娇', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_56.jpg"},
    {name:'张耀祖', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_57.jpg"},

    {name:'孟佳', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_58.jpg"},
    {name:'史雪峰', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_59.jpg"},
    {name:'王帅静', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_60.jpg"},
    {name:'王柱晴', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_61.jpg"},
    {name:'杨东启', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_62.jpg"},
    {name:'郑阳', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_63.jpg"},

    {name:'窦苗苗', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_64.jpg"},
    {name:'贾敏', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_65.jpg"},
    {name:'冷玉兰', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_66.jpg"},
    {name:'刘启贵', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_67.jpg"},
    {name:'孙海珍', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_68.jpg"},
    {name:'王逍逍', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_69.jpg"},
    {name:'吴继宇', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_70.jpg"},
    {name:'徐奕娟', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_71.jpg"},
    {name:'杨鸿远', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_72.jpg"},
    {name:'张闪', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_73.jpg"},

    {name:'龚耀龙', sex: '男', position: '制片主任', image: "./images/zizhi/flaking_74.jpg"},
    {name:'李若楠', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_75.jpg"},
    {name:'王樨芝', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_76.jpg"},
    {name:'闫慕瑶', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_77.jpg"},
    {name:'尹雪姣', sex: '女', position: '制片主任', image: "./images/zizhi/flaking_78.jpg"}
    ]
      var bgHeight = document.documentElement.clientHeight;
        // console.log(bgHeight)
        $('#zizhi').css("height",(bgHeight-70)+'px');
// 弹框
        var modal = new RModal(document.getElementById('modal'), {
        beforeOpen: function(next) {
            console.log('beforeOpen');
            next();
        }
        , afterOpen: function() {
            console.log('opened');
        }

        , beforeClose: function(next) {
            console.log('beforeClose');
            next();
        }
        , afterClose: function() {
            console.log('closed');
        }

        // , content: 'Abracadabra'

        // , bodyClass: 'modal-open'
        // , dialogClass: 'modal-dialog-lg'
        // , dialogOpenClass: 'fadeIn'
        // , dialogCloseClass: 'fadeOut'

        // , focus: true
        // , focusElements: ['input.form-control', 'textarea', 'button.btn-primary']

        // , escapeClose: true
    });

    document.addEventListener('keydown', function(ev) {
        modal.keydown(ev);
    }, false);

    document.getElementById('showModal').addEventListener("click", function(ev) {
        // $('.showError').hide()
        // console.log($('#selectValue').val(),66)

        if($('#inputSearch').val()){
            if($('#selectValue').val() === 'customer'){
                for(var i in datas){
                    if(datas[i]['name'] == $('#inputSearch').val().trim()){
                        // console.log(datas[i],444)
                        $('.modals_fuwu').hide();
                        $('.modals_renyuan').show();
                        var newData = datas[i];
                        $('#username').val(newData['name']);
                        $('#sex').val(newData['sex']);
                        $('#position').val(newData['position']);
                        $('#modals_img').attr('src',newData['image'])
                         // ev.preventDefault();
                         $('.showError').hide()
                         modal.open();
                         return false;
                    }else{
                        $('.showError').html('对不起，查无此人').show()
                    }
                }
            }else{
                //服务中心数据
                // var strs = "北京上为信文化传播有限公司";
                if($('#inputSearch').val().trim().search('上为信') != -1){
                    $('.modals_renyuan').hide();
                    $('.modals_fuwu').show();
                    $('.showError').hide()
                    modal.open();
                }else{
                    $('.showError').html('请输入有效的内容').show()
                }
                // $('.showError').show()

            }

        }else{
            $('.showError').show()
        }

    }, false);

    $('#inputSearch').focus(function(){
         $('.showError').hide()
    })

    window.modal = modal;
})
