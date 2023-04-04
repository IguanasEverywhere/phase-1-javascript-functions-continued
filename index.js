// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(action='go to the office') {
  return `This Monday, I will ${action}.`
}

function wrapAdjective(flair) {
  return function(sentence="special") {
      return `You are ${flair}${sentence}${flair}!`
  }
}