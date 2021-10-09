define(function() {
    const formateToString = function(date, format) {
        let o = {  
            "M+" :  date.getMonth()+1,  //month  
            "d+" :  date.getDate(),     //day  
            "h+" :  date.getHours(),    //hour  
                "m+" :  date.getMinutes(),  //minute  
                "s+" :  date.getSeconds(), //second  
                "q+" :  Math.floor((date.getMonth()+3)/3),  //quarter  
                "S"  :  date.getMilliseconds() //millisecond  
             }  
              
             if(/(y+)/.test(format)) {  
              format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));  
             }  
             
             for(var k in o) {  
              if(new RegExp("("+ k +")").test(format)) {  
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));  
              }  
             }  
           return format;  
    }

    const formateWeek = function(date) {
        const day = date.getDay();
        var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var week = weeks[day];
        return week;
    }
    
    const toDay = function() {
       const date = new Date();
       date.setHours(0)
       date.setMinutes(0),
       date.setSeconds(0)
       date.getString = function() {
           return formateToString(date, 'yyyy-MM-dd')
       }
       date.getWeek = function() {
          return formateWeek(date)
       }
       return date;
    }

    return {
        toDay,
        formateToString
    }

})