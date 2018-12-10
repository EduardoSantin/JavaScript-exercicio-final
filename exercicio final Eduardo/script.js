(function(){
    // 1 
    $(".problema").addClass("erro");
    $(".ok").addClass("sucesso");
    
    // 2
    $("#div-filha .erro").removeClass('erro');

    // 3 
    let cont = 4;
    $("#create-me-btn").click(function(){
        thisdata = $(this).attr('data-max');
        if(thisdata > cont){
           cont++;
           $("#create-me").append("<div>"+cont+" - Elemento número " +cont);
        }
    })
    // 4
   $("#copy-me-btn").click(function(){
        var origem = $("#origem").html();
        var destino = $("#destino");
        destino.html(origem);
   })
   // 5
   var tr = $("#tabela-totais tbody tr");
   var tds = $("#tabela-totais tbody td");
   var qtd = 1;
   var unit = 2;
   var total = 0;
    $.each(tr, function(index){
        total = $(tds[qtd]).text() * $(tds[unit]).text();
        $(".total", tr[index]).append(total);
        qtd += 4;
        unit += 4;
    });
    
   // 6
    var tr = $("#tabela-totais-2 tbody tr");
    var tds = $("#tabela-totais-2 tbody td");
    qtd = 1;
    unit = 2;
    total = 0;
    totalgeral = 0;
    $.each(tr, function(index){
        total = $(tds[qtd]).text() * $(tds[unit]).text();
        $(".total", tr[index]).append(total);
        qtd += 4;
        unit += 4;
        totalgeral = totalgeral + total;
    })
    $("#total-geral").append(totalgeral.toFixed(2));
})();