export const createPieData = (fundComposition: any[]) => {
  const pieData = [];

  for (let i = 0; i < fundComposition.length; i++) {
    const value = fundComposition[i].percentage;
    const color = fundComposition[i].color;

    pieData.push({
      value,
      color,
    });
  }

  return pieData;
};
