function clr()
{
    document.getElementById("res").value = ""
}

function isOperator(op)
{
    var Element = false;
    if(op === "+"||op === "-"||op === "*"||op === "/")
    {
        Element = true;
    }
    return Element;
}

function display(val)
{
    const temp = document.getElementById('res').value;
    console.log("temp ->" + temp);

    const lastChar = temp.charAt(temp.length - 1)
    console.log("lastChar ->" + lastChar);

    const newchar = val;
    console.log("newchar ->" + newchar);

    var  str = temp;

    console.log("str[length-1] ->" + str[str.length-1]);
    console.log("newchar ->" + newchar);
    if(isOperator(str[str.length-1]) && isOperator(newchar))
    {
        var newString = temp.substring(0, temp.length -1 ) + val
        console.log("newString ->" + newString);
        document.getElementById('res').value = newString;
        // temp[temp.length - 1] = val
        // document.getElementById('res').value = temp
    }
    else 
    document.getElementById("res").value+=val;
        

    //let count = 0;
    // let length = document.getElementById("res").value.length;

    // console.log("Val ->" + val);

    // let value = document.getElementById("res").value;
    // let newval = value = document.getElementById("res").value;
    
    // console.log("value->" + value);
    

    // if(isOperator(val) && isOperator(value))
    // {
    //     debugger;
    //      newval[length-1]= val;
    //      document.getElementById("res").value = newval;
    //     //console.log("value->" + value);
    // }
    // else{
    //     document.getElementById("res").value+=val;
    // }
    
    

}
function myevent(event)
{
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/'){
        document.getElementById("res").value +=event.key;
    }
    else{
        // document.getElementById("res").value +=event.key;
        alert("Please Enter a number");
    }
}
function solve()
{
    document.getElementById("res").value = math.evaluate(document.getElementById("res").value)
}
function check()
{
    let count = 0;
    var str_opt = ["+","-","*","/"];
    for(let i=0;i<document.getElementById("res").lenght;i++)
    {
        if((document.getElementById("res").value[count] == '+' ||document.getElementById("res").value[count] == '-' || document.getElementById("res").value[count] == '*' || document.getElementById("res").value[count] == '/') && (document.getElementById("res").value[count +1] == '+' ||document.getElementById("res").value[count+1] == '-' || document.getElementById("res").value[count+1] == '*' || document.getElementById("res").value[count+1]=='/'))
        {
            count ++;
            if(count > 1)
            break;
        }
    }
}
