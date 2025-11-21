export const handlerColor = (id: number): string => {
  switch (id) {
    case 0:
      return 'text-aqua-300 bg-aqua-300/20 ';
    case 1:
      return 'text-blue-100 bg-blue-100/20 ';
    case 2:
      return 'text-rose-100 bg-rose-100/20 ';
    case 3:
      return 'text-aqua-200 bg-aqua-200/20 ';
    case 4:
      return 'text-blue-900 bg-blue-900/20 ';
    case 5:
      return 'text-aqua-200 bg-aqua-200/20 ';
    case 6:
      return 'text-yellow-100 bg-yellow-100/20 ';
    default:
      return 'text-aqua-300 bg-aqua-300/20 ';
  }
};
