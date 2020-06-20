class DateFormatter {
  formatDate(date) {
    const aDate = new Date(date);
    const today = new Date();
    let formattedDate;
    if (
      aDate.getDate() == today.getDate() &&
      aDate.getMonth() == today.getMonth() &&
      aDate.getFullYear() == today.getFullYear()
    ) {
      if (aDate.getMinutes().toString().length === 1)
        formattedDate =
          aDate.getHours() + ':' + '0' + aDate.getMinutes() + ' Uhr';
      else if (aDate.getHours().toString().length === 1)
        formattedDate =
          '0' + aDate.getHours() + ':' + aDate.getMinutes() + ' Uhr';
      else formattedDate = aDate.getHours() + ':' + aDate.getMinutes() + ' Uhr';
    } else {
      if (aDate.getDate().toString().length === 1)
        formattedDate =
          '0' +
          aDate.getDate() +
          '.' +
          (aDate.getMonth() + 1) +
          '.' +
          aDate.getFullYear();
      else if (aDate.getMonth().toString().length === 1)
        formattedDate =
          aDate.getDate() +
          '.' +
          '0' +
          (aDate.getMonth() + 1) +
          '.' +
          aDate.getFullYear();
      else aDate.getDate() + '.' + aDate.getMonth() + '.' + aDate.getFullYear();
    }
    return formattedDate;
  }
}

export default new DateFormatter();
