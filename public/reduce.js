const myData = [
    {team: "GSW", pts: 120, ast: 18, reb: 11},
    {team: "GSW", pts: 125, ast: 28, reb: 18},
    {team: "GSW", pts: 110, ast: 35, reb: 47},
    {team: "HOU", pts: 100, ast: 17, reb: 43},
    {team: "HOU", pts: 102, ast: 14, reb: 32},
    {team: "SAS", pts: 127, ast: 21, reb: 25},
    {team: "SAS", pts: 135, ast: 25, reb: 37},
    {team: "SAS", pts: 142, ast: 18, reb: 27}
 ]

const groubElement = myData.reduce((obj, val) => {
    if (obj[val.team]) {
        obj[val.team].pts = obj[val.team].pts + val.pts;
        obj[val.team].ast = obj[val.team].pts + val.ast;
        obj[val.team].reb = obj[val.team].pts + val.reb;
        obj[val.team].counter = obj[val.team].counter + 1;
    } else {
        obj[val.team] = val;
        obj[val.team].counter = 1;
    }
    return obj;

}, {});



const groupElementWithMean = Object.values(groubElement).map(({
    counter,
    ...element
}) => {
    element.pts = (element.pts / counter).toFixed(1);
    element.ast = (element.ast / counter).toFixed(1);
    element.reb = (element.reb / counter).toFixed(1);
    return element;
});

groupElementWithMean