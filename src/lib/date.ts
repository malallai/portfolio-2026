export function formatDateRange(beginAt: string, endAt: string | null): string {
  const formatPartialDate = (d: string) => {
    if (d.includes("-")) {
      const [year, month] = d.split("-");
      const monthNames = [
        "Janv.",
        "Févr.",
        "Mars",
        "Avr.",
        "Mai",
        "Juin",
        "Juil.",
        "Août",
        "Sept.",
        "Oct.",
        "Nov.",
        "Déc.",
      ];
      return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
    }
    return d;
  };

  const formattedBegin = formatPartialDate(beginAt);
  const formattedEnd = endAt ? formatPartialDate(endAt) : "Présent";

  if (formattedBegin === formattedEnd) {
    return formattedBegin;
  }

  return `${formattedBegin} - ${formattedEnd}`;
}
