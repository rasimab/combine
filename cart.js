var ProVal=localStorage.getItem("inputVal");
var ProImg=localStorage.getItem("ProImg");
var ProductPrice=localStorage.getItem("ProPrice");
var ProductName=localStorage.getItem("ProName");
var MyItem=JSON.parse(localStorage["array"]);


for(var i=0; i<MyItem.length; i++){

    MyItem[i]=$("#first").clone();
    MyItem[i].css("visibility","visible");
    MyItem[i].css("position","static");
    MyItem[i].appendTo("table");
    MyItem[i].find(".Rimg").attr("src",ProImg);
    MyItem[i].find(".Rinp").attr("value",ProVal);
    MyItem[i].find(".Rpr").text(ProductPrice);
    MyItem[i].find(".Rname").text(ProductName);
}

//Remove
$("#remove").click(function(){
    this.parent().remove();
});


    