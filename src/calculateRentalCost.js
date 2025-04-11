/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const lowestDay = 3;
  const highestDay = 7;
  const multiplier = 40;
  const discountForFirstSevenDays = 20;
  const discountForMoreThanSevenDays = 50;

  const totalRentalCost = days * multiplier;

  if (days >= lowestDay && days < highestDay) {
    return totalRentalCost - discountForFirstSevenDays;
  }

  if (days >= 7) {
    return totalRentalCost - discountForMoreThanSevenDays;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
