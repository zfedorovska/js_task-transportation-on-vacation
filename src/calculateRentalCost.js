/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daily = 40;
  let cost = days * daily;

  if (days >= 7) {
    cost -= 50; // extra discount for 7+ days
  } else if (days >= 3) {
    cost -= 20; // basic discount for 3–6 days
  }

  return cost;
}

module.exports = calculateRentalCost;
