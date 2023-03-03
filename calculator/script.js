function clr()
{
    document.getElementById("res").value = ""
}
function display(val)
{
    document.getElementById("res").value+=val
}
function myevent(event)
{
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/'){
        document.getElementById("res").value +=event.key;
    }
    else{
        document.getElementById("res").value +=event.key;
        alert("Please Enter a number");
    }
}
function solve()
{
    document.getElementById("res").value = math.evaluate(document.getElementById("res").value)
}
