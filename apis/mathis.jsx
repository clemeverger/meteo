export const getData = (ville) => fetch(`https://weather-api.mathisbarre.com/${ville}`).then(response => response.json())
