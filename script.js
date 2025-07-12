document.getElementById('next_year').innerHTML = new Date().getFullYear() + 1;

const start_time = new Date(Date.UTC(2025, 6, 14, 4, 0, 0, 0));
const end_time = new Date(Date.UTC(2025, 6, 24, 4, 0, 0, 0));
const rsvp_href = 'https://forms.hackclub.com/t/rF74MMzcKxus';
const submit_href = 'https://example.com';

function update_time_remaining () {
  const now = new Date;
  const time_until_start = start_time.getTime() - now.getTime();
  const time_until_end = end_time.getTime() - now.getTime();
  let days;
  let hours;
  let minutes;
  let seconds;
  if (time_until_start > 0) {
    days = Math.floor(time_until_start / 86_400_000);
    hours = Math.floor((time_until_start - (days * 86_400_000)) / 3_600_000);
    minutes = Math.floor((time_until_start - (days * 86_400_000) - (hours * 3_600_000)) / 60_000);
    seconds = Math.floor((time_until_start - (days * 86_400_000) - (hours * 3_600_000) - (minutes * 60_000)) / 1000);
    document.getElementById('precursor').innerHTML = '<b>Timeless</b> begins in';
    document.getElementById('link_out').innerHTML = 'RSVP here.';
    document.getElementById('link_out').href = rsvp_href;
  } else {
    days = Math.floor(time_until_end / 86_400_000);
    hours = Math.floor((time_until_end - (days * 86_400_000)) / 3_600_000);
    minutes = Math.floor((time_until_end - (days * 86_400_000) - (hours * 3_600_000)) / 60_000);
    seconds = Math.floor((time_until_end - (days * 86_400_000) - (hours * 3_600_000) - (minutes * 60_000)) / 1000);
    document.getElementById('precursor').innerHTML = '<b>Timeless</b> ends in';
    document.getElementById('link_out').innerHTML = 'Submit your game here.';
    document.getElementById('link_out').href = submit_href;
  }
  document.getElementById('days_hours_minutes').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes,`;
  document.getElementById('seconds').innerHTML = `${seconds} seconds.`;
}

update_time_remaining();
setInterval(update_time_remaining, 1000);