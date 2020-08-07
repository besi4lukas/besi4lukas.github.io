// rafael Nadal data
var rafaelNine = [
    {
      "player2": "Roger Federer",
      "break1": 44
    },
    {
      "player2": "Fernando Verdasco",
      "break1": 20
    },
    {
      "player2": "Gilles Simon",
      "break1": 58
    },
    {
      "player2": "Fernando Gonzalez",
      "break1": 46
    },
    {
      "player2": "Tommy Haas",
      "break1": 33
    },
    {
      "player2": "Roko Karanusic",
      "break1": 86
    }
  ]

  var rafaelTen = [
    {
      "player2": "Ivo Karlovic",
      "break1": 50
    },
    {
      "player2": "Philipp Kohlschreiber",
      "break1": 42
    },
    {
      "player2": "Lukas Lacko",
      "break1": 70
    },
    {
      "player2": "Peter Luczak",
      "break1": 44
    }
  ]

  var rafaelEleven = [
    {
      "player2": "Marin Cilic",
      "break1": 36
    },
    {
      "player2": "Bernard Tomic",
      "break1": 37
    },
    {
      "player2": "Ryan Sweeting",
      "break1": 53
    },
    {
      "player2": "Marcos Daniel",
      "break1": 100
    }
  ]

  var rafaelTwelve = [
    {
      "player2": "Roger Federer",
      "break1": 38
    },
    {
      "player2": "Tomas Berdych",
      "break1": 38
    },
    {
      "player2": "Feliciano Lopez",
      "break1": 28
    },
    {
      "player2": "Lukas Lacko",
      "break1": 50
    },
    {
      "player2": "Tommy Haas",
      "break1": 60
    },
    {
      "player2": "Alex Kuznetsov",
      "break1": 60
    }
  ]
// Roger Federer data

rogerNine = [
    {
      "player2": "Andy Roddick",
      "break1": 31
    },
    {
      "player2": "Tomas Berdych",
      "break1": 67
    },
    {
      "player2": "Evgeny Korolev",
      "break1": 58
    },
    {
      "player2": "Andreas Seppi",
      "break1": 30
    }
  ]
rogerTen = [
    {
      "player2": "Andy Murray",
      "break1": 33
    },
    {
      "player2": "Nikolay Davydenko",
      "break1": 57
    },
    {
      "player2": "Lleyton Hewitt",
      "break1": 33
    },
    {
      "player2": "Victor Hanescu",
      "break1": 45
    },
    {
      "player2": "Igor Andreev",
      "break1": 47
    }
  ]
rogerEleven = [
    {
      "player2": "Stanislas Wawrinka",
      "break1": 71
    },
    {
      "player2": "Tommy Robredo",
      "break1": 40
    },
    {
      "player2": "Xavier Malisse",
      "break1": 41
    },
    {
      "player2": "Gilles Simon",
      "break1": 44
    },
    {
      "player2": "Lukas Lacko",
      "break1": 50
    }
  ]
rogerTwelve = [
    {
      "player2": "Juan Martin Del Potro",
      "break1": 63
    },
    {
      "player2": "Bernard Tomic",
      "break1": 60
    },
    {
      "player2": "Ivo Karlovic",
      "break1": 33
    },
    {
      "player2": "Alexander Kudryavtsev",
      "break1": 46
    }
  ]


//Novak Djokovic data
novakNine = [
    {
      "player2": "Marcos Baghdatis",
      "break1": 29
    },
    {
      "player2": "Amer Delic",
      "break1": 38
    },
    {
      "player2": "Jeremy Chardy",
      "break1": 100
    },
    {
      "player2": "Andrea Stoppini",
      "break1": 39
    }
  ]
novakTen = [
    {
      "player2": "Lukasz Kubot",
      "break1": 67
    },
    {
      "player2": "Denis Istomin",
      "break1": 64
    },
    {
      "player2": "Marco Chiudinelli",
      "break1": 44
    },
    {
      "player2": "Daniel Gimeno-Traver",
      "break1": 36
    }
  ]
novakEleven = [
    {
      "player2": "Andy Murray",
      "break1": 39
    },
    {
      "player2": "Roger Federer",
      "break1": 36
    },
    {
      "player2": "Tomas Berdych",
      "break1": 50
    },
    {
      "player2": "Nicolas Almagro",
      "break1": 38
    },
    {
      "player2": "Viktor Troicki",
      "break1": 50
    },
    {
      "player2": "Ivan Dodig",
      "break1": 35
    },
    {
      "player2": "Marcel Granollers",
      "break1": 58
    }
  ]
novakTwelve = [
    {
      "player2": "Rafael Nadal",
      "break1": 35
    },
    {
      "player2": "Andy Murray",
      "break1": 42
    },
    {
      "player2": "David Ferrer",
      "break1": 42
    },
    {
      "player2": "Lleyton Hewitt",
      "break1": 67
    },
    {
      "player2": "Nicolas Mahut",
      "break1": 62
    },
    {
      "player2": "Santiago Giraldo",
      "break1": 54
    },
    {
      "player2": "Paolo Lorenzi",
      "break1": 69
    }
  ]

  function tennisChart(data, winner, year){

    let svgContainer = d3.select('#viz');
    svgContainer.append("svg")

    let svg = d3.select('svg');

    let margin = 80;
    let width = 1000 - 2 * margin;
    let height = 600 - 2 * margin;

    let chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin})`);

    let xScale = d3.scaleBand()
      .range([0, width])
      .domain(data.map((s) => s.player2))
      .padding(0.4)
    
    let yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 100]);

    // vertical grid lines
    const makeXLines = () => d3.axisBottom()
      .scale(xScale)

    let makeYLines = () => d3.axisLeft()
      .scale(yScale)

    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .call(d3.axisLeft(yScale));

    //vertical grid lines
    chart.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height})`)
      .call(makeXLines()
        .tickSize(-height, 0, 0)
        .tickFormat('')
      )

    chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
      )
      		

    let barGroups = chart.selectAll()
      .data(data)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.player2))
      .attr('y', (g) => yScale(g.break1))
      .attr('height', (g) => height - yScale(g.break1))
      .attr('width', xScale.bandwidth())
      .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)

    d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.player2) - 5)
          .attr('width', xScale.bandwidth() + 10)

    let y = yScale(actual.break1)

        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)

        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.player2) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.break1) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            const divergence = (a.break1 - actual.break1).toFixed(1)
            
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}%`

            return idx !== i ? text : '';
          })

      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.player2))
          .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })

    barGroups 
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.player2) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.break1) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.break1}%`)
    
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Break (%)')

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('losers')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text( winner + "'s break points against losers in " + year)

    svg.append('text')
      .attr('class', 'source')
      .attr('x', width - margin / 2)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'start')
      .text('')

  }