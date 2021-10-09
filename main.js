require.config({
    baseUrl: "modules",
    　paths: {
　　　　　　"date": "date",
　　       "slider": "slider",
          "easing": "easing"
　　　}
})

require(['date', 'slider'], function (date){
   const today = date.toDay().getString()
   const week = date.toDay().getWeek()
   console.log(today, week)
});