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
            if (projekt.schritte[i].startDatum != null)
            {   var startDatum = new Date(projekt.schritte[i].startDatum)

            }
           if (projekt.schritte[i].endDatum != null)
            {
            var endDatum = new Date(projekt.schritte[i].endDatum)
            }
            schritte.push(
                [projekt.schritte[i].idGantt, projekt.schritte[i].name, projekt.schritte[i].resource, startDatum, endDatum, daysToMilliseconds(projekt.schritte[i].dauer), projekt.schritte[i].statusInProzent, projekt.schritte[i].abhaengigkeitIdGantt]
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
        var hoehe = schritteArray.length*42+50;
        console.log(hoehe)
        var options = {
            height: hoehe,
            gantt: {

            }
        };

        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

        chart.draw(otherData, options);
    }
}