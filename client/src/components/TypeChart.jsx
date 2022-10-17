import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const Chart = ({ data, setDetailsId }) => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total Pokemon Types'
    },
    subtitle: {
      text: 'Showcase different pokemon type from each generation.'
    },
    tooltip: {
      enabled: true
    },
    xAxis: {
      categories: null,
      title: null,
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        shadow: false
      }
    },
    series: [{
      name: "Bug",
      data: [data.Bug],
      color: '#a8c59f'
    },{
      name: "Dark",
      data:[data.Dark],
      color: "#705848"
    },{
      name: "Dragon",
      data:[data.Dragon],
      color: "#8d5153"
    },{
      name: "Electric",
      data:[data.Electric],
      color: "#F8D030"
    },{
      name: "Fairy",
      data:[data.Fairy],
      color: "gold"
    },{
      name: "Fighting",
      data:[data.Fighting],
      color: "#c03028"
    },{
      name: "Fire",
      data:[data.Fire],
      color: "#e25822"
    },{
      name: "Flying",
      data:[data.Flying],
      color: "#a890f0"
    },{
      name: "Ghost",
      data:[data.Ghost],
      color: "#705898"
    },{
      name: "Ice",
      data:[data.Ice],
      color: "rgb(226, 255, 255)"
    },{
      name: "Grass",
      data:[data.Grass],
      color:"#567d46"
    },{
      name: "Ground",
      data:[data.Ground],
      color: "gray"
    },{
      name: "Normal",
      data:[data.Normal],
      color: "#c9c9c9"
    },{
      name: "Poison",
      data:[data.Poison],
      color: "#00FF00"
    },{
      name: "Psychic",
      data:[data.Psychic],
      color: "#f85888"
    },{
      name: "Rock",
      data:[data.Rock],
      color: "#3a3232"
    },{
      name: "Steel",
      data:[data.Steel],
      color: "#71797E"
    },{
      name: "Water",
      data:[data.Water],
      color: "rgb(17, 213, 213)"
    }]
  }

    return(
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
} 
export default Chart