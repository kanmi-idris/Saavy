const getRelativeTime = (timestamp: string) => {
  // Calculating the difference between the timestamp and the current time.
  const delta = Date.now() - Date.parse(timestamp);

  // Determining the appropriate unit of time.
  const unit =
    delta < 60000
      ? 'seconds'
      : delta < 3600000
      ? 'minutes'
      : delta < 86400000
      ? 'hours'
      : delta < 2628000000
      ? 'days'
      : delta < 31536000000
      ? 'weeks'
      : 'years';

  // Calculating the number of units that have passed.
  const amount = Math.floor(delta / (1000 * 60 * 60 * 24));

  // Generating the relative time string.
  return `${amount} ${unit} ago`;
};

export default getRelativeTime;
