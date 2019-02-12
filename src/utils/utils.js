export const toggleSortOrderByTimestamp = (obj, currentOrder) => {
  return obj.sort((a, b) => {
    if (currentOrder === "Newest") {
      return b.timestamp.seconds - a.timestamp.seconds;
    }
    if (currentOrder === "Oldest") {
      return a.timestamp.seconds - b.timestamp.seconds;
    }
    return 0;
  });
};
