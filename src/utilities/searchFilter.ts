export const searchFilter = (searchKey: string, data: any[]): any[] => {
  const newData = data.filter(
    (each) => each?.title.toLowerCase().indexOf(searchKey.toLowerCase()) === 0
  );
  return newData;
};
