/*window.alert("hello word");
document.write("kkk");

var arr1="123"
var arr2=123

window.alert(arr1===arr2)
*/

    var cases=[{
            arr1:[1,true,null],
            arr2:[null,false,100],
            expect:true
        },{
            arr1:100,
            arr2:"100",
            expect:false
        }];

    for (var i=0;i<cases.length;i++){
        window.alert(arrayssimilar(cases[i].arr1,cases[i].arr2));
   /* window.alert("ff");*/
    
    }
      


