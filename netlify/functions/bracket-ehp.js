exports.handler = async () => {
  const KEY      = process.env.SHEETS_API_KEY;
  const SHEET_ID = '1RL-uJQzXWHlg2ck9qOOy-g2L02xnWLjf4GJaCkZ7pXc';
  const TAB      = 'Ehp_Bracket';

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}!A1:H500?key=${KEY}`;
  const res  = await fetch(url);
  const data = await res.json();

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
