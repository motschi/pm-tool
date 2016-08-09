function erstelleChart(projekt) {

    google.charts.load('current', {
        'packages': ['gantt']
    });
    google.charts.setOnLoadCallback(drawChart);


    function daysToMilliseconds(days) {
        return days * 24 * 60 * 60 * 1000;
    }


    function gibSchritteArray() {
        var schritte = [];
        for (var i=0; i<projekt.schritte.length; i++)
        {
            schritte.push(
                [projekt.schritte[i].idGantt, projekt.schritte[i].name, projekt.schritte[i].resource, projekt.schritte[i].startDatum, projekt.schritte[i].endDatum, daysToMilliseconds(projekt.schritte[i].dauer), projekt.schritte[i].statusInProzent, projekt.schritte[i].abhaengigkeitIdGantt]
            )
        }
        return schritte;

    }

    function drawChart() {

        var otherData = new google.visualization.DataTable();
        otherData.addColumn('string', 'Task ID');
        otherData.addColumn('string', 'Task Name');
        otherData.addColumn('string', 'Resource');
        otherData.addColumn('date', 'Start');
        otherData.addColumn('date', 'End');
        otherData.addColumn('number', 'Duration');
        otherData.addColumn('number', 'Percent Complete');
        otherData.addColumn('string', 'Dependencies');

        var schritteArray = gibSchritteArray(projekt);
        console.log(schritteArray);
        otherData.addRows(

            schritteArray

        );

        var options = {
            height: 600,
            gantt: {

            }
        };

        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

        chart.draw(otherData, options);
    }
}