/*function sachaofbiscut(color)
{
    this.width=12;
    this.color=color;
    this.height=10;
    this.taste=sugary;
}
var bisred1=new sachaofbiscut("red");
var bisgreen2=new sachaofbiscut("green");
var bisblack3=new sachaofbiscut("black");*/

var ans=function(){
    var privateval=12;
    return{
        getter:function(){
            console.log(privateval);
        },
        setter:function(val){
            privateval=val;
        }

    }
}()