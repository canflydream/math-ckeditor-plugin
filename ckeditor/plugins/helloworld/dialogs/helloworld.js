CKEDITOR.dialog.add('helloworld', function(editor) {
    return {
        title: "请输入公式",
        minWidth: "500px",
        minHeight:"500px",
        contents: [{
            id: "tab1",
            label: "",
            title: "",
            expand: true,
            width: 500,
            height: 500,
            padding: 0,
            elements: [{
                type: "html",
                style: "width:500px;height:300px",
                html:  "<div>" +
                "<a href='https://en.wikibooks.org/wiki/LaTeX/Mathematics' target='_blank'>公式帮助文档</a>"+
                "<br>"+
                "<input style='width: 100%;height: 20px;border:1px solid #3c3c3c;' type=\"text\" onkeyup=\"createImg(this.value);\"><br><br>"+
                "预览:<br><br>"+
                "<div id=\"result\"></div></div>"
            }]
        }],
        onOk: function() {
            //点击确定按钮后的操作
            editor.insertHtml($("#result").html());
        }
    };
});