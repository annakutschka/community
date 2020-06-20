import dateFormatter from '../dateFormatter';

console.log(new Date().toLocaleString('en'));
console.log(dateFormatter.formatDate('4/22/2019, 09:34:48 AM'));

describe('dateFormatter', () => {
  it('formats correctly', () => {
    const rawDate = '4/22/2019, 09:34:48 AM';
    const formatedDate = '22.04.2019';
    expect(dateFormatter.formatDate(rawDate)).toBe(formatedDate);
  });
});
