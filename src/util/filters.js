export function timeAgo (value) {
    const seconds = new Date(value).getTime() / 1000;
    const between = Date.now() / 1000 - seconds;
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else {
      return pluralize(~~(between / 86400), ' day')
    }
  }
  
  function pluralize (time, label) {
    if (time === 1) {
      return time + label
    }
    return time + label + 's'
  }